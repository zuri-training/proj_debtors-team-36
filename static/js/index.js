// Cookies

const cookies_list = [
    {
        type: "checkbox",
        label: "Strictly Necessary",
        name: "necessary",
        value: "necessary",
        for: "necessary"
    },

    {
        type: "checkbox",
        label: "Marketing and Analytics",
        name: "marketing",
        value: "marketing",
        for: "marketing"
    },

    {
        type: "checkbox",
        label: "Preferences",
        name: "preferences",
        value: "preferences",
        for: "preferences"
    }
]

const removePopup = () => {
    const remove = document.querySelector('.cookies-back')
    return remove.remove()
}


const showCookies = () => {
    const cookies_back = document.createElement('div');
    cookies_back.className = "cookies-back";
    const cookies = document.createElement('div');
    cookies.className = "cookies";

    // svg
    let svg_back = document.createElement('div');
    svg_back.className = "svg-back";
    let svg_btn = document.createElement('button');
    svg_btn.className = "svg-btn";
    svg_btn.setAttribute("onclick", "removePopup()");
    let svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
    let svgPath1 = document.createElementNS("http://www.w3.org/2000/svg", 'path')
    let svgPath2 = document.createElementNS("http://www.w3.org/2000/svg", 'path')
    svg.setAttribute('width', '24')
    svg.setAttribute('height', '24')
    svg.setAttribute('viewBox', '0 0 24 24')
    svg.setAttribute('fill', 'none')
    svgPath1.setAttribute('d', "M1.35814 13C1.01293 13 0.667715 12.8729 0.395178 12.6004C-0.131726 12.0737 -0.131726 11.2019 0.395178 10.6752L10.6789 0.39504C11.2058 -0.13168 12.0779 -0.13168 12.6048 0.39504C13.1317 0.92176 13.1317 1.79357 12.6048 2.32029L2.3211 12.6004C2.06674 12.8729 1.70335 13 1.35814 13Z")
    svgPath1.setAttribute('fill', "#7E7E7E")
    svgPath2.setAttribute('d', "M11.6419 13C11.2966 13 10.9514 12.8729 10.6789 12.6004L0.395178 2.32029C-0.131726 1.79357 -0.131726 0.92176 0.395178 0.39504C0.922083 -0.13168 1.7942 -0.13168 2.3211 0.39504L12.6048 10.6752C13.1317 11.2019 13.1317 12.0737 12.6048 12.6004C12.3323 12.8729 11.9871 13 11.6419 13Z")
    svgPath2.setAttribute('fill', "#7E7E7E")
    svg.appendChild(svgPath1)
    svg.appendChild(svgPath2)
    svg_btn.appendChild(svg)
    svg_back.appendChild(svg_btn)
    cookies.appendChild(svg_back)

    const cookies_head = document.createElement("h4");
    cookies_head.className = "cookies-head";
    cookies_head.innerText = "This website uses cookies";
    cookies.appendChild(cookies_head);

    const cookies_body = document.createElement("p");
    cookies_body.className = "cookies-body";
    cookies_body.innerText = "We use cookies to improve user experince\nChoose what cookies you allow us to use.\nYou can read more about our cookies policy in our";
    cookies.appendChild(cookies_body);

    const cookies_link = document.createElement("a");
    cookies_link.className = "cookies_link";
    cookies_link.innerText = "Privacy Policy";
    cookies_link.setAttribute("href", "privacy-policy.html")
    cookies.appendChild(cookies_link);


    // checkboxes
    cookies_list.map((each_cookie) => {
        const checkboxes = document.createElement('div');
        checkboxes.className = "checkboxes";    // create checkbox container
        const checkbox = document.createElement('input');   // create checkbox
        checkbox.className = "checkbox";
        // const checkmark = document.createElement('span');   // create checkbox
        // checkmark.className = "checkmark";
        checkbox.setAttribute("type", each_cookie.type)   // set type 
        checkbox.setAttribute("name", each_cookie.name)  // set name
        checkbox.setAttribute("value", each_cookie.value) // set value
        const checkbox_label = document.createElement('label'); // create label for checkbox
        checkbox_label.className = "checkbox-label";
        checkbox_label.innerText = each_cookie.label;
        checkbox_label.setAttribute("for", each_cookie.for) // set for
        checkboxes.appendChild(checkbox);
        // checkboxes.appendChild(checkmark);
        checkboxes.appendChild(checkbox_label);
        cookies.appendChild(checkboxes)
    })

    // buttons
    const btn = document.createElement('div');
    btn.className = 'btn-container';
    const btn1 = document.createElement('button');
    btn1.className = 'btn';
    btn1.innerText = "Accept All";
    btn1.setAttribute("onclick", "removePopup()");
    btn.appendChild(btn1)
    const btn2 = document.createElement('button');
    btn2.className = 'btn';
    btn2.innerText = "Decline";
    btn2.setAttribute("onclick", "removePopup()");
    btn.appendChild(btn2)
    cookies.appendChild(btn)

    cookies_back.appendChild(cookies)
    document.body.appendChild(cookies_back)
}

// const callCookies = setTimeout(showCookies, 3000);  // to call the cookies