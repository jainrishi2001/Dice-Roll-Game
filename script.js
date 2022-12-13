//User 1
const firstRandomNum = Math.floor(Math.random() *6) +1
const firstDiceImage = 'assets/dice' + firstRandomNum + '.png'
document.querySelectorAll("img")[0].setAttribute("src", firstDiceImage);

//User2 
const secondRandomNum = Math.floor(Math.random() *6) +1
const secondDiceImage = 'assets/dice' + secondRandomNum + '.png'
document.querySelectorAll("img")[1].setAttribute("src", secondDiceImage);

//Winner decide
if (firstRandomNum > secondRandomNum){
    document.querySelector('h2').innerHTML= "The Winner is User 1!!";
}
else if (firstRandomNum< secondRandomNum){
    document.querySelector('h2').innerHTML = "The Winner is User 2!!";
}

else {
    document.querySelector('h2').innerHTML = "Its a Freaking DRAW!!🌟";
}    
