/* ===== 1. Slide sambutan (3 titik) ===== */
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let indeks = 0;
let timer;

function tampilkanSlide(i) {
  indeks = i;
  slides.forEach((s, n) => s.classList.toggle("aktif", n === i));
  dots.forEach((d, n) => d.classList.toggle("aktif", n === i));
}
function mulaiOtomatis() {
  clearInterval(timer);
  timer = setInterval(() => tampilkanSlide((indeks + 1) % slides.length), 4000); // 4000 = 4 detik
}
dots.forEach((d, n) => d.addEventListener("click", () => { tampilkanSlide(n); mulaiOtomatis(); }));
if (slides.length) mulaiOtomatis();

/* ===== 2. Tombol lihat/sembunyikan password ===== */
document.querySelectorAll(".toggle-pw").forEach((btn) => {
  btn.addEventListener("click", () => {
    const input = document.getElementById(btn.dataset.target);
    const tersembunyi = input.type === "password";
    input.type = tersembunyi ? "text" : "password";
    btn.textContent = tersembunyi ? "Sembunyi" : "Lihat";
  });
});