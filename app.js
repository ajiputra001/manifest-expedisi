// ============================================
// MANIFEST EKSPEDISI - Application Logic
// ============================================

// ============================================
// EXPEDITION DATABASE
// ============================================

const EXPEDITIONS = {
  'SPX': {
    name: 'Shopee Express (SPX)',
    shortName: 'SPX',
    color: '#ee4d2d',
    icon: '🟠',
    prefixes: ['SPXID', 'SPX', 'SP'],
    bgColor: 'rgba(238, 77, 45, 0.12)',
    borderColor: 'rgba(238, 77, 45, 0.3)',
  },
  'JNE': {
    name: 'JNE Express',
    shortName: 'JNE',
    color: '#d32027',
    icon: '🔴',
    prefixes: ['JNE', 'CGK', 'SOCAG'],
    bgColor: 'rgba(211, 32, 39, 0.12)',
    borderColor: 'rgba(211, 32, 39, 0.3)',
  },
  'J&T': {
    name: 'J&T Express',
    shortName: 'J&T',
    color: '#e31e25',
    icon: '🔴',
    prefixes: ['JT', 'JP', 'JD', 'JX'],
    bgColor: 'rgba(227, 30, 37, 0.12)',
    borderColor: 'rgba(227, 30, 37, 0.3)',
  },
  'SICEPAT': {
    name: 'SiCepat Ekspres',
    shortName: 'SiCepat',
    color: '#c8102e',
    icon: '🔴',
    prefixes: ['SC', 'SCP', 'SICEPAT'],
    bgColor: 'rgba(200, 16, 46, 0.12)',
    borderColor: 'rgba(200, 16, 46, 0.3)',
  },
  'POS': {
    name: 'Pos Indonesia',
    shortName: 'Pos ID',
    color: '#e74c3c',
    icon: '📮',
    prefixes: ['POS', 'PS', 'RI'],
    bgColor: 'rgba(231, 76, 60, 0.12)',
    borderColor: 'rgba(231, 76, 60, 0.3)',
  },
  'ANTERAJA': {
    name: 'AnterAja',
    shortName: 'AnterAja',
    color: '#00b14f',
    icon: '🟢',
    prefixes: ['ANT', 'ATJ', '1'],
    bgColor: 'rgba(0, 177, 79, 0.12)',
    borderColor: 'rgba(0, 177, 79, 0.3)',
  },
  'TIKI': {
    name: 'TIKI',
    shortName: 'TIKI',
    color: '#0077b6',
    icon: '🔵',
    prefixes: ['TK', 'TIKI', '03'],
    bgColor: 'rgba(0, 119, 182, 0.12)',
    borderColor: 'rgba(0, 119, 182, 0.3)',
  },
  'LION': {
    name: 'Lion Parcel',
    shortName: 'Lion',
    color: '#dc2626',
    icon: '🦁',
    prefixes: ['LP', 'LION'],
    bgColor: 'rgba(220, 38, 38, 0.12)',
    borderColor: 'rgba(220, 38, 38, 0.3)',
  },
  'GOSEND': {
    name: 'GoSend',
    shortName: 'GoSend',
    color: '#00aa13',
    icon: '💚',
    prefixes: ['GK', 'GO', 'GS'],
    bgColor: 'rgba(0, 170, 19, 0.12)',
    borderColor: 'rgba(0, 170, 19, 0.3)',
  },
  'GRAB': {
    name: 'GrabExpress',
    shortName: 'Grab',
    color: '#00b14f',
    icon: '💚',
    prefixes: ['GR', 'GRAB', 'GE'],
    bgColor: 'rgba(0, 177, 79, 0.12)',
    borderColor: 'rgba(0, 177, 79, 0.3)',
  },
  'PAXEL': {
    name: 'Paxel',
    shortName: 'Paxel',
    color: '#5b21b6',
    icon: '🟣',
    prefixes: ['PX', 'PAX', 'PAXEL'],
    bgColor: 'rgba(91, 33, 182, 0.12)',
    borderColor: 'rgba(91, 33, 182, 0.3)',
  },
  'J&T_CARGO': {
    name: 'J&T Cargo',
    shortName: 'J&T Cargo',
    color: '#b91c1c',
    icon: '📦',
    prefixes: ['JC', 'JTCG'],
    bgColor: 'rgba(185, 28, 28, 0.12)',
    borderColor: 'rgba(185, 28, 28, 0.3)',
  },
  'JTR': {
    name: 'JNE Trucking (JTR)',
    shortName: 'JTR',
    color: '#9f1239',
    icon: '🚛',
    prefixes: ['JTR', '42'],
    bgColor: 'rgba(159, 18, 57, 0.12)',
    borderColor: 'rgba(159, 18, 57, 0.3)',
  },
  'NINJA': {
    name: 'Ninja Xpress',
    shortName: 'Ninja',
    color: '#dc2626',
    icon: '🥷',
    prefixes: ['NX', 'NINJA', 'NV'],
    bgColor: 'rgba(220, 38, 38, 0.12)',
    borderColor: 'rgba(220, 38, 38, 0.3)',
  },
  'IDEXPRESS': {
    name: 'ID Express',
    shortName: 'ID Exp',
    color: '#ea580c',
    icon: '🟠',
    prefixes: ['IDE', 'IDX', 'ID'],
    bgColor: 'rgba(234, 88, 12, 0.12)',
    borderColor: 'rgba(234, 88, 12, 0.3)',
  },
  'SAP': {
    name: 'SAP Express',
    shortName: 'SAP',
    color: '#0ea5e9',
    icon: '🔵',
    prefixes: ['SAP', 'SEX'],
    bgColor: 'rgba(14, 165, 233, 0.12)',
    borderColor: 'rgba(14, 165, 233, 0.3)',
  },
  'REX': {
    name: 'REX Express',
    shortName: 'REX',
    color: '#0d9488',
    icon: '🟢',
    prefixes: ['REX', 'RX'],
    bgColor: 'rgba(13, 148, 136, 0.12)',
    borderColor: 'rgba(13, 148, 136, 0.3)',
  },
  'WAHANA': {
    name: 'Wahana Express',
    shortName: 'Wahana',
    color: '#2563eb',
    icon: '🔵',
    prefixes: ['WAH', 'AGT', 'WH'],
    bgColor: 'rgba(37, 99, 235, 0.12)',
    borderColor: 'rgba(37, 99, 235, 0.3)',
  },
  'INDAH': {
    name: 'Indah Cargo',
    shortName: 'Indah',
    color: '#059669',
    icon: '📦',
    prefixes: ['ICG', 'INDAH'],
    bgColor: 'rgba(5, 150, 105, 0.12)',
    borderColor: 'rgba(5, 150, 105, 0.3)',
  },
  'RPX': {
    name: 'RPX One Stop Logistics',
    shortName: 'RPX',
    color: '#7c3aed',
    icon: '🟣',
    prefixes: ['RPX'],
    bgColor: 'rgba(124, 58, 237, 0.12)',
    borderColor: 'rgba(124, 58, 237, 0.3)',
  },
  'SENTRAL': {
    name: 'Sentral Cargo',
    shortName: 'Sentral',
    color: '#ca8a04',
    icon: '📦',
    prefixes: ['STL', 'SENTRAL'],
    bgColor: 'rgba(202, 138, 4, 0.12)',
    borderColor: 'rgba(202, 138, 4, 0.3)',
  },
  'LAZADA': {
    name: 'Lazada Express (LEX)',
    shortName: 'LEX',
    color: '#1a1aff',
    icon: '🔵',
    prefixes: ['LEX', 'LZD', 'LAZ'],
    bgColor: 'rgba(26, 26, 255, 0.12)',
    borderColor: 'rgba(26, 26, 255, 0.3)',
  },
  'TOKOPEDIA': {
    name: 'TokoCabang / Tokopedia',
    shortName: 'Toped',
    color: '#00aa5b',
    icon: '💚',
    prefixes: ['TKP', 'TP'],
    bgColor: 'rgba(0, 170, 91, 0.12)',
    borderColor: 'rgba(0, 170, 91, 0.3)',
  },
  'BORZO': {
    name: 'Borzo (Mr.Speedy)',
    shortName: 'Borzo',
    color: '#f97316',
    icon: '🟠',
    prefixes: ['BRZ', 'BORZO'],
    bgColor: 'rgba(249, 115, 22, 0.12)',
    borderColor: 'rgba(249, 115, 22, 0.3)',
  },
  'LALAMOVE': {
    name: 'Lalamove',
    shortName: 'Lalamove',
    color: '#f59e0b',
    icon: '🟡',
    prefixes: ['LLM', 'LALA'],
    bgColor: 'rgba(245, 158, 11, 0.12)',
    borderColor: 'rgba(245, 158, 11, 0.3)',
  },
  'DELIVEREE': {
    name: 'Deliveree',
    shortName: 'Deliveree',
    color: '#8b5cf6',
    icon: '🟣',
    prefixes: ['DLV', 'DEL'],
    bgColor: 'rgba(139, 92, 246, 0.12)',
    borderColor: 'rgba(139, 92, 246, 0.3)',
  },
  'KURIR_LAIN': {
    name: 'Kurir Lainnya',
    shortName: 'Lainnya',
    color: '#64748b',
    icon: '📦',
    prefixes: [],
    bgColor: 'rgba(100, 116, 139, 0.12)',
    borderColor: 'rgba(100, 116, 139, 0.3)',
  },
};

// ============================================
// STATE
// ============================================

let packages = [];
let activityLog = [];
let selectedIds = new Set();
let currentPage = 'dashboard';
let currentExpedition = null;
let scanMode = 'single';
let soundEnabled = true;
let sortField = 'time';
let sortDirection = 'desc';
let tablePage = 1;
const PAGE_SIZE = 20;
let pendingConfirmAction = null;

// ============================================
// INIT
// ============================================

function init() {
  initTheme();
  loadFromStorage();
  populateExpeditionNav();
  populateExpeditionFilter();
  updateAllStats();
  updateClock();
  setInterval(updateClock, 1000);
  renderChart();
  renderActivity();

  // Focus scan input
  setTimeout(() => {
    const input = document.getElementById('resiInput');
    if (input) input.focus();
  }, 100);

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'k') {
      e.preventDefault();
      document.getElementById('globalSearch').focus();
    }
  });
}

// ============================================
// STORAGE
// ============================================

function saveToStorage() {
  try {
    localStorage.setItem('manifest_packages', JSON.stringify(packages));
    localStorage.setItem('manifest_activity', JSON.stringify(activityLog.slice(0, 200)));
  } catch (e) {
    console.warn('Storage save failed:', e);
  }
}

function loadFromStorage() {
  try {
    const pkgs = localStorage.getItem('manifest_packages');
    const acts = localStorage.getItem('manifest_activity');
    if (pkgs) packages = JSON.parse(pkgs);
    if (acts) activityLog = JSON.parse(acts);
  } catch (e) {
    console.warn('Storage load failed:', e);
  }
}

// ============================================
// CLOCK
// ============================================

function updateClock() {
  const now = new Date();
  const options = {
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    hour12: false
  };
  const dateStr = now.toLocaleDateString('id-ID', {
    weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'
  });
  document.getElementById('clockTime').textContent = 
    `${dateStr} • ${now.toLocaleTimeString('id-ID', options)}`;
}

// ============================================
// EXPEDITION DETECTION
// ============================================

function detectExpedition(resi) {
  const upperResi = resi.toUpperCase().trim();

  // Sort expeditions by prefix length (longer first for accuracy)
  const sortedExpeditions = Object.entries(EXPEDITIONS)
    .filter(([key]) => key !== 'KURIR_LAIN')
    .flatMap(([key, exp]) => 
      exp.prefixes.map(prefix => ({ key, prefix, len: prefix.length }))
    )
    .sort((a, b) => b.len - a.len);

  for (const { key, prefix } of sortedExpeditions) {
    if (upperResi.startsWith(prefix)) {
      return key;
    }
  }

  return 'KURIR_LAIN';
}

// ============================================
// SCAN PROCESSING
// ============================================

function processResi() {
  const input = document.getElementById('resiInput');
  const resi = input.value.trim();
  if (!resi) return;

  addResi(resi, 'scanFeedback');
  input.value = '';
  input.focus();
}

function processResiFocus() {
  const input = document.getElementById('resiInputFocus');
  const resi = input.value.trim();
  if (!resi) return;

  addResi(resi, 'scanFeedbackFocus');
  input.value = '';
  input.focus();
  updateLastScannedList();
}

function handleScanKeydown(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    // Determine which input triggered this
    if (e.target.id === 'resiInputFocus') {
      processResiFocus();
    } else {
      processResi();
    }
  }
}

function addResi(resi, feedbackId) {
  resi = resi.trim();
  if (!resi) return false;

  // Check duplicate - ENHANCED WITH DRAMATIC WARNING
  const existingPkg = packages.find(p => p.resi.toUpperCase() === resi.toUpperCase());
  if (existingPkg) {
    // Show dramatic duplicate warning
    showDuplicateWarning(resi, existingPkg);
    showFeedback(feedbackId, 'error', `🚫 DUPLIKAT! Resi <strong>${resi}</strong> sudah pernah di-scan sebelumnya!`);
    playSound('duplicate');

    // Flash the scan input red
    const inputs = document.querySelectorAll('.scan-input');
    inputs.forEach(inp => {
      inp.classList.add('duplicate-flash');
      setTimeout(() => inp.classList.remove('duplicate-flash'), 1500);
    });

    // Flash the main content
    const mainContent = document.getElementById('mainContent');
    mainContent.classList.add('screen-flash-red');
    setTimeout(() => mainContent.classList.remove('screen-flash-red'), 600);

    addActivityLog('duplicate', `⚠️ DUPLIKAT terdeteksi: Resi <strong>${resi}</strong> sudah ada!`);
    return false;
  }

  const expeditionKey = detectExpedition(resi);
  const expedition = EXPEDITIONS[expeditionKey];

  const pkg = {
    id: generateId(),
    resi: resi.toUpperCase(),
    expeditionKey: expeditionKey,
    expeditionName: expedition.name,
    scannedAt: new Date().toISOString(),
    printed: false,
    pickupStatus: 'ready', // ready, picked, pending
    selected: false
  };

  packages.unshift(pkg);

  showFeedback(feedbackId, 'success', `✅ Resi <strong>${resi}</strong> berhasil ditambahkan ke <strong>${expedition.name}</strong>`);
  playSound('success');

  addActivityLog('scan', `Resi <strong>${resi}</strong> di-scan → <strong>${expedition.shortName}</strong>`);

  saveToStorage();
  updateAllStats();
  renderChart();
  renderActivity();
  refreshCurrentView();

  return true;
}

// Duplicate Warning Modal
function showDuplicateWarning(resi, existingPkg) {
  const overlay = document.getElementById('duplicateOverlay');
  const exp = EXPEDITIONS[existingPkg.expeditionKey];
  const scanDate = new Date(existingPkg.scannedAt);

  document.getElementById('duplicateResiText').textContent = resi.toUpperCase();
  document.getElementById('duplicateInfoText').textContent =
    'Resi ini sudah pernah di-scan sebelumnya! Paket tidak boleh di-scan dua kali.';

  document.getElementById('duplicateDetailBox').innerHTML = `
    <div>📦 <strong>Ekspedisi:</strong> ${exp.icon} ${exp.name}</div>
    <div>📅 <strong>Waktu Scan:</strong> ${scanDate.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })} pukul ${scanDate.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</div>
    <div>📦 <strong>Status Pickup:</strong> ${existingPkg.printed ? '✅ Sudah di Pickup' : '⏳ Belum di Pickup'}</div>
    <div style="margin-top: 8px;">Mendeteksi scan duplikat untuk resi yang sama.</div> ${getPickupLabel(existingPkg.pickupStatus)}</div>
  `;

  overlay.classList.add('active');
}

function closeDuplicateWarning() {
  const overlay = document.getElementById('duplicateOverlay');
  overlay.classList.remove('active');
  // Refocus scan input
  const input = document.getElementById('resiInput') || document.getElementById('resiInputFocus');
  if (input) input.focus();
}

function processBulkResi() {
  const textarea = document.getElementById('bulkInput');
  processBulk(textarea, 'scanFeedback');
}

function processBulkResiFocus() {
  const textarea = document.getElementById('bulkInputFocus');
  processBulk(textarea, 'scanFeedbackFocus');
}

function processBulk(textarea, feedbackId) {
  const text = textarea.value.trim();
  if (!text) return;

  const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  let added = 0;
  let duplicates = 0;

  lines.forEach(resi => {
    if (packages.some(p => p.resi.toUpperCase() === resi.toUpperCase())) {
      duplicates++;
    } else {
      const expeditionKey = detectExpedition(resi);
      const expedition = EXPEDITIONS[expeditionKey];
      packages.unshift({
        id: generateId(),
        resi: resi.toUpperCase(),
        expeditionKey,
        expeditionName: expedition.name,
        scannedAt: new Date().toISOString(),
        printed: false,
        pickupStatus: 'ready',
        selected: false
      });
      added++;
    }
  });

  if (added > 0) {
    showFeedback(feedbackId, 'success', `✅ ${added} resi berhasil ditambahkan${duplicates > 0 ? `, ${duplicates} duplikat diabaikan` : ''}`);
    playSound('success');
    addActivityLog('bulk', `Bulk scan: <strong>${added}</strong> resi ditambahkan`);
  } else {
    showFeedback(feedbackId, 'warning', `⚠️ Semua ${duplicates} resi sudah ada dalam daftar`);
    playSound('error');
  }

  textarea.value = '';
  saveToStorage();
  updateAllStats();
  renderChart();
  renderActivity();
  refreshCurrentView();
}

// ============================================
// SCAN MODE
// ============================================

function setScanMode(mode) {
  scanMode = mode;
  const btns = document.querySelectorAll('.scan-mode-btn');
  btns.forEach(btn => btn.classList.remove('active'));
  btns.forEach(btn => {
    if (btn.textContent.toLowerCase() === mode) btn.classList.add('active');
  });

  // Toggle visibility for dashboard scan
  const singleMode = document.getElementById('singleScanMode');
  const bulkMode = document.getElementById('bulkScanMode');
  if (singleMode) singleMode.style.display = mode === 'single' ? 'flex' : 'none';
  if (bulkMode) bulkMode.style.display = mode === 'bulk' ? 'block' : 'none';

  // Toggle visibility for focus scan
  const singleFocus = document.getElementById('singleScanModeFocus');
  const bulkFocus = document.getElementById('bulkScanModeFocus');
  if (singleFocus) singleFocus.style.display = mode === 'single' ? 'flex' : 'none';
  if (bulkFocus) bulkFocus.style.display = mode === 'bulk' ? 'block' : 'none';
}

// ============================================
// NAVIGATION
// ============================================

function navigateTo(page, expeditionKey) {
  currentPage = page;
  currentExpedition = expeditionKey || null;

  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.style.display = 'none');

  // Show target page
  if (page === 'expedition' && expeditionKey) {
    document.getElementById('page-expedition').style.display = 'block';
    renderExpeditionDetail(expeditionKey);
  } else {
    const pageEl = document.getElementById(`page-${page}`);
    if (pageEl) pageEl.style.display = 'block';
  }

  // Update nav active state
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  const activeNav = document.querySelector(`.nav-item[data-page="${page}"]`);
  if (activeNav) activeNav.classList.add('active');
  if (expeditionKey) {
    const expNav = document.querySelector(`.nav-item[data-expedition="${expeditionKey}"]`);
    if (expNav) expNav.classList.add('active');
  }

  // Update header title
  const titles = {
    'dashboard': '<span>📊</span> Dashboard',
    'scan': '<span>📷</span> Scan Resi',
    'all-packages': '<span>📋</span> Semua Paket',
    'unprinted': '<span>🖨️</span> Belum di Pickup',
    'printed': '<span>✅</span> Sudah di Pickup',
    'activity': '<span>📝</span> Riwayat Aktivitas',
  };
  document.getElementById('headerTitle').innerHTML = titles[page] || 
    (expeditionKey ? `<span>${EXPEDITIONS[expeditionKey]?.icon || '📦'}</span> ${EXPEDITIONS[expeditionKey]?.name || 'Ekspedisi'}` : 'Dashboard');

  // Refresh view data
  refreshCurrentView();

  // Close mobile sidebar
  closeSidebar();
}

function refreshCurrentView() {
  switch (currentPage) {
    case 'all-packages': renderAllPackagesTable(); break;
    case 'unprinted': renderUnprintedTable(); break;
    case 'printed': renderPrintedTable(); break;
    case 'expedition': renderExpeditionDetail(currentExpedition); break;
    case 'scan': updateLastScannedList(); break;
    case 'activity': renderFullActivity(); break;
  }
}

// ============================================
// SIDEBAR
// ============================================

function populateExpeditionNav() {
  const container = document.getElementById('expedisiNavList');
  container.innerHTML = '';

  Object.entries(EXPEDITIONS).forEach(([key, exp]) => {
    const count = packages.filter(p => p.expeditionKey === key).length;
    const item = document.createElement('div');
    item.className = 'nav-item';
    item.setAttribute('data-page', 'expedition');
    item.setAttribute('data-expedition', key);
    item.onclick = () => navigateTo('expedition', key);
    item.innerHTML = `
      <span class="expedisi-dot" style="background: ${exp.color}"></span>
      <span>${exp.shortName}</span>
      ${count > 0 ? `<span class="nav-item-badge">${count}</span>` : ''}
    `;
    container.appendChild(item);
  });
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('active');
}

function closeSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  sidebar.classList.remove('open');
  overlay.classList.remove('active');
}

// ============================================
// STATISTICS
// ============================================

function updateAllStats() {
  const today = new Date().toDateString();
  const todayPackages = packages.filter(p => new Date(p.scannedAt).toDateString() === today);

  animateNumber('stat-total', todayPackages.length);
  animateNumber('stat-printed', todayPackages.filter(p => p.printed).length);
  animateNumber('stat-unprinted', todayPackages.filter(p => !p.printed).length);

  const activeExpeditions = new Set(todayPackages.map(p => p.expeditionKey));
  animateNumber('stat-expedisi', activeExpeditions.size);

  // Badges
  document.getElementById('badge-total').textContent = packages.length;
  document.getElementById('badge-unprinted').textContent = packages.filter(p => !p.printed).length;
  document.getElementById('badge-printed').textContent = packages.filter(p => p.printed).length;

  // Update sidebar expedition counts
  populateExpeditionNav();
}

function animateNumber(elementId, target) {
  const el = document.getElementById(elementId);
  if (!el) return;
  const current = parseInt(el.textContent) || 0;
  if (current === target) return;

  const duration = 500;
  const steps = 20;
  const increment = (target - current) / steps;
  let step = 0;

  const timer = setInterval(() => {
    step++;
    if (step >= steps) {
      el.textContent = target;
      clearInterval(timer);
    } else {
      el.textContent = Math.round(current + increment * step);
    }
  }, duration / steps);
}

// ============================================
// FILTERS
// ============================================

function populateExpeditionFilter() {
  const select = document.getElementById('filterExpedisi');
  select.innerHTML = '<option value="all">Semua Ekspedisi</option>';
  Object.entries(EXPEDITIONS).forEach(([key, exp]) => {
    const opt = document.createElement('option');
    opt.value = key;
    opt.textContent = exp.name;
    select.appendChild(opt);
  });
}

function getFilteredPackages() {
  let filtered = [...packages];

  const expFilter = document.getElementById('filterExpedisi')?.value;
  const statusFilter = document.getElementById('filterStatus')?.value;
  const pickupFilter = document.getElementById('filterPickup')?.value;
  const dateFrom = document.getElementById('filterDateFrom')?.value;
  const dateTo = document.getElementById('filterDateTo')?.value;

  if (expFilter && expFilter !== 'all') {
    filtered = filtered.filter(p => p.expeditionKey === expFilter);
  }
  if (statusFilter && statusFilter !== 'all') {
    filtered = filtered.filter(p => statusFilter === 'printed' ? p.printed : !p.printed);
  }
  if (pickupFilter && pickupFilter !== 'all') {
    filtered = filtered.filter(p => p.pickupStatus === pickupFilter);
  }
  if (dateFrom) {
    const from = new Date(dateFrom);
    from.setHours(0, 0, 0, 0);
    filtered = filtered.filter(p => new Date(p.scannedAt) >= from);
  }
  if (dateTo) {
    const to = new Date(dateTo);
    to.setHours(23, 59, 59, 999);
    filtered = filtered.filter(p => new Date(p.scannedAt) <= to);
  }

  // Sort
  filtered.sort((a, b) => {
    let valA, valB;
    switch (sortField) {
      case 'resi': valA = a.resi; valB = b.resi; break;
      case 'expedisi': valA = a.expeditionName; valB = b.expeditionName; break;
      case 'print': valA = a.printed ? 1 : 0; valB = b.printed ? 1 : 0; break;
      case 'pickup': valA = a.pickupStatus; valB = b.pickupStatus; break;
      default: valA = a.scannedAt; valB = b.scannedAt;
    }
    if (sortDirection === 'asc') return valA > valB ? 1 : -1;
    return valA < valB ? 1 : -1;
  });

  return filtered;
}

function applyFilters() {
  tablePage = 1;
  renderAllPackagesTable();
}

function resetFilters() {
  document.getElementById('filterExpedisi').value = 'all';
  document.getElementById('filterStatus').value = 'all';
  document.getElementById('filterPickup').value = 'all';
  document.getElementById('filterDateFrom').value = '';
  document.getElementById('filterDateTo').value = '';
  // Reset calendar picker buttons
  const fromText = document.getElementById('filterDateFromText');
  const toText = document.getElementById('filterDateToText');
  const fromBtn = document.getElementById('filterDateFromBtn');
  const toBtn = document.getElementById('filterDateToBtn');
  if (fromText) fromText.textContent = 'Pilih Tanggal';
  if (toText) toText.textContent = 'Pilih Tanggal';
  if (fromBtn) fromBtn.classList.remove('has-value');
  if (toBtn) toBtn.classList.remove('has-value');
  tablePage = 1;
  renderAllPackagesTable();
}

function sortTable(field) {
  if (sortField === field) {
    sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
  } else {
    sortField = field;
    sortDirection = 'asc';
  }
  renderAllPackagesTable();
}

// ============================================
// TABLE RENDERING
// ============================================

function renderAllPackagesTable() {
  const filtered = getFilteredPackages();
  const tbody = document.getElementById('packageTableBody');
  const empty = document.getElementById('tableEmpty');
  const pagination = document.getElementById('tablePagination');

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  if (tablePage > totalPages) tablePage = totalPages || 1;

  const start = (tablePage - 1) * PAGE_SIZE;
  const pageData = filtered.slice(start, start + PAGE_SIZE);

  document.getElementById('tableCount').textContent = `${filtered.length} paket`;

  if (filtered.length === 0) {
    tbody.innerHTML = '';
    empty.style.display = 'flex';
    pagination.style.display = 'none';
    return;
  }

  empty.style.display = 'none';
  pagination.style.display = 'flex';

  tbody.innerHTML = pageData.map((pkg, i) => {
    const exp = EXPEDITIONS[pkg.expeditionKey];
    const scanDate = new Date(pkg.scannedAt);
    const isSelected = selectedIds.has(pkg.id);

    return `
      <tr data-id="${pkg.id}" style="animation: slideDown 0.2s ease ${i * 0.02}s both;">
        <td>
          <div class="custom-checkbox ${isSelected ? 'checked' : ''}" 
               onclick="toggleSelect('${pkg.id}')"></div>
        </td>
        <td>${start + i + 1}</td>
        <td><span class="resi-number">${pkg.resi}</span></td>
        <td>
          <span class="expedisi-badge" style="background: ${exp.bgColor}; color: ${exp.color}; border: 1px solid ${exp.borderColor};">
            ${exp.icon} ${exp.shortName}
          </span>
        </td>
        <td>
          <div class="time-stamp">
            <span class="date">${scanDate.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
            <span>${scanDate.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
          </div>
        </td>
        <td>
          <span class="status-badge ${pkg.printed ? 'printed' : 'unprinted'}" 
                onclick="togglePrint('${pkg.id}')">
            ${pkg.printed ? '✅ Sudah di Pickup' : '⏳ Belum di Pickup'}
          </span>
        </td>
        <td>
          <span class="pickup-badge ${pkg.pickupStatus}" onclick="cyclePickupStatus('${pkg.id}')">
            ${getPickupLabel(pkg.pickupStatus)}
          </span>
        </td>
        <td>
        <div class="action-btn-group">
          <button class="row-action-btn" onclick="togglePrint('${pkg.id}')" title="Toggle Pickup">
            ${pkg.printed ? '⏳ Batal' : '✅ Tandai'}
          </button>
            <button class="row-action-btn delete" onclick="confirmDelete('${pkg.id}')" title="Hapus">
              🗑️
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  // Pagination
  document.getElementById('paginationInfo').textContent = 
    `Menampilkan ${start + 1}-${Math.min(start + PAGE_SIZE, filtered.length)} dari ${filtered.length} paket`;

  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  const container = document.getElementById('paginationControls');
  if (totalPages <= 1) {
    container.innerHTML = '';
    return;
  }

  let html = `
    <button class="pagination-btn" onclick="goToPage(${tablePage - 1})" ${tablePage === 1 ? 'disabled' : ''}>◀</button>
  `;

  const maxVisible = 5;
  let startP = Math.max(1, tablePage - Math.floor(maxVisible / 2));
  let endP = Math.min(totalPages, startP + maxVisible - 1);
  if (endP - startP < maxVisible - 1) startP = Math.max(1, endP - maxVisible + 1);

  if (startP > 1) {
    html += `<button class="pagination-btn" onclick="goToPage(1)">1</button>`;
    if (startP > 2) html += `<button class="pagination-btn" disabled>...</button>`;
  }

  for (let i = startP; i <= endP; i++) {
    html += `<button class="pagination-btn ${i === tablePage ? 'active' : ''}" onclick="goToPage(${i})">${i}</button>`;
  }

  if (endP < totalPages) {
    if (endP < totalPages - 1) html += `<button class="pagination-btn" disabled>...</button>`;
    html += `<button class="pagination-btn" onclick="goToPage(${totalPages})">${totalPages}</button>`;
  }

  html += `
    <button class="pagination-btn" onclick="goToPage(${tablePage + 1})" ${tablePage === totalPages ? 'disabled' : ''}>▶</button>
  `;

  container.innerHTML = html;
}

function goToPage(page) {
  tablePage = page;
  renderAllPackagesTable();
}

// ============================================
// UNPRINTED TABLE
// ============================================

function renderUnprintedTable() {
  const unprinted = packages.filter(p => !p.printed);
  const tbody = document.getElementById('unprintedTableBody');
  const empty = document.getElementById('unprintedEmpty');

  document.getElementById('unprintedCount').textContent = `${unprinted.length} paket`;

  if (unprinted.length === 0) {
    tbody.innerHTML = '';
    empty.style.display = 'flex';
    return;
  }

  empty.style.display = 'none';
  tbody.innerHTML = unprinted.map((pkg, i) => {
    const exp = EXPEDITIONS[pkg.expeditionKey];
    const scanDate = new Date(pkg.scannedAt);
    return `
      <tr>
        <td>${i + 1}</td>
        <td><span class="resi-number">${pkg.resi}</span></td>
        <td>
          <span class="expedisi-badge" style="background: ${exp.bgColor}; color: ${exp.color}; border: 1px solid ${exp.borderColor};">
            ${exp.icon} ${exp.shortName}
          </span>
        </td>
        <td>
          <div class="time-stamp">
            <span class="date">${scanDate.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
            <span>${scanDate.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
          </div>
        </td>
        <td>
        <div class="action-btn-group">
          <button class="row-action-btn" onclick="togglePrint('${pkg.id}')" title="Tandai di Pickup">✅</button>
          <button class="row-action-btn" onclick="confirmDelete('${pkg.id}')" title="Hapus">🗑️</button>
        </div>
        </td>
      </tr>
    `;
  }).join('');
}

// ============================================
// PRINTED TABLE
// ============================================

function renderPrintedTable() {
  const printed = packages.filter(p => p.printed);
  const tbody = document.getElementById('printedTableBody');
  const empty = document.getElementById('printedEmpty');

  document.getElementById('printedCount').textContent = `${printed.length} paket`;

  if (printed.length === 0) {
    tbody.innerHTML = '';
    empty.style.display = 'flex';
    return;
  }

  empty.style.display = 'none';
  tbody.innerHTML = printed.map((pkg, i) => {
    const exp = EXPEDITIONS[pkg.expeditionKey];
    const scanDate = new Date(pkg.scannedAt);
    return `
      <tr>
        <td>${i + 1}</td>
        <td><span class="resi-number">${pkg.resi}</span></td>
        <td>
          <span class="expedisi-badge" style="background: ${exp.bgColor}; color: ${exp.color}; border: 1px solid ${exp.borderColor};">
            ${exp.icon} ${exp.shortName}
          </span>
        </td>
        <td>
          <div class="time-stamp">
            <span class="date">${scanDate.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
            <span>${scanDate.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
          </div>
        </td>
        <td>
          <span class="pickup-badge ${pkg.pickupStatus}" onclick="cyclePickupStatus('${pkg.id}')">
            ${getPickupLabel(pkg.pickupStatus)}
          </span>
        </td>
        <td>
        <div class="action-btn-group">
          <button class="row-action-btn" onclick="togglePrint('${pkg.id}')" title="Batalkan Pickup">⏳</button>
          <button class="row-action-btn" onclick="confirmDelete('${pkg.id}')" title="Hapus">🗑️</button>
        </div>
        </td>
      </tr>
    `;
  }).join('');
}

// ============================================
// EXPEDITION DETAIL
// ============================================

function getFilteredExpPackages(key) {
  let filtered = packages.filter(p => p.expeditionKey === key);

  // Apply date filters
  const dateFrom = document.getElementById('expFilterDateFrom')?.value;
  const dateTo = document.getElementById('expFilterDateTo')?.value;
  const statusFilter = document.getElementById('expFilterStatus')?.value;
  const searchQuery = document.getElementById('expFilterSearch')?.value?.trim().toUpperCase();

  if (dateFrom) {
    const from = new Date(dateFrom);
    from.setHours(0, 0, 0, 0);
    filtered = filtered.filter(p => new Date(p.scannedAt) >= from);
  }
  if (dateTo) {
    const to = new Date(dateTo);
    to.setHours(23, 59, 59, 999);
    filtered = filtered.filter(p => new Date(p.scannedAt) <= to);
  }
  if (statusFilter && statusFilter !== 'all') {
    filtered = filtered.filter(p => statusFilter === 'printed' ? p.printed : !p.printed);
  }
  if (searchQuery) {
    filtered = filtered.filter(p => p.resi.includes(searchQuery));
  }

  return filtered;
}

function resetExpFilters() {
  const dateFrom = document.getElementById('expFilterDateFrom');
  const dateTo = document.getElementById('expFilterDateTo');
  const statusFilter = document.getElementById('expFilterStatus');
  const searchFilter = document.getElementById('expFilterSearch');
  if (dateFrom) dateFrom.value = '';
  if (dateTo) dateTo.value = '';
  if (statusFilter) statusFilter.value = 'all';
  if (searchFilter) searchFilter.value = '';
  // Reset calendar picker buttons
  const fromText = document.getElementById('expFilterDateFromText');
  const toText = document.getElementById('expFilterDateToText');
  const fromBtn = document.getElementById('expFilterDateFromBtn');
  const toBtn = document.getElementById('expFilterDateToBtn');
  if (fromText) fromText.textContent = 'Pilih Tanggal';
  if (toText) toText.textContent = 'Pilih Tanggal';
  if (fromBtn) fromBtn.classList.remove('has-value');
  if (toBtn) toBtn.classList.remove('has-value');
  if (currentExpedition) renderExpeditionDetail(currentExpedition);
}

function renderExpeditionDetail(key) {
  const exp = EXPEDITIONS[key];
  if (!exp) return;

  const allExpPackages = packages.filter(p => p.expeditionKey === key);
  const filteredExpPackages = getFilteredExpPackages(key);

  // Header
  document.getElementById('expeditionHeader').innerHTML = `
    <div class="expedition-icon-lg" style="background: ${exp.bgColor}; color: ${exp.color}; border: 2px solid ${exp.borderColor};">
      ${exp.icon}
    </div>
    <div class="expedition-info">
      <h2 style="color: ${exp.color}">${exp.name}</h2>
      <p>${allExpPackages.length} paket terdaftar${filteredExpPackages.length !== allExpPackages.length ? ` (${filteredExpPackages.length} ditampilkan)` : ''}</p>
    </div>
  `;

  // Stats (always show total, not filtered)
  document.getElementById('exp-stat-total').textContent = allExpPackages.length;
  document.getElementById('exp-stat-printed').textContent = allExpPackages.filter(p => p.printed).length;
  document.getElementById('exp-stat-unprinted').textContent = allExpPackages.filter(p => !p.printed).length;

  document.getElementById('expName').textContent = exp.shortName;
  document.getElementById('expTableCount').textContent = `${filteredExpPackages.length} paket`;

  const tbody = document.getElementById('expTableBody');
  const empty = document.getElementById('expEmpty');

  if (filteredExpPackages.length === 0) {
    tbody.innerHTML = '';
    empty.style.display = 'flex';
    if (allExpPackages.length > 0) {
      empty.innerHTML = `
        <span class="empty-icon">🔍</span>
        <h4>Tidak ada hasil ditemukan</h4>
        <p>Coba ubah filter tanggal atau kata kunci pencarian</p>
      `;
    } else {
      empty.innerHTML = `
        <span class="empty-icon">📦</span>
        <h4>Belum ada paket</h4>
        <p>Scan resi ekspedisi ini untuk menambahkan</p>
      `;
    }
    return;
  }

  empty.style.display = 'none';
  tbody.innerHTML = filteredExpPackages.map((pkg, i) => {
    const scanDate = new Date(pkg.scannedAt);
    return `
      <tr>
        <td>${i + 1}</td>
        <td><span class="resi-number">${pkg.resi}</span></td>
        <td>
          <div class="time-stamp">
            <span class="date">${scanDate.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
            <span>${scanDate.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
          </div>
        </td>
        <td>
          <span class="status-badge ${pkg.printed ? 'printed' : 'unprinted'}" 
                onclick="togglePrint('${pkg.id}')">
            ${pkg.printed ? '✅ Sudah di Pickup' : '⏳ Belum di Pickup'}
          </span>
        </td>
        <td>
          <span class="pickup-badge ${pkg.pickupStatus}" onclick="cyclePickupStatus('${pkg.id}')">
            ${getPickupLabel(pkg.pickupStatus)}
          </span>
        </td>
        <td>
          <div class="row-actions">
            <button class="row-action-btn" onclick="togglePrint('${pkg.id}')" title="Toggle Pickup">
            ${pkg.printed ? '⏳' : '✅'}
            </button>
            <button class="row-action-btn delete" onclick="confirmDelete('${pkg.id}')" title="Hapus">🗑️</button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function markAllExpPrinted() {
  if (!currentExpedition) return;
  let count = 0;
  packages.forEach(p => {
    if (p.expeditionKey === currentExpedition && !p.printed) {
      p.printed = true;
      count++;
    }
  });
  if (count > 0) {
    saveToStorage();
    renderExpeditionDetail(currentExpedition);
    showToast('success', 'Berhasil', `${count} paket ditandai sudah di pickup`);
    addActivityLog('print', `${count} paket <strong>${EXPEDITIONS[currentExpedition].shortName}</strong> ditandai di pickup`);
  } else {
    showToast('info', 'Info', 'Tidak ada paket yang perlu ditandai');
  }
}

function exportExpCSV() {
  if (!currentExpedition) return;
  const expPackages = packages.filter(p => p.expeditionKey === currentExpedition);
  downloadCSV(expPackages, `manifest_${EXPEDITIONS[currentExpedition].shortName}`);
}

// ============================================
// ACTIONS
// ============================================

function togglePrint(id) {
  const pkg = packages.find(p => p.id === id);
  if (!pkg) return;
  pkg.printed = !pkg.printed;
  saveToStorage();
  updateAllStats();
  if (currentPage === 'all-packages') renderAllPackagesTable();
  if (currentPage === 'expedisi') renderExpeditionDetail(currentExpedition);
  
  showToast('success', 'Status Diperbarui', 
    `Resi <strong>${pkg.resi}</strong> ${pkg.printed ? 'ditandai sudah di pickup' : 'dibatalkan status pickup-nya'}`);
  playSound('click');
}

function cyclePickupStatus(id) {
  const pkg = packages.find(p => p.id === id);
  if (!pkg) return;
  const states = ['ready', 'picked', 'pending'];
  const currentIdx = states.indexOf(pkg.pickupStatus);
  pkg.pickupStatus = states[(currentIdx + 1) % states.length];
  addActivityLog('pickup', `Resi <strong>${pkg.resi}</strong> status pickup: <strong>${getPickupLabel(pkg.pickupStatus)}</strong>`);
  playSound('click');
  saveToStorage();
  refreshCurrentView();
}

function getPickupLabel(status) {
  switch (status) {
    case 'ready': return '🚚 Siap Pickup';
    case 'picked': return '✅ Sudah Pickup';
    case 'pending': return '⏳ Pending';
    default: return '❓ Unknown';
  }
}

function toggleSelect(id) {
  if (selectedIds.has(id)) {
    selectedIds.delete(id);
  } else {
    selectedIds.add(id);
  }
  renderAllPackagesTable();
}

function selectAll() {
  const filtered = getFilteredPackages();
  const allSelected = filtered.every(p => selectedIds.has(p.id));
  if (allSelected) {
    filtered.forEach(p => selectedIds.delete(p.id));
  } else {
    filtered.forEach(p => selectedIds.add(p.id));
  }
  renderAllPackagesTable();
}

function markSelectedPrinted() {
  let count = 0;
  selectedIds.forEach(id => {
    const pkg = packages.find(p => p.id === id);
    if (pkg && !pkg.printed) {
      pkg.printed = true;
      count++;
    }
  });
  if (count > 0) {
    saveToStorage();
    renderAllPackagesTable();
    updateAllStats();
    showToast('success', 'Berhasil', `${count} paket ditandai sudah di pickup`);
    addActivityLog('print', `${count} paket terpilih ditandai di pickup`);
    selectedIds.clear();
  }
}

function markSelectedPickup() {
  let count = 0;
  selectedIds.forEach(id => {
    const pkg = packages.find(p => p.id === id);
    if (pkg && pkg.pickupStatus !== 'picked') {
      pkg.pickupStatus = 'picked';
      count++;
    }
  });
  if (count > 0) {
    showToast('success', 'Berhasil', `${count} paket ditandai sudah pickup`);
    addActivityLog('pickup', `${count} paket terpilih ditandai pickup`);
    selectedIds.clear();
    saveToStorage();
    refreshCurrentView();
  }
}

function markAllPrinted() {
  const unprinted = packages.filter(p => !p.printed);
  unprinted.forEach(p => p.printed = true);
  if (unprinted.length > 0) {
    saveToStorage();
    renderAllPackagesTable();
    updateAllStats();
    showToast('success', 'Berhasil', `${unprinted.length} paket ditandai sudah di pickup`);
    addActivityLog('print', `Semua paket (${unprinted.length}) ditandai di pickup`);
  }
}

// ============================================
// DELETE
// ============================================

function confirmDelete(id) {
  pendingConfirmAction = () => {
    packages = packages.filter(p => p.id !== id);
    showToast('info', 'Dihapus', 'Paket berhasil dihapus');
    addActivityLog('delete', 'Paket dihapus dari daftar');
    saveToStorage();
    updateAllStats();
    renderChart();
    refreshCurrentView();
  };
  document.getElementById('modalTitle').textContent = 'Hapus Paket';
  document.getElementById('modalMessage').textContent = 'Apakah anda yakin ingin menghapus paket ini?';
  document.getElementById('modalConfirmBtn').textContent = 'Hapus';
  document.getElementById('confirmModal').classList.add('active');
}

function deleteSelected() {
  if (selectedIds.size === 0) {
    showToast('warning', 'Perhatian', 'Pilih paket terlebih dahulu');
    return;
  }
  pendingConfirmAction = () => {
    const count = selectedIds.size;
    packages = packages.filter(p => !selectedIds.has(p.id));
    selectedIds.clear();
    showToast('info', 'Dihapus', `${count} paket berhasil dihapus`);
    addActivityLog('delete', `${count} paket dihapus dari daftar`);
    saveToStorage();
    updateAllStats();
    renderChart();
    refreshCurrentView();
  };
  document.getElementById('modalTitle').textContent = 'Hapus Paket Terpilih';
  document.getElementById('modalMessage').textContent = `Apakah anda yakin ingin menghapus ${selectedIds.size} paket terpilih?`;
  document.getElementById('modalConfirmBtn').textContent = 'Hapus Semua';
  document.getElementById('confirmModal').classList.add('active');
}

function confirmAction() {
  if (pendingConfirmAction) {
    pendingConfirmAction();
    pendingConfirmAction = null;
  }
  closeModal();
}

function closeModal() {
  document.getElementById('confirmModal').classList.remove('active');
}

// ============================================
// SEARCH
// ============================================

function handleGlobalSearch(e) {
  const query = e.target.value.trim().toLowerCase();
  if (!query) {
    refreshCurrentView();
    return;
  }

  // Search within current context
  if (currentPage === 'all-packages') {
    renderAllPackagesTable();
  }
}

// Override filter to include search
const originalGetFiltered = getFilteredPackages;
getFilteredPackages = function() {
  let filtered = originalGetFiltered();
  const query = document.getElementById('globalSearch')?.value?.trim().toLowerCase();
  if (query) {
    filtered = filtered.filter(p => 
      p.resi.toLowerCase().includes(query) || 
      p.expeditionName.toLowerCase().includes(query)
    );
  }
  return filtered;
};

// ============================================
// CHART
// ============================================

function renderChart() {
  const container = document.getElementById('chartBars');
  const expCounts = {};

  Object.keys(EXPEDITIONS).forEach(key => {
    const count = packages.filter(p => p.expeditionKey === key).length;
    if (count > 0) expCounts[key] = count;
  });

  const sorted = Object.entries(expCounts).sort((a, b) => b[1] - a[1]);
  const max = sorted.length > 0 ? sorted[0][1] : 1;

  if (sorted.length === 0) {
    container.innerHTML = `
      <div class="table-empty" style="padding: 30px;">
        <span class="empty-icon">📊</span>
        <h4>Belum ada data</h4>
        <p>Scan resi untuk melihat chart</p>
      </div>
    `;
    return;
  }

  container.innerHTML = sorted.slice(0, 10).map(([key, count]) => {
    const exp = EXPEDITIONS[key];
    const pct = Math.max(5, (count / max) * 100);
    return `
      <div class="chart-bar-row">
        <span class="chart-bar-label">${exp.icon} ${exp.shortName}</span>
        <div class="chart-bar-track">
          <div class="chart-bar-fill" style="width: ${pct}%; background: linear-gradient(90deg, ${exp.color}, ${exp.color}88);">
            ${count}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ============================================
// ACTIVITY LOG
// ============================================

function addActivityLog(type, message) {
  const entry = {
    type,
    message,
    timestamp: new Date().toISOString()
  };
  activityLog.unshift(entry);
  if (activityLog.length > 200) activityLog = activityLog.slice(0, 200);
}

function renderActivity() {
  const container = document.getElementById('recentActivity');
  const recent = activityLog.slice(0, 8);

  if (recent.length === 0) {
    container.innerHTML = `
      <div class="table-empty" style="padding: 30px;">
        <span class="empty-icon">📝</span>
        <h4>Belum ada aktivitas</h4>
        <p>Mulai scan resi untuk melihat aktivitas</p>
      </div>
    `;
    return;
  }

  container.innerHTML = recent.map(entry => {
    const colors = {
      scan: '#10b981', bulk: '#3b82f6', print: '#8b5cf6',
      unprint: '#f59e0b', pickup: '#06b6d4', delete: '#ef4444',
      duplicate: '#ef4444', export: '#3b82f6'
    };
    const time = new Date(entry.timestamp);
    return `
      <div class="activity-item">
        <div class="activity-dot" style="background: ${colors[entry.type] || '#64748b'}"></div>
        <div class="activity-content">
          <div class="activity-text">${entry.message}</div>
          <div class="activity-time">${time.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })} - ${time.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}</div>
        </div>
      </div>
    `;
  }).join('');
}

function renderFullActivity() {
  const container = document.getElementById('fullActivityLog');

  if (activityLog.length === 0) {
    container.innerHTML = `
      <div class="table-empty" style="padding: 30px;">
        <span class="empty-icon">📝</span>
        <h4>Belum ada aktivitas</h4>
        <p>Mulai scan resi untuk melihat aktivitas</p>
      </div>
    `;
    return;
  }

  container.innerHTML = activityLog.map(entry => {
    const colors = {
      scan: '#10b981', bulk: '#3b82f6', print: '#8b5cf6',
      unprint: '#f59e0b', pickup: '#06b6d4', delete: '#ef4444',
      duplicate: '#ef4444', export: '#3b82f6'
    };
    const time = new Date(entry.timestamp);
    return `
      <div class="activity-item">
        <div class="activity-dot" style="background: ${colors[entry.type] || '#64748b'}"></div>
        <div class="activity-content">
          <div class="activity-text">${entry.message}</div>
          <div class="activity-time">${time.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' })} - ${time.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</div>
        </div>
      </div>
    `;
  }).join('');
}

// ============================================
// LAST SCANNED (Scan page)
// ============================================

function updateLastScannedList() {
  const container = document.getElementById('lastScannedList');
  if (!container) return;
  const recent = packages.slice(0, 15);

  if (recent.length === 0) {
    container.innerHTML = `
      <div class="table-empty" style="padding: 30px;">
        <span class="empty-icon">📷</span>
        <h4>Belum ada resi</h4>
        <p>Scan resi pertama anda</p>
      </div>
    `;
    return;
  }

  container.innerHTML = recent.map(pkg => {
    const exp = EXPEDITIONS[pkg.expeditionKey];
    const time = new Date(pkg.scannedAt);
    return `
      <div style="display: flex; align-items: center; gap: 12px; padding: 10px 14px; border-radius: 10px; border: 1px solid var(--border-color); margin-bottom: 6px; background: var(--bg-glass);">
        <span class="expedisi-badge" style="background: ${exp.bgColor}; color: ${exp.color}; border: 1px solid ${exp.borderColor}; font-size: 11px;">
          ${exp.icon} ${exp.shortName}
        </span>
        <span class="resi-number" style="flex: 1; font-size: 13px;">${pkg.resi}</span>
        <span style="font-size: 11px; color: var(--text-muted);">${time.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}</span>
        <span class="status-badge ${pkg.printed ? 'printed' : 'unprinted'}" onclick="togglePrint('${pkg.id}')" style="font-size: 11px; padding: 3px 8px;">
          ${pkg.printed ? '✅' : '⏳'}
        </span>
        <button class="btn-icon" onclick="openDetailModal('${pkg.id}')">📸</button>
      </div>
    `;
  }).join('');
}

// ============================================
// EXPORT
// ============================================

function exportCSV() {
  downloadCSV(packages, 'manifest_all');
}

function downloadCSV(data, filename) {
  if (data.length === 0) {
    showToast('warning', 'Perhatian', 'Tidak ada data untuk di-export');
    return;
  }

  const headers = ['No', 'Nomor Resi', 'Ekspedisi', 'Waktu Scan', 'Status Pickup', 'Detail Pickup'];
  const rows = data.map((pkg, i) => [
    i + 1,
    pkg.resi,
    pkg.expeditionName,
    new Date(pkg.scannedAt).toLocaleString('id-ID'),
    pkg.printed ? 'Sudah di Pickup' : 'Belum di Pickup',
    getPickupLabel(pkg.pickupStatus).replace(/[^\w\s]/g, '').trim()
  ]);

  const csvContent = [headers, ...rows]
    .map(row => row.map(cell => `"${cell}"`).join(','))
    .join('\n');

  const BOM = '\uFEFF';
  const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = `${filename}_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  showToast('success', 'Export Berhasil', `${data.length} paket berhasil di-export ke CSV`);
  addActivityLog('export', `Export CSV: ${data.length} paket`);
}

// ============================================
// TOAST NOTIFICATIONS
// ============================================

function showToast(type, title, message) {
  const container = document.getElementById('toastContainer');
  const icons = { success: '✅', error: '❌', warning: '⚠️', info: 'ℹ️' };

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${icons[type] || 'ℹ️'}</span>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-message">${message}</div>
    </div>
    <button class="toast-close" onclick="this.parentElement.remove()">✕</button>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('removing');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function showFeedback(elementId, type, message) {
  const el = document.getElementById(elementId);
  if (!el) return;
  el.className = `scan-feedback ${type}`;
  el.innerHTML = message;
  el.style.display = 'flex';

  setTimeout(() => {
    el.style.display = 'none';
  }, 4000);
}

// ============================================
// SOUND
// ============================================

let audioContext;

function getAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioContext;
}

function playSound(type) {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();

    if (type === 'duplicate') {
      // ALARM SOUND - Loud, attention-grabbing 3-tone alarm
      playDuplicateAlarm(ctx);
      return;
    }

    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    if (type === 'success') {
      oscillator.frequency.setValueAtTime(800, ctx.currentTime);
      oscillator.frequency.setValueAtTime(1200, ctx.currentTime + 0.1);
      gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + 0.3);
    } else if (type === 'error') {
      oscillator.frequency.setValueAtTime(300, ctx.currentTime);
      oscillator.frequency.setValueAtTime(200, ctx.currentTime + 0.1);
      gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + 0.3);
    } else if (type === 'click') {
      oscillator.frequency.setValueAtTime(600, ctx.currentTime);
      gainNode.gain.setValueAtTime(0.05, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + 0.1);
    }
  } catch (e) {
    // Audio not supported
  }
}

// DRAMATIC DUPLICATE ALARM SOUND
function playDuplicateAlarm(ctx) {
  const t = ctx.currentTime;

  // Beep 1 - High pitch
  const osc1 = ctx.createOscillator();
  const gain1 = ctx.createGain();
  osc1.type = 'square';
  osc1.frequency.setValueAtTime(880, t);
  gain1.gain.setValueAtTime(0.15, t);
  gain1.gain.exponentialRampToValueAtTime(0.001, t + 0.15);
  osc1.connect(gain1);
  gain1.connect(ctx.destination);
  osc1.start(t);
  osc1.stop(t + 0.15);

  // Beep 2 - Higher pitch
  const osc2 = ctx.createOscillator();
  const gain2 = ctx.createGain();
  osc2.type = 'square';
  osc2.frequency.setValueAtTime(1100, t + 0.2);
  gain2.gain.setValueAtTime(0.15, t + 0.2);
  gain2.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
  osc2.connect(gain2);
  gain2.connect(ctx.destination);
  osc2.start(t + 0.2);
  osc2.stop(t + 0.35);

  // Beep 3 - Highest pitch, longer
  const osc3 = ctx.createOscillator();
  const gain3 = ctx.createGain();
  osc3.type = 'square';
  osc3.frequency.setValueAtTime(1400, t + 0.4);
  osc3.frequency.setValueAtTime(800, t + 0.6);
  osc3.frequency.setValueAtTime(1400, t + 0.8);
  gain3.gain.setValueAtTime(0.18, t + 0.4);
  gain3.gain.setValueAtTime(0.12, t + 0.7);
  gain3.gain.exponentialRampToValueAtTime(0.001, t + 1.0);
  osc3.connect(gain3);
  gain3.connect(ctx.destination);
  osc3.start(t + 0.4);
  osc3.stop(t + 1.0);

  // Low warning buzz
  const osc4 = ctx.createOscillator();
  const gain4 = ctx.createGain();
  osc4.type = 'sawtooth';
  osc4.frequency.setValueAtTime(150, t);
  gain4.gain.setValueAtTime(0.06, t);
  gain4.gain.exponentialRampToValueAtTime(0.001, t + 1.0);
  osc4.connect(gain4);
  gain4.connect(ctx.destination);
  osc4.start(t);
  osc4.stop(t + 1.0);
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  const btn = document.getElementById('soundToggle');
  btn.textContent = soundEnabled ? '🔔' : '🔕';
  showToast('info', 'Sound', soundEnabled ? 'Sound diaktifkan' : 'Sound dimatikan');
}

// ============================================
// PACKAGE DETAIL & PHOTO MODAL
// ============================================
let currentDetailPackageId = null;

function openDetailModal(id) {
  const pkg = packages.find(p => p.id === id);
  if (!pkg) return;
  
  currentDetailPackageId = id;
  const expData = EXPEDITIONS[pkg.expedisi];

  document.getElementById('detailModalTitle').textContent = `Detail: ${pkg.resi}`;
  document.getElementById('detailExpedisi').textContent = expData ? expData.name : pkg.expedisi;
  document.getElementById('detailWaktu').textContent = formatDateTime(pkg.timestamp);

  // Generate Barcode using JsBarcode if available
  if (typeof JsBarcode !== 'undefined') {
    JsBarcode("#barcodeSvg", pkg.resi, {
      format: "CODE128",
      lineColor: isLightMode ? "#0f172a" : "#ffffff",
      background: "transparent",
      width: 2,
      height: 60,
      displayValue: true,
      fontSize: 16,
      margin: 0
    });
  }

  // Handle Photo
  const previewImg = document.getElementById('photoPreviewImage');
  const placeholder = document.getElementById('photoPlaceholder');
  const btnRemove = document.getElementById('btnRemovePhoto');
  const btnUpload = document.getElementById('btnUploadPhoto');

  if (pkg.photoBase64) {
    previewImg.src = pkg.photoBase64;
    previewImg.style.display = 'block';
    placeholder.style.display = 'none';
    btnRemove.style.display = 'inline-block';
    btnUpload.innerHTML = '🔄 Ganti Foto';
  } else {
    previewImg.src = '';
    previewImg.style.display = 'none';
    placeholder.style.display = 'flex';
    btnRemove.style.display = 'none';
    btnUpload.innerHTML = '📸 Ambil / Unggah Foto';
  }

  document.getElementById('detailModal').classList.add('active');
}

function closeDetailModal() {
  document.getElementById('detailModal').classList.remove('active');
  currentDetailPackageId = null;
  // Clear file input
  document.getElementById('photoInput').value = '';
}

function handlePhotoUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  // Compress image using Canvas to save localStorage space
  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement('canvas');
      const MAX_WIDTH = 800; // Max width for compression
      let width = img.width;
      let height = img.height;

      if (width > MAX_WIDTH) {
        height = Math.round((height * MAX_WIDTH) / width);
        width = MAX_WIDTH;
      }

      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      // Compress to JPEG with 0.6 quality
      const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.6);
      
      // Save to package
      const pkgIndex = packages.findIndex(p => p.id === currentDetailPackageId);
      if (pkgIndex !== -1) {
        packages[pkgIndex].photoBase64 = compressedDataUrl;
        saveToStorage();
        
        // Update UI
        openDetailModal(currentDetailPackageId);
        
        // Re-render table to show icon
        if (currentPage === 'all-packages') renderAllPackagesTable();
        if (currentPage === 'expedisi') renderExpeditionDetail(currentExpedition);
        
        showToast('success', 'Foto', 'Foto berhasil disimpan');
      }
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function removePhoto() {
  if (!currentDetailPackageId) return;
  
  const pkgIndex = packages.findIndex(p => p.id === currentDetailPackageId);
  if (pkgIndex !== -1) {
    packages[pkgIndex].photoBase64 = null;
    saveToStorage();
    
    // Update UI
    openDetailModal(currentDetailPackageId);
    
    // Re-render table to remove icon
    if (currentPage === 'all-packages') renderAllPackagesTable();
    if (currentPage === 'expedisi') renderExpeditionDetail(currentExpedition);
    
    showToast('info', 'Foto', 'Foto berhasil dihapus');
  }
}

// ============================================
// THEME TOGGLE
// ============================================
let isLightMode = localStorage.getItem('theme') === 'light';

function initTheme() {
  if (isLightMode) {
    document.body.classList.add('light-theme');
    document.getElementById('themeToggle').textContent = '🌞';
  }
}

function toggleTheme() {
  isLightMode = !isLightMode;
  if (isLightMode) {
    document.body.classList.add('light-theme');
    localStorage.setItem('theme', 'light');
    document.getElementById('themeToggle').textContent = '🌞';
    showToast('info', 'Tema', 'Mode Terang diaktifkan');
  } else {
    document.body.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark');
    document.getElementById('themeToggle').textContent = '🌙';
    showToast('info', 'Tema', 'Mode Gelap diaktifkan');
  }
}

// ============================================
// UTILITIES
// ============================================

function generateId() {
  return 'pkg_' + Date.now().toString(36) + '_' + Math.random().toString(36).substr(2, 6);
}

// ============================================
// CUSTOM CALENDAR DATE PICKER
// ============================================

const CAL_MONTHS_ID = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];
const CAL_DAYS_SHORT_ID = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
const CAL_MONTHS_SHORT_ID = [
  'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun',
  'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'
];

let calCurrentMonth;
let calCurrentYear;
let calSelectedDate = null;
let calTargetInputId = null;

function openCalendar(targetInputId) {
  calTargetInputId = targetInputId;

  // Read existing value
  const existing = document.getElementById(targetInputId)?.value;
  if (existing) {
    const d = new Date(existing);
    calSelectedDate = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    calCurrentMonth = d.getMonth();
    calCurrentYear = d.getFullYear();
  } else {
    calSelectedDate = null;
    const now = new Date();
    calCurrentMonth = now.getMonth();
    calCurrentYear = now.getFullYear();
  }

  renderCalendar();
  document.getElementById('calOverlay').classList.add('active');
}

function renderCalendar() {
  // Update header
  if (calSelectedDate) {
    document.getElementById('calHeaderYear').textContent = calSelectedDate.getFullYear();
    const dayName = CAL_DAYS_SHORT_ID[calSelectedDate.getDay()];
    const monthName = CAL_MONTHS_SHORT_ID[calSelectedDate.getMonth()];
    document.getElementById('calHeaderDate').textContent =
      `${dayName}, ${calSelectedDate.getDate()} ${monthName}`;
  } else {
    document.getElementById('calHeaderYear').textContent = calCurrentYear;
    document.getElementById('calHeaderDate').textContent = 'Pilih tanggal';
  }

  // Update nav title
  document.getElementById('calNavTitle').textContent =
    `${CAL_MONTHS_ID[calCurrentMonth]} ${calCurrentYear}`;

  // Generate days
  const container = document.getElementById('calDays');
  container.innerHTML = '';

  const firstDay = new Date(calCurrentYear, calCurrentMonth, 1);
  // getDay() returns 0=Sunday. We want Sunday first (M column = Minggu)
  let startDay = firstDay.getDay(); // 0=Sun,1=Mon...
  const daysInMonth = new Date(calCurrentYear, calCurrentMonth + 1, 0).getDate();

  const today = new Date();
  const todayStr = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;

  // Empty cells before first day
  for (let i = 0; i < startDay; i++) {
    const empty = document.createElement('div');
    empty.className = 'cal-day empty';
    container.appendChild(empty);
  }

  // Day cells
  for (let d = 1; d <= daysInMonth; d++) {
    const dayBtn = document.createElement('button');
    dayBtn.className = 'cal-day';
    dayBtn.textContent = d;

    const dateObj = new Date(calCurrentYear, calCurrentMonth, d);
    const dateStr = `${dateObj.getFullYear()}-${dateObj.getMonth()}-${dateObj.getDate()}`;

    // Today highlight
    if (dateStr === todayStr) {
      dayBtn.classList.add('today');
    }

    // Selected highlight
    if (calSelectedDate) {
      const selStr = `${calSelectedDate.getFullYear()}-${calSelectedDate.getMonth()}-${calSelectedDate.getDate()}`;
      if (dateStr === selStr) {
        dayBtn.classList.add('selected');
      }
    }

    dayBtn.onclick = () => calSelectDay(d);
    container.appendChild(dayBtn);
  }
}

function calSelectDay(day) {
  calSelectedDate = new Date(calCurrentYear, calCurrentMonth, day);
  renderCalendar();
  playSound('click');
}

function calPrevMonth() {
  calCurrentMonth--;
  if (calCurrentMonth < 0) {
    calCurrentMonth = 11;
    calCurrentYear--;
  }
  renderCalendar();
}

function calNextMonth() {
  calCurrentMonth++;
  if (calCurrentMonth > 11) {
    calCurrentMonth = 0;
    calCurrentYear++;
  }
  renderCalendar();
}

function calSet() {
  if (!calSelectedDate || !calTargetInputId) {
    calCancel();
    return;
  }

  // Format: YYYY-MM-DD for hidden input
  const y = calSelectedDate.getFullYear();
  const m = String(calSelectedDate.getMonth() + 1).padStart(2, '0');
  const d = String(calSelectedDate.getDate()).padStart(2, '0');
  const isoVal = `${y}-${m}-${d}`;

  document.getElementById(calTargetInputId).value = isoVal;

  // Update button text
  const textEl = document.getElementById(calTargetInputId + 'Text');
  const btnEl = document.getElementById(calTargetInputId + 'Btn');
  if (textEl) {
    textEl.textContent = `${calSelectedDate.getDate()} ${CAL_MONTHS_SHORT_ID[calSelectedDate.getMonth()]} ${y}`;
  }
  if (btnEl) btnEl.classList.add('has-value');

  closeCalendar();

  // Trigger filters
  if (calTargetInputId.startsWith('exp')) {
    if (currentExpedition) renderExpeditionDetail(currentExpedition);
  } else {
    applyFilters();
  }
}

function calClear() {
  if (!calTargetInputId) { closeCalendar(); return; }

  document.getElementById(calTargetInputId).value = '';

  const textEl = document.getElementById(calTargetInputId + 'Text');
  const btnEl = document.getElementById(calTargetInputId + 'Btn');
  if (textEl) textEl.textContent = 'Pilih Tanggal';
  if (btnEl) btnEl.classList.remove('has-value');

  closeCalendar();

  // Trigger filters
  if (calTargetInputId.startsWith('exp')) {
    if (currentExpedition) renderExpeditionDetail(currentExpedition);
  } else {
    applyFilters();
  }
}

function calCancel() {
  closeCalendar();
}

function closeCalendar() {
  document.getElementById('calOverlay').classList.remove('active');
  calTargetInputId = null;
}

// ============================================
// INITIALIZE
// ============================================

document.addEventListener('DOMContentLoaded', init);
