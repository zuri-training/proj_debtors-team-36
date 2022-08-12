let cac = null;
let id = null;
let confirmed = false;
// console.log(window.innerWidth)

if (window.innerWidth <= 576) {
    const doc = document.querySelector("#cac img");
    doc.setAttribute("src", "./img/kyc-cac-mobile.svg")
    const id = document.querySelector("#school_id img");
    id.setAttribute("src", "./img/kyc-id-mobile.svg")
}
else {
    const doc = document.querySelector("#cac img");
    doc.setAttribute("src", "./img/kyc-cac.svg")
    const id = document.querySelector("#school_id img");
    id.setAttribute("src", "./img/kyc-id.svg")
}

const importCac = () => {      // imports the file
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = _this => {
        cac = Array.from(input.files)[0];    // to get the file from local storage
        change_cac();
    };
    input.click();
}

const importID = () => {      // imports the file
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = _this => {
        id = Array.from(input.files)[0];    // to get the file from local storage
        change_id()
    };
    input.click();
}

const remove_cac = () => {
    document.getElementById('before_cac_upload').classList.remove("hide");
    const remove = document.querySelector('.cac_upload');
    cac = null;
    return remove.remove()
}

const remove_id = () => {
    document.getElementById('before_id_upload').classList.remove("hide");
    const remove = document.querySelector('.id_upload');
    id = null;
    return remove.remove()
}

const change_cac = () => {
    const cac_upload = document.createElement('div');
    cac_upload.className = "doc_upload cac_upload"
    cac_upload.innerText = cac.name;
    document.getElementById('before_cac_upload').classList.add("hide");
    document.getElementById('cac').appendChild(cac_upload)
    const delete_cac = document.createElement('button');
    delete_cac.className = "delete_upload";
    delete_cac.innerText = "Delete";
    delete_cac.setAttribute("onclick", "remove_cac()")
    cac_upload.appendChild(delete_cac)
    // console.log(cac)
}

const change_id = () => {
    const id_upload = document.createElement('div');
    id_upload.className = "doc_upload id_upload"
    id_upload.innerText = id.name;
    document.getElementById('before_id_upload').classList.add("hide");
    document.getElementById('id').appendChild(id_upload)
    const delete_id = document.createElement('button');
    delete_id.className = "delete_upload";
    delete_id.innerText = "Delete";
    delete_id.setAttribute("onclick", "remove_id()")
    id_upload.appendChild(delete_id)
    // console.log(id)
}

// for cac upload
const cac_upload = document.getElementById("cac");

cac_upload.addEventListener("dragover", (event) => {
    event.preventDefault();
    document.getElementById("cac_text").innerText = "Drop your file here"
})

cac_upload.addEventListener("dragleave", () => {
    document.getElementById("cac_text").innerText = "Drag & drop your file here"
})

cac_upload.addEventListener("drop", (event) => {
    event.preventDefault();
    cac = event.dataTransfer.files[0];
    change_cac();
})

// for id upload
const id_upload = document.getElementById("id");

id_upload.addEventListener("dragover", (event) => {
    event.preventDefault();
    document.getElementById("id_text").innerText = "Drop your file here"
})

id_upload.addEventListener("dragleave", (event) => {
    document.getElementById("id_text").innerText = "Drag & drop your file here"
})

id_upload.addEventListener("drop", (event) => {
    event.preventDefault();
    id = event.dataTransfer.files[0];
    change_id();
})


const removePopup = () => {
    const remove = document.querySelector('.cover')
    return remove.remove()
}

// to check if the checkbox was checked
const checkbox = document.getElementById("validate");


const marked = () => {
    confirmed = !confirmed
}

checkbox.checked = confirmed



const uploadFile = () => {      //  uploads the file to the database
    if (checkbox.checked === false) {
        const confirm_id = document.querySelector(".valid p");
        confirm_id.className = "err";
    }
    else {
        const confirm_id = document.querySelector(".valid p");
        confirm_id.className = "okay";
        if (cac === null || id === null) {       // If upload fails
            let backDiv = document.createElement('div');
            backDiv.className = 'cover';
            let popup = document.createElement('div');
            popup.className = 'popup';
            let color = document.createElement('div');
            color.className = 'color';
            let blank = document.createElement('div');
            blank.className = 'blank';
            let msg = document.createElement('div');
            msg.className = 'msg';

            // For svg
            let svg = document.createElement('img');
            svg.setAttribute('src', './img/kyc-fail.svg')


            // for other components
            let status = document.createElement('h3')
            status.className = 'status';
            status.innerText = 'failed!'
            status.classList.add("status-failed");
            let para = document.createElement('p')
            para.className = 'para'
            para.innerText = 'Sorry! something went wrong while uploading your documents. please try again.';
            let close_btn = document.createElement('button');
            close_btn.className = 'close-btn';
            close_btn.innerHTML = '<img src="./img/kyc-close.svg" />'
            close_btn.setAttribute('onclick', 'removePopup()');
            const btn_container = document.createElement('div')
            btn_container.className = "btn-container";
            btn_container.appendChild(close_btn)

            // Combining all
            popup.appendChild(color)
            popup.appendChild(blank)
            blank.appendChild(btn_container)
            blank.appendChild(msg);
            msg.appendChild(svg)
            msg.appendChild(status);
            msg.appendChild(para);
            backDiv.appendChild(popup);
            document.body.appendChild(backDiv);
        }
        else {  // if upload is successful
            let backDiv = document.createElement('div');
            backDiv.className = 'cover';
            let popup = document.createElement('div');
            popup.className = 'popup';
            let color = document.createElement('div');
            color.className = 'color';
            let blank = document.createElement('div');
            blank.className = 'blank';
            let msg = document.createElement('div');
            msg.className = 'msg';

            // For svg
            let svg = document.createElement('img');
            svg.setAttribute('src', './img/kyc-success.svg')

            // for other components
            let status = document.createElement('h3')
            status.className = 'status';
            status.classList.add("status-success");
            status.innerText = 'Success!'
            let para = document.createElement('p')
            para.className = 'para'

            para.innerText = 'Your document as been uploaded successfully, you will receive response as soon as your documents are verified.';
            let btn = document.createElement('button');
            btn.className = 'dom-btn';
            btn.innerText = 'Ok';
            btn.setAttribute('onclick', 'removePopup()')
            btn.setAttribute('onclick', "location.href = 'index.html'")
            const btn_container = document.createElement('div')
            btn_container.className = "btn-container";

            // Combining all
            popup.appendChild(color)
            popup.appendChild(blank)
            blank.appendChild(btn_container)
            blank.appendChild(msg)
            // popup.appendChild(msg);
            msg.appendChild(svg)
            msg.appendChild(status);
            msg.appendChild(para);
            msg.appendChild(btn)
            backDiv.appendChild(popup);
            document.body.appendChild(backDiv);
        }
    }
}
