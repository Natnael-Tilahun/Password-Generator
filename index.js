const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let randomPasswordOne = "";
let randomPasswordTwo = ""
let generatedPassOneEl = document.querySelector(".generated-pass-one")
let generatdPassTwoEl = document.querySelector(".generated-pass-two")
let clipboardSvg = document.getElementById("clipboard-svg")
var tooltip1 = document.getElementById("myTooltip1");
var tooltip2 = document.getElementById("myTooltip2");

function generatePassword(){
    randomPasswordOne = ""
    randomPasswordTwo = ""
    for(let i = 0; i < 15; i++){
        let randomChar = Math.floor(Math.random() * characters.length)
        randomPasswordOne += characters[randomChar]
        generatedPassOneEl.textContent = randomPasswordOne
    }
    
    for(let i = 0; i < 15; i++){
        let randomChar = Math.floor(Math.random() * characters.length)
        randomPasswordTwo += characters[randomChar]
        generatdPassTwoEl.textContent = randomPasswordTwo
    }
}

function copyPasswordOneToClipboard(){
    if(randomPasswordOne){
        navigator.clipboard.writeText(generatedPassOneEl.innerHTML);
        tooltip1.textContent = "Copied: " + generatedPassOneEl.textContent;
    }
}
function passwordOneHover() {
    if(randomPasswordOne){
          tooltip1.innerHTML = "Copy to clipboard";
    }
}

function copyPasswordTwoToClipboard(){
    if(randomPasswordTwo){
        navigator.clipboard.writeText(generatdPassTwoEl.innerHTML);
        tooltip2.textContent = "Copied: " + generatdPassTwoEl.textContent;
    }
}

function passwordTwoHover() {
    if(randomPasswordTwo){
        tooltip2.innerHTML = "Copy to clipboard";
    }
}