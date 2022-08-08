const notifications = [
    {
        picture: (<svg width="61" height="62" viewBox="0 0 61 62" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M60.0191 31.2286C60.0191 47.6536 46.704 60.9687 30.2791 60.9687C13.8541 60.9687 0.539062 47.6536 0.539062 31.2286C0.539062 14.8037 13.8541 1.48865 30.2791 1.48865C46.704 1.48865 60.0191 14.8037 60.0191 31.2286Z" fill="#FEFEFE" stroke="#FEFEFE"/>
        </svg>
        ),
        name: "Gbagada Secondary School",
        action: "and 5 others updated their debtor's list",
        time: "2 hours ago"
    },

    {
        picture: (<svg width="61" height="62" viewBox="0 0 61 62" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M60.0191 31.2286C60.0191 47.6536 46.704 60.9687 30.2791 60.9687C13.8541 60.9687 0.539062 47.6536 0.539062 31.2286C0.539062 14.8037 13.8541 1.48865 30.2791 1.48865C46.704 1.48865 60.0191 14.8037 60.0191 31.2286Z" fill="#FEFEFE" stroke="#FEFEFE"/>
        </svg>
        ),
        name: "Mayflower School",
        action: "updated a debtors list",
        time: "3 hours ago"
    },

    {
        picture: (<svg width="61" height="62" viewBox="0 0 61 62" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M60.0191 31.2286C60.0191 47.6536 46.704 60.9687 30.2791 60.9687C13.8541 60.9687 0.539062 47.6536 0.539062 31.2286C0.539062 14.8037 13.8541 1.48865 30.2791 1.48865C46.704 1.48865 60.0191 14.8037 60.0191 31.2286Z" fill="#FEFEFE" stroke="#FEFEFE"/>
        </svg>
        ),
        name: "Mayflower School",
        action: "commented on" + notification[0].name.value + "post",
        time: "5 hours ago"
    },

    {
        picture: (<svg width="61" height="62" viewBox="0 0 61 62" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M60.0191 31.2286C60.0191 47.6536 46.704 60.9687 30.2791 60.9687C13.8541 60.9687 0.539062 47.6536 0.539062 31.2286C0.539062 14.8037 13.8541 1.48865 30.2791 1.48865C46.704 1.48865 60.0191 14.8037 60.0191 31.2286Z" fill="#FEFEFE" stroke="#FEFEFE"/>
        </svg>
        ),
        name: "Asolo Secondary School",
        action: "and 2 others updated their debtor's list",
        time: "6 hours ago"
    }

]

notifications.map((each_notification) => {
    // create containers to display each segment of the debt details
    const notification = document.createElement('div') // whole container
    notification.className = 'notif';

    //  top sub-containers
    const pic = document.createElement('div');
    pic.className = "pic";
    const name = document.createElement('div');
    name.className = "debt-left";
    const action = document.createElement('div');
    action.className = "debt-right";
    pic.appendChild(name)
    pic.appendChild(action)

    const notifnew = document.getElementById("new-notif")

    notifnew.textContent = notifications;
})

alert("dg")