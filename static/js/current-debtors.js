const all_debtors = [
    {
        name: "John Doe",
        email: "Johndoe@gmail.com",
        owes: "35,000",
        date: "10/07/2022",
        description: "First and second term outstanding feeding fees for 2019/2020 academic session."
    },
    {
        name: "John Doe",
        email: "Johndoe@gmail.com",
        owes: "35,000",
        date: "10/07/2022",
        description: "First and second term outstanding feeding fees for 2019/2020 academic session."
    },
    {
        name: "John Doe",
        email: "Johndoe@gmail.com",
        owes: "35,000",
        date: "10/07/2022",
        description: "First and second term outstanding feeding fees for 2019/2020 academic session."
    },
    {
        name: "John Doe",
        email: "Johndoe@gmail.com",
        owes: "35,000",
        date: "10/07/2022",
        description: "First and second term outstanding feeding fees for 2019/2020 academic session."
    },
    {
        name: "John Doe",
        email: "Johndoe@gmail.com",
        owes: "35,000",
        date: "10/07/2022",
        description: "First and second term outstanding feeding fees for 2019/2020 academic session."
    },
    {
        name: "John Doe",
        email: "Johndoe@gmail.com",
        owes: "35,000",
        date: "10/07/2022",
        description: "First and second term outstanding feeding fees for 2019/2020 academic session."
    },
    {
        name: "John Doe",
        email: "Johndoe@gmail.com",
        owes: "35,000",
        date: "10/07/2022",
        description: "First and second term outstanding feeding fees for 2019/2020 academic session."
    },
    {
        name: "John Doe",
        email: "Johndoe@gmail.com",
        owes: "35,000",
        date: "10/07/2022",
        description: "First and second term outstanding feeding fees for 2019/2020 academic session."
    },
    {
        name: "John Doe",
        email: "Johndoe@gmail.com",
        owes: "35,000",
        date: "10/07/2022",
        description: "First and second term outstanding feeding fees for 2019/2020 academic session."
    },
    {
        name: "John Doe",
        email: "Johndoe@gmail.com",
        owes: "35,000",
        date: "10/07/2022",
        description: "First and second term outstanding feeding fees for 2019/2020 academic session."
    }

]

// const dropdown_menu = () => {
//     const dropdown = document.createElement('div');
//     dropdown.className = "dropdown";
//     const btn1 = document.createElement('button');
//     btn1.className = "btn1";
//     btn1.innerText = "Edit details";
//     dropdown.appendChild(btn1)
//     const btn2 = document.createElement('button');
//     btn2.className = "btn2";
//     btn2.innerText = "Mark as paid";
//     dropdown.appendChild(btn2)
//     const btn3 = document.createElement('button');
//     btn3.className = "btn3";
//     btn3.innerText = "Delete";
//     dropdown.appendChild(btn3)
//     debtor.appendChild(dropdown)
// }



all_debtors.map((each_debtor) => {
    // create containers to display each segment of the debt details
    const debtor = document.createElement('div') // whole container
    debtor.className = 'debtor';

    //  top sub-containers
    const debt = document.createElement('div');
    debt.className = "debt";
    const debt_left = document.createElement('div');
    debt_left.className = "debt-left";
    const debt_right = document.createElement('div');
    debt_right.className = "debt-right";
    debt.appendChild(debt_left)
    debt.appendChild(debt_right)

    // bottom sub-container
    const description = document.createElement('div');
    description.className = "description";


    // Create each tags of individual debtor and append to their containers
    const debtor_name = document.createElement('h3');
    debtor_name.className = 'debtor-name';
    debtor_name.innerText = each_debtor.name;
    debt_left.appendChild(debtor_name);

    const debtor_email = document.createElement('p');
    debtor_email.className = 'debtor-email';
    debtor_email.innerText = each_debtor.email;
    debt_left.appendChild(debtor_email);

    const owe_date = document.createElement('div');
    owe_date.className = "owe-date";
    const debtor_owe = document.createElement('p');
    debtor_owe.className = 'debtor-owe';
    debtor_owe.innerText = "#" + each_debtor.owes;
    owe_date.appendChild(debtor_owe);
    const debtor_date = document.createElement('p');
    debtor_date.className = 'debtor-date';
    debtor_date.innerText = each_debtor.date;
    owe_date.appendChild(debtor_date);
    debt_right.appendChild(owe_date);

    // svg
    const svg_icon = document.createElement('button');
    svg_icon.className = "svg_icon";
    let svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
    let svgPath1 = document.createElementNS("http://www.w3.org/2000/svg", 'path')
    let svgPath2 = document.createElementNS("http://www.w3.org/2000/svg", 'path')
    let svgPath3 = document.createElementNS("http://www.w3.org/2000/svg", 'path')
    svg.setAttribute('width', '40')
    svg.setAttribute('height', '40')
    svg.setAttribute('viewBox', '0 0 40 40')
    svg.setAttribute('fill', 'none')
    svgPath1.setAttribute('d', "M18 27C18 28.1 18.9 29 20 29C21.1 29 22 28.1 22 27C22 25.9 21.1 25 20 25C18.9 25 18 25.9 18 27Z")
    // svgPath1.setAttribute('fill', "#C0C0C0")
    svgPath1.setAttribute('stroke', "#292D32")
    svgPath1.setAttribute('stroke-width', "1.5")
    svgPath2.setAttribute('d', "M18 13C18 14.1 18.9 15 20 15C21.1 15 22 14.1 22 13C22 11.9 21.1 11 20 11C18.9 11 18 11.9 18 13Z")
    svgPath2.setAttribute('fill', "#C0C0C0")
    svgPath1.setAttribute('stroke', "#292D32")
    svgPath1.setAttribute('stroke-width', "1.5")
    svgPath3.setAttribute('d', "M18 20C18 21.1 18.9 22 20 22C21.1 22 22 21.1 22 20C22 18.9 21.1 18 20 18C18.9 18 18 18.9 18 20Z")
    svgPath3.setAttribute('fill', "#C0C0C0")
    svgPath1.setAttribute('stroke', "#292D32")
    svgPath1.setAttribute('stroke-width', "1.5")
    svg.appendChild(svgPath1)
    svg.appendChild(svgPath2)
    svg.appendChild(svgPath3)
    svg_icon.appendChild(svg)
    debt_right.appendChild(svg_icon);

    const debtor_description = document.createElement('p');
    debtor_description.className = 'debtor-description';
    const debtor_desc = document.createElement('span');
    debtor_desc.className = 'debtor-desc';
    debtor_desc.innerText = each_debtor.description
    debtor_description.innerText = "Debt description: ";
    debtor_description.appendChild(debtor_desc)
    description.appendChild(debtor_description);
    const view = document.createElement('a');
    view.className = 'view';
    view.setAttribute("href", "#")
    view.innerText = "View details";
    description.appendChild(view)

    // append the divs to the container
    debtor.appendChild(debt)
    debtor.appendChild(description)

    document.getElementById('debtors').appendChild(debtor)
})


//     < svg width = "40" height = "40" viewBox = "0 0 40 40" fill = "none" xmlns = "http://www.w3.org/2000/svg" >
// <path d="M18 27C18 28.1 18.9 29 20 29C21.1 29 22 28.1 22 27C22 25.9 21.1 25 20 25C18.9 25 18 25.9 18 27Z" stroke="#292D32" stroke-width="1.5"/>
// <path d="M18 13C18 14.1 18.9 15 20 15C21.1 15 22 14.1 22 13C22 11.9 21.1 11 20 11C18.9 11 18 11.9 18 13Z" stroke="#292D32" stroke-width="1.5"/>
// <path d="M18 20C18 21.1 18.9 22 20 22C21.1 22 22 21.1 22 20C22 18.9 21.1 18 20 18C18.9 18 18 18.9 18 20Z" stroke="#292D32" stroke-width="1.5"/>
// </svg >

