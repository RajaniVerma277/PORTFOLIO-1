
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
        let inputField = document.getElementById("input");
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