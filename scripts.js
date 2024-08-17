document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Sample validation for demo purposes
    if(username === "user" && password === "password123"){
        alert("Login successful!");
        // Redirect to the home page or dashboard
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }
});
