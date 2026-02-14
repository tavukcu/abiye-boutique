/* ============================================
   ÉLÉGANCE - Shared Data & Utilities
   Used by all pages except index.html
   ============================================ */

const products = [
    { id: 1, name: "Midnight Noir", category: "uzun", categoryLabel: "Uzun Abiye", price: 12999, oldPrice: null, color: "Siyah", colors: ["#0a0a0a", "#1a1a2e", "#2d1b4e"], sizes: ["XS", "S", "M", "L", "XL"], badge: null, image: "https://images.unsplash.com/photo-1731613157654-93faac9e7809?w=600&h=800&fit=crop", gradient: "linear-gradient(160deg, #0a0a0a 0%, #1a1a2e 30%, #2a2040 60%, #0a0a0a 100%)", description: "Zarif drapeli detaylarıyla göz kamaştıran siyah uzun abiye. İtalyan ipek krep kumaştan üretilmiş, vücudu saran kesimi ile muhteşem bir siluet sunar.", fabric: "İtalyan İpek Krep", lining: "Saten Astar", care: "Kuru temizleme önerilir" },
    { id: 2, name: "Bordeaux Dream", category: "uzun", categoryLabel: "Uzun Abiye", price: 14999, oldPrice: 18999, color: "Bordo", colors: ["#4a0020", "#6a002a", "#8b0000"], sizes: ["S", "M", "L"], badge: "İndirim", image: "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?w=600&h=800&fit=crop", gradient: "linear-gradient(160deg, #2a0015 0%, #5a0028 30%, #7a1040 60%, #2a0015 100%)", description: "Derin bordo tonlarında, kadife dokusuyla lüksü hissettiren uzun abiye. El işçiliği boncuk detaylarıyla özel gecelerin yıldızı olun.", fabric: "Kadife", lining: "Saten Astar", care: "Kuru temizleme" },
    { id: 3, name: "Royal Sapphire", category: "uzun", categoryLabel: "Uzun Abiye", price: 11999, oldPrice: null, color: "Lacivert", colors: ["#000030", "#00004a", "#1a1a5e"], sizes: ["XS", "S", "M", "L"], badge: null, image: "https://images.unsplash.com/photo-1597149864436-a2849142dff5?w=600&h=800&fit=crop", gradient: "linear-gradient(160deg, #000020 0%, #0a0a4a 30%, #1a1a6a 60%, #000020 100%)", description: "Lacivert tonlarında, kristal taş işlemeli uzun abiye. Prenses kesim eteği ile balo gecelerinin vazgeçilmezi.", fabric: "Tül & Saten", lining: "Polyester Astar", care: "Kuru temizleme" },
    { id: 4, name: "Golden Hour", category: "kisa", categoryLabel: "Kısa Abiye", price: 9999, oldPrice: null, color: "Altın", colors: ["#8b7500", "#c8a96e", "#3a2a00"], sizes: ["XS", "S", "M", "L"], badge: "Yeni", image: "https://images.unsplash.com/photo-1761635491690-c792b0076592?w=600&h=800&fit=crop", gradient: "linear-gradient(160deg, #2a2000 0%, #5a4a10 30%, #8b7530 60%, #2a2000 100%)", description: "Altın rengi payetlerle kaplı kısa abiye. Kokteyl partilerinin en şık parçası olmak için tasarlandı.", fabric: "Payet & Tül", lining: "Saten Astar", care: "Kuru temizleme önerilir" },
    { id: 5, name: "Champagne Rose", category: "nisan", categoryLabel: "Nişanlık", price: 16999, oldPrice: null, color: "Şampanya", colors: ["#d4c5a9", "#e8dcc8", "#b8a88c"], sizes: ["S", "M", "L", "XL"], badge: "Çok Satan", image: "https://images.unsplash.com/photo-1762919243806-a3da5ca7f03d?w=600&h=800&fit=crop", gradient: "linear-gradient(160deg, #3a3020 0%, #6a5a3a 30%, #9a8a6a 60%, #3a3020 100%)", description: "Şampanya rengi tül ve dantelle bezeli nişan elbisesi. Romantik ve zarif görünümüyle özel gününüze ışıltı katın.", fabric: "Fransız Dantel & Tül", lining: "İpek Astar", care: "Profesyonel kuru temizleme" },
    { id: 6, name: "Crimson Elegance", category: "uzun", categoryLabel: "Uzun Abiye", price: 13999, oldPrice: null, color: "Kırmızı", colors: ["#8b0000", "#cc0000", "#4a0000"], sizes: ["XS", "S", "M", "L"], badge: null, image: "https://images.unsplash.com/photo-1765229279658-7335ee3cdaf5?w=600&h=800&fit=crop", gradient: "linear-gradient(160deg, #2a0000 0%, #5a0000 30%, #8b1010 60%, #2a0000 100%)", description: "Tutkulu kırmızı tonlarında, yırtmaç detaylı uzun abiye. Cesur ve çekici bir görünüm için tasarlandı.", fabric: "İpek Saten", lining: "Saten Astar", care: "Kuru temizleme" },
    { id: 7, name: "Pearl Essence", category: "nisan", categoryLabel: "Nişanlık", price: 18999, oldPrice: null, color: "Beyaz", colors: ["#f0e6d3", "#ffffff", "#d4c5a9"], sizes: ["S", "M", "L"], badge: "Premium", image: "https://images.unsplash.com/photo-1492175742197-c02b96e14b38?w=600&h=800&fit=crop", gradient: "linear-gradient(160deg, #4a4035 0%, #7a6a55 30%, #a09080 60%, #4a4035 100%)", description: "İnci beyazı, el işçiliği Swarovski kristalleri ile süslenmiş nişan elbisesi. Rüya gibi bir gece için mükemmel seçim.", fabric: "Mikado & Swarovski", lining: "İpek Organze", care: "Profesyonel kuru temizleme" },
    { id: 8, name: "Velvet Dusk", category: "kisa", categoryLabel: "Kısa Abiye", price: 8999, oldPrice: 11999, color: "Mor", colors: ["#2d1b4e", "#4a2875", "#1a0a2e"], sizes: ["XS", "S", "M", "L", "XL"], badge: "İndirim", image: "https://images.unsplash.com/photo-1765229277675-b8466891e689?w=600&h=800&fit=crop", gradient: "linear-gradient(160deg, #15082a 0%, #2d1860 30%, #451f80 60%, #15082a 100%)", description: "Kadife mor tonlarında, modern kesimli kısa abiye. Minimalist şıklığı sevenler için ideal bir tercih.", fabric: "Kadife", lining: "Polyester Astar", care: "Kuru temizleme" },
    { id: 9, name: "Emerald Grace", category: "uzun", categoryLabel: "Uzun Abiye", price: 15999, oldPrice: null, color: "Yeşil", colors: ["#004030", "#006040", "#002820"], sizes: ["S", "M", "L"], badge: "Yeni", image: "https://images.unsplash.com/photo-1765229280390-e05fb240aed8?w=600&h=800&fit=crop", gradient: "linear-gradient(160deg, #001a10 0%, #003a20 30%, #005a35 60%, #001a10 100%)", description: "Zümrüt yeşili, asimetrik kesimli uzun abiye. Doğanın en asil rengini zarafetle buluşturan eşsiz bir tasarım.", fabric: "Şifon & Saten", lining: "İpek Astar", care: "Kuru temizleme" },
    { id: 10, name: "Blush Petal", category: "mezuniyet", categoryLabel: "Mezuniyet", price: 7999, oldPrice: null, color: "Pudra", colors: ["#d4a0a0", "#e8b8b8", "#c08888"], sizes: ["XS", "S", "M", "L"], badge: null, image: "https://images.unsplash.com/photo-1609741873312-7ce5ae7c56b4?w=600&h=800&fit=crop", gradient: "linear-gradient(160deg, #3a2525 0%, #6a4545 30%, #8a6060 60%, #3a2525 100%)", description: "Pudra pembesi, tül detaylı mezuniyet elbisesi. Gençliğin tazeliğini zarif bir dokunuşla yansıtır.", fabric: "Tül & Saten", lining: "Polyester Astar", care: "Kuru temizleme" },
    { id: 11, name: "Silver Moon", category: "kisa", categoryLabel: "Kısa Abiye", price: 10999, oldPrice: null, color: "Gümüş", colors: ["#808080", "#c0c0c0", "#404040"], sizes: ["XS", "S", "M", "L"], badge: null, image: "https://images.unsplash.com/photo-1765229280150-76ce5dbdb026?w=600&h=800&fit=crop", gradient: "linear-gradient(160deg, #1a1a1a 0%, #3a3a3a 30%, #5a5a5a 60%, #1a1a1a 100%)", description: "Gümüş rengi pul payet detaylı kısa abiye. Işıltılı ve modern tasarımıyla davetlerin gözdesi.", fabric: "Payet & Tül", lining: "Saten Astar", care: "Kuru temizleme önerilir" },
    { id: 12, name: "Onyx Allure", category: "mezuniyet", categoryLabel: "Mezuniyet", price: 9499, oldPrice: null, color: "Siyah", colors: ["#0a0a0a", "#1a1a1a", "#2a2a2a"], sizes: ["S", "M", "L", "XL"], badge: "Yeni", image: "https://images.unsplash.com/photo-1741605115361-269851d41f06?w=600&h=800&fit=crop", gradient: "linear-gradient(160deg, #080808 0%, #181818 30%, #282828 60%, #080808 100%)", description: "Siyah, straplez kesimli mezuniyet elbisesi. Zamansız siyahın gücünü genç ve dinamik bir tasarımla buluşturur.", fabric: "Krep & Saten", lining: "Polyester Astar", care: "Kuru temizleme" }
];

// Cart & Wishlist from localStorage
let cart = JSON.parse(localStorage.getItem('elegance_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('elegance_wishlist')) || [];

function saveCart() { localStorage.setItem('elegance_cart', JSON.stringify(cart)); }
function saveWishlist() { localStorage.setItem('elegance_wishlist', JSON.stringify(wishlist)); }
function formatPrice(n) { return '₺' + Number(n).toLocaleString('tr-TR'); }

function getProduct(id) { return products.find(p => p.id === id); }

function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    const total = cart.reduce((s, i) => s + i.quantity, 0);
    if (badge) { badge.textContent = total; badge.classList.toggle('visible', total > 0); }
}
function updateWishlistBadge() {
    const badge = document.getElementById('wishlistBadge');
    if (badge) { badge.textContent = wishlist.length; badge.classList.toggle('visible', wishlist.length > 0); }
}

function showToast(message) {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = 'toast';
        toast.innerHTML = '<div class="toast-inner"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg><span id="toastMsg"></span></div>';
        document.body.appendChild(toast);
    }
    document.getElementById('toastMsg').textContent = message;
    toast.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(() => toast.classList.remove('show'), 2500);
}

function addToCart(productId, size, quantity = 1, colorIndex = 0) {
    const p = getProduct(productId);
    if (!p) return;
    const existing = cart.findIndex(i => i.productId === productId && i.size === size && i.colorIndex === colorIndex);
    if (existing >= 0) { cart[existing].quantity += quantity; }
    else { cart.push({ productId: p.id, name: p.name, price: p.price, size, colorIndex, quantity, image: p.image, gradient: p.gradient }); }
    saveCart();
    updateCartBadge();
    showToast(p.name + ' sepete eklendi');
}

function toggleWishlist(productId) {
    const idx = wishlist.indexOf(productId);
    if (idx >= 0) { wishlist.splice(idx, 1); showToast('Favorilerden çıkarıldı'); }
    else { wishlist.push(productId); showToast('Favorilere eklendi'); }
    saveWishlist();
    updateWishlistBadge();
}

// Reviews system (localStorage)
function getReviews(productId) {
    const all = JSON.parse(localStorage.getItem('elegance_reviews') || '{}');
    return all[productId] || [];
}
function addReview(productId, review) {
    const all = JSON.parse(localStorage.getItem('elegance_reviews') || '{}');
    if (!all[productId]) all[productId] = [];
    all[productId].unshift(review);
    localStorage.setItem('elegance_reviews', JSON.stringify(all));
}

// Membership (localStorage)
function getCurrentUser() {
    return JSON.parse(sessionStorage.getItem('elegance_user') || 'null');
}
function loginUser(email, name) {
    const user = { email, name, date: new Date().toISOString() };
    sessionStorage.setItem('elegance_user', JSON.stringify(user));
    const users = JSON.parse(localStorage.getItem('elegance_users') || '[]');
    if (!users.find(u => u.email === email)) { users.push(user); localStorage.setItem('elegance_users', JSON.stringify(users)); }
    return user;
}
function logoutUser() { sessionStorage.removeItem('elegance_user'); }

// Language
let currentLang = localStorage.getItem('elegance_lang') || 'tr';

// Comparison (localStorage)
function getCompareList() { return JSON.parse(localStorage.getItem('elegance_compare') || '[]'); }
function toggleCompare(productId) {
    let list = getCompareList();
    const idx = list.indexOf(productId);
    if (idx >= 0) { list.splice(idx, 1); showToast('Karşılaştırmadan çıkarıldı'); }
    else { if (list.length >= 4) { showToast('En fazla 4 ürün karşılaştırabilirsiniz'); return; } list.push(productId); showToast('Karşılaştırmaya eklendi'); }
    localStorage.setItem('elegance_compare', JSON.stringify(list));
}

// Stock notification
function subscribeStock(productId, email) {
    const subs = JSON.parse(localStorage.getItem('elegance_stock_notify') || '{}');
    if (!subs[productId]) subs[productId] = [];
    if (!subs[productId].includes(email)) subs[productId].push(email);
    localStorage.setItem('elegance_stock_notify', JSON.stringify(subs));
    showToast('Stok bildirimi kaydedildi');
}

// Gift cards
function getGiftCards() { return JSON.parse(localStorage.getItem('elegance_giftcards') || '[]'); }
function validateGiftCard(code) {
    const cards = getGiftCards();
    return cards.find(c => c.code === code && c.balance > 0);
}
