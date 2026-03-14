
/*------------link to scroll down to the page---------------- */
document.getElementById("toggle-switch").addEventListener("click",
    function(){
        window.scrollTo({
            top:
            document.body.scrollHeight,
            behavior:"smooth"
        });
    });

    /*------------link to scroll down to the input field---------------- */
    document.getElementById("contact-info").addEventListener("click", function(event) {
        event.preventDefault();
        let inputField = document.getElementById("email");
        inputField.scrollIntoView({ behavior: "smooth" });
        inputField.focus(); // Cursor input box me automatically aa jayega
    });

    /*------------link to scroll down to the project section---------------- */
    document.getElementById("project-link").addEventListener("click", function(event) {
        event.preventDefault();
        let inputField = document.getElementById("project");
        inputField.scrollIntoView({ behavior: "smooth" });
        inputField.focus(); // Cursor input box me automatically aa jayega
    });

        /*------------link to scroll down to the form section---------------- */

    document.getElementById("hire-me").addEventListener("click", function(event) {
        event.preventDefault();
        let inputField = document.getElementById("email");
        inputField.scrollIntoView({ behavior: "smooth" });
        inputField.focus(); // Cursor input box me automatically aa jayega
    });
    /*------------link to scroll down to the form section---------------- */

    document.getElementById("hire-me-second").addEventListener("click", function(event) {
        event.preventDefault();
        let inputField = document.getElementById("email");
        inputField.scrollIntoView({ behavior: "smooth" });
        inputField.focus(); // Cursor input box me automatically aa jayega
    });

    // form validation

    document.getElementById("contactForm").addEventListener("submit", function(e){

e.preventDefault();

let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;
let subject = document.getElementById("subject").value;
let message = document.getElementById("message").value;

let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let phonePattern = /^[0-9]{10}$/;

if(!email.match(emailPattern)){
    alert("Please enter a valid email");
    return;
}

if(!phone.match(phonePattern)){
    alert("Phone number must be 10 digits");
    return;
}

emailjs.sendForm(
'service_3bjgfue',
'template_t461c5v',
this
).then(function(){

alert("Message sent successfully!");
document.getElementById("contactForm").reset();

}, function(error){

alert("Failed to send message");

});

});

(function(){
emailjs.init("Ii-S1qeam2g7hWk5D");
})();
