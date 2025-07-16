
    // buttons
    const loginbutton = document.getElementById("login-button");
    const signupbutton = document.getElementById("signup-button");
   
    // login page or sign up page
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
 
 
    loginbutton.addEventListener("click", () => {
      alert("Go to login page")
      loginForm.classList.remove("hidden");
      signupForm.classList.add("hidden");
    });
 
 
    signupbutton.addEventListener("click", () => {
      alert("Go to signup page")
      signupForm.classList.remove("hidden");
      loginForm.classList.add("hidden");
    });
 
    // when user click on sign up button signup form is submitted
    document.getElementById("signup-form").addEventListener("submit", function (e) {
      e.preventDefault();
     
      const username = document.getElementById("signup-username").value.trim();
      const email = document.getElementById("signup-email").value.trim();
      const password = document.getElementById("signup-password").value;
      const confirm = document.getElementById("signup-confirm").value;
      const message = document.getElementById("signup-message");
 
      if (!username || !email || !password || !confirm) {
 
        message.textContent = "Please fill all fields.";
        return;
      }
     
      if (password !== confirm) {
 
        message.textContent = "Passwords do not match.";
        return;
      }
     
 
      const user = { username, email, password };
 
      localStorage.setItem("user", JSON.stringify(user));
 
      message.style.color = "green";
      message.textContent = "Signup successful! You can now log in.";
 
      document.getElementById("signup-form").reset();
    });
 
    document.getElementById("login-form").addEventListener("submit", function (e) {
      e.preventDefault();
 
      const username = document.getElementById("login-username").value.trim();
      const password = document.getElementById("login-password").value;
      const message = document.getElementById("login-message");
 
     
      const storedUser = JSON.parse(localStorage.getItem("user"));
 
 
      if (!storedUser || storedUser.username !== username || storedUser.password !== password) {
 
        message.textContent = "Invalid credentials!";
        return;
      }
 
      message.style.color = "red";
      message.textContent = ` Welcome, ${storedUser.username}!`;
    });
    
    $('#login button').remove