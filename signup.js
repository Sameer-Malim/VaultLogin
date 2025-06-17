document.addEventListener("DOMContentLoaded", function () {
  // SIGNUP HANDLER
  const signupForm = document.querySelector("#signup-form");
  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();

      let name = document.querySelector("#signup-name").value;
      let email = document.querySelector("#signup-email").value;
      let password = document.querySelector("#signup-password").value;

      let user = {
        name: name,
        email: email,
        password: password,
      };

      localStorage.setItem("vaultUser", JSON.stringify(user));
      window.location.href = "login.html";
    });
  }

  // LOGIN HANDLER
  const loginForm = document.querySelector("#login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      let email = document.querySelector("#login-email").value;
      let password = document.querySelector("#login-password").value;

      let savedUser = JSON.parse(localStorage.getItem("vaultUser"));

      if (savedUser && savedUser.email === email && savedUser.password === password) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "dashboard.html";
      } else {
        document.querySelector("#error").textContent = "Invalid Email or Password.";
      }
    });
  }

  // DASHBOARD HANDLER
  const welcomeMessage = document.querySelector("#welcome-message");
  const logoutBtn = document.querySelector("#logout-btn");

  if (welcomeMessage && logoutBtn) {
    let isLoggedIn = localStorage.getItem("loggedIn");

    if (isLoggedIn !== "true") {
      window.location.href = "index.html";
    } else {
      let user = JSON.parse(localStorage.getItem("vaultUser"));
      welcomeMessage.textContent = "Welcome, " + user.name + "!";
    }

    logoutBtn.addEventListener("click", function () {
      console.log("Logout button clicked"); // Debug
      localStorage.removeItem("loggedIn");
      window.location.href = "index.html";
    });
  }
});
