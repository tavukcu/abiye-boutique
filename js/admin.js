/* ============================================
   ÉLÉGANCE Admin Panel JavaScript
   ============================================ */

// ==========================================
// DEFAULT DATA
// ==========================================
const defaultProducts = [
    { id: 1, name: "Midnight Noir", category: "uzun", price: 12999, oldPrice: null, color: "Siyah", sizes: "XS, S, M, L, XL", badge: "", stock: 15, image: "https://images.unsplash.com/photo-1731613157654-93faac9e7809?w=600&h=800&fit=crop", description: "Zarif drapeli detaylarıyla göz kamaştıran siyah uzun abiye." },
    { id: 2, name: "Bordeaux Dream", category: "uzun", price: 14999, oldPrice: 18999, color: "Bordo", sizes: "S, M, L", badge: "İndirim", stock: 8, image: "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?w=600&h=800&fit=crop", description: "Derin bordo tonlarında kadife dokusuyla lüksü hissettiren uzun abiye." },
    { id: 3, name: "Royal Sapphire", category: "uzun", price: 11999, oldPrice: null, color: "Lacivert", sizes: "XS, S, M, L", badge: "", stock: 12, image: "https://images.unsplash.com/photo-1597149864436-a2849142dff5?w=600&h=800&fit=crop", description: "Lacivert tonlarında kristal taş işlemeli uzun abiye." },
    { id: 4, name: "Golden Hour", category: "kisa", price: 9999, oldPrice: null, color: "Altın", sizes: "XS, S, M, L", badge: "Yeni", stock: 20, image: "https://images.unsplash.com/photo-1761635491690-c792b0076592?w=600&h=800&fit=crop", description: "Altın rengi payetlerle süslenmiş kısa abiye." },
    { id: 5, name: "Champagne Rose", category: "nisan", price: 24999, oldPrice: 29999, color: "Şampanya", sizes: "S, M, L, XL", badge: "İndirim", stock: 5, image: "https://images.unsplash.com/photo-1762919243806-a3da5ca7f03d?w=600&h=800&fit=crop", description: "Şampanya rengi tül detaylı nişanlık." },
    { id: 6, name: "Crimson Elegance", category: "uzun", price: 13499, oldPrice: null, color: "Kırmızı", sizes: "XS, S, M, L", badge: "Çok Satan", stock: 3, image: "https://images.unsplash.com/photo-1765229279658-7335ee3cdaf5?w=600&h=800&fit=crop", description: "Kırmızı ipek saten uzun abiye." },
    { id: 7, name: "Pearl Essence", category: "nisan", price: 19999, oldPrice: null, color: "Beyaz", sizes: "S, M, L", badge: "Premium", stock: 10, image: "https://images.unsplash.com/photo-1492175742197-c02b96e14b38?w=600&h=800&fit=crop", description: "İnci beyazı el işi detaylı nişanlık." },
    { id: 8, name: "Velvet Dusk", category: "uzun", price: 15999, oldPrice: 19999, color: "Mürdüm", sizes: "XS, S, M, L, XL", badge: "İndirim", stock: 7, image: "https://images.unsplash.com/photo-1765229277675-b8466891e689?w=600&h=800&fit=crop", description: "Mürdüm kadife uzun abiye." },
    { id: 9, name: "Emerald Grace", category: "uzun", price: 13999, oldPrice: null, color: "Zümrüt", sizes: "S, M, L", badge: "Yeni", stock: 14, image: "https://images.unsplash.com/photo-1765229280390-e05fb240aed8?w=600&h=800&fit=crop", description: "Zümrüt yeşili şifon uzun abiye." },
    { id: 10, name: "Blush Petal", category: "kisa", price: 8999, oldPrice: null, color: "Pudra", sizes: "XS, S, M, L", badge: "", stock: 18, image: "https://images.unsplash.com/photo-1609741873312-7ce5ae7c56b4?w=600&h=800&fit=crop", description: "Pudra pembesi tül etek kısa abiye." },
    { id: 11, name: "Silver Moon", category: "mezuniyet", price: 7999, oldPrice: 9999, color: "Gümüş", sizes: "XS, S, M", badge: "İndirim", stock: 22, image: "https://images.unsplash.com/photo-1765229280150-76ce5dbdb026?w=600&h=800&fit=crop", description: "Gümüş payetli mezuniyet elbisesi." },
    { id: 12, name: "Onyx Allure", category: "kisa", price: 10499, oldPrice: null, color: "Siyah", sizes: "S, M, L, XL", badge: "Çok Satan", stock: 9, image: "https://images.unsplash.com/photo-1741605115361-269851d41f06?w=600&h=800&fit=crop", description: "Siyah dantel detaylı kısa abiye." }
];

const defaultOrders = [
    { id: "ELG-1001", customer: "Ayşe Yılmaz", email: "ayse@mail.com", products: "Bordeaux Dream, Pearl Essence", amount: 34998, date: "2025-02-10", status: "teslim" },
    { id: "ELG-1002", customer: "Fatma Demir", email: "fatma@mail.com", products: "Midnight Noir", amount: 12999, date: "2025-02-11", status: "kargoda" },
    { id: "ELG-1003", customer: "Zeynep Kara", email: "zeynep@mail.com", products: "Champagne Rose", amount: 24999, date: "2025-02-12", status: "hazirlaniyor" },
    { id: "ELG-1004", customer: "Elif Çelik", email: "elif@mail.com", products: "Golden Hour, Blush Petal", amount: 18998, date: "2025-02-12", status: "beklemede" },
    { id: "ELG-1005", customer: "Selin Arslan", email: "selin@mail.com", products: "Crimson Elegance", amount: 13499, date: "2025-02-13", status: "beklemede" },
    { id: "ELG-1006", customer: "Merve Koç", email: "merve@mail.com", products: "Silver Moon", amount: 7999, date: "2025-01-28", status: "teslim" },
    { id: "ELG-1007", customer: "Büşra Özkan", email: "busra@mail.com", products: "Velvet Dusk", amount: 15999, date: "2025-01-30", status: "iptal" },
    { id: "ELG-1008", customer: "Deniz Aktaş", email: "deniz@mail.com", products: "Emerald Grace, Onyx Allure", amount: 24498, date: "2025-02-05", status: "teslim" }
];

const defaultCoupons = [
    { id: 1, code: "ELEGANCE20", discount: 20, used: 45, limit: 200, expiry: "2025-06-30", active: true },
    { id: 2, code: "HOSGELDIN15", discount: 15, used: 120, limit: 500, expiry: "2025-12-31", active: true },
    { id: 3, code: "SEZON10", discount: 10, used: 78, limit: 100, expiry: "2025-03-31", active: true }
];

const defaultMessages = [
    { id: 1, name: "Ayşe Yılmaz", email: "ayse@mail.com", subject: "Sipariş hakkında bilgi", body: "Merhaba, ELG-1001 numaralı siparişimin kargo takip numarasını öğrenebilir miyim? Teşekkürler.", date: "2025-02-12", read: false },
    { id: 2, name: "Fatma Demir", email: "fatma@mail.com", subject: "Beden değişimi", body: "Siparişimdeki Midnight Noir abiyeyi M beden almıştım, L beden ile değişim mümkün mü?", date: "2025-02-11", read: false },
    { id: 3, name: "Selin Arslan", email: "selin@mail.com", subject: "Özel dikim talebi", body: "Merhaba, Crimson Elegance modelini özel ölçülerime göre diktirmek istiyorum. Bu mümkün mü ve ek ücreti ne olur?", date: "2025-02-10", read: false },
    { id: 4, name: "Merve Koç", email: "merve@mail.com", subject: "Teşekkür", body: "Silver Moon abiyeyi aldım, çok beğendim! Kalitesi harika, teşekkür ederim.", date: "2025-01-29", read: true },
    { id: 5, name: "Zeynep Kara", email: "zeynep@mail.com", subject: "İade talebi", body: "Champagne Rose nişanlığı ne yazık ki beklediğim gibi olmadı. İade prosedürü hakkında bilgi alabilir miyim?", date: "2025-02-13", read: false }
];

const defaultFaqs = [
    { id: 1, question: "Siparişim ne zaman teslim edilir?", answer: "Siparişleriniz 2-5 iş günü içerisinde kargoya verilir. Kargo süresi bulunduğunuz bölgeye göre 1-3 iş günü arasında değişmektedir." },
    { id: 2, question: "İade ve değişim koşulları nelerdir?", answer: "Ürünlerimizi teslim aldığınız tarihten itibaren 14 gün içerisinde, etiketi sökülmemiş ve kullanılmamış olması koşuluyla iade veya değişim yapabilirsiniz." },
    { id: 3, question: "Özel dikim yapıyor musunuz?", answer: "Evet, koleksiyonumuzdaki modelleri özel ölçülerinize göre diktirebilirsiniz. Detaylı bilgi için iletişime geçebilirsiniz." },
    { id: 4, question: "Hangi ödeme yöntemlerini kabul ediyorsunuz?", answer: "Kredi kartı, banka kartı, havale/EFT ve kapıda ödeme seçeneklerimiz mevcuttur. Kredi kartına 6 taksit imkanı sunuyoruz." }
];

const salesData = [
    { month: "Oca", value: 45000 },
    { month: "Şub", value: 62000 },
    { month: "Mar", value: 38000 },
    { month: "Nis", value: 72000 },
    { month: "May", value: 55000 },
    { month: "Haz", value: 89000 },
    { month: "Tem", value: 67000 },
    { month: "Ağu", value: 43000 },
    { month: "Eyl", value: 78000 },
    { month: "Eki", value: 92000 },
    { month: "Kas", value: 105000 },
    { month: "Ara", value: 134000 }
];

// ==========================================
// DATA HELPERS
// ==========================================
function getData(key, fallback) {
    const d = localStorage.getItem('admin_' + key);
    return d ? JSON.parse(d) : fallback;
}
function setData(key, val) {
    localStorage.setItem('admin_' + key, JSON.stringify(val));
}

let adminProducts = getData('products', defaultProducts);
let adminOrders = getData('orders', defaultOrders);
let adminCoupons = getData('coupons', defaultCoupons);
let adminMessages = getData('messages', defaultMessages);
let adminFaqs = getData('faqs', defaultFaqs);
let adminBanner = getData('banner', { text: 'Yeni Sezon Koleksiyonu\'nda <strong>%20 İndirim</strong> — Kod: <strong>ELEGANCE20</strong>', status: 'active' });
let adminContact = getData('contact', { phone: '+90 (212) 555 00 00', email: 'info@elegance.com.tr', address: 'Bağdat Caddesi No: 123, Kadıköy, İstanbul', whatsapp: '905550000000' });

function saveAll() {
    setData('products', adminProducts);
    setData('orders', adminOrders);
    setData('coupons', adminCoupons);
    setData('messages', adminMessages);
    setData('faqs', adminFaqs);
    setData('banner', adminBanner);
    setData('contact', adminContact);
}

// ==========================================
// LOGIN
// ==========================================
const loginScreen = document.getElementById('loginScreen');
const adminLayout = document.getElementById('adminLayout');
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');

function checkAuth() {
    if (sessionStorage.getItem('admin_auth') === 'true') {
        loginScreen.style.display = 'none';
        adminLayout.style.display = 'flex';
        initAdmin();
    }
}

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('loginUser').value;
    const pass = document.getElementById('loginPass').value;
    if (user === 'admin' && pass === 'elegance2025') {
        sessionStorage.setItem('admin_auth', 'true');
        loginScreen.style.display = 'none';
        adminLayout.style.display = 'flex';
        loginError.textContent = '';
        initAdmin();
    } else {
        loginError.textContent = 'Geçersiz kullanıcı adı veya şifre';
        loginForm.classList.add('shake');
        setTimeout(() => loginForm.classList.remove('shake'), 500);
    }
});

document.getElementById('logoutBtn').addEventListener('click', () => {
    sessionStorage.removeItem('admin_auth');
    location.reload();
});

// ==========================================
// NAVIGATION
// ==========================================
const navItems = document.querySelectorAll('.nav-item[data-section]');
const sections = document.querySelectorAll('.content-section');
const pageTitle = document.getElementById('pageTitle');
const sidebar = document.getElementById('sidebar');

const sectionTitles = {
    dashboard: 'Dashboard',
    products: 'Ürünler',
    orders: 'Siparişler',
    coupons: 'Kuponlar',
    messages: 'Mesajlar',
    content: 'İçerik Yönetimi'
};

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const sec = item.dataset.section;
        navItems.forEach(n => n.classList.remove('active'));
        item.classList.add('active');
        sections.forEach(s => s.classList.remove('active'));
        document.getElementById('sec-' + sec).classList.add('active');
        pageTitle.textContent = sectionTitles[sec] || sec;
        if (window.innerWidth <= 768) sidebar.classList.remove('open');
    });
});

// Sidebar toggle (mobile)
document.getElementById('sidebarToggle').addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

// ==========================================
// TOAST
// ==========================================
function showToast(msg) {
    const toast = document.getElementById('adminToast');
    document.getElementById('adminToastMsg').textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}

// ==========================================
// MODAL HELPERS
// ==========================================
function openModal(id) {
    document.getElementById(id).classList.add('open');
}
function closeModal(id) {
    document.getElementById(id).classList.remove('open');
}

// Close modals on backdrop click
document.querySelectorAll('.admin-modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('open');
    });
});

// ==========================================
// FORMAT HELPERS
// ==========================================
function formatPrice(n) {
    return '₺' + Number(n).toLocaleString('tr-TR');
}
function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('tr-TR', { day: 'numeric', month: 'short', year: 'numeric' });
}
const categoryLabels = { uzun: 'Uzun Abiye', kisa: 'Kısa Abiye', nisan: 'Nişanlık', mezuniyet: 'Mezuniyet' };
const statusLabels = { beklemede: 'Beklemede', hazirlaniyor: 'Hazırlanıyor', kargoda: 'Kargoda', teslim: 'Teslim Edildi', iptal: 'İptal' };

// ==========================================
// INIT
// ==========================================
function initAdmin() {
    // Set date
    document.getElementById('topbarDate').textContent = new Date().toLocaleDateString('tr-TR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

    renderDashboard();
    renderProducts();
    renderOrders();
    renderCoupons();
    renderMessages();
    renderFaqs();
    loadContentForms();
}

// ==========================================
// DASHBOARD
// ==========================================
function renderDashboard() {
    // Stats
    const totalRevenue = adminOrders.filter(o => o.status !== 'iptal').reduce((s, o) => s + o.amount, 0);
    const totalOrders = adminOrders.length;
    const customers = [...new Set(adminOrders.map(o => o.email))].length;

    document.getElementById('statRevenue').textContent = formatPrice(totalRevenue);
    document.getElementById('statOrders').textContent = totalOrders;
    document.getElementById('statCustomers').textContent = customers;
    document.getElementById('statProducts').textContent = adminProducts.length;

    // Chart
    const chart = document.getElementById('salesChart');
    const maxVal = Math.max(...salesData.map(d => d.value));
    chart.innerHTML = salesData.map(d => {
        const pct = (d.value / maxVal) * 100;
        return `<div class="chart-bar-wrap">
            <span class="chart-bar-value">${(d.value / 1000).toFixed(0)}K</span>
            <div class="chart-bar" style="height:${pct}%"></div>
            <span class="chart-bar-label">${d.month}</span>
        </div>`;
    }).join('');

    // Recent orders
    const recent = [...adminOrders].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);
    document.getElementById('recentOrdersTable').innerHTML = recent.map(o => `
        <div class="mini-table-row">
            <span class="order-id">${o.id}</span>
            <span class="order-customer">${o.customer}</span>
            <span class="status status-${o.status}">${statusLabels[o.status]}</span>
            <span class="order-amount">${formatPrice(o.amount)}</span>
        </div>
    `).join('');
}

// ==========================================
// PRODUCTS
// ==========================================
function renderProducts(filter = '') {
    const filtered = filter
        ? adminProducts.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
        : adminProducts;

    document.getElementById('productsBody').innerHTML = filtered.map(p => `
        <tr>
            <td>${p.image ? `<img src="${p.image}" class="table-thumb" alt="">` : `<div class="table-thumb-gradient" style="background:${p.gradient || 'var(--bg4)'}"></div>`}</td>
            <td style="color:var(--cream);font-weight:500">${p.name}</td>
            <td>${categoryLabels[p.category] || p.category}</td>
            <td>${p.oldPrice ? `<span style="text-decoration:line-through;color:var(--text3);margin-right:6px">${formatPrice(p.oldPrice)}</span>` : ''}${formatPrice(p.price)}</td>
            <td>${p.stock}</td>
            <td><span class="status ${p.stock > 0 ? 'status-active' : 'status-inactive'}">${p.stock > 0 ? 'Aktif' : 'Tükendi'}</span></td>
            <td>
                <div class="table-actions">
                    <button class="table-btn" onclick="editProduct(${p.id})">Düzenle</button>
                    <button class="table-btn danger" onclick="deleteProduct(${p.id})">Sil</button>
                </div>
            </td>
        </tr>
    `).join('');
}

document.getElementById('productSearch').addEventListener('input', (e) => {
    renderProducts(e.target.value);
});

// Add product
document.getElementById('addProductBtn').addEventListener('click', () => {
    document.getElementById('productModalTitle').textContent = 'Yeni Ürün Ekle';
    document.getElementById('productForm').reset();
    document.getElementById('pEditId').value = '';
    openModal('productModal');
});

// Edit product
window.editProduct = function(id) {
    const p = adminProducts.find(x => x.id === id);
    if (!p) return;
    document.getElementById('productModalTitle').textContent = 'Ürünü Düzenle';
    document.getElementById('pEditId').value = p.id;
    document.getElementById('pName').value = p.name;
    document.getElementById('pCategory').value = p.category;
    document.getElementById('pPrice').value = p.price;
    document.getElementById('pOldPrice').value = p.oldPrice || '';
    document.getElementById('pColor').value = p.color;
    document.getElementById('pStock').value = p.stock;
    document.getElementById('pSizes').value = p.sizes;
    document.getElementById('pBadge').value = p.badge || '';
    document.getElementById('pImage').value = p.image || '';
    document.getElementById('pDesc').value = p.description || '';
    openModal('productModal');
};

// Delete product
window.deleteProduct = function(id) {
    if (!confirm('Bu ürünü silmek istediğinize emin misiniz?')) return;
    adminProducts = adminProducts.filter(p => p.id !== id);
    setData('products', adminProducts);
    renderProducts();
    renderDashboard();
    showToast('Ürün silindi');
};

// Save product
document.getElementById('productForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const editId = document.getElementById('pEditId').value;
    const data = {
        name: document.getElementById('pName').value,
        category: document.getElementById('pCategory').value,
        price: Number(document.getElementById('pPrice').value),
        oldPrice: document.getElementById('pOldPrice').value ? Number(document.getElementById('pOldPrice').value) : null,
        color: document.getElementById('pColor').value,
        stock: Number(document.getElementById('pStock').value),
        sizes: document.getElementById('pSizes').value,
        badge: document.getElementById('pBadge').value,
        image: document.getElementById('pImage').value,
        description: document.getElementById('pDesc').value
    };

    if (editId) {
        const idx = adminProducts.findIndex(p => p.id === Number(editId));
        if (idx !== -1) adminProducts[idx] = { ...adminProducts[idx], ...data };
        showToast('Ürün güncellendi');
    } else {
        const maxId = adminProducts.length > 0 ? Math.max(...adminProducts.map(p => p.id)) : 0;
        adminProducts.push({ id: maxId + 1, ...data });
        showToast('Ürün eklendi');
    }

    setData('products', adminProducts);
    renderProducts();
    renderDashboard();
    closeModal('productModal');
});

document.getElementById('productModalClose').addEventListener('click', () => closeModal('productModal'));
document.getElementById('productModalCancel').addEventListener('click', () => closeModal('productModal'));

// ==========================================
// ORDERS
// ==========================================
function renderOrders(filter = 'all') {
    const filtered = filter === 'all' ? adminOrders : adminOrders.filter(o => o.status === filter);

    document.getElementById('ordersBody').innerHTML = filtered.map(o => `
        <tr>
            <td style="color:var(--gold);font-weight:500">${o.id}</td>
            <td style="color:var(--cream)">${o.customer}</td>
            <td>${o.products}</td>
            <td style="font-weight:500">${formatPrice(o.amount)}</td>
            <td>${formatDate(o.date)}</td>
            <td><span class="status status-${o.status}">${statusLabels[o.status]}</span></td>
            <td>
                <div class="table-actions">
                    <select class="table-btn" onchange="updateOrderStatus('${o.id}', this.value)" style="background:var(--bg);color:var(--text2);border:1px solid var(--border);padding:5px 8px;border-radius:3px;font-size:0.65rem;">
                        <option value="beklemede" ${o.status === 'beklemede' ? 'selected' : ''}>Beklemede</option>
                        <option value="hazirlaniyor" ${o.status === 'hazirlaniyor' ? 'selected' : ''}>Hazırlanıyor</option>
                        <option value="kargoda" ${o.status === 'kargoda' ? 'selected' : ''}>Kargoda</option>
                        <option value="teslim" ${o.status === 'teslim' ? 'selected' : ''}>Teslim Edildi</option>
                        <option value="iptal" ${o.status === 'iptal' ? 'selected' : ''}>İptal</option>
                    </select>
                </div>
            </td>
        </tr>
    `).join('');
}

document.getElementById('orderFilter').addEventListener('change', (e) => {
    renderOrders(e.target.value);
});

window.updateOrderStatus = function(orderId, newStatus) {
    const order = adminOrders.find(o => o.id === orderId);
    if (order) {
        order.status = newStatus;
        setData('orders', adminOrders);
        renderOrders(document.getElementById('orderFilter').value);
        renderDashboard();
        showToast(`Sipariş durumu: ${statusLabels[newStatus]}`);
    }
};

// ==========================================
// COUPONS
// ==========================================
function renderCoupons() {
    document.getElementById('couponsBody').innerHTML = adminCoupons.map(c => `
        <tr>
            <td style="color:var(--gold);font-weight:600;letter-spacing:1px">${c.code}</td>
            <td>%${c.discount}</td>
            <td>${c.used} / ${c.limit}</td>
            <td>${formatDate(c.expiry)}</td>
            <td><span class="status ${c.active ? 'status-active' : 'status-inactive'}">${c.active ? 'Aktif' : 'Pasif'}</span></td>
            <td>
                <div class="table-actions">
                    <button class="table-btn" onclick="toggleCoupon(${c.id})">${c.active ? 'Deaktif' : 'Aktif'}</button>
                    <button class="table-btn danger" onclick="deleteCoupon(${c.id})">Sil</button>
                </div>
            </td>
        </tr>
    `).join('');
}

document.getElementById('addCouponBtn').addEventListener('click', () => {
    document.getElementById('couponForm').reset();
    openModal('couponModal');
});

document.getElementById('couponForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const code = document.getElementById('cCode').value.toUpperCase();
    if (adminCoupons.some(c => c.code === code)) {
        showToast('Bu kupon kodu zaten mevcut!');
        return;
    }
    const maxId = adminCoupons.length > 0 ? Math.max(...adminCoupons.map(c => c.id)) : 0;
    adminCoupons.push({
        id: maxId + 1,
        code: code,
        discount: Number(document.getElementById('cDiscount').value),
        used: 0,
        limit: Number(document.getElementById('cLimit').value),
        expiry: document.getElementById('cExpiry').value,
        active: true
    });
    setData('coupons', adminCoupons);
    renderCoupons();
    closeModal('couponModal');
    showToast('Kupon oluşturuldu');
});

window.toggleCoupon = function(id) {
    const c = adminCoupons.find(x => x.id === id);
    if (c) {
        c.active = !c.active;
        setData('coupons', adminCoupons);
        renderCoupons();
        showToast(c.active ? 'Kupon aktifleştirildi' : 'Kupon deaktif edildi');
    }
};

window.deleteCoupon = function(id) {
    if (!confirm('Bu kuponu silmek istediğinize emin misiniz?')) return;
    adminCoupons = adminCoupons.filter(c => c.id !== id);
    setData('coupons', adminCoupons);
    renderCoupons();
    showToast('Kupon silindi');
};

document.getElementById('couponModalClose').addEventListener('click', () => closeModal('couponModal'));
document.getElementById('couponModalCancel').addEventListener('click', () => closeModal('couponModal'));

// ==========================================
// MESSAGES
// ==========================================
function renderMessages() {
    const sorted = [...adminMessages].sort((a, b) => new Date(b.date) - new Date(a.date));
    const unread = sorted.filter(m => !m.read).length;
    const badge = document.getElementById('msgBadge');
    badge.textContent = unread;
    badge.style.display = unread > 0 ? '' : 'none';

    document.getElementById('messagesList').innerHTML = sorted.map(m => `
        <div class="message-card ${m.read ? '' : 'unread'}" onclick="openMessage(${m.id})">
            <div class="msg-avatar">${m.name.charAt(0)}</div>
            <div class="msg-info">
                <div class="msg-name">${m.name}</div>
                <div class="msg-subject">${m.subject}</div>
            </div>
            <span class="msg-date">${formatDate(m.date)}</span>
            <button class="msg-delete" onclick="event.stopPropagation(); deleteMessage(${m.id})">Sil</button>
        </div>
    `).join('');
}

window.openMessage = function(id) {
    const m = adminMessages.find(x => x.id === id);
    if (!m) return;
    m.read = true;
    setData('messages', adminMessages);
    renderMessages();

    document.getElementById('messageDetail').innerHTML = `
        <div class="md-from"><strong>${m.name}</strong></div>
        <div class="md-email">${m.email}</div>
        <div class="md-date">${formatDate(m.date)}</div>
        <div class="md-body">${m.body}</div>
    `;
    openModal('messageModal');
};

window.deleteMessage = function(id) {
    if (!confirm('Bu mesajı silmek istediğinize emin misiniz?')) return;
    adminMessages = adminMessages.filter(m => m.id !== id);
    setData('messages', adminMessages);
    renderMessages();
    showToast('Mesaj silindi');
};

document.getElementById('messageModalClose').addEventListener('click', () => closeModal('messageModal'));

// ==========================================
// CONTENT - BANNER
// ==========================================
function loadContentForms() {
    document.getElementById('bannerText').value = adminBanner.text;
    document.getElementById('bannerStatus').value = adminBanner.status;
    document.getElementById('contactPhone').value = adminContact.phone;
    document.getElementById('contactEmail').value = adminContact.email;
    document.getElementById('contactAddress').value = adminContact.address;
    document.getElementById('contactWhatsapp').value = adminContact.whatsapp;
}

document.getElementById('bannerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    adminBanner.text = document.getElementById('bannerText').value;
    adminBanner.status = document.getElementById('bannerStatus').value;
    setData('banner', adminBanner);
    showToast('Banner ayarları kaydedildi');
});

// ==========================================
// CONTENT - FAQ
// ==========================================
function renderFaqs() {
    document.getElementById('faqList').innerHTML = adminFaqs.map(f => `
        <div class="faq-admin-item">
            <span class="faq-admin-q">${f.question}</span>
            <div class="faq-admin-actions">
                <button class="table-btn" onclick="editFaq(${f.id})">Düzenle</button>
                <button class="table-btn danger" onclick="deleteFaq(${f.id})">Sil</button>
            </div>
        </div>
    `).join('');
}

document.getElementById('addFaqBtn').addEventListener('click', () => {
    document.getElementById('faqModalTitle').textContent = 'Yeni Soru Ekle';
    document.getElementById('faqForm').reset();
    document.getElementById('faqEditId').value = '';
    openModal('faqModal');
});

window.editFaq = function(id) {
    const f = adminFaqs.find(x => x.id === id);
    if (!f) return;
    document.getElementById('faqModalTitle').textContent = 'Soruyu Düzenle';
    document.getElementById('faqEditId').value = f.id;
    document.getElementById('faqQuestion').value = f.question;
    document.getElementById('faqAnswer').value = f.answer;
    openModal('faqModal');
};

window.deleteFaq = function(id) {
    if (!confirm('Bu soruyu silmek istediğinize emin misiniz?')) return;
    adminFaqs = adminFaqs.filter(f => f.id !== id);
    setData('faqs', adminFaqs);
    renderFaqs();
    showToast('Soru silindi');
};

document.getElementById('faqForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const editId = document.getElementById('faqEditId').value;
    const question = document.getElementById('faqQuestion').value;
    const answer = document.getElementById('faqAnswer').value;

    if (editId) {
        const f = adminFaqs.find(x => x.id === Number(editId));
        if (f) { f.question = question; f.answer = answer; }
        showToast('Soru güncellendi');
    } else {
        const maxId = adminFaqs.length > 0 ? Math.max(...adminFaqs.map(f => f.id)) : 0;
        adminFaqs.push({ id: maxId + 1, question, answer });
        showToast('Soru eklendi');
    }

    setData('faqs', adminFaqs);
    renderFaqs();
    closeModal('faqModal');
});

document.getElementById('faqModalClose').addEventListener('click', () => closeModal('faqModal'));
document.getElementById('faqModalCancel').addEventListener('click', () => closeModal('faqModal'));

// ==========================================
// CONTENT - CONTACT
// ==========================================
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    adminContact.phone = document.getElementById('contactPhone').value;
    adminContact.email = document.getElementById('contactEmail').value;
    adminContact.address = document.getElementById('contactAddress').value;
    adminContact.whatsapp = document.getElementById('contactWhatsapp').value;
    setData('contact', adminContact);
    showToast('İletişim bilgileri kaydedildi');
});

// ==========================================
// CONTENT TABS
// ==========================================
document.querySelectorAll('.content-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.content-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.content-panel').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
    });
});

// ==========================================
// KEYBOARD SHORTCUT
// ==========================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.admin-modal.open').forEach(m => m.classList.remove('open'));
    }
});

// ==========================================
// INIT ON LOAD
// ==========================================
checkAuth();
