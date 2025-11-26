const nesa = document.querySelector(".instagram");
const fargol = document.querySelector(".website");
const aboutUs = document.querySelector(".aboutus");
const io = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      // فقط کلاس in-view رو اضافه می‌کنیم
      entry.target.classList.add("in-view");

      obs.unobserve(entry.target);
    });
  },
  { threshold: 0.5, rootMargin: "0px 0px -5% 0px" }
);

if (nesa) io.observe(nesa);
if (fargol) io.observe(fargol);
if (aboutUs) io.observe(aboutUs);
