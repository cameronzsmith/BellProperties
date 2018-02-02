let attempts = 3; // Stores the amount of attempts the user has left.

// Validates user input when user clicks log in.
function validate() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username == "SteveBell" && password == "6fXKOrYdo$gE" ) {
        window.location = "admin.html"; // Redirect to another page
        return true;
    } else {
        attempts--; // Reduce the number of attempts allowed.
        
        if(attempts == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;

            return false;
        }
    }
}