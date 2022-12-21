let navbarDiv = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        navbarDiv.classList.add('navbar-cng');
    } else {
        navbarDiv.classList.remove('navbar-cng');
    }
})

const navbarCollapseDiv = document.querySelector('#navbar-collapse');
const navbarShowBtn = document.querySelector('#navbar-show-btn');
const navbarCloseBtn = document.querySelector('#navbar-close-btn');

// Show navbar
navbarShowBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.add('navbar-collapse-rmw');
})

// Hide sidebar
navbarCloseBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.remove('navbar-collapse-rmw')
})

document.addEventListener('click', () => {
    if (e.target.id != "navbar-collapse" && e.target.id != "navbar-show-btn" && e.target.parentElement.id != "navbar-show-btn") {
        navbarCollapseDiv.classList.remove('navbar-collapse-rmw')
    }
})

// stop transition and animation during window resizing
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper')
    }, 400);
})