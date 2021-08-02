// SHow And Hide Side Menu
const navMenu = document.getElementById('nav-menu');
const toggleButton = document.getElementById('toggle-icon');
const closeButton = document.getElementById('nav-close');

function clickToggle() {
    navMenu.classList.toggle('show');
}

toggleButton.addEventListener('click', clickToggle);

closeButton.addEventListener('click', clickToggle);


// ======== ACTIVE AND REMOVE MENU =================
const navLink = document.querySelectorAll('.nav__link');

navLink.forEach(function (n) {
    n.addEventListener('click', function () {
        // remove
        navLink.forEach(function (n) {
            n.classList.remove('active');
        })

        n.classList.add('active');
    })
})