// retrieving HTML element from the DOM
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//All function
// functions to update for class and  message for errors
function showError(input , message) {
    // get the parentElement of the input field (.form-control)
        const formControl = input.parentElement;
    // replace the class-add error
        formControl.className = 'form-control error';
    // Get the small element for the error message
        const small = formControl.queryselector('small');
    // replace the text for small element using the input message 
        small.innertext = message;
}

//Function to check if email is valid
function isValidEmail(email){
    (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
}

// function to update class for success
function showsuccess(input) {
    const formControl=input.parentElement;
     // replace the class-add success
     formControl.className = 'form-control success';
}

// event listener
// create event listener for submit button 
form.addEventListener('submit', function(e) {
    // stop page on reloading to submit
    e.prventdefault();

    //Check to see if field meet required field required
    // check if username input is empty
    if (username.value=== '') {
        showerror (username,'username is required');
    } else {
        showsuccess(username);
    }
    // check if email input is empty
    if (email.value=== '') {
        showerror (eamil,'email is required');
    }else if is (!isValidEmail( email.value)) {
        showError(email,'Email is invalid')
    }

    else {
        showsuccess(eamil);
    }

    // check if password input is empty
    if (password.value=== '') {
        showerror (password,'password is required');
    } else {
        showsuccess(password);
    }

    // check if password input is empty
    if (password2.value=== '') {
        showerror (password2,'confirm password is required');
    } else {
        showsuccess(password2);
    }
})