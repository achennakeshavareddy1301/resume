document.addEventListener("DOMContentLoaded", function () {
    const sidebarToggle = document.querySelector("#sidebar-toggle");
    const sidebar = document.querySelector(".side-bar");

    sidebarToggle.addEventListener("click", function () {
        sidebar.classList.toggle("show");
    });
});
const profileCards = document.querySelectorAll('.profile-card');

function handleIntersection(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}

const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

profileCards.forEach(profileCard => {
  observer.observe(profileCard);
});
