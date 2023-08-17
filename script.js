const profileCards = document.querySelectorAll('.profile-card');

// Function to check if an element is in view
function isInView(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to show the profile cards when they are in view
function showCards() {
    profileCards.forEach(profileCard => {
        if (isInView(profileCard)) {
            profileCard.classList.add('show');
        }
    });
}

// Event listener to show the profile cards when the page is scrolled
window.addEventListener('scroll', showCards);

// Function to animate the navbar logo on click
function animateLogo() {
    const logo = document.querySelector('nav img');
    logo.classList.add('animate');
    setTimeout(() => {
        logo.classList.remove('animate');
    }, 1000);
}

// Event listener to animate the navbar logo on click
document.querySelector('nav img').addEventListener('click', animateLogo);
