document.querySelectorAll(".start-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.parentElement;
    const taskName = card.querySelector("h2").innerText;
    const progressBar = card.querySelector(".progress-bar span");

    let width = parseInt(progressBar.style.width);
    if (width < 100) {
      width += 10;
      progressBar.style.width = width + "%";
    }

    alert(`✅ You started: ${taskName}`);
  });
});
// Auto-hide notifications after 8 seconds
setTimeout(() => {
  document.querySelectorAll(".notification").forEach((notif) => {
    notif.style.opacity = 0;
    setTimeout(() => notif.remove(), 600);
  });
}, 8000);