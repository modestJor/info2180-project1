/* Add your JavaScript to this file */

window.onload = function() {
    const form = this.document.querySelector(".newsletter form");
    const input = this.document.querySelector(".newsletter input");
    const message = this.document.querySelector(".message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = input.value.trim();
        if (email === "") {
            message.textContent = "Please enter a valid email address.";
            message.style.color = "red";
            return;
        }
        else {
            message.textContent = "Thank you! Your email address " + email + " has been added to our mailing list!";
            message.style.color = "white";
        }

    });
};
