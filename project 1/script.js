
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
function checkEmail(input) {
    (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
    if ( re.test(input.value.trim () ) ) {
        showSuccess(input);
    } else {
        showError(input,` please provide a valid email`)
    }
}

// function to update class for success
function showsuccess(input) {
    const formControl=input.parentElement;
     // replace the class-add success
     formControl.className = 'form-control success'
}

//function to check if required field have data
function checkRequired(inputarray) {
    inputarray.foreach(function(input)  {
        if (input.value === '') {
            console.log(input.id);
            showError(input,`${getField(input)} is required`);
        } else {
            showsuccess(input);
        }
    });
}

//function to check length of input field
function checklength(input,min,max) {
    if (input.value.length < min ) {
        showError(input,`${getFieldId(input)} needs to be at least ${min} characters`);
    } else if (input.value.length > max)
        showError(input,`${getfieldId(input)} needs to be less ${min} characters`);
}     else {
    showsuccess(input);
}

//function to check if password and confirm password
function checkpasswordmatch(input1,input2) {
    if (input1.value !== input2.value) {
        showError(input2,"password don't match")
    }
}

//function to get id of the input field with proper case
function getFieldID(input) {
    return input.id.carAt(0).toUpperCase() + input.id.slice(1);
}

// create event listener for submit button 
form.addEventListener('submit', function(e) {
    // stop page on reloading to submit
    e.prventdefault();

    checkRequired([username,email,password,password2]);
    checklength(username,3,10);
    checklength(password,6,10);
    checkEmail(email);
    checkpasswordmatch(password,password2);

})