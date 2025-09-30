/*
function will place a bear dancing gif and some text when the button on Adaptive/Chess is pressed
*/
function bear_img(){
    let beartext = document.createElement("h1");
    beartext.textContent ="I like Bears";
    /*Makes sure the img and text is after the button*/
    buttonbear.insertAdjacentElement("afterend", beartext);
    let beardance = document.createElement("img");
    beardance.src="/Images/5uEc.gif"
    buttonbear.insertAdjacentElement("afterend", beardance);
}

const buttonbear = document.getElementById("bear");
/*Since I'm only using 1 js file, I need to ensure that if the button is not on the page, it will not cause an error
by making the const a null. So I check to see if the const is null before I add an event listener*/
if (buttonbear != null){
buttonbear.addEventListener('click', bear_img);
}
function hidden(){
    console.log("Secret Tunnel") 
    /*avatar reference also clubsMiniExpo is the last element on the page and I wanted the secret text to pop up after it*/
    let last = document.getElementById("clubsMiniExpo");
    let secret = document.createElement('p');
    secret.textContent = "I used to be part of the student Radio Station as an underwriter and I also used to be a Pathfinder!"
    /*This allows me to still adjust the style of the secret text*/
    secret.setAttribute("id", "secret")
    /*Places text after the last element*/
    last.insertAdjacentElement("afterend", secret);
}
const secretbutton = document.getElementById("secret");
if (secretbutton != null){
    /*Since I'm only using 1 js file, I need to ensure that if the button is not on the page, it will not cause an error
by making the const a null. So I check to see if the const is null before I add an event listener*/
secretbutton.addEventListener('click', hidden);
}