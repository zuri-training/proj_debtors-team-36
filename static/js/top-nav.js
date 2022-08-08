const currentPage = window.location.pathname
const navLinks = document.querySelectorAll('nav a').
    forEach(link => {
        if (link.href.includes(`${currentPage}`)) {
            link.classList.add('active');
        }
    })


if (innerWidth <= 576) {
    document.getElementById("top-dropdown").className = "hide"
}

const showTopNav = () => {
    const drop = document.getElementById("top-dropdown");
    if (drop.className === "show") {
        drop.className = "hide"
    }
    else {
        drop.className = "show"
    }
}

const hideTopNav = () => {
    document.getElementById("top-dropdown").className = "hide"
}

// document.querySelector(".dropdown-btn").setAttribute("onclick", hideTopNav())