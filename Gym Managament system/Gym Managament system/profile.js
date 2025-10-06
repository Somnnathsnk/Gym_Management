// Load saved profile info from localStorage
window.onload = function () {
  let username = localStorage.getItem("username");
  let email = localStorage.getItem("email");
  let profileImage = localStorage.getItem("profileImage");

  if (username) document.getElementById("usernameDisplay").innerText = username;
  if (email) document.getElementById("emailDisplay").innerText = email;
  if (profileImage) document.getElementById("profileImage").src = profileImage;
};

// Update username & email
function updateProfile() {
  let newUsername = document.getElementById("newUsername").value;
  let newEmail = document.getElementById("newEmail").value;

  if (newUsername) {
    localStorage.setItem("username", newUsername);
    document.getElementById("usernameDisplay").innerText = newUsername;
  }

  if (newEmail) {
    localStorage.setItem("email", newEmail);
    document.getElementById("emailDisplay").innerText = newEmail;
  }

  alert("Profile updated successfully ✅");
}

// Handle profile image upload
document.getElementById("imageUpload").addEventListener("change", function () {
  const reader = new FileReader();
  reader.onload = function () {
    const dataURL = reader.result;
    localStorage.setItem("profileImage", dataURL);
    document.getElementById("profileImage").src = dataURL;
  };
  reader.readAsDataURL(this.files[0]);
});

// Logout
function logout() {
  localStorage.removeItem("username");
  localStorage.removeItem("email");
  localStorage.removeItem("profileImage");
  window.location.href = "login.html";
}
