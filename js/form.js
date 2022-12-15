//javascript to validate the form
function check() {
    var name = document.getElementById("fullname").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    //when name is null, there will be an alert
    if (name == "") {
        alert("name shouldn't be null");
        return false;
    //when phone is null, there will be an alert
    } else if (phone == "") {
        alert("phone number shouldn't be null");
        return false;
    //when email is null, there will be an alert
    } else if (email == "") {
        alert("email shouldn't be null");
        return false;
    // if the form has been fully filled, it will show a successful prompt
    } else {
        alert("Submit successfully!");
    }
}