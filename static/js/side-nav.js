// this program indicates which screen is active on the left side navbar

const currentPage = window.location.pathname
const navLinks = document.querySelectorAll('aside a').
    forEach(link => {
        if (link.href.includes(`${currentPage}`)) {
            link.classList.add('active');
            link.setAttribute('id', 'active')
        }
    })

if (innerWidth <= 576) {
    document.getElementById("aside").className = "hide"
}


const showNav = () => {
    document.getElementById("aside").className = "show"
    console.log('show')
}

const hideNav = () => {
    document.getElementById("aside").className = "hide"
    console.log('hidden')
}
