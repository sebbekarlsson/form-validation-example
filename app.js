document.querySelector("input[type='submit']").addEventListener('click', (event) => {
    event.preventDefault();
    

    const emailField = document.querySelector("input[name='email']");

    const firstnameField = document.querySelector("input[name='firstname']");

    if (!emailField.value) {
        alert("You need to enter an email!");
    }
    else if (firstnameField.value.length < 3) {
        alert("Firstname must be at least 3 characters!");
    } else {
        document.getElementById('myForm').submit();
    }

    
});