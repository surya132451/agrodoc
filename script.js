// Default Admin Credentials
const DEFAULT_USERNAME = "admin";
const DEFAULT_PASSWORD = "1234";

// Login Function
function login() {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    // Check if user exists in local storage
    let storedUser = localStorage.getItem(username);
    let storedPassword = storedUser ? JSON.parse(storedUser).password : null;

    if ((username === DEFAULT_USERNAME && password === DEFAULT_PASSWORD) || (storedPassword && password === storedPassword)) {
        alert("Login Successful!");
        localStorage.setItem("loggedInUser", username); // Store logged-in user
        window.location.href = "./dashboard.html"; // Redirect to dashboard
    } else {
        alert("Invalid username or password.");
    }
}

// Signup Function
function signup() {
    let fullname = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let username = document.getElementById("signup-username").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirm-password").value.trim();

    if (fullname === "" || email === "" || username === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Store user in local storage
    let userData = { fullname, email, password };
    localStorage.setItem(username, JSON.stringify(userData));

    alert(`Signup Successful! Welcome, ${fullname}! You can now log in.`);
    window.location.href = "./index.html"; // Redirect to login page
}

// Email Validation Function
function validateEmail(email) {
    let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

function navigateTo(page) {
    window.location.href = page; // No need for "./" since all files are in the same folder
}
// Logout function
function logout() {
    alert("You have been logged out.");
    window.location.href = "index.html";  // Redirect to login
}

// Logout Function
function logout() {
    localStorage.removeItem("loggedInUser");
    alert("You have been logged out.");
    window.location.href = "./index.html"; // Redirect to login page
}

// Check if user is logged in before allowing access to dashboard
function checkLogin() {
    let loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) {
        alert("Please log in first!");
        window.location.href = "./index.html"; // Redirect to login page
    }
}
