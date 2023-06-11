//seccion del holdername
let nameCard = document.querySelector('.card-name');
let nameInput = document.querySelector('#cardholder');
let nameError = document.querySelector('.cardholder-error')

// seccion del card number
let cardNumber = document.querySelector('.card-numbers');
let numberInput = document.querySelector('#cardNumber');
let numberError = document.querySelector('.cardNumber-error');

//seccion month
let cardMonth = document.querySelector('.card-month');
let monthInput= document.getElementById('cardMonth');
let monthError = document.querySelector('.month-error');


//ingreso dinamico del name
nameInput.addEventListener('input', ()=>{
    if(nameInput.value=== ''){
        nameCard.innerText="JANE APPLESEED";
    }else{
        nameCard.innerText=nameInput.value;
    }
})

//ingreso dinamico del number
numberInput.addEventListener('input', event=>{
    let inputValue = event.target.value;

    //Actualizando graficamente la tarjeta
    cardNumber.innerText=numberInput.value;

    let regExp=/[A-z]/g;
    if(regExp.test(numberInput.value)){
        showError(numberInput,numberError, "Wrong format, numbers only" );        
    }else{
        numberInput.value=inputValue.replace(/\s/g, '').replace(/([0-9]{4})/g, '$1 ').trim();
        hideError(numberError, numberInput);        
    }
    
    if(numberInput.value ==''){
        cardNumber.innerText="0000 0000 0000 0000"
    }
});

//ingreso dinamico del mes
monthInput.addEventListener('input', ()=>{
    let regExp2=/[A-z]/g;
    if(monthInput.value>=13 || regExp2.test(monthInput.value)){
        showError(monthInput, monthError, 'Wrong format')
    }else{
        hideError(monthError, monthInput);
    }
    if(monthInput.value ==''){
        cardMonth.innerText='00';
    }else{
        cardMonth.innerText=monthInput.value;
    }
});

//funciones
function showError(divInput, divError, messageError){
    divError.innerText=messageError;
    divInput.style.borderColor='red'
};

function hideError(divError,divInput){
    divError.innerText='';
    divInput.style.borderColor='';
}

