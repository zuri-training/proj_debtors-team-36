let files = [];

const importFile = () => {      // imports the file
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = _this => {
        files = Array.from(input.files);    // to get the file from local storage
        console.log(files)
        document.getElementById('file').innerHTML = files[0].name;  // to print to file name to the screen
    };
    input.click();

}

const removePopup = () => {
    const remove = document.querySelector('.cover')
    return remove.remove()
}

const uploadFile = () => {      //  uploads the file to the database
    if (files.length === 0) {       // If upload fails
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
        svg.setAttribute('width', '136')
        svg.setAttribute('height', '136')
        svg.setAttribute('viewBox', '0 0 136 136')
        svg.setAttribute('fill', 'none')
        svgPath1.setAttribute('d', "M67.9997 128.917C34.3963 128.917 7.08301 101.604 7.08301 68.0002C7.08301 34.3968 34.3963 7.0835 67.9997 7.0835C101.603 7.0835 128.916 34.3968 128.916 68.0002C128.916 101.604 101.603 128.917 67.9997 128.917ZM67.9997 15.5835C39.0997 15.5835 15.583 39.1002 15.583 68.0002C15.583 96.9002 39.0997 120.417 67.9997 120.417C96.8997 120.417 120.416 96.9002 120.416 68.0002C120.416 39.1002 96.8997 15.5835 67.9997 15.5835Z")
        svgPath1.setAttribute('fill', "#C0C0C0")
        svgPath2.setAttribute('d', "M51.9634 88.2867C50.8867 88.2867 49.81 87.89 48.96 87.04C47.3167 85.3967 47.3167 82.6767 48.96 81.0334L81.0334 48.96C82.6767 47.3167 85.3967 47.3167 87.04 48.96C88.6834 50.6034 88.6834 53.3234 87.04 54.9667L54.9667 87.04C54.1734 87.89 53.04 88.2867 51.9634 88.2867Z")
        svgPath2.setAttribute('fill', "#C0C0C0")
        svgPath3.setAttribute('d', "M84.0367 88.2867C82.96 88.2867 81.8834 87.89 81.0334 87.04L48.96 54.9667C47.3167 53.3234 47.3167 50.6034 48.96 48.96C50.6034 47.3167 53.3234 47.3167 54.9667 48.96L87.04 81.0334C88.6834 82.6767 88.6834 85.3967 87.04 87.04C86.19 87.89 85.1134 88.2867 84.0367 88.2867Z")
        svgPath3.setAttribute('fill', "#C0C0C0")
        svg.appendChild(svgPath1)
        svg.appendChild(svgPath2)
        svg.appendChild(svgPath3)


        // for other components
        let status = document.createElement('h3')
        status.className = 'status';
        status.innerText = 'Upload failed'
        let para = document.createElement('p')
        para.className = 'para'
        para.innerText = 'Sorry! something went wrong\nwhile uploading your ID';
        let btn = document.createElement('button');
        btn.className = 'dom-btn';
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
        console.log(files[0].name)
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
        svg.setAttribute('width', '138')
        svg.setAttribute('height', '138')
        svg.setAttribute('viewBox', '0 0 138 138')
        svg.setAttribute('fill', 'none')
        svgPath1.setAttribute('d', "M69 130.812C34.9025 130.812 7.1875 103.097 7.1875 69C7.1875 34.9025 34.9025 7.1875 69 7.1875C103.097 7.1875 130.812 34.9025 130.812 69C130.812 103.097 103.097 130.812 69 130.812ZM69 15.8125C39.675 15.8125 15.8125 39.675 15.8125 69C15.8125 98.325 39.675 122.188 69 122.188C98.325 122.188 122.188 98.325 122.188 69C122.188 39.675 98.325 15.8125 69 15.8125Z")
        svgPath1.setAttribute('fill', "#C0C0C0")
        svgPath2.setAttribute('d', "M60.8353 89.5852C59.6853 89.5852 58.5928 89.1252 57.7878 88.3202L41.5153 72.0477C39.8478 70.3802 39.8478 67.6202 41.5153 65.9527C43.1828 64.2852 45.9428 64.2852 47.6103 65.9527L60.8353 79.1777L90.3903 49.6227C92.0578 47.9552 94.8178 47.9552 96.4853 49.6227C98.1528 51.2902 98.1528 54.0502 96.4853 55.7177L63.8828 88.3202C63.0778 89.1252 61.9853 89.5852 60.8353 89.5852Z")
        svgPath2.setAttribute('fill', "#C0C0C0")
        svg.appendChild(svgPath1)
        svg.appendChild(svgPath2)

        // for other components
        let status = document.createElement('h3')
        status.className = 'status';
        status.innerText = 'Upload Successful'
        let para = document.createElement('p')
        para.className = 'para'
        para.innerText = 'Congratulations! your upload\nwas successfully done.';
        let btn = document.createElement('button');
        btn.className = 'dom-btn';
        btn.innerText = 'Ok';
        btn.setAttribute('onclick', 'removePopup()')
        btn.setAttribute('onclick', "location.href = 'login.html'")

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
