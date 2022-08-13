const currentPage = window.location.pathname
const navLinks = document.querySelectorAll('.middle-nav a').
    forEach(link => {
        const a = link.href.split("'")[1]
        if (currentPage.includes(a)) {
            link.classList.add('active');
            console.log(a)
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