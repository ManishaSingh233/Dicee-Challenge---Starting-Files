var randomNumber1=Math.floor(Math.random()*6)+1;
var randomImage="dice"+randomNumber1+".png";
var randomImageSource="images/"+randomImage;
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage="dice"+randomNumber2+".png";
var randomImageSource="images/"+randomImage;
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player2";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}