const currentPage = window.location.pathname
const navLinks = document.querySelectorAll('nav a').
    forEach(link => {
        if (link.href.includes(`${currentPage}`)) {
            link.classList.add('active');
        }
    })
