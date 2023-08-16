document.addEventListener("DOMContentLoaded", function () {
    const sidebarToggle = document.querySelector("#sidebar-toggle");
    const sidebar = document.querySelector(".side-bar");

    sidebarToggle.addEventListener("click", function () {
        sidebar.classList.toggle("show");
    });
});
