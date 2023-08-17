function showCardsOnLoad() {
    profileCards.forEach(profileCard => {
        profileCard.classList.add('show');
    });
}

// Event listener to show the profile cards when the page is loaded
window.addEventListener('load', showCardsOnLoad);

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
