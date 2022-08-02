// this program indicates which screen is active on the left side navbar

const currentPage = window.location.pathname
const navLinks = document.querySelectorAll('aside a').
    forEach(link => {
        if (link.href.includes(`${currentPage}`)) {
            link.classList.add('active');
        }
    })