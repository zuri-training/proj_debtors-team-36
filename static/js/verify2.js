const inputs = document.querySelectorAll(".code input");
let code = "";

const handleOtpPaste = (e) => {
    const data = e.clipboardData.getData("text");
    const value = data.split("");
    if (value.length === inputs.length) {
        inputs.forEach((input, index) => input.value = value[index]);
    }
}

const handleOtp = (e) => {
    const input = e.target;
    let value = input.value;
    input.value = "";
    input.value = value ? value[0] : "";

    let fieldIndex = input.dataset.index;
    if (value.length > 0 && fieldIndex < inputs.length - 1) {
        input.nextElementSibling.focus();
    }

    if (e.key === "Backspace" && fieldIndex > 0) {
        input.previousElementSibling.focus();
    }
    // console.log("clicked")
}


const submit = () => {
    inputs.forEach((input) => {
        code += input.value;
        // input.disabled = true;
        input.classList.add("disabled");
    })
    console.log(code);
    if (code.length < 6) {
        console.log("otp incomplete")
        // document.getElementById("otp").classList.add("err");
    }
    else {
        console.log("Submitting.....");
        if (code === "123456") {
            location.href = 'verification-sucess.html'
        }
        else {
            location.href = 'verification-fail.html'
        }

        code = "";
    }
}

inputs.forEach((input, index) => {
    input.dataset.index = index;
    input.addEventListener("paste", handleOtpPaste);
    input.addEventListener("keyup", handleOtp);
})