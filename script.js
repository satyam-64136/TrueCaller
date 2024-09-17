document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    const phoneNumber = document.getElementById("phoneNumber").value;

    // Checking if input contains only numbers (regex for digits only)
    const isValid = /^[0-9]+$/.test(phoneNumber);

    if (isValid) {
        document.getElementById("error-message").style.display = "none";
        alert("Phone number is valid: " + phoneNumber);
    } else {
        document.getElementById("error-message").style.display = "block";
    }
});
