document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown-menu");

    dropdown.addEventListener("change", function (event) {
        window.location.href = event.target.value;
    });
});

