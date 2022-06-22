// // input
// var username =  prompt('give me username')
// // processing
// var welcomeMessage = "this script works " + username;
// // output
// alert(welcomeMessage) 
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
console.log(txtInput)

function clickHandler(){
    console.log("clicked");
    console.log("input", txtInput.value)
    };

btnTranslate.addEventListener("click", clickHandler);

