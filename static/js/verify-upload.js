let doc = [];
// 10000000
const uplaodDoc = () => {      // imports the file
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = _this => {
        if (Array.from(input.files)[0].size > 10000000) {
            console.log("file too large")
        }
        else {
            doc.push(Array.from(input.files)[0]);    // to get the file from local storage
            console.log(doc)
        }
    };
    input.click();
}

const doc_upload = document.getElementById("cac");

doc_upload.addEventListener("dragover", (event) => {
    event.preventDefault();
    document.getElementById("cac_text").innerText = "Drop your file here"
})

doc_upload.addEventListener("dragleave", () => {
    document.getElementById("cac_text").innerText = "Drag and drop your files here"
})

doc_upload.addEventListener("drop", (event) => {
    event.preventDefault();
    document.getElementById("cac_text").innerText = "Drag and drop your files here"
    if (event.dataTransfer.files[0] > 10000000) {
        console.log("File too large")
    }
    else {
        doc.push(event.dataTransfer.files[0]);
        console.log(doc)
    }
})

doc.map((file) => {
    const uploaded = document.createElement("div")
    uploaded.className = "uploaded";

    const left = document.createElement("div");
    left.className = "left";
    const pic = document.createElement("img");
    pic.className = "pic";
    left.appendChild(pic)
    const desc = document.createElement("div");
    desc.className = "desc";
    const fileName = document.createElement("p");
    fileName.className = "fileName";
    fileName.innerText = file.name
    desc.appendChild(fileName)
    const date = document.createElement("p");
    date.className = "date";
    date.innerText = "27 August 2022"
    desc.appendChild(date)
    left.appendChild(desc)
    const size = document.createElement("p");
    size.className = "size";
    size.innerText = file.size
    left.appendChild(size)
    uploaded.appendChild(left)

    const right = document.createElement("div");
    right.className = "right";
    const time = document.createElement("p");
    time.className = "time";
    right.appendChild(time)
    const del = document.createElement("img");
    del.className = "del";
    del.setAttribute("src", "./img/deleteFile.svg")
    right.appendChild(del)
    uploaded.appendChild(right)

    document.getElementById("all-uploads").appendChild(uploaded)
})