function registerEvent() {
    // Get user input
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    // Validate input
    if (name === "" || email === "") {
        alert("Please enter both your name and email to register.");
        return;
    }

    // Simulate successful registration
    alert(`Thank you, ${name}, for registering for Lenawei Safaris! We will contact you at ${email} with more details.`);

    // Clear the form after registration
    document.getElementById("registrationForm").reset();
}
