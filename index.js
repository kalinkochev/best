// Toggle the mobile menu when the hamburger menu is clicked
document.querySelector('.navbar-toggler').addEventListener('click', function () {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
    } else {
        navbarCollapse.classList.add('show');
    }
});
// Add a function to handle the form submission
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Show the thank you message in an alert
    alert('Thank you for submitting!');
});