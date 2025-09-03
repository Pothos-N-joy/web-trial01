document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("site-title");
  let scale = 1;
  setInterval(() => {
    scale = scale === 1 ? 1.2 : 1;
    title.style.transform = `scale(${scale})`;
  }, 1000);
});
