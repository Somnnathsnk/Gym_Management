// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDg5dXlQaRYnIHebUIfNuVv0ZCPjQwMZ8M",
  authDomain: "gym1-94081.firebaseapp.com",
  projectId: "gym1-94081",
  storageBucket: "gym1-94081.firebasestorage.app",
  messagingSenderId: "752491198464",
  appId: "1:752491198464:web:4ca3607fe005a403a000e5"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Elements
const btn = document.getElementById("actionBtn");
const toggleForm = document.getElementById("toggleForm");
const formTitle = document.getElementById("formTitle");
const messege = document.querySelector(".messege_box");
const forgotPasswordLink = document.getElementById("forgotPassword");

let isLogin = true;

// Toggle between Login / Register
toggleForm.addEventListener("click", (e) => {
  e.preventDefault();
  isLogin = !isLogin;
  formTitle.textContent = isLogin ? "Login" : "Register";
  btn.textContent = isLogin ? "Login" : "Register";
  toggleForm.innerHTML = isLogin
    ? `Don’t have an account? <a href="#">Register</a>`
    : `Already have an account? <a href="#">Login</a>`;
  messege.textContent = "";
});

// Handle Login/Register
btn.addEventListener("click", (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    showMessage("Please enter all fields!", "error");
    return;
  }

  if (isLogin) {
    // LOGIN
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        showMessage("✅ Login successful! Redirecting...", "created");
        setTimeout(() => window.location.href = "dashboard.html", 1500);
      })
      .catch((error) => {
        handleAuthError(error);
      });
  } else {
    // REGISTER
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        showMessage("🎉 Account created successfully!", "created");
      })
      .catch((error) => {
        handleAuthError(error);
      });
  }
});

// Forgot Password
forgotPasswordLink.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  if (!email) {
    showMessage("⚠️ Enter your email first!", "error");
    return;
  }
  sendPasswordResetEmail(auth, email)
    .then(() => {
      showMessage("📩 Password reset email sent!", "created");
    })
    .catch(() => {
      showMessage("❌ Failed to send reset email.", "error");
    });
});

// Helper: Show messages
function showMessage(msg, type) {
  messege.textContent = msg;
  messege.className = type;
}

// Helper: Handle Firebase errors
function handleAuthError(error) {
  let msg;
  switch (error.code) {
    case "auth/user-not-found":
      msg = "No account found. Please register first.";
      break;
    case "auth/wrong-password":
      msg = "Incorrect password!";
      break;
    case "auth/invalid-email":
      msg = "Invalid email format!";
      break;
    case "auth/email-already-in-use":
      msg = "Email already registered!";
      break;
    case "auth/weak-password":
      msg = "Password must be at least 6 characters!";
      break;
    default:
      msg = "Something went wrong. Try again.";
  }
  showMessage(msg, "error");
}
// Example login.js
function loginUser() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;

  if (username && email) {
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    window.location.href = "dashboard.html";
  } else {
    alert("Please enter both username and email.");
  }
}
