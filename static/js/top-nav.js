const currentPage = window.location.pathname
const navLinks = document.querySelectorAll('nav a').
    forEach(link => {
        if (link.href.includes(`${currentPage}`)) {
            link.classList.add('active');
        }
    })


// if (innerWidth <= 576) {
//     document.getElementById("aside").className = "hide"
// }


const showTopNav = () => {
    document.getElementById("aside").className = "show"
}

const hideTopNav = () => {
    document.getElementById("aside").className = "hide"
}