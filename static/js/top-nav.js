const currentPage = window.location.pathname
const navLinks = document.querySelectorAll('.middle-nav a').
    forEach(() => {
        if (currentPage === "/") {
            document.getElementById("home").className = "active";
        }
        else if (currentPage.includes("/contact-us")) {
            document.getElementById("contact-us").className = "active";
        }
        else if (currentPage.includes("/about")) {
            document.getElementById("about").className = "active";
        }
        else if (currentPage.includes("/faq")) {
            document.getElementById("faq").className = "active";
        }
        else {

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