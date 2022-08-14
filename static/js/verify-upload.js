let doc = [];
// 10000000
const browseFile = () => {      // imports the file
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = _this => {
        if (Array.from(input.files)[0].size > 10000000) {
            window.alert("file too large")
        }
        else {
            doc.push(Array.from(input.files)[0]);    // to get the file from local storage
            console.log(doc)
            showUploads();
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
    if (event.dataTransfer.files[0].size > 10000000) {
        window.alert("file too large")
    }
    else {
        doc.push(event.dataTransfer.files[0]);
        console.log(doc);
        showUploads();
    }
})

const removeItem = (index) => {     // remove files individually
    let filteredArr = doc.filter((el) => doc.indexOf(el) !== index);
    doc = filteredArr;
    console.log(doc)
    showUploads()
}

const showUploads = () => {
    const recent = document.getElementById("all-uploads")
    recent.innerHTML = ""
    doc.map((file, index) => {
        const uploaded = document.createElement("div")
        uploaded.className = "uploaded";
        uploaded.setAttribute("key", index)

        const left = document.createElement("div");
        left.className = "left";
        const pic_container = document.createElement("div");
        pic_container.className = "pic-container";
        const pic = document.createElement("img");
        pic.className = "pic";
        if (file.type.match('image')) {
            pic.src = URL.createObjectURL(file);        // show file thumbnail
            pic.onload = function () {
                URL.revokeObjectURL(pic.src)
            }
        }
        else {
            console.log("not image")
        }
        pic_container.appendChild(pic)
        left.appendChild(pic_container)

        const desc = document.createElement("div");
        desc.className = "desc";

        const file_desc = document.createElement("div");
        file_desc.className = "file-desc";

        const fileName = document.createElement("p");
        fileName.className = "fileName";
        fileName.innerText = file.name
        file_desc.appendChild(fileName)

        const size = document.createElement("p");
        size.className = "size";
        size.innerText = `(${(file.size / 1000000).toFixed(1)}MB)`
        file_desc.appendChild(size)
        desc.appendChild(file_desc)

        const date = document.createElement("p");
        date.className = "date";
        date.innerText = "27 August 2022"

        desc.appendChild(date)
        left.appendChild(desc)
        uploaded.appendChild(left)

        const right = document.createElement("div");
        right.className = "right";
        const time = document.createElement("p");
        time.className = "time";
        right.appendChild(time)

        const btn = document.createElement('button');
        btn.className = "del-btn";
        const del = document.createElement("img");
        del.className = "del";
        del.setAttribute("src", "./img/deleteFile.svg")

        btn.addEventListener("click", () => removeItem(index))
        btn.appendChild(del)
        right.appendChild(btn)
        uploaded.appendChild(right)

        recent.appendChild(uploaded)
    })
}

const removePopup = () => {
    const remove = document.querySelector('.cover')
    return remove.remove()
}

const cancelAll = () => {
    doc = []
    showUploads()
}


const fail = () => {
    let backDiv = document.createElement('div');
    backDiv.className = 'cover';
    let popup = document.createElement('div');
    popup.className = 'popup';
    let icon = document.createElement('div');
    icon.className = 'icon';
    let msg = document.createElement('div');
    msg.className = 'msg';

    // For svg
    let back1 = document.createElement('div');
    back1.className = 'back1 fail-back1';
    let back2 = document.createElement('div');
    back2.className = 'back2 fail-back2';
    let back3 = document.createElement('div');
    back3.className = 'back3 fail-back3';
    let svg = document.createElement('img');
    svg.setAttribute('src', './img/verifiable-fail.svg');
    back3.appendChild(svg);
    back2.appendChild(back3);
    back1.appendChild(back2);
    icon.appendChild(back1);

    const bubble1 = document.createElement("div");
    bubble1.className = "bubble1 fail-bubble";
    icon.appendChild(bubble1)
    const bubble2 = document.createElement("div");
    bubble2.className = "bubble2 fail-bubble";
    icon.appendChild(bubble2)
    const bubble3 = document.createElement("div");
    bubble3.className = "bubble3 fail-bubble";
    icon.appendChild(bubble3)

    // for other components
    let status = document.createElement('h3')
    status.className = 'status';
    status.innerText = 'File Upload Failed !'
    let para = document.createElement('p')
    para.className = 'para'
    para.innerText = 'Sorry! something went wrong while uploading your document';
    msg.appendChild(status);
    msg.appendChild(para);

    let btn = document.createElement('button');
    btn.className = 'dom-btn fail-back-btn';
    btn.innerText = 'Try again';
    btn.setAttribute('onclick', 'removePopup()')
    const btn_container = document.createElement('div')
    btn_container.className = "btn-container";
    btn_container.appendChild(btn);

    // Combining all
    popup.appendChild(icon);
    popup.appendChild(msg);
    popup.appendChild(btn_container);
    backDiv.appendChild(popup)
    document.body.appendChild(backDiv);
}

const success = () => {
    let backDiv = document.createElement('div');
    backDiv.className = 'cover';
    let popup = document.createElement('div');
    popup.className = 'popup';
    let icon = document.createElement('div');
    icon.className = 'icon';
    let msg = document.createElement('div');
    msg.className = 'msg';

    // For svg
    let back1 = document.createElement('div');
    back1.className = 'back1 success-back1';
    let back2 = document.createElement('div');
    back2.className = 'back2 success-back2';
    let back3 = document.createElement('div');
    back3.className = 'back3 success-back3';
    let svg = document.createElement('img');
    svg.setAttribute('src', './img/verifiable-success.svg');
    back3.appendChild(svg);
    back2.appendChild(back3);
    back1.appendChild(back2);
    icon.appendChild(back1)

    const bubble1 = document.createElement("div");
    bubble1.className = "bubble1 success-bubble";
    icon.appendChild(bubble1)
    const bubble2 = document.createElement("div");
    bubble2.className = "bubble2 success-bubble";
    icon.appendChild(bubble2)
    const bubble3 = document.createElement("div");
    bubble3.className = "bubble3 success-bubble";
    icon.appendChild(bubble3)

    // for other components
    let status = document.createElement('h3')
    status.className = 'status';
    status.innerText = 'File Uploaded Successfully'
    let para = document.createElement('p')
    para.className = 'para'
    para.innerText = 'Your contention has been submitted, the school will respond to your claim in 24 hours.';
    msg.appendChild(status);
    msg.appendChild(para);

    let btn = document.createElement('button');
    btn.className = 'dom-btn success-back-btn';
    btn.innerText = 'Done';
    btn.setAttribute('onclick', 'removePopup()')
    btn.setAttribute('onclick', "location.href='index.html'")
    const btn_container = document.createElement('div')
    btn_container.className = "btn-container";
    btn_container.appendChild(btn);

    // Combining all
    popup.appendChild(icon);
    popup.appendChild(msg);
    popup.appendChild(btn_container);
    backDiv.appendChild(popup)
    document.body.appendChild(backDiv);
}

const uploadFiles = () => {     // to upload files to the database
    if (doc.length > 0) {
        success();
    }
    else {
        fail();
    }
}