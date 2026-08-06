// 1. SELECT ELEMENT
const hamburgerBtn = document.querySelector(".gh-nav-left .gh-btn-icon");

// 2. EVENT LISTENER
hamburgerBtn.addEventListener("click", () => {
  console.log("Hamburger menu diklik, bray!");

  // Memberi/mencabut class active sebagai penanda interaksi
  hamburgerBtn.classList.toggle("active");
});
