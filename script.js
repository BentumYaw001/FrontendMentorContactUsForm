// global value declaration.

let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let emailAddress = document.getElementById('emailAddress');
let querySelector = document.getElementById('querySection');
let message = document.getElementById('message');
let checkBox = document.getElementById('checkBox');
let nameSPace1 = document.getElementById('nameSpace1');
let nameSPace2 = document.getElementById('nameSpace2');
let emailSPace = document.getElementById('emailSpace');
let messageSPace = document.getElementById('messageSpace');
let checkSpace = document.getElementById('checkSpace');
let sQuery = document.getElementById('sQuery');
let gQuery = document.getElementById('gQuery');
let validEmailAddress = document.getElementById('validEmailAddress')
const alertBox =document.getElementById('customAlert');
const alertMessage = document.getElementById('alertMessage');


//  the error checker.
function errorChecker(thevalue,theattribute){
    if(thevalue.value.trim()===""){
        theattribute.classList.remove('errorAlert');
        thevalue.style.borderColor="red";
        return false;
    }
    else{
        theattribute.classList.add('errorAlert');
        thevalue.style.borderColor='initial';
        return true;
    }
}

// the check box checker.
function checkBoxChecker(thatValue,thatAttribute){
    if(!thatValue.checked){
        thatAttribute.classList.remove('errorAlert');
        thatValue.style.borderColor="red";
         return false;
    }
    else{
        thatAttribute.classList.add('errorAlert');
        thatValue.style.borderColor='initial';
        return true;
    }
}

// the query checker function.
function theQueryChecker(){
    if(!gQuery.checked && !sQuery.checked ){
        querySelector.classList.remove('errorAlert');
        return false;
      }
      else{
          querySelector.classList.add('errorAlert');
          return true;
      }
}

function emptyTheEntry(){
    nameSPace1.value ='';
    nameSPace2.value='';
    emailSPace.value='';
    messageSPace.value='';
    checkSpace.checked=false;
    sQuery.checked=false;
    gQuery.checked =false;
}

// email validation process.
function isValidEmail(email){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function ValidEmail (){
    if(!isValidEmail(emailSPace.value)){
        validEmailAddress.classList.remove('errorAlert');
    }
    else{
        validEmailAddress.classList.add('errorAlert');
    }
}

function showAlert(message,duration=3000){
    alertMessage.textContent = message;

    alertBox.classList.remove('hidden');
    alertBox.classList.add('show');

    setTimeout (()=>{
        alertBox.classList.remove('show');
        setTimeout(()=>{
            alertBox.classList.add('hidden');
        },500);
        
    }, duration);
}

// submit button functionality
function submitButton(){
    let fname,lname,emailValue,messageValue,checkValue,queryValue,validEmailValue;
    fname= errorChecker(nameSPace1,firstName);
    lname=errorChecker(nameSPace2,lastName);
    messageValue=errorChecker(messageSPace,message);
    checkValue=checkBoxChecker(checkSpace,checkBox);
    queryValue=theQueryChecker();
    ValidEmail();
    validEmailValue=isValidEmail(emailSPace.value);
        

    if(fname && lname && messageValue && checkValue &&queryValue  && validEmailValue){
        showAlert(alertMessage.textContent,5000);
        emptyTheEntry();
    }
}
