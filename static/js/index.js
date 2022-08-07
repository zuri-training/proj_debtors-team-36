<<<<<<< HEAD
// YOur JS code goes here
=======
// Cookies

const cookies_list = [
    // {
    //     type: "checkbox",
    //     label: "Strictly Necessary",
    //     name: "necessary",
    //     value: "necessary",
    //     for: "necessary",
    //     body: "These cookies are used for activities strictly necessary\nto operate and deliver the service you requested."
    // },

    {
        type: "checkbox",
        label: "Marketing and Analytics",
        name: "marketing",
        value: "marketing",
        for: "marketing",
        body: "These Cookies help us deliver personalized marketing\ncontent to you and to operate serve and track ads."
    },

    {
        type: "checkbox",
        label: "Preferences",
        name: "preferences",
        value: "preferences",
        for: "preferences",
        body: "These trackers help us provide a\npersonalized user experience\nby improving the quality of your preference management\noptions and by enabling interaction with\nexternal network and platforms,"
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
    // svg_back.appendChild(svg_btn)

    const cookies_head = document.createElement("h4");
    cookies_head.className = "cookies-head";
    cookies_head.innerText = "This website uses cookies";

    const cookies_top = document.createElement("div");
    cookies_top.className = "cookies-top";
    // cookies_header.appendChild(svg_back)
    cookies_top.appendChild(cookies_head);
    cookies_top.appendChild(svg_btn)
    cookies.appendChild(cookies_top);

    const cookies_body = document.createElement("p");
    cookies_body.className = "cookies-body";
    cookies_body.innerText = "We use cookies to improve user experince\nChoose what cookies you allow us to use.\nYou can read more about our cookies policy in our";
    cookies.appendChild(cookies_body);

    const cookies_link = document.createElement("a");
    cookies_link.className = "cookies_link";
    cookies_link.innerText = "Privacy Policy";
    cookies_link.setAttribute("href", "privacy-policy.html")
    cookies.appendChild(cookies_link);

    const necessary = document.createElement("div");
    necessary.className = "necessary";
    const statement = document.createElement("div");
    statement.className = "text";
    const statement_head = document.createElement('p');
    statement_head.className = "text-head";
    statement_head.innerText = "Strictly Necessary"
    statement.appendChild(statement_head)
    const statement_body = document.createElement('p');
    statement_body.className = "text-body";
    statement_body.innerText = "These cookies are used for activities strictly necessary\nto operate and deliver the service you requested."
    statement.appendChild(statement_body)
    necessary.appendChild(statement)
    const lock = document.createElement('div');
    lock.className = "lock";
    let svgLock = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
    let svgLockPath1 = document.createElementNS("http://www.w3.org/2000/svg", 'path')
    let svgLockPath2 = document.createElementNS("http://www.w3.org/2000/svg", 'path')
    svgLock.setAttribute('width', '24')
    svgLock.setAttribute('height', '24')
    svgLock.setAttribute('viewBox', '0 0 24 24')
    svgLock.setAttribute('fill', 'none')
    svgLockPath1.setAttribute('d', "M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z")
    svgLockPath1.setAttribute('stroke', "#667080")
    svgLockPath1.setAttribute('stroke-width', "2")
    svgLockPath1.setAttribute('stroke-linecap', "round")
    svgLockPath1.setAttribute('stroke-linejoin', "round")
    svgLockPath2.setAttribute('d', "M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11")
    svgLockPath2.setAttribute('stroke', "#667080")
    svgLockPath2.setAttribute('stroke-width', "2")
    svgLockPath2.setAttribute('stroke-linecap', "round")
    svgLockPath2.setAttribute('stroke-linejoin', "round")
    svgLock.appendChild(svgLockPath1)
    svgLock.appendChild(svgLockPath2)
    lock.appendChild(svgLock)
    necessary.appendChild(lock)
    cookies.appendChild(necessary)


    // checkboxes
    cookies_list.map((each_cookie) => {
        const cookie = document.createElement('div');
        cookie.className = "cookie";
        const text = document.createElement("div");
        text.className = "text";
        const text_head = document.createElement('p');
        text_head.className = "text-head";
        text_head.innerText = each_cookie.label
        text.appendChild(text_head)
        const text_body = document.createElement('p');
        text_body.className = "text-body";
        text_body.innerText = each_cookie.body
        text.appendChild(text_body)


        const label = document.createElement('label');
        label.className = "switch";
        const span = document.createElement('span');
        span.className = "slider round";
        const checkbox = document.createElement('input');   // create checkbox
        checkbox.className = "checkbox";
        checkbox.setAttribute("type", each_cookie.type)   // set type 
        checkbox.setAttribute("name", each_cookie.name)  // set name
        checkbox.setAttribute("value", each_cookie.value) // set value

        label.appendChild(checkbox)
        label.appendChild(span)

        cookie.appendChild(text)
        cookie.appendChild(label)
        cookies.appendChild(cookie)

    })

    // buttons
    const btn = document.createElement('div');
    btn.className = 'btn-container';
    const btn1 = document.createElement('button');
    btn1.className = 'btn';
    btn1.innerText = "Accept";
    btn1.setAttribute("onclick", "removePopup()");
    const btn2 = document.createElement('button');
    btn2.className = 'btn';
    btn2.innerText = "Decline";
    btn2.setAttribute("onclick", "removePopup()");
    btn.appendChild(btn2)
    btn.appendChild(btn1)
    cookies.appendChild(btn)

    cookies_back.appendChild(cookies)
    document.body.appendChild(cookies_back)
}

const callCookies = setTimeout(showCookies, 1000);  // to call the cookies
>>>>>>> 6f48880e7d2f43fb1deadb3953668d8e742e7232
