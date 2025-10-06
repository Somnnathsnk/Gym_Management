// Auto-hide notifications after 8 seconds
document.querySelectorAll('.notification').forEach((note, index) => {
  setTimeout(() => {
    note.style.opacity = '0';
    note.style.transform = 'translateX(50px)';
    setTimeout(() => note.remove(), 500);
  }, (index + 1) * 8000);
});
