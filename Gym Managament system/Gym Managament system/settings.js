const darkModeToggle = document.getElementById("darkModeToggle");
const emailNotif = document.getElementById("emailNotif");
const smsNotif = document.getElementById("smsNotif");
const languageSelect = document.getElementById("languageSelect");

// Load saved preferences
window.onload = () => {
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeToggle.checked = true;
  }

  emailNotif.checked = localStorage.getItem("emailNotif") === "true";
  smsNotif.checked = localStorage.getItem("smsNotif") === "true";
  languageSelect.value = localStorage.getItem("language") || "en";
};

// Toggle dark mode
darkModeToggle.addEventListener("change", () => {
  if (darkModeToggle.checked) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
  }
});

// Save notifications preference
emailNotif.addEventListener("change", () => {
  localStorage.setItem("emailNotif", emailNotif.checked);
});

smsNotif.addEventListener("change", () => {
  localStorage.setItem("smsNotif", smsNotif.checked);
});

// Save language preference
languageSelect.addEventListener("change", () => {
  localStorage.setItem("language", languageSelect.value);
});
