let cac = null;
let id = null;

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
    console.log(cac)    // confirms cac was emptied
    return remove.remove()
}

const remove_id = () => {
    document.getElementById('before_id_upload').classList.remove("hide");
    const remove = document.querySelector('.id_upload');
    id = null;
    console.log(id)    // confirms cac was emptied
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
    console.log(cac)
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
    console.log(id)
}

// for cac upload
const cac_upload = document.getElementById("cac");

cac_upload.addEventListener("dragover", (event) => {
    event.preventDefault();
    document.getElementById("cac_text").innerText = "Drop your file here"
})

cac_upload.addEventListener("dragleave", (event) => {
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
const checkbox = document.querySelector("#validate")

const uploadFile = () => {      //  uploads the file to the database
    console.log(checkbox)
    if (cac === null || id === null) {       // If upload fails
        console.log(cac)
        console.log(id)
        let backDiv = document.createElement('div');
        backDiv.className = 'cover';
        let popup = document.createElement('div');
        popup.className = 'popup';
        let msg = document.createElement('div');
        msg.className = 'msg';

        // For svg
        let svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
        let svgPath1 = document.createElementNS("http://www.w3.org/2000/svg", 'path')
        let svgPath2 = document.createElementNS("http://www.w3.org/2000/svg", 'path')
        let svgPath3 = document.createElementNS("http://www.w3.org/2000/svg", 'path')
        svg.setAttribute('width', '101')
        svg.setAttribute('height', '101')
        svg.setAttribute('viewBox', '0 0 101 101')
        svg.setAttribute('fill', 'none')
        svgPath1.setAttribute('d', "M67.9997 128.917C34.3963 128.917 7.08301 101.604 7.08301 68.0002C7.08301 34.3968 34.3963 7.0835 67.9997 7.0835C101.603 7.0835 128.916 34.3968 128.916 68.0002C128.916 101.604 101.603 128.917 67.9997 128.917ZM67.9997 15.5835C39.0997 15.5835 15.583 39.1002 15.583 68.0002C15.583 96.9002 39.0997 120.417 67.9997 120.417C96.8997 120.417 120.416 96.9002 120.416 68.0002C120.416 39.1002 96.8997 15.5835 67.9997 15.5835Z")
        svgPath1.setAttribute('fill', "#FF4040")
        svgPath2.setAttribute('d', "M51.9634 88.2867C50.8867 88.2867 49.81 87.89 48.96 87.04C47.3167 85.3967 47.3167 82.6767 48.96 81.0334L81.0334 48.96C82.6767 47.3167 85.3967 47.3167 87.04 48.96C88.6834 50.6034 88.6834 53.3234 87.04 54.9667L54.9667 87.04C54.1734 87.89 53.04 88.2867 51.9634 88.2867Z")
        svgPath2.setAttribute('fill', "#FF4040")
        svgPath3.setAttribute('d', "M84.0367 88.2867C82.96 88.2867 81.8834 87.89 81.0334 87.04L48.96 54.9667C47.3167 53.3234 47.3167 50.6034 48.96 48.96C50.6034 47.3167 53.3234 47.3167 54.9667 48.96L87.04 81.0334C88.6834 82.6767 88.6834 85.3967 87.04 87.04C86.19 87.89 85.1134 88.2867 84.0367 88.2867Z")
        svgPath3.setAttribute('fill', "#FF4040")
        svg.appendChild(svgPath1)
        svg.appendChild(svgPath2)
        svg.appendChild(svgPath3)


        // for other components
        let status = document.createElement('h3')
        status.className = 'status';
        status.innerText = 'Upload failed'
        status.classList.add("status-failed");
        let para = document.createElement('p')
        para.className = 'para'
        para.innerText = 'Sorry! something went wrong\nwhile uploading your ID';
        let btn = document.createElement('button');
        btn.className = 'dom-btn';
        btn.classList.add("btn-failed");
        btn.innerText = 'Try again';
        btn.setAttribute('onclick', 'removePopup()')

        // Combining all
        popup.appendChild(msg);
        msg.appendChild(svg)
        msg.appendChild(status);
        msg.appendChild(para);
        msg.appendChild(btn)
        backDiv.appendChild(popup);
        document.body.appendChild(backDiv);
    }
    else {  // if upload is successful
        let backDiv = document.createElement('div');
        backDiv.className = 'cover';
        let popup = document.createElement('div');
        popup.className = 'popup';
        let msg = document.createElement('div');
        msg.className = 'msg';

        // For svg
        let svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
        let svgPath1 = document.createElementNS("http://www.w3.org/2000/svg", 'path')
        let svgPath2 = document.createElementNS("http://www.w3.org/2000/svg", 'path')
        svg.setAttribute('width', '101')
        svg.setAttribute('height', '101')
        svg.setAttribute('viewBox', '0 0 101 101')
        svg.setAttribute('fill', 'none')
        svgPath1.setAttribute('d', "M50.4997 94.7916C25.7913 94.7916 5.70801 74.7083 5.70801 49.9999C5.70801 25.2916 25.7913 5.20825 50.4997 5.20825C75.208 5.20825 95.2913 25.2916 95.2913 49.9999C95.2913 74.7083 75.208 94.7916 50.4997 94.7916ZM50.4997 11.4583C29.2497 11.4583 11.958 28.7499 11.958 49.9999C11.958 71.2499 29.2497 88.5416 50.4997 88.5416C71.7497 88.5416 89.0413 71.2499 89.0413 49.9999C89.0413 28.7499 71.7497 11.4583 50.4997 11.4583Z")
        svgPath1.setAttribute('fill', "#4ECA5A")
        svgPath2.setAttribute('d', "M44.583 64.9166C43.7497 64.9166 42.958 64.5833 42.3747 63.9999L30.583 52.2083C29.3747 50.9999 29.3747 48.9999 30.583 47.7916C31.7913 46.5833 33.7913 46.5833 34.9997 47.7916L44.583 57.3749L65.9997 35.9583C67.208 34.7499 69.208 34.7499 70.4163 35.9583C71.6247 37.1666 71.6247 39.1666 70.4163 40.3749L46.7913 63.9999C46.208 64.5833 45.4163 64.9166 44.583 64.9166Z")
        svgPath2.setAttribute('fill', "#4ECA5A")
        svg.appendChild(svgPath1)
        svg.appendChild(svgPath2)

        // for other components
        let status = document.createElement('h3')
        status.className = 'status';
        status.classList.add("status-success");
        status.innerText = 'Upload Successful'
        let para = document.createElement('p')
        para.className = 'para'
        para.innerText = 'Congratulations! your upload\nwas successfully done.';
        let btn = document.createElement('button');
        btn.className = 'dom-btn';
        btn.classList.add("btn-success");
        btn.innerText = 'Ok';
        btn.setAttribute('onclick', 'removePopup()')
        btn.setAttribute('onclick', "location.href = 'index.html'")

        // Combining all
        popup.appendChild(msg);
        msg.appendChild(svg)
        msg.appendChild(status);
        msg.appendChild(para);
        msg.appendChild(btn)
        backDiv.appendChild(popup);
        document.body.appendChild(backDiv);
    }
}
