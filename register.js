document.addEventListener("DOMContentLoaded", () => {
    const password = document.getElementById("password");
    const toggleBtn = document.getElementById("toggleBtn");

    toggleBtn.addEventListener("click", () => {
        if (password.type === "password") {
            password.type = "text";
            toggleBtn.innerText = "Hide";
        } else {
            password.type = "password";
            toggleBtn.innerText = "Show";
        }
    });
});
