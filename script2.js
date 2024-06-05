function sendResetEmail() {
    var email = document.getElementById("email").value;

    // Here, you would typically send an AJAX request to your server
    // to initiate the password reset process and handle the email sending.
    // For this example, let's just show a message indicating that the email has been sent.
    document.getElementById("message").innerHTML = "An email has been sent to " + email + " with instructions to reset your password.";
}
