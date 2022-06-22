// // input
// var username =  prompt('give me username')
// // processing
// var welcomeMessage = "this script works " + username;
// // output
// alert(welcomeMessage) 
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");



function clickHandler(){
    outputDiv.innerText= "ajajajajajajajajaj " + txtInput.value;
    };

btnTranslate.addEventListener("click", clickHandler);

