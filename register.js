document.getElementById("registerForm").addEventListener("submit", function(event){
    event.preventDefault();
    
    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;
    
    // Example validation for registration
    if(newUsername && newPassword){
        alert("Registration successful!");
        window.location.href = "Login1.html";  // Redirect to login page
    } else {
        alert("Please fill in all fields.");
    }
});
