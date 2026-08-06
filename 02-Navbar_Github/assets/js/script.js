// 1. SELECT ELEMENT
const hamburgerBtn = document.querySelector(".gh-nav-left .gh-btn-icon");

// 2. EVENT LISTENER
hamburgerBtn.addEventListener("click", () => {
  console.log("Hamburger menu diklik, bray!");

  // Memberi/mencabut class active sebagai penanda interaksi
  hamburgerBtn.classList.toggle("active");
});

// 3. SELECT SEARCH BUTTON
const searchBtn = document.querySelector(".gh-search-btn");

// 4. EVENT LISTENER KEYBOARD SHORTCUT (Tekan tombol '/')
document.addEventListener("keydown", (event) => {
  // Cek apakah tombol yang ditekan adalah '/' dan user sedang tidak di input teks
  if (event.key === "/" && document.activeElement.tagName !== "INPUT") {
    event.preventDefault(); // Mencegah karakter '/' ketik sembarangan
    console.log("Shortcut / berhasil dipicu!");
    searchBtn.click(); // Simulasi klik tombol search
  }
});

// Event klik pada tombol search
searchBtn.addEventListener("click", () => {
  alert("Search bar dipicu! Nanti bisa dibuka modal pencariannya di sini.");
});
