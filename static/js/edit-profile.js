const profile = {
    name: "First Example Colleges",
    address: "Gbagada, Lagos",
}

document.querySelector(".user-name").innerText = profile.name
document.querySelector(".user-address").innerText = profile.address

const showPassword = () => {
    let x = document.querySelectorAll(".password");

    for (let i = 0; i < x.length; i++) {
        if (x[i].type === "password") {
            x[i].type = "text";
        }
        else {
            x[i].type = "password";
        }
    }
}