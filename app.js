// ==========================================
// 1. KONFIGURASI SUPABASE CLOUD & API
// ==========================================
if (typeof window.supabase === 'undefined') {
    Swal.fire('Koneksi Terputus!', 'Gagal memuat database cloud. Pastikan internet lancar.', 'error');
}

const SUPABASE_URL = 'https://hysdekekcmexytxbvpjt.supabase.co'; 
const SUPABASE_ANON_KEY = 'sb_publishable_h3IZ-BZMOo-yKKPRydTjtQ_8PDz66JH';
const supabaseClient = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;
const API_KEY = "3f4878c780923585911ca5155bbe44dfe6360fa47865ca535033b5d3e04295d4";

let currentView = 'dashboard';
let collectionData = []; 
let myChart = null;
let currentFilter = 'all';
let isAdmin = false; 

// ==========================================
// 2. INIT & AUTHENTICATION
// ==========================================
document.addEventListener("DOMContentLoaded", async () => {
    initTheme();
    initSidebarMobile();
    document.getElementById("authForm").addEventListener("submit", handleAuth);
    document.getElementById("colForm").addEventListener("submit", handleSaveResi);
    
    if (supabaseClient) {
        await checkSession();
    } else {
        document.getElementById('loginContainer').classList.remove('hidden');
    }
});

let authMode = 'login';
window.switchAuthMode = function(mode) {
    authMode = mode;
    const tabLogin = document.getElementById('tabLogin');
    const tabRegister = document.getElementById('tabRegister');
    const btnSubmit = document.getElementById('btnSubmitAuth');

    if(mode === 'login') {
        tabLogin.className = "flex-1 py-2 text-sm font-bold bg-blue-600 text-white rounded-lg shadow-md transition-all";
        tabRegister.className = "flex-1 py-2 text-sm font-bold text-blue-400 hover:text-blue-600 transition-all theme-text-muted";
        btnSubmit.innerText = "MASUK SEKARANG";
    } else {
        tabRegister.className = "flex-1 py-2 text-sm font-bold bg-blue-600 text-white rounded-lg shadow-md transition-all";
        tabLogin.className = "flex-1 py-2 text-sm font-bold text-blue-400 hover:text-blue-600 transition-all theme-text-muted";
        btnSubmit.innerText = "DAFTARKAN AKUN";
    }
}

async function checkSession() {
    try {
        const { data: { session }, error } = await supabaseClient.auth.getSession();
        if (error) throw error;
        
        if (session) {
            const username = session.user.email.split('@')[0];
            const { data: profile } = await supabaseClient.from('profiles').select('*').eq('auth_id', session.user.id).single();
            
            if (profile && profile.status === 'pending') {
                await supabaseClient.auth.signOut();
                Swal.fire('Menunggu', 'Akun Anda sedang antre Approval dari Admin Pusat.', 'info');
                document.getElementById('loginContainer').classList.remove('hidden');
                return;
            }

            isAdmin = (profile && profile.role === 'admin');
            
            document.getElementById('navUsername').innerText = username;
            document.getElementById('navRole').innerText = isAdmin ? 'Master Admin' : 'Karyawan';
            
            if(isAdmin) document.getElementById('adminMenu').classList.remove('hidden');
            
            document.getElementById('loginContainer').classList.add('hidden');
            document.getElementById('appContainer').classList.remove('hidden');
            
            const today = new Date();
            const localToday = new Date(today.getTime() - (today.getTimezoneOffset() * 60000)).toISOString().split('T')[0];
            document.getElementById('searchDateInput').value = localToday;

            await fetchAllDataFromDatabase(session.user.id);
            appRouter('dashboard'); 
        } else {
            document.getElementById('loginContainer').classList.remove('hidden');
        }
    } catch (err) {
        document.getElementById('loginContainer').classList.remove('hidden');
    }
}

async function handleAuth(e) {
    e.preventDefault(); 
    const btn = document.getElementById('btnSubmitAuth');
    const originalText = btn.innerText;
    const usernameRaw = document.getElementById('authUsername').value.trim().toLowerCase();
    const password = document.getElementById('authPassword').value;

    if (!usernameRaw || !password) return Swal.fire('Tunggu!', 'Username dan Password wajib diisi.', 'warning');
    if (password.length < 6) return Swal.fire('Tunggu!', 'Sandi minimal 6 karakter!', 'warning');

    btn.innerText = 'MEMPROSES...'; btn.disabled = true;
    const email = usernameRaw + "@resicenter.com"; 

    if (authMode === 'login') {
        const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
        if (error) {
            Swal.fire('Gagal', 'Kredensial akses ditolak!', 'error');
            btn.innerText = originalText; btn.disabled = false;
        } else {
            const { data: profile } = await supabaseClient.from('profiles').select('*').eq('auth_id', data.user.id).single();
            if(profile && profile.status === 'pending') {
                await supabaseClient.auth.signOut();
                Swal.fire('Pending', 'Akun belum disetujui.', 'info');
                btn.innerText = originalText; btn.disabled = false;
            } else { window.location.reload(); }
        }
    } else {
        const { data, error } = await supabaseClient.auth.signUp({ email, password });
        if (error) {
            Swal.fire('Gagal Daftar', error.message, 'error');
            btn.innerText = originalText; btn.disabled = false;
        } else {
            if(data.user) {
                const role = usernameRaw === 'admin' ? 'admin' : 'user';
                const status = usernameRaw === 'admin' ? 'approved' : 'pending';
                await supabaseClient.from('profiles').insert([{ auth_id: data.user.id, username: usernameRaw, role: role, status: status }]);
                if (status === 'approved') { window.location.reload(); } else {
                    await supabaseClient.auth.signOut();
                    Swal.fire('Sukses', 'Akun berhasil dibuat! Minta approval Admin.', 'success');
                    btn.innerText = originalText; btn.disabled = false;
                    switchAuthMode('login'); 
                }
            }
        }
    }
}

window.handleLogout = async function() {
    if(supabaseClient) await supabaseClient.auth.signOut();
    window.location.reload();
}

// ==========================================
// 3. MASTER ADMIN & DB FETCHING
// ==========================================
window.loadUsersManagement = async function() {
    if(!isAdmin) return;
    const tbody = document.getElementById('userTableBody');
    tbody.innerHTML = '<tr><td colspan="3" class="text-center p-6 text-blue-500 font-bold">Memuat Data...</td></tr>';
    const { data, error } = await supabaseClient.from('profiles').select('*').order('id', { ascending: false });
    tbody.innerHTML = '';
    if(data) {
        data.forEach(u => {
            const isPending = u.status === 'pending';
            const badge = isPending ? `<span class="bg-amber-100 text-amber-700 border border-amber-200 px-3 py-1 rounded-lg text-[10px] font-black tracking-wide">PENDING</span>` : `<span class="bg-emerald-100 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-lg text-[10px] font-black tracking-wide">AKTIF</span>`;
            const actionBtn = isPending ? `<button onclick="approveUser('${u.id}')" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm">Approve</button>` : `<button disabled class="bg-slate-100 text-slate-400 px-4 py-2 rounded-xl text-xs font-bold theme-btn opacity-50">Approved</button>`;
            const delBtn = u.role !== 'admin' ? `<button onclick="deleteProfile('${u.id}', '${u.auth_id}')" class="bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 px-4 py-2 rounded-xl text-xs font-bold ml-2 transition-all"><i class="fa-solid fa-trash"></i></button>` : '';
            tbody.insertAdjacentHTML('beforeend', `
                <tr class="border-b theme-border hover:bg-blue-50/30 transition-colors">
                    <td class="px-5 py-4 font-black text-blue-900 theme-text text-sm">${u.username} <span class="text-[10px] text-slate-400 block font-normal mt-0.5">${u.role.toUpperCase()}</span></td>
                    <td class="px-5 py-4 text-center">${badge}</td>
                    <td class="px-5 py-4 text-center flex justify-end md:justify-center items-center gap-1">${actionBtn} ${delBtn}</td>
                </tr>
            `);
        });
    }
}

window.approveUser = async function(id) {
    await supabaseClient.from('profiles').update({status: 'approved'}).eq('id', id);
    Swal.fire({icon: 'success', title: 'Akses Dibuka!', toast: true, position: 'top-end', showConfirmButton: false, timer: 2000});
    loadUsersManagement();
}

window.deleteProfile = async function(id, auth_id) {
    await supabaseClient.from('profiles').delete().eq('id', id);
    Swal.fire({icon: 'success', title: 'Data Dihapus!', toast: true, position: 'top-end', showConfirmButton: false, timer: 2000});
    loadUsersManagement();
}

async function fetchAllDataFromDatabase(userId) {
    let query = supabaseClient.from('resi_collection').select('*').order('id', { ascending: false });
    if (!isAdmin) query = query.eq('user_id', userId); 
    const { data, error } = await query;
    if (!error && data) collectionData = data; 
}

async function fetchBinderbyte(awb, courier) {
    // FIX PROXY API: Menggunakan endpoint raw agar langsung menerima format JSON mentah
    const url = `https://api.allorigins.win/raw?url=${encodeURIComponent(`https://api.binderbyte.com/v1/track?api_key=${API_KEY}&courier=${courier}&awb=${awb}`)}`;
    const response = await fetch(url);
    const data = await response.json();
    return data; 
}

function getStatusCategory(desc) {
    if (!desc) return 'PROSES';
    const s = desc.toUpperCase();
    if (s.includes("BATAL") || s.includes("CANCEL") || s.includes("RETURN") || s.includes("RETUR")) return 'RETUR';
    if (s.includes("DELIVERED") || s.includes("BERHASIL") || s.includes("DITERIMA") || s.includes("SELESAI")) return 'TERKIRIM';
    return 'PROSES';
}

function getShortStatus(statusStr, category) {
    if (category === 'RETUR') return 'RETURNED'; 
    if (!statusStr) return category;
    if (statusStr.length > 25) return category === 'TERKIRIM' ? 'TERKIRIM' : 'DIPROSES';
    return statusStr;
}

// ==========================================
// 4. ROUTER, DASHBOARD & UI LOGIC
// ==========================================
window.toggleSidebarMenu = function(id) {
    const subMenu = document.getElementById('sub-' + id);
    const chevron = document.getElementById('chevron-' + id);
    if(subMenu.classList.contains('hidden')) {
        subMenu.classList.remove('hidden'); subMenu.classList.add('flex'); chevron.classList.add('rotate-180');
    } else {
        subMenu.classList.add('hidden'); subMenu.classList.remove('flex'); chevron.classList.remove('rotate-180');
    }
}

window.appRouter = function(view, courierId = null, courierName = null, defaultFilter = 'all') {
    document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
    currentView = view; 
    
    if (view === 'dashboard') {
        document.getElementById('view-dashboard').classList.remove('hidden');
        document.getElementById('topNavTitle').innerText = 'Dashboard Analytics';
        updateDashboardStats();
    } else if (view === 'users') {
        document.getElementById('view-users').classList.remove('hidden');
        document.getElementById('topNavTitle').innerText = 'Manajemen Karyawan';
        loadUsersManagement();
    } else if (view === 'expedition') {
        document.getElementById('view-expedition').classList.remove('hidden');
        document.getElementById('topNavTitle').innerText = courierName;
        document.getElementById('colCourierId').value = courierId;
        document.getElementById('colCourierName').value = courierName;
        currentFilter = defaultFilter; 
        updateFilterUI(); renderTable(courierId);
    }
    // Auto close mobile sidebar
    if (window.innerWidth < 768) {
        document.getElementById('sidebar').classList.add('-translate-x-full');
        document.getElementById('sidebarOverlay').classList.add('hidden');
    }
}

function updateSidebarBadges() {
    // FIX ID EXPRESS: Menambahkan 'ide' ke dalam array kurir
    const couriers = ['spx', 'jnt', 'jnt_cargo', 'sicepat', 'jne', 'tiki', 'pos', 'anteraja', 'ninja', 'lion', 'ide']; 
    const activeDate = document.getElementById('searchDateInput').value;
    couriers.forEach(cId => {
        let t=0, d=0, p=0, r=0;
        collectionData.forEach(item => {
            if(item.courier_id === cId && (!activeDate || item.raw_date === activeDate)) {
                t++; const cat = getStatusCategory(item.last_status);
                if(cat === 'TERKIRIM') d++; else if(cat === 'RETUR') r++; else p++;
            }
        });
        const updateB = (id, count) => {
            const el = document.getElementById(`badge-${cId}-${id}`);
            if(el) { el.innerText = count; el.classList.toggle('hidden', count === 0); }
        };
        updateB('total', t); updateB('delivered', d); updateB('process', p); updateB('problem', r);
    });
}

function updateDashboardStats() {
    const activeDate = document.getElementById('searchDateInput').value; 
    let baseData = collectionData;
    if(activeDate !== '') baseData = baseData.filter(item => item.raw_date === activeDate);

    const total = baseData.length;
    const delivered = baseData.filter(d => getStatusCategory(d.last_status) === 'TERKIRIM').length;
    const problem = baseData.filter(d => getStatusCategory(d.last_status) === 'RETUR').length;
    const process = baseData.filter(d => getStatusCategory(d.last_status) === 'PROSES').length;

    document.getElementById('statTotal').innerText = total;
    document.getElementById('statDelivered').innerText = delivered;
    document.getElementById('statProcess').innerText = process;
    document.getElementById('statProblem').innerText = problem;

    updateSidebarBadges(); 
    
    const recentTable = document.getElementById('dashRecentTable');
    recentTable.innerHTML = '';
    if(baseData.length === 0) {
        recentTable.innerHTML = '<tr><td colspan="2" class="p-8 text-center text-blue-400 theme-text-muted text-xs italic">Data masih kosong, silakan scan resi.</td></tr>';
    } else {
        baseData.slice(0, 10).forEach(item => { 
            const cat = getStatusCategory(item.last_status);
            const displayStatus = getShortStatus(item.last_status, cat);
            let badgeClass = 'bg-amber-100 text-amber-700 border border-amber-200'; 
            if(cat === 'TERKIRIM') badgeClass = 'bg-emerald-100 text-emerald-700 border border-emerald-200';
            else if(cat === 'RETUR') badgeClass = 'bg-red-100 text-red-700 border border-red-200';
            
            recentTable.insertAdjacentHTML('beforeend', `
                <tr class="hover:bg-blue-50/50 cursor-pointer border-b theme-border transition-colors" onclick="trackResiFromTable('${item.awb}', '${item.courier_name}')">
                    <td class="px-5 py-4"><p class="font-black tracking-wide text-blue-700 theme-text text-sm">${item.awb}</p><p class="text-[10px] text-slate-400 mt-1">${item.courier_name}</p></td>
                    <td class="px-5 py-4"><span class="px-3 py-1.5 rounded-lg text-[10px] font-black ${badgeClass} shadow-sm">${displayStatus}</span></td>
                </tr>
            `);
        });
    }

    if (myChart) myChart.destroy(); 
    const chartEl = document.getElementById('shippingChart');
    if (chartEl) {
        myChart = new Chart(chartEl.getContext('2d'), {
            type: 'doughnut',
            data: { labels: ['Terkirim', 'Proses', 'Retur'], datasets: [{ data: [delivered, process, problem], backgroundColor: ['#10b981', '#f59e0b', '#ef4444'], borderWidth: 0, hoverOffset: 4 }] },
            options: { responsive: true, maintainAspectRatio: false, cutout: '75%', plugins: { legend: { position: 'bottom', labels: { usePointStyle: true, padding: 20, font: {family: 'inherit', weight: 'bold'} } } } }
        });
    }
}

// ==========================================
// 5. EKSPEDISI: INSERT, FILTER, TRACKING
// ==========================================
async function handleSaveResi(e) {
    e.preventDefault();
    const courierId = document.getElementById('colCourierId').value;
    const courierName = document.getElementById('colCourierName').value;
    const awbInput = document.getElementById('colAwb');
    const awb = awbInput.value.toUpperCase();
    
    if (collectionData.find(item => item.awb === awb)) {
        Swal.fire({ icon: 'warning', title: 'Sudah Tersimpan!' }); awbInput.value = ""; return;
    }

    Swal.fire({ title: 'Melacak...', text: 'Mengambil data dari server kurir', allowOutsideClick: false, didOpen: () => Swal.showLoading() });

    try {
        const result = await fetchBinderbyte(awb, courierId);
        if (result.status === 200) {
            let apiStatus = result.data.summary.status;
            let detailDesc = result.data.history && result.data.history.length > 0 ? result.data.history[0].desc : apiStatus;
            if (apiStatus.toUpperCase().includes("CANCEL")) { Swal.fire({ icon: 'error', title: 'Resi Batal!' }); awbInput.value = ""; return; }

            const { data: { user } } = await supabaseClient.auth.getUser();
            const now = new Date();
            const rawDate = new Date(now.getTime() - (now.getTimezoneOffset() * 60000)).toISOString().split('T')[0]; 
            const detailTime = now.toLocaleDateString('id-ID') + ' - ' + now.toLocaleTimeString('id-ID');

            const { error } = await supabaseClient.from('resi_collection').insert([{ user_id: user.id, awb, courier_id: courierId, courier_name: courierName, raw_date: rawDate, date_added: detailTime, last_status: detailDesc }]);

            if(!error) {
                await fetchAllDataFromDatabase(user.id); 
                awbInput.value = ""; document.getElementById('searchDateInput').value = rawDate; 
                renderTable(courierId); updateDashboardStats();
                Swal.fire({icon: 'success', title: 'Tersimpan!', toast: true, position: 'top-end', showConfirmButton: false, timer: 2000});
            } else { Swal.fire('Error Database', error.message, 'error'); }
        } else { Swal.fire('Tidak Valid', 'Resi tidak ditemukan.', 'error'); awbInput.value = "";}
    } catch (e) { 
        console.error(e);
        Swal.fire('Error API', 'Server proxy/kurir sedang gangguan. Silakan coba beberapa saat lagi.', 'error'); 
    }
}

window.deleteResi = function(id, courierId) {
    Swal.fire({ title: 'Hapus Data?', text: "Data resi akan lenyap dari database", icon: 'warning', showCancelButton: true, confirmButtonColor: '#ef4444', confirmButtonText: 'Ya, Hapus' }).then(async (res) => {
        if (res.isConfirmed) {
            await supabaseClient.from('resi_collection').delete().eq('id', id);
            const { data: { user } } = await supabaseClient.auth.getUser();
            await fetchAllDataFromDatabase(user.id);
            renderTable(courierId); updateDashboardStats();
        }
    })
}

window.searchAwbLive = function() { renderTable(document.getElementById('colCourierId').value); updateDashboardStats(); }
window.filterTable = function(status) { currentFilter = status; updateFilterUI(); renderTable(document.getElementById('colCourierId').value); }

function updateFilterUI() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('bg-blue-900', 'text-white', 'shadow-sm'); btn.classList.add('bg-white', 'text-blue-800');
        if(btn.innerText.toLowerCase().includes(currentFilter.toLowerCase()) || (currentFilter === 'all' && btn.innerText === 'Semua')) {
            btn.classList.add('bg-blue-900', 'text-white', 'shadow-sm'); btn.classList.remove('bg-white', 'text-blue-800');
        }
    });
}

function renderTable(activeCourierId) {
    const tbody = document.getElementById('tableBodyCollection');
    const emptyState = document.getElementById('emptyState');
    const searchDate = document.getElementById('searchDateInput').value; 
    const searchAwbEl = document.getElementById('searchAwbInput');
    const searchQuery = searchAwbEl ? searchAwbEl.value.toUpperCase() : '';
    
    let filteredData = collectionData.filter(item => item.courier_id === activeCourierId);
    
    if(currentFilter !== 'all') {
        if(currentFilter === 'Delivered') filteredData = filteredData.filter(item => getStatusCategory(item.last_status) === 'TERKIRIM');
        else if(currentFilter === 'Retur') filteredData = filteredData.filter(item => getStatusCategory(item.last_status) === 'RETUR');
        else if(currentFilter === 'Proses') filteredData = filteredData.filter(item => getStatusCategory(item.last_status) === 'PROSES');
    }
    if(searchDate !== '') filteredData = filteredData.filter(item => item.raw_date === searchDate);
    if(searchQuery !== '') filteredData = filteredData.filter(item => item.awb.includes(searchQuery));
    
    tbody.innerHTML = "";
    if (filteredData.length === 0) { emptyState.classList.remove('hidden'); } 
    else {
        emptyState.classList.add('hidden');
        filteredData.forEach(item => {
            const cat = getStatusCategory(item.last_status);
            const displayStatus = getShortStatus(item.last_status, cat);
            let badgeClass = 'bg-amber-100 text-amber-700 border border-amber-200'; let iconStatus = '<i class="fa-solid fa-truck-fast mr-1"></i>';
            if(cat === 'TERKIRIM') { badgeClass = 'bg-emerald-100 text-emerald-700 border border-emerald-200'; iconStatus = '<i class="fa-solid fa-check mr-1"></i>'; } 
            else if(cat === 'RETUR') { badgeClass = 'bg-red-100 text-red-700 border border-red-200'; iconStatus = '<i class="fa-solid fa-triangle-exclamation mr-1"></i>'; }
            
            tbody.insertAdjacentHTML('beforeend', `
                <tr class="border-b theme-border hover:bg-blue-50/50 transition-colors group">
                    <td class="px-5 py-4"><div class="font-black tracking-wide text-blue-700 theme-text">${item.awb}</div><div class="text-[10px] text-slate-400 mt-1 font-bold"><i class="fa-regular fa-clock"></i> ${item.date_added}</div></td>
                    <td class="px-5 py-4"><span class="px-3 py-1.5 rounded-lg text-[10px] font-black ${badgeClass} shadow-sm">${iconStatus} ${displayStatus}</span></td>
                    <td class="px-5 py-4 text-right">
                        <button onclick="trackResiFromTable('${item.awb}', '${item.courier_name}')" class="bg-blue-100 text-blue-700 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-xl text-xs font-bold mr-1 transition-all shadow-sm">Lacak</button>
                        <button onclick="deleteResi('${item.id}', '${item.courier_id}')" class="bg-red-50 text-red-600 hover:bg-red-600 hover:text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm opacity-50 group-hover:opacity-100"><i class="fa-solid fa-trash"></i></button>
                    </td>
                </tr>`);
        });
    }
}

window.trackResiFromTable = async function(awb, courierName) {
    const modal = document.getElementById('trackModal'); const modalContent = document.getElementById('modalContent');
    const modalTimeline = document.getElementById('modalTimeline'); const loader = document.getElementById('modalLoader');
    modal.classList.remove('hidden');
    setTimeout(() => { modal.classList.remove('opacity-0'); modalContent.classList.remove('translate-y-full'); }, 10);
    document.getElementById('modalTitle').innerText = awb; document.getElementById('modalSubTitle').innerText = courierName;
    modalTimeline.innerHTML = ""; loader.classList.remove('hidden');

    const resiData = collectionData.find(item => item.awb === awb);
    try {
        const result = await fetchBinderbyte(awb, resiData.courier_id);
        loader.classList.add('hidden');
        if (result.status === 200) {
            result.data.history.forEach((item, index) => {
                const isFirst = index === 0;
                modalTimeline.insertAdjacentHTML('beforeend', `
                    <div class="relative pb-6 fade-in" style="animation-delay: ${index * 0.05}s">
                        <div class="absolute left-[-31px] w-4 h-4 rounded-full border-[3px] border-white ${isFirst ? 'bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.8)]' : 'bg-blue-200'}"></div>
                        <div class="ml-4 bg-blue-50/50 p-3 rounded-xl border border-blue-100 theme-card shadow-sm"><p class="text-[10px] text-blue-500 font-black mb-1"><i class="fa-regular fa-calendar-check mr-1"></i> ${item.date}</p><p class="text-xs font-bold text-slate-700 theme-text leading-relaxed">${item.desc}</p></div>
                    </div>`);
            });
            let apiStatus = result.data.summary.status;
            if(result.data.history && result.data.history.length > 0) apiStatus = result.data.history[0].desc;
            await supabaseClient.from('resi_collection').update({ last_status: apiStatus }).eq('id', resiData.id);
            const { data: { user } } = await supabaseClient.auth.getUser();
            await fetchAllDataFromDatabase(user.id);
            renderTable(document.getElementById('colCourierId').value); updateDashboardStats(); 
        } else {
            modalTimeline.innerHTML = `<div class="bg-red-50 text-red-600 font-bold border border-red-200 p-4 rounded-xl text-sm"><i class="fa-solid fa-circle-exclamation mr-1"></i> Resi tidak ditemukan / kadaluarsa.</div>`;
        }
    } catch (error) { loader.classList.add('hidden'); modalTimeline.innerHTML = `<div class="bg-orange-50 text-orange-600 font-bold border border-orange-200 p-4 rounded-xl text-sm"><i class="fa-solid fa-wifi mr-1"></i> Gagal koneksi server API.</div>`; }
}

window.closeModal = function() {
    document.getElementById('trackModal').classList.add('opacity-0');
    document.getElementById('modalContent').classList.add('translate-y-full');
    setTimeout(() => { document.getElementById('trackModal').classList.add('hidden'); }, 300);
}

// ==========================================
// 6. SYNC UNIVERSAL ALGORITHM
// ==========================================
window.syncUniversalData = async function() {
    const activeDate = document.getElementById('searchDateInput').value; 
    let dataToSync = collectionData.filter(item => getStatusCategory(item.last_status) === 'PROSES' && (!activeDate || item.raw_date === activeDate));
    if(dataToSync.length === 0) return Swal.fire('Tuntas!', 'Semua resi hari ini sudah di tahap akhir.', 'info');
    Swal.fire({ title: 'Sync Global', text: `Memperbarui ${dataToSync.length} Resi...`, allowOutsideClick: false, didOpen: () => Swal.showLoading() });
    const { data: { user } } = await supabaseClient.auth.getUser();
    for (let item of dataToSync) {
        try {
            const r = await fetchBinderbyte(item.awb, item.courier_id);
            if (r.status === 200) {
                let stat = r.data.summary.status;
                if(r.data.history && r.data.history.length > 0) stat = r.data.history[0].desc;
                await supabaseClient.from('resi_collection').update({ last_status: stat }).eq('id', item.id);
            }
        } catch (e) {}
    }
    await fetchAllDataFromDatabase(user.id); updateDashboardStats(); Swal.fire('Sukses!', 'Semua data proses berhasil diperbarui.', 'success');
}

window.syncAllResi = async function() {
    const cId = document.getElementById('colCourierId').value;
    const activeDate = document.getElementById('searchDateInput').value; 
    let dataToSync = collectionData.filter(item => item.courier_id === cId && getStatusCategory(item.last_status) === 'PROSES' && (!activeDate || item.raw_date === activeDate));
    if(dataToSync.length === 0) return Swal.fire('Sudah Akurat', 'Tidak ada data menggantung di ekspedisi ini.', 'info');
    Swal.fire({ title: 'Sync Ekspedisi', text: 'Melakukan penarikan data masal...', allowOutsideClick: false, didOpen: () => Swal.showLoading() });
    const { data: { user } } = await supabaseClient.auth.getUser();
    for (let item of dataToSync) {
        try {
            const r = await fetchBinderbyte(item.awb, item.courier_id);
            if (r.status === 200) {
                let stat = r.data.summary.status;
                if(r.data.history && r.data.history.length > 0) stat = r.data.history[0].desc;
                await supabaseClient.from('resi_collection').update({ last_status: stat }).eq('id', item.id);
            }
        } catch (e) {}
    }
    await fetchAllDataFromDatabase(user.id); renderTable(cId); updateDashboardStats(); Swal.fire('Selesai!', 'Sistem tersinkronisasi', 'success');
}

// ==========================================
// 7. THEME & PWA REGISTRAR
// ==========================================
function initTheme() {
    if(localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-mode');
    document.getElementById("themeToggle").addEventListener("click", () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });
}

function initSidebarMobile() {
    const sidebar = document.getElementById('sidebar'); 
    const overlay = document.getElementById('sidebarOverlay');
    
    document.getElementById('openSidebar').addEventListener('click', () => { 
        sidebar.classList.remove('-translate-x-full'); 
        overlay.classList.remove('hidden'); 
    });
    
    const closeMenu = () => { 
        sidebar.classList.add('-translate-x-full'); 
        overlay.classList.add('hidden'); 
    };
    
    document.getElementById('closeSidebar').addEventListener('click', closeMenu); 
    overlay.addEventListener('click', closeMenu);
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').catch(err => console.log('SW Gagal:', err));
    });
}

