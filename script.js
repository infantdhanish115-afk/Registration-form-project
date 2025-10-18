document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationform");
  const message = document.getElementById("message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("conform_password").value;
    const gender = document.getElementById("gender").value;
    const phone = document.getElementById("phone").value.trim();
    const check = document.getElementById("check").checked;

  
    message.textContent = "";
    

  
    if (!fullname || !email || !password || !confirmPassword || !gender || !phone) {
      showError("Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
      showError("Enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      showError("Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      showError("Passwords do not match.");
      return;
    }

    if (phone.length < 10) {
      showError("Enter a valid 10-digit phone number.");
      return;
    }

    if (!check) {
      showError("Please agree to the terms & conditions.");
      return;
    }

    showSuccess("Registration Successful!");
    form.reset();
  });

  function showError(text) {
    message.textContent = text;
    message.classList.add();
  }

  function showSuccess(text) {
    message.textContent = text;
    message.classList.add();
  }
});
