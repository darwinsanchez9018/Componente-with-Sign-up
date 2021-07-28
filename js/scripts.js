const form  = document.getElementById("form");
const inputs = form.querySelectorAll(".form__field");
const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



const validateForm = () => {
    inputs.forEach(input => {
        if (
            input.firstElementChild.value.trim() === "" &&
            input.firstElementChild.name !== "email"
        ) {
            input.classList.add("form__field--error");
        } else {
            input.classList.remove("form__field--error");
        }
    });

    if (!emailRegex.test(form.email.value.toLowerCase().trim())) {
        form.email.parentElement.classList.add("form__field--error");
    } else {
        form.email.parentElement.classList.remove("form__field--error");
    }
};

form.addEventListener("submit", e => {
    e.preventDefault();
    validateForm();
});
