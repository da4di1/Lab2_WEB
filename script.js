//Ex 1
let isValid = 1;
let validatedData = [];
const form = document.querySelector('form'); 
const divData = document.createElement('div');

function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

function clear() {
    while (divData.firstChild) {
        divData.removeChild(divData.firstChild);
    }
    if (form.querySelector('.divData')){ 
        form.removeChild(divData);
    }
    isValid = 1;
    validatedData = [];
}

function validateForm(){
    clear();
    let correctName = /^[A-ZА-Я][a-zA-ZА-Яа-я]+ [A-ZА-Я]\.[A-ZА-Я]\.$/;
    let inputName = form.user_name.value;
    let checkName = inputName.match(correctName);
    if(!checkName){
        isValid = 0;
        document.getElementById('name').style.backgroundColor = "#ff9292";
    }else{
        document.getElementById('name').style.backgroundColor = "#a2e782";
    }

    let correctGroup = /^[A-ZА-ЯҐЄІЇ]{2}-\d\d$/;
    let inputGroup = form.user_group.value;
    let checkGroup = inputGroup.match(correctGroup);
    if(!checkGroup){
        isValid = 0;
        document.getElementById('group').style.backgroundColor = "#ff9292";
    }else{
        document.getElementById('group').style.backgroundColor = "#a2e782";
    }

    let correctPhone = /^\(\d\d\d\)-\d\d\d-\d\d-\d\d$/;
    let inputPhone = form.user_phone.value;
    let checkPhone = inputPhone.match(correctPhone);
    if(!checkPhone){
        isValid = 0;
        document.getElementById('phone').style.backgroundColor = "#ff9292";
    }else{
        document.getElementById('phone').style.backgroundColor = "#a2e782";
    }

    let correctAddress = /^м.+ [A-ZА-ЯЇІ][a-zA-ZА-Яа-яЇІії]{1,20}$/;
    let inputAddress = form.user_address.value;
    checkAddress = inputAddress.match(correctAddress);   
    if(!checkAddress){
        isValid = 0;
        document.getElementById('address').style.backgroundColor = "#ff9292";
    }else{
        document.getElementById('address').style.backgroundColor = "#a2e782";
    }
    
    let correctMail = /^[a-z\.-]+@[a-z]+\.com$/;
    let inputMail = form.user_email.value;
    checkMail = inputMail.match(correctMail);
    if(!checkMail){
        isValid = 0;
        document.getElementById('mail').style.backgroundColor = "#ff9292";
    }else{
        document.getElementById('mail').style.backgroundColor = "#a2e782";
    }

    if(isValid){
        const dataName = document.createElement('h4');
        dataName.innerHTML = `ПІБ: ` + inputName;
        validatedData.push(dataName);
        const dataGroup = document.createElement('h4');
        dataGroup.innerHTML = `Група: ` + inputGroup;
        validatedData.push(dataGroup);
        const dataPhone = document.createElement('h4');
        dataPhone.innerHTML = `Номер телефону: ` + inputPhone;
        validatedData.push(dataPhone);
        const dataAddress = document.createElement('h4');
        dataAddress.innerHTML = `Адреса: ` + inputAddress;
        validatedData.push(dataAddress);
        const dataMail = document.createElement('h4');
        dataMail.innerHTML = `E-mail: ` + inputMail;
        validatedData.push(dataMail);

        validatedData.forEach(data => divData.appendChild(data));
        form.appendChild(divData);
        divData.style.backgroundColor = "#a2e782";
    }
}


//Ex 2
let clickedBefore = false;

function createTable(){
    if(!clickedBefore){
        let counter = 1;
        for(let i=0; i<6; i++){
            const row = document.createElement('tr');
            for(let j=0; j<6; j++){ 
                const element = document.createElement('td');
                element.innerHTML = counter;
                element.id = counter;
                row.appendChild(element);
                counter++;
            }
            document.querySelector('table').appendChild(row);
        }
        clickedBefore = true;
    }

    let element = document.getElementById(10);
    element.onmouseover = () =>{
        element.style.backgroundColor = generateRandomColor();
    }
    element.onmouseup = () =>{
        element.style.backgroundColor = document.getElementById('color').value;
    }
    element.ondblclick = () =>{
        let row = Math.floor((element.id -0.5)/6);
        let startingElement = element.id % 2 === 0 ? 2 : 1;
        for (let i=startingElement; i<=6; i+=2){
            let newElement = document.getElementById(row*6+i);
            newElement.style.backgroundColor = document.getElementById('color').value;
        }
    }
}

function generateRandomColor(){
    let maxVal = 0xFFFFFF; 
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}