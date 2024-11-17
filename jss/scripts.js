// JavaScript for adding basic interactivity to the website

// Handle form submission (for demonstration purposes)
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission
    alert('Thank you for signing up!');
  });
  
  // Add smooth scrolling to navigation links
  document.querySelectorAll('.nav a').forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1); // Get target ID
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth', // Smooth scroll effect
          block: 'start',
        });
      }
    });
  });
  
  // Toggle navigation menu on smaller screens (if applicable)
  const navToggle = document.querySelector('.nav-toggle');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      document.querySelector('.nav').classList.toggle('active');
    });
  }
  document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.getElementById("login-btn");
  const signupButton = document.getElementById("signup-btn");
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const authSection = document.getElementById("auth-section");

  const switchToLogin = document.getElementById("switch-to-login");
  const switchToSignup = document.getElementById("switch-to-signup");

  // Show Login Form
  loginButton.addEventListener("click", () => {
    authSection.classList.add("active");
    loginForm.classList.add("active");
    signupForm.classList.remove("active");
  });

  // Show Signup Form
  signupButton.addEventListener("click", () => {
    authSection.classList.add("active");
    signupForm.classList.add("active");
    loginForm.classList.remove("active");
  });

  // Switch from Signup to Login
  switchToLogin.addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.add("active");
    signupForm.classList.remove("active");
  });

  // Switch from Login to Signup
  switchToSignup.addEventListener("click", (e) => {
    e.preventDefault();
    signupForm.classList.add("active");
    loginForm.classList.remove("active");
  });
});

  