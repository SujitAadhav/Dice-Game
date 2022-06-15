// Player 1
var randomNum1 = Math.floor((Math.random() * 6) + 1);
var randomImg1 = "img/dice" + randomNum1 + ".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImg1);

// Player 2
var randomNum2 = Math.floor((Math.random() * 6)) + 1;
var randomImg2 = "img/dice" + randomNum2 + ".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImg2)

// Player 3
var randomNum3 = Math.floor((Math.random() * 6)) + 1;
var randomImg3 = "img/dice" + randomNum3 + ".png";
var img3 = document.querySelectorAll("img")[2];
img3.setAttribute("src", randomImg3);

// Player 3
var randomNum4 = Math.floor((Math.random() * 6)) + 1;
var randomImg4 = "img/dice" + randomNum4 + ".png";
var img4 = document.querySelectorAll("img")[3];
img4.setAttribute("src", randomImg4);


// Main logic
if(randomNum1 > randomNum2 && randomNum1 > randomNum3 && randomNum1 > randomNum4){
    document.querySelector("h1").innerHTML = "Player 1 Wins !";
}else if(randomNum2 > randomNum1 && randomNum2 > randomNum3 && randomNum2 > randomNum4){
    document.querySelector("h1").innerHTML = "Player 2 Wins !";
}else if(randomNum3 > randomNum1 && randomNum3 > randomNum2 && randomNum3 > randomNum4){
    document.querySelector("h1").innerHTML = "Player 3 Wins !";
}else if(randomNum4 > randomNum1 && randomNum4 > randomNum2 && randomNum4 > randomNum3){
    document.querySelector("h1").innerHTML = "Player 4 Wins !";
}else{
    document.querySelector("h1").innerHTML = "DRAW !";
}