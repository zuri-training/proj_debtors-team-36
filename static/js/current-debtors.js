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

all_debtors.map((each_debtor) => {
    // create containers to display each segment of the debt details
    const debtor = document.createElement('a') // whole container
    debtor.className = 'debtor';
    debtor.setAttribute('id', 'debtor');
    debtor.setAttribute("href", "debtor-detail.html")

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
    view.setAttribute("href", "debtor-detail.html")
    view.innerText = "View details";
    description.appendChild(view)

    // append the divs to the container
    debtor.appendChild(debt)
    debtor.appendChild(description)

    document.getElementById('debtors').appendChild(debtor)
})

