/* ============================================
   ÉLÉGANCE - Premium Abiye E-Ticaret
   Main Application JavaScript
   ============================================ */

// ==========================================
// PRODUCT DATA
// ==========================================
const products = [
    {
        id: 1,
        name: "Midnight Noir",
        category: "uzun",
        categoryLabel: "Uzun Abiye",
        price: 12999,
        oldPrice: null,
        color: "Siyah",
        colors: ["#0a0a0a", "#1a1a2e", "#2d1b4e"],
        sizes: ["XS", "S", "M", "L", "XL"],
        badge: null,
        image: "https://images.unsplash.com/photo-1731613157654-93faac9e7809?w=600&h=800&fit=crop",
        gradient: "linear-gradient(160deg, #0a0a0a 0%, #1a1a2e 30%, #2a2040 60%, #0a0a0a 100%)",
        description: "Zarif drapeli detaylarıyla göz kamaştıran siyah uzun abiye. İtalyan ipek krep kumaştan üretilmiş, vücudu saran kesimi ile muhteşem bir siluet sunar."
    },
    {
        id: 2,
        name: "Bordeaux Dream",
        category: "uzun",
        categoryLabel: "Uzun Abiye",
        price: 14999,
        oldPrice: 18999,
        color: "Bordo",
        colors: ["#4a0020", "#6a002a", "#8b0000"],
        sizes: ["S", "M", "L"],
        badge: "İndirim",
        image: "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?w=600&h=800&fit=crop",
        gradient: "linear-gradient(160deg, #2a0015 0%, #5a0028 30%, #7a1040 60%, #2a0015 100%)",
        description: "Derin bordo tonlarında, kadife dokusuyla lüksü hissettiren uzun abiye. El işçiliği boncuk detaylarıyla özel gecelerin yıldızı olun."
    },
    {
        id: 3,
        name: "Royal Sapphire",
        category: "uzun",
        categoryLabel: "Uzun Abiye",
        price: 11999,
        oldPrice: null,
        color: "Lacivert",
        colors: ["#000030", "#00004a", "#1a1a5e"],
        sizes: ["XS", "S", "M", "L"],
        badge: null,
        image: "https://images.unsplash.com/photo-1597149864436-a2849142dff5?w=600&h=800&fit=crop",
        gradient: "linear-gradient(160deg, #000020 0%, #0a0a4a 30%, #1a1a6a 60%, #000020 100%)",
        description: "Lacivert tonlarında, kristal taş işlemeli uzun abiye. Prenses kesim eteği ile balo gecelerinin vazgeçilmezi."
    },
    {
        id: 4,
        name: "Golden Hour",
        category: "kisa",
        categoryLabel: "Kısa Abiye",
        price: 9999,
        oldPrice: null,
        color: "Altın",
        colors: ["#8b7500", "#c8a96e", "#3a2a00"],
        sizes: ["XS", "S", "M", "L"],
        badge: "Yeni",
        image: "https://images.unsplash.com/photo-1761635491690-c792b0076592?w=600&h=800&fit=crop",
        gradient: "linear-gradient(160deg, #2a2000 0%, #5a4a10 30%, #8b7530 60%, #2a2000 100%)",
        description: "Altın rengi payetlerle kaplı kısa abiye. Kokteyl partilerinin en şık parçası olmak için tasarlandı."
    },
    {
        id: 5,
        name: "Champagne Rose",
        category: "nisan",
        categoryLabel: "Nişanlık",
        price: 16999,
        oldPrice: null,
        color: "Şampanya",
        colors: ["#d4c5a9", "#e8dcc8", "#b8a88c"],
        sizes: ["S", "M", "L", "XL"],
        badge: "Çok Satan",
        image: "https://images.unsplash.com/photo-1762919243806-a3da5ca7f03d?w=600&h=800&fit=crop",
        gradient: "linear-gradient(160deg, #3a3020 0%, #6a5a3a 30%, #9a8a6a 60%, #3a3020 100%)",
        description: "Şampanya rengi tül ve dantelle bezeli nişan elbisesi. Romantik ve zarif görünümüyle özel gününüze ışıltı katın."
    },
    {
        id: 6,
        name: "Crimson Elegance",
        category: "uzun",
        categoryLabel: "Uzun Abiye",
        price: 13999,
        oldPrice: null,
        color: "Kırmızı",
        colors: ["#8b0000", "#cc0000", "#4a0000"],
        sizes: ["XS", "S", "M", "L"],
        badge: null,
        image: "https://images.unsplash.com/photo-1765229279658-7335ee3cdaf5?w=600&h=800&fit=crop",
        gradient: "linear-gradient(160deg, #2a0000 0%, #5a0000 30%, #8b1010 60%, #2a0000 100%)",
        description: "Tutkulu kırmızı tonlarında, yırtmaç detaylı uzun abiye. Cesur ve çekici bir görünüm için tasarlandı."
    },
    {
        id: 7,
        name: "Pearl Essence",
        category: "nisan",
        categoryLabel: "Nişanlık",
        price: 18999,
        oldPrice: null,
        color: "Beyaz",
        colors: ["#f0e6d3", "#ffffff", "#d4c5a9"],
        sizes: ["S", "M", "L"],
        badge: "Premium",
        image: "https://images.unsplash.com/photo-1492175742197-c02b96e14b38?w=600&h=800&fit=crop",
        gradient: "linear-gradient(160deg, #4a4035 0%, #7a6a55 30%, #a09080 60%, #4a4035 100%)",
        description: "İnci beyazı, el işçiliği Swarovski kristalleri ile süslenmiş nişan elbisesi. Rüya gibi bir gece için mükemmel seçim."
    },
    {
        id: 8,
        name: "Velvet Dusk",
        category: "kisa",
        categoryLabel: "Kısa Abiye",
        price: 8999,
        oldPrice: 11999,
        color: "Mor",
        colors: ["#2d1b4e", "#4a2875", "#1a0a2e"],
        sizes: ["XS", "S", "M", "L", "XL"],
        badge: "İndirim",
        image: "https://images.unsplash.com/photo-1765229277675-b8466891e689?w=600&h=800&fit=crop",
        gradient: "linear-gradient(160deg, #15082a 0%, #2d1860 30%, #451f80 60%, #15082a 100%)",
        description: "Kadife mor tonlarında, modern kesimli kısa abiye. Minimalist şıklığı sevenler için ideal bir tercih."
    },
    {
        id: 9,
        name: "Emerald Grace",
        category: "uzun",
        categoryLabel: "Uzun Abiye",
        price: 15999,
        oldPrice: null,
        color: "Yeşil",
        colors: ["#004030", "#006040", "#002820"],
        sizes: ["S", "M", "L"],
        badge: "Yeni",
        image: "https://images.unsplash.com/photo-1765229280390-e05fb240aed8?w=600&h=800&fit=crop",
        gradient: "linear-gradient(160deg, #001a10 0%, #003a20 30%, #005a35 60%, #001a10 100%)",
        description: "Zümrüt yeşili, asimetrik kesimli uzun abiye. Doğanın en asil rengini zarafetle buluşturan eşsiz bir tasarım."
    },
    {
        id: 10,
        name: "Blush Petal",
        category: "mezuniyet",
        categoryLabel: "Mezuniyet",
        price: 7999,
        oldPrice: null,
        color: "Pudra",
        colors: ["#d4a0a0", "#e8b8b8", "#c08888"],
        sizes: ["XS", "S", "M", "L"],
        badge: null,
        image: "https://images.unsplash.com/photo-1609741873312-7ce5ae7c56b4?w=600&h=800&fit=crop",
        gradient: "linear-gradient(160deg, #3a2525 0%, #6a4545 30%, #8a6060 60%, #3a2525 100%)",
        description: "Pudra pembesi, tül detaylı mezuniyet elbisesi. Gençliğin tazeliğini zarif bir dokunuşla yansıtır."
    },
    {
        id: 11,
        name: "Silver Moon",
        category: "kisa",
        categoryLabel: "Kısa Abiye",
        price: 10999,
        oldPrice: null,
        color: "Gümüş",
        colors: ["#808080", "#c0c0c0", "#404040"],
        sizes: ["XS", "S", "M", "L"],
        badge: null,
        image: "https://images.unsplash.com/photo-1765229280150-76ce5dbdb026?w=600&h=800&fit=crop",
        gradient: "linear-gradient(160deg, #1a1a1a 0%, #3a3a3a 30%, #5a5a5a 60%, #1a1a1a 100%)",
        description: "Gümüş rengi pul payet detaylı kısa abiye. Işıltılı ve modern tasarımıyla davetlerin gözdesi."
    },
    {
        id: 12,
        name: "Onyx Allure",
        category: "mezuniyet",
        categoryLabel: "Mezuniyet",
        price: 9499,
        oldPrice: null,
        color: "Siyah",
        colors: ["#0a0a0a", "#1a1a1a", "#2a2a2a"],
        sizes: ["S", "M", "L", "XL"],
        badge: "Yeni",
        image: "https://images.unsplash.com/photo-1741605115361-269851d41f06?w=600&h=800&fit=crop",
        gradient: "linear-gradient(160deg, #080808 0%, #181818 30%, #282828 60%, #080808 100%)",
        description: "Siyah, straplez kesimli mezuniyet elbisesi. Zamansız siyahın gücünü genç ve dinamik bir tasarımla buluşturur."
    }
];

// ==========================================
// STATE
// ==========================================
let cart = JSON.parse(localStorage.getItem('elegance_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('elegance_wishlist')) || [];
let currentProduct = null;
let currentQty = 1;
let selectedSize = null;
let selectedColorIndex = 0;

// ==========================================
// DOM ELEMENTS
// ==========================================
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ==========================================
// PRELOADER
// ==========================================
window.addEventListener('load', () => {
    setTimeout(() => {
        const preloader = $('#preloader');
        preloader.classList.add('hidden');
        setTimeout(() => preloader.remove(), 600);
        initRevealAnimations();
    }, 1200);
});

// ==========================================
// CUSTOM CURSOR
// ==========================================
const cursorDot = $('#cursorDot');
const cursorRing = $('#cursorRing');
let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

if (window.matchMedia('(pointer: fine)').matches) {
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });

    function animateCursor() {
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;
        cursorRing.style.left = ringX + 'px';
        cursorRing.style.top = ringY + 'px';
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover effect for interactive elements
    const hoverTargets = 'a, button, .product-card, .category-card, .filter-btn, input, .search-tag, .size-opt, .color-opt';
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest(hoverTargets)) {
            cursorRing.classList.add('hover');
        }
    });
    document.addEventListener('mouseout', (e) => {
        if (e.target.closest(hoverTargets)) {
            cursorRing.classList.remove('hover');
        }
    });
}

// ==========================================
// NAVBAR
// ==========================================
const navbar = $('#navbar');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
    const backToTop = $('#backToTop');
    if (backToTop) {
        backToTop.classList.toggle('visible', window.scrollY > 600);
    }
}, { passive: true });

// Back to top
$('#backToTop')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ==========================================
// MOBILE MENU
// ==========================================
const hamburger = $('#hamburgerBtn');
const mobileMenu = $('#mobileMenu');

hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

// Close mobile menu on link click
$$('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
    });
});

// ==========================================
// SEARCH
// ==========================================
const searchOverlay = $('#searchOverlay');
const searchInput = $('#searchInput');
const searchResults = $('#searchResults');

$('#searchToggle')?.addEventListener('click', () => {
    searchOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => searchInput?.focus(), 400);
});

$('#searchClose')?.addEventListener('click', closeSearch);
searchOverlay?.addEventListener('click', (e) => {
    if (e.target === searchOverlay) closeSearch();
});

function closeSearch() {
    searchOverlay.classList.remove('open');
    document.body.style.overflow = '';
    if (searchInput) searchInput.value = '';
    if (searchResults) searchResults.innerHTML = '';
}

// Search functionality
searchInput?.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (query.length < 2) {
        searchResults.innerHTML = '';
        return;
    }

    const results = products.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.color.toLowerCase().includes(query) ||
        p.categoryLabel.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
    );

    if (results.length === 0) {
        searchResults.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 24px; font-size: 0.85rem;">Sonuç bulunamadı</p>';
        return;
    }

    searchResults.innerHTML = results.map(p => `
        <div class="search-result-item" data-id="${p.id}">
            <div class="search-result-thumb" style="background: ${p.gradient};">
                <img src="${p.image}" alt="${p.name}">
            </div>
            <div class="search-result-info">
                <strong>${p.name}</strong>
                <span>₺${p.price.toLocaleString('tr-TR')}</span>
            </div>
        </div>
    `).join('');

    // Click on search result
    searchResults.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', () => {
            const id = parseInt(item.dataset.id);
            closeSearch();
            openQuickView(id);
        });
    });
});

// Search tags
$$('.search-tag').forEach(tag => {
    tag.addEventListener('click', () => {
        if (searchInput) {
            searchInput.value = tag.textContent;
            searchInput.dispatchEvent(new Event('input'));
        }
    });
});

// ==========================================
// PRODUCTS RENDERING
// ==========================================
const productGrid = $('#productGrid');

function renderProducts(filter = 'all') {
    const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

    productGrid.innerHTML = filtered.map((p, i) => `
        <div class="product-card" data-id="${p.id}" style="transition-delay: ${i * 0.05}s">
            <div class="product-image">
                <div class="product-image-bg" style="background: ${p.gradient};">
                    <img src="${p.image}" alt="${p.name}" loading="lazy">
                </div>
                ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
                <button class="product-wishlist ${wishlist.includes(p.id) ? 'active' : ''}" data-id="${p.id}" aria-label="Favorilere ekle">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="${wishlist.includes(p.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.5">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                </button>
                <div class="product-quick-view" data-id="${p.id}">Hızlı Bakış</div>
            </div>
            <div class="product-info">
                <span class="product-category">${p.categoryLabel}</span>
                <h3 class="product-name">${p.name}</h3>
                <div class="product-price">
                    ₺${p.price.toLocaleString('tr-TR')}
                    ${p.oldPrice ? `<span class="old-price">₺${p.oldPrice.toLocaleString('tr-TR')}</span>` : ''}
                </div>
            </div>
        </div>
    `).join('');

    // Animate in
    requestAnimationFrame(() => {
        productGrid.querySelectorAll('.product-card').forEach((card, i) => {
            setTimeout(() => card.classList.add('visible'), i * 80);
        });
    });

    // Event listeners
    productGrid.querySelectorAll('.product-quick-view').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            openQuickView(parseInt(btn.dataset.id));
        });
    });

    productGrid.querySelectorAll('.product-wishlist').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleWishlist(parseInt(btn.dataset.id));
        });
    });

    productGrid.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            openQuickView(parseInt(card.dataset.id));
        });
    });
}

// ==========================================
// FILTERS
// ==========================================
$$('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        $$('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProducts(btn.dataset.filter);
    });
});

// Category cards click → filter products
$$('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        const cat = card.dataset.category;
        // Scroll to products
        $('#koleksiyon').scrollIntoView({ behavior: 'smooth' });
        // Set active filter
        setTimeout(() => {
            $$('.filter-btn').forEach(b => b.classList.remove('active'));
            const targetBtn = $(`.filter-btn[data-filter="${cat}"]`);
            if (targetBtn) {
                targetBtn.classList.add('active');
                renderProducts(cat);
            }
        }, 600);
    });
});

// ==========================================
// QUICK VIEW MODAL
// ==========================================
const modal = $('#quickViewModal');

function openQuickView(productId) {
    currentProduct = products.find(p => p.id === productId);
    if (!currentProduct) return;

    currentQty = 1;
    selectedSize = null;
    selectedColorIndex = 0;

    const modalImageEl = $('#modalImage');
    modalImageEl.style.background = currentProduct.gradient;
    modalImageEl.innerHTML = `<img src="${currentProduct.image}" alt="${currentProduct.name}">`;
    $('#modalCategory').textContent = currentProduct.categoryLabel;
    $('#modalName').textContent = currentProduct.name;
    $('#modalPrice').innerHTML = `₺${currentProduct.price.toLocaleString('tr-TR')}${currentProduct.oldPrice ? ` <span class="old-price" style="text-decoration:line-through;color:var(--text-muted);font-size:0.9rem;">₺${currentProduct.oldPrice.toLocaleString('tr-TR')}</span>` : ''}`;
    $('#modalDesc').textContent = currentProduct.description;
    $('#qtyValue').textContent = currentQty;

    // Render colors
    const colorsContainer = $('#modalColors');
    colorsContainer.innerHTML = currentProduct.colors.map((c, i) => `
        <button class="color-opt ${i === 0 ? 'active' : ''}" style="background: ${c};" data-index="${i}" aria-label="Renk seçimi"></button>
    `).join('');

    colorsContainer.querySelectorAll('.color-opt').forEach(opt => {
        opt.addEventListener('click', () => {
            colorsContainer.querySelectorAll('.color-opt').forEach(o => o.classList.remove('active'));
            opt.classList.add('active');
            selectedColorIndex = parseInt(opt.dataset.index);
        });
    });

    // Render sizes
    const sizesContainer = $('#modalSizes');
    sizesContainer.innerHTML = currentProduct.sizes.map(s => `
        <button class="size-opt" data-size="${s}">${s}</button>
    `).join('');

    sizesContainer.querySelectorAll('.size-opt').forEach(opt => {
        opt.addEventListener('click', () => {
            sizesContainer.querySelectorAll('.size-opt').forEach(o => o.classList.remove('active'));
            opt.classList.add('active');
            selectedSize = opt.dataset.size;
        });
    });

    // Update wishlist button state
    const wishBtn = $('#addToWishlistBtn');
    wishBtn.classList.toggle('active', wishlist.includes(productId));

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

$('#modalClose')?.addEventListener('click', closeModal);
modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
}

// Quantity controls
$('#qtyMinus')?.addEventListener('click', () => {
    if (currentQty > 1) {
        currentQty--;
        $('#qtyValue').textContent = currentQty;
    }
});

$('#qtyPlus')?.addEventListener('click', () => {
    if (currentQty < 10) {
        currentQty++;
        $('#qtyValue').textContent = currentQty;
    }
});

// Add to cart from modal
$('#addToCartBtn')?.addEventListener('click', () => {
    if (!currentProduct) return;
    if (!selectedSize) {
        showToast('Lütfen bir beden seçin');
        return;
    }

    const cartItem = {
        productId: currentProduct.id,
        name: currentProduct.name,
        price: currentProduct.price,
        size: selectedSize,
        colorIndex: selectedColorIndex,
        quantity: currentQty,
        image: currentProduct.image,
        gradient: currentProduct.gradient
    };

    // Check if same product+size+color exists
    const existingIndex = cart.findIndex(item =>
        item.productId === cartItem.productId &&
        item.size === cartItem.size &&
        item.colorIndex === cartItem.colorIndex
    );

    if (existingIndex >= 0) {
        cart[existingIndex].quantity += currentQty;
    } else {
        cart.push(cartItem);
    }

    saveCart();
    updateCartBadge();
    closeModal();
    showToast(`${currentProduct.name} sepete eklendi`);
});

// Add to wishlist from modal
$('#addToWishlistBtn')?.addEventListener('click', () => {
    if (currentProduct) {
        toggleWishlist(currentProduct.id);
        $('#addToWishlistBtn').classList.toggle('active', wishlist.includes(currentProduct.id));
    }
});

// ==========================================
// WISHLIST
// ==========================================
function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    if (index >= 0) {
        wishlist.splice(index, 1);
        showToast('Favorilerden çıkarıldı');
    } else {
        wishlist.push(productId);
        showToast('Favorilere eklendi');
    }
    localStorage.setItem('elegance_wishlist', JSON.stringify(wishlist));
    updateWishlistBadge();
    // Re-render products to update heart icons
    const activeFilter = $('.filter-btn.active')?.dataset.filter || 'all';
    renderProducts(activeFilter);
}

function updateWishlistBadge() {
    const badge = $('#wishlistBadge');
    if (badge) {
        badge.textContent = wishlist.length;
        badge.classList.toggle('visible', wishlist.length > 0);
    }
}

// ==========================================
// CART
// ==========================================
const cartDrawer = $('#cartDrawer');
const cartBackdrop = $('#cartBackdrop');

$('#cartToggle')?.addEventListener('click', openCart);
$('#cartClose')?.addEventListener('click', closeCart);
cartBackdrop?.addEventListener('click', closeCart);

function openCart() {
    renderCart();
    cartDrawer.classList.add('open');
    cartBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartDrawer.classList.remove('open');
    cartBackdrop.classList.remove('open');
    document.body.style.overflow = '';
}

function renderCart() {
    const cartItems = $('#cartItems');
    const cartEmpty = $('#cartEmpty');
    const cartFooter = $('#cartFooter');

    if (cart.length === 0) {
        cartEmpty.style.display = 'flex';
        cartItems.innerHTML = '';
        cartFooter.style.display = 'none';
        return;
    }

    cartEmpty.style.display = 'none';
    cartFooter.style.display = 'block';

    cartItems.innerHTML = cart.map((item, i) => `
        <div class="cart-item">
            <div class="cart-item-image" style="background: ${item.gradient};"><img src="${item.image}" alt="${item.name}"></div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-meta">Beden: ${item.size}</div>
                <div class="cart-item-bottom">
                    <div class="cart-item-qty">
                        <button onclick="updateCartQty(${i}, -1)">−</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateCartQty(${i}, 1)">+</button>
                    </div>
                    <span class="cart-item-price">₺${(item.price * item.quantity).toLocaleString('tr-TR')}</span>
                    <button class="cart-item-remove" onclick="removeCartItem(${i})">Sil</button>
                </div>
            </div>
        </div>
    `).join('');

    // Calculate totals
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = subtotal >= 200000 ? 0 : 4999;
    const total = subtotal + shipping;

    $('#cartSubtotal').textContent = `₺${subtotal.toLocaleString('tr-TR')}`;
    $('#cartShipping').textContent = shipping === 0 ? 'Ücretsiz' : `₺${shipping.toLocaleString('tr-TR')}`;
    $('#cartTotal').textContent = `₺${total.toLocaleString('tr-TR')}`;
}

window.updateCartQty = function(index, delta) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    saveCart();
    updateCartBadge();
    renderCart();
};

window.removeCartItem = function(index) {
    const name = cart[index].name;
    cart.splice(index, 1);
    saveCart();
    updateCartBadge();
    renderCart();
    showToast(`${name} sepetten çıkarıldı`);
};

function saveCart() {
    localStorage.setItem('elegance_cart', JSON.stringify(cart));
}

function updateCartBadge() {
    const badge = $('#cartBadge');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (badge) {
        badge.textContent = totalItems;
        badge.classList.toggle('visible', totalItems > 0);
    }
}

// ==========================================
// TOAST NOTIFICATIONS
// ==========================================
let toastTimeout;

function showToast(message) {
    const toast = $('#toast');
    const toastMsg = $('#toastMsg');
    if (!toast || !toastMsg) return;

    toastMsg.textContent = message;
    toast.classList.add('show');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

// ==========================================
// NEWSLETTER
// ==========================================
$('#newsletterForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = e.target.querySelector('input');
    if (input && input.value) {
        showToast('Bültenimize başarıyla abone oldunuz!');
        input.value = '';
    }
});

// ==========================================
// BACKGROUND MUSIC
// ==========================================
const bgMusic = $('#bgMusic');
const musicToggle = $('#musicToggle');
let musicPlaying = false;

if (bgMusic && musicToggle) {
    bgMusic.volume = 0.3;
    musicToggle.classList.add('paused');

    musicToggle.addEventListener('click', () => {
        if (musicPlaying) {
            bgMusic.pause();
            musicToggle.classList.remove('playing');
            musicToggle.classList.add('paused');
            musicPlaying = false;
        } else {
            bgMusic.play().then(() => {
                musicToggle.classList.remove('paused');
                musicToggle.classList.add('playing');
                musicPlaying = true;
            }).catch(() => {});
        }
    });
}

// ==========================================
// SCROLL REVEAL ANIMATIONS
// ==========================================
function initRevealAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    $$('[data-reveal]').forEach(el => observer.observe(el));
}

// ==========================================
// KEYBOARD SHORTCUTS
// ==========================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeSearch();
        closeModal();
        closeCart();
        if (mobileMenu.classList.contains('open')) {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('open');
            document.body.style.overflow = '';
        }
    }
});

// ==========================================
// CHECKOUT BUTTON
// ==========================================
$('.btn-checkout')?.addEventListener('click', () => {
    if (cart.length === 0) return;
    showToast('Ödeme sayfasına yönlendiriliyorsunuz...');
});

// ==========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ==========================================
$$('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            e.preventDefault();
            const offset = navbar.offsetHeight + 20;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

// ==========================================
// PROMO BAR
// ==========================================
const promoBar = $('#promoBar');
if (promoBar && !sessionStorage.getItem('elegance_promo_closed')) {
    document.body.classList.add('has-promo');
    $('#promoBarClose')?.addEventListener('click', () => {
        promoBar.classList.add('hidden');
        document.body.classList.remove('has-promo');
        sessionStorage.setItem('elegance_promo_closed', '1');
    });
} else if (promoBar) {
    promoBar.classList.add('hidden');
}

// ==========================================
// COUNTDOWN TIMER
// ==========================================
function initCountdown() {
    // Set end date to 7 days from now
    let endDate = localStorage.getItem('elegance_countdown_end');
    if (!endDate) {
        const d = new Date();
        d.setDate(d.getDate() + 7);
        endDate = d.getTime().toString();
        localStorage.setItem('elegance_countdown_end', endDate);
    }

    function update() {
        const now = new Date().getTime();
        const diff = parseInt(endDate) - now;
        if (diff <= 0) {
            localStorage.removeItem('elegance_countdown_end');
            return;
        }
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((diff % (1000 * 60)) / 1000);
        const pad = n => String(n).padStart(2, '0');
        if ($('#cdDays')) $('#cdDays').textContent = pad(days);
        if ($('#cdHours')) $('#cdHours').textContent = pad(hours);
        if ($('#cdMins')) $('#cdMins').textContent = pad(mins);
        if ($('#cdSecs')) $('#cdSecs').textContent = pad(secs);
    }
    update();
    setInterval(update, 1000);
}
initCountdown();

// ==========================================
// COUNTER ANIMATION
// ==========================================
function initCounters() {
    const counters = $$('[data-count]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.count);
                const duration = 2000;
                const start = performance.now();

                function animate(now) {
                    const elapsed = now - start;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    el.textContent = Math.floor(target * eased) + '+';
                    if (progress < 1) requestAnimationFrame(animate);
                }
                requestAnimationFrame(animate);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(c => observer.observe(c));
}
initCounters();

// ==========================================
// PARALLAX
// ==========================================
function initParallax() {
    const hero = $('#hero');
    const heroVisual = $('.hero-visual img');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (hero && scrollY < window.innerHeight) {
            hero.style.setProperty('--parallax', `${scrollY * 0.3}px`);
            if (heroVisual) heroVisual.style.transform = `translateY(${scrollY * 0.08}px)`;
        }
    }, { passive: true });
}
initParallax();

// ==========================================
// FAQ ACCORDION
// ==========================================
$$('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const isOpen = item.classList.contains('open');
        $$('.faq-item').forEach(i => i.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
    });
});

// ==========================================
// SIZE GUIDE MODAL
// ==========================================
const sizeGuideModal = $('#sizeGuideModal');
$('#openSizeGuide')?.addEventListener('click', () => {
    sizeGuideModal?.classList.add('open');
});
$('#sizeGuideClose')?.addEventListener('click', () => {
    sizeGuideModal?.classList.remove('open');
});
sizeGuideModal?.addEventListener('click', (e) => {
    if (e.target === sizeGuideModal) sizeGuideModal.classList.remove('open');
});

// ==========================================
// WELCOME POPUP
// ==========================================
const welcomePopup = $('#welcomePopup');
function showWelcomePopup() {
    if (localStorage.getItem('elegance_welcome_shown')) return;
    setTimeout(() => {
        welcomePopup?.classList.add('open');
        document.body.style.overflow = 'hidden';
    }, 5000);
}

function closeWelcome() {
    welcomePopup?.classList.remove('open');
    document.body.style.overflow = '';
    localStorage.setItem('elegance_welcome_shown', '1');
}

$('#welcomeClose')?.addEventListener('click', closeWelcome);
$('#welcomeSkip')?.addEventListener('click', closeWelcome);
welcomePopup?.addEventListener('click', (e) => {
    if (e.target === welcomePopup) closeWelcome();
});

$('#welcomeForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Tebrikler! İndirim kodunuz: HOSGELDIN15');
    closeWelcome();
});

showWelcomePopup();

// ==========================================
// COOKIE BAR
// ==========================================
const cookieBar = $('#cookieBar');
if (cookieBar && !localStorage.getItem('elegance_cookies')) {
    setTimeout(() => cookieBar.classList.add('visible'), 2000);
}

$('#cookieAccept')?.addEventListener('click', () => {
    localStorage.setItem('elegance_cookies', 'accepted');
    cookieBar?.classList.remove('visible');
});
$('#cookieDecline')?.addEventListener('click', () => {
    localStorage.setItem('elegance_cookies', 'declined');
    cookieBar?.classList.remove('visible');
});

// ==========================================
// COUPON CODE
// ==========================================
const validCoupons = {
    'ELEGANCE20': 20,
    'HOSGELDIN15': 15,
    'SEZON10': 10
};
let appliedCoupon = null;

$('#couponApply')?.addEventListener('click', () => {
    const input = $('#couponInput');
    const msg = $('#couponMsg');
    if (!input || !msg) return;

    const code = input.value.trim().toUpperCase();
    if (validCoupons[code]) {
        appliedCoupon = { code, discount: validCoupons[code] };
        msg.textContent = `✓ %${validCoupons[code]} indirim uygulandı!`;
        msg.className = 'coupon-msg success';
        renderCart();
    } else {
        appliedCoupon = null;
        msg.textContent = '✕ Geçersiz kupon kodu';
        msg.className = 'coupon-msg error';
    }
});

// ==========================================
// RECENTLY VIEWED
// ==========================================
let recentlyViewed = JSON.parse(localStorage.getItem('elegance_recent')) || [];

function addToRecentlyViewed(productId) {
    recentlyViewed = recentlyViewed.filter(id => id !== productId);
    recentlyViewed.unshift(productId);
    if (recentlyViewed.length > 6) recentlyViewed = recentlyViewed.slice(0, 6);
    localStorage.setItem('elegance_recent', JSON.stringify(recentlyViewed));
    renderRecentlyViewed();
}

function renderRecentlyViewed() {
    const container = $('#recentlyViewed');
    const grid = $('#rvGrid');
    if (!container || !grid || recentlyViewed.length === 0) return;

    container.style.display = 'block';
    grid.innerHTML = recentlyViewed.map(id => {
        const p = products.find(pr => pr.id === id);
        if (!p) return '';
        return `
            <div class="rv-item" onclick="openQuickView(${p.id})">
                <div class="rv-item-img"><img src="${p.image}" alt="${p.name}" loading="lazy"></div>
                <div class="rv-item-name">${p.name}</div>
                <div class="rv-item-price">₺${p.price.toLocaleString('tr-TR')}</div>
            </div>
        `;
    }).join('');
}
window.openQuickView = openQuickView;

// Patch openQuickView to track recently viewed
const _origOpenQuickView = openQuickView;
function patchedOpenQuickView(productId) {
    addToRecentlyViewed(productId);
    _origOpenQuickView(productId);
}
// Re-bind product card clicks to use patched version
function rebindProductClicks() {
    const grid = $('#productGrid');
    if (!grid) return;
    grid.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => patchedOpenQuickView(parseInt(card.dataset.id)));
    });
    grid.querySelectorAll('.product-quick-view').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            patchedOpenQuickView(parseInt(btn.dataset.id));
        });
    });
}

// ==========================================
// PATCH RENDER TO INCLUDE RECENTLY VIEWED TRACKING
// ==========================================
const _origRenderProducts = renderProducts;
window.renderProductsPatched = function(filter) {
    _origRenderProducts(filter);
    rebindProductClicks();
};
// Override filter buttons to use patched render
$$('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        $$('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        window.renderProductsPatched(btn.dataset.filter);
    });
});

// ==========================================
// PATCH CART RENDER FOR COUPON
// ==========================================
const _origRenderCart = renderCart;
window.renderCart = function() {
    _origRenderCart();
    // Apply coupon discount to totals
    if (appliedCoupon && cart.length > 0) {
        const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const discount = Math.round(subtotal * appliedCoupon.discount / 100);
        const shipping = subtotal >= 200000 ? 0 : 4999;
        const total = subtotal - discount + shipping;
        const subtotalEl = $('#cartSubtotal');
        if (subtotalEl) subtotalEl.innerHTML = `₺${subtotal.toLocaleString('tr-TR')} <small style="color:#27ae60;margin-left:6px;">-₺${discount.toLocaleString('tr-TR')}</small>`;
        const totalEl = $('#cartTotal');
        if (totalEl) totalEl.textContent = `₺${total.toLocaleString('tr-TR')}`;
    }
};
// Fix: override renderCart reference used by openCart
function openCartPatched() {
    window.renderCart();
    const cartDrawer = $('#cartDrawer');
    const cartBackdrop = $('#cartBackdrop');
    cartDrawer?.classList.add('open');
    cartBackdrop?.classList.add('open');
    document.body.style.overflow = 'hidden';
}
$('#cartToggle')?.removeEventListener('click', openCart);
$('#cartToggle')?.addEventListener('click', openCartPatched);

// ==========================================
// ESCAPE KEY (extended)
// ==========================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        sizeGuideModal?.classList.remove('open');
        closeWelcome();
    }
});

// ==========================================
// SERVICE WORKER REGISTRATION
// ==========================================
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
}

// ==========================================
// INIT
// ==========================================
renderProducts();
rebindProductClicks();
updateCartBadge();
updateWishlistBadge();
renderRecentlyViewed();
