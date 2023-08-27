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
document.getElementById('profile-card').addEventListener('submit', function(event) {
    const name = document.getElementById('name');
    const phone = document.getElementById('phone');
    const designation = document.getElementById('designation');
    
    let isValid = true;
    
    // Name validation
    if (name.value.trim() === '') {
        document.getElementById('name-error').textContent = 'Name is required.';
        isValid = false;
    } else {
        document.getElementById('name-error').textContent = '';
    }
    
    // Phone number validation
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone.value)) {
        document.getElementById('phone-error').textContent = 'Enter a valid 10-digit phone number.';
        isValid = false;
    } else {
        document.getElementById('phone-error').textContent = '';
    }
    
    // Designation validation
    if (designation.value.trim() === '') {
        document.getElementById('designation-error').textContent = 'Designation is required.';
        isValid = false;
    } else {
        document.getElementById('designation-error').textContent = '';
    }
    
    if (!isValid) {
        event.preventDefault();
    }
});

// Event listener to animate the navbar logo on click
document.querySelector('nav img').addEventListener('click', animateLogo);

