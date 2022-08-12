const debt = {
    name: "Mr. Alex Joe",
    email: "Alexjoe2018@gmail.com",
    gender: "Male",
    ward: "John Doe",
    number: "+234-9045-3676-09",
    amount: "35,000",
    description: "First and second term outstanding feeding fees for 2019/2020 academic session, with tax inclusive"
}

const removePopup = () => {
    const remove = document.querySelector('.cover')
    return remove.remove()
}

document.getElementById("name").innerText = debt.name;
document.getElementById("email").innerText = debt.email;
document.getElementById("number").innerText = debt.number;
document.getElementById("ward").innerText = debt.ward;
document.getElementById("gender").innerText = debt.gender;
document.getElementById("amount").innerText = debt.amount;
document.getElementById("description").innerText = debt.description;


const contend = () => {
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


    // for other components
    let status = document.createElement('h3')
    status.className = 'status';
    status.innerText = 'Contend Debt'
    let para = document.createElement('p')
    para.className = 'para'
    para.innerText = 'Are you sure you want to contend?';
    let cancel_btn = document.createElement('button');
    cancel_btn.className = 'cancel-btn';
    cancel_btn.innerHTML = 'Cancel'
    cancel_btn.setAttribute('onclick', 'removePopup()');
    let contend_btn = document.createElement('button');
    contend_btn.className = 'contend-btn';
    contend_btn.innerHTML = 'Yes, contend'
    contend_btn.setAttribute('onclick', 'removePopup()');
    contend_btn.setAttribute("onclick", "location.href='verify-upload.html'");
    const btn_container = document.createElement('div')
    btn_container.className = "btn-container";
    btn_container.appendChild(cancel_btn)
    btn_container.appendChild(contend_btn)

    // Combining all
    popup.appendChild(color)
    popup.appendChild(blank)
    blank.appendChild(msg);
    msg.appendChild(status);
    msg.appendChild(para);
    blank.appendChild(btn_container)
    backDiv.appendChild(popup);
    document.body.appendChild(backDiv);
}