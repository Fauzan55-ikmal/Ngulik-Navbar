/* ==========================================================================
   TOKOPEDIA CLONE - MAIN JAVASCRIPT
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. DROPDOWN KATEGORI HEADER (HOVER INTERACTION)
   -------------------------------------------------------------------------- */
const catContainer = document.getElementById("catContainer");
const catDropdown = document.getElementById("catDropdown");
let closeTimer;

if (catContainer && catDropdown) {
  // Buka dropdown saat kursor masuk ke tombol Kategori
  catContainer.addEventListener("mouseenter", () => {
    clearTimeout(closeTimer);
    catDropdown.classList.add("show");
    catContainer.classList.add("active");
  });

  // Tunda penutupan saat kursor keluar dari tombol Kategori
  catContainer.addEventListener("mouseleave", () => {
    closeTimer = setTimeout(() => {
      catDropdown.classList.remove("show");
      catContainer.classList.remove("active");
    }, 250);
  });

  // Batalkan penutupan jika kursor masuk ke area dropdown
  catDropdown.addEventListener("mouseenter", () => {
    clearTimeout(closeTimer);
  });

  // Tutup dropdown saat kursor meninggalkan area dropdown
  catDropdown.addEventListener("mouseleave", () => {
    closeTimer = setTimeout(() => {
      catDropdown.classList.remove("show");
      catContainer.classList.remove("active");
    }, 250);
  });
}

/* --------------------------------------------------------------------------
   2. SWITCHER MENU SIDEBAR KATEGORI (DROPDOWN CONTENT)
   -------------------------------------------------------------------------- */
const sidebarItems = document.querySelectorAll(".cat-sidebar .sidebar-item");
const catPanels = document.querySelectorAll(".cat-panel");

sidebarItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    const targetId = item.getAttribute("data-target");
    if (!targetId) return;

    // Reset status aktif pada semua item & panel
    sidebarItems.forEach((i) => i.classList.remove("active"));
    catPanels.forEach((p) => p.classList.remove("active"));

    // Aktifkan item & panel yang sedang di-hover
    item.classList.add("active");
    const targetPanel = document.getElementById(targetId);
    if (targetPanel) {
      targetPanel.classList.add("active");
    }
  });
});

/* --------------------------------------------------------------------------
   3. DROPDOWN KERANJANG (CART)
   -------------------------------------------------------------------------- */
const cartContainer = document.querySelector(".cart-container");
const cartTrigger = document.querySelector(".cart-trigger");
const cartDropdown = document.querySelector(".cart-dropdown");

if (cartTrigger && cartDropdown) {
  // Toggle dropdown keranjang saat ikon diklik
  cartTrigger.addEventListener("click", (e) => {
    e.stopPropagation();
    cartDropdown.classList.toggle("show");
  });

  // Tutup dropdown keranjang jika klik di luar area keranjang
  document.addEventListener("click", (e) => {
    if (cartContainer && !cartContainer.contains(e.target)) {
      cartDropdown.classList.remove("show");
    }
  });
}

/* --------------------------------------------------------------------------
   4. DROPDOWN & INPUT SEARCH BAR
   -------------------------------------------------------------------------- */
const searchContainer = document.getElementById("searchContainer");
const searchInput = document.getElementById("searchInput");

if (searchInput && searchContainer) {
  // Munculkan dropdown pencarian saat input di-fokus
  searchInput.addEventListener("focus", () => {
    searchContainer.classList.add("show-dropdown");
  });

  // Tutup dropdown jika klik di luar area pencarian
  document.addEventListener("click", (e) => {
    if (!searchContainer.contains(e.target)) {
      searchContainer.classList.remove("show-dropdown");
    }
  });
}

/* --------------------------------------------------------------------------
   5. MODAL & DROPDOWN LOKASI
   -------------------------------------------------------------------------- */
const locationWrapper = document.querySelector(".location-wrapper");
const locationModal = document.getElementById("locationModal");
const closeLocationModal = document.getElementById("closeLocationModal");
const locationInput = document.getElementById("locationInput");
const searchBoxWrapper = document.getElementById("searchBoxWrapper");
const locationDropdown = document.getElementById("locationDropdown");

// Buka modal lokasi
if (locationWrapper && locationModal) {
  locationWrapper.addEventListener("click", () => {
    locationModal.classList.add("show");
  });
}

// Tutup modal lokasi via tombol (X)
if (closeLocationModal && locationModal) {
  closeLocationModal.addEventListener("click", () => {
    locationModal.classList.remove("show");
  });
}

// Tutup modal lokasi saat area backdrop di luar modal diklik
window.addEventListener("click", (e) => {
  if (e.target === locationModal) {
    locationModal.classList.remove("show");
  }
});

// Focus & Dropdown pada Input Lokasi di dalam Modal
if (locationInput && locationDropdown && searchBoxWrapper) {
  locationInput.addEventListener("focus", () => {
    locationDropdown.classList.add("show");
    searchBoxWrapper.classList.add("active");
  });

  window.addEventListener("click", (e) => {
    if (!searchBoxWrapper.contains(e.target) && !locationDropdown.contains(e.target)) {
      locationDropdown.classList.remove("show");
      searchBoxWrapper.classList.remove("active");
    }
  });
}
