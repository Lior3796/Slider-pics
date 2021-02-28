var pics = [
    "https://rickandmortyapi.com/api/character/avatar/1.jpeg ",
    "https://rickandmortyapi.com/api/character/avatar/2.jpeg ",
    "https://rickandmortyapi.com/api/character/avatar/3.jpeg ",
    "https://rickandmortyapi.com/api/character/avatar/4.jpeg ",
    "https://rickandmortyapi.com/api/character/avatar/5.jpeg ",
    "https://rickandmortyapi.com/api/character/avatar/6.jpeg ",
    "https://rickandmortyapi.com/api/character/avatar/7.jpeg ",
    "https://rickandmortyapi.com/api/character/avatar/8.jpeg ",
    "https://rickandmortyapi.com/api/character/avatar/9.jpeg ",
    "https://rickandmortyapi.com/api/character/avatar/10.jpeg ",
];

var n = 0;
document.getElementById("imgSlider").src = pics[n];
var img = document.getElementById("imgSlider");
var index = document.getElementById("index");


function prevClick() {
    n--;  
    if (n <= -1) {
        n = pics.length - 1;
    }
    img.src = pics[n];
    index.innerHTML = n + 1;
    console.log(index);

}

function nextClick() {
    n++;
    if (pics.length <= n) {
        n = 0;
    }
    img.src = pics[n];
    index.innerHTML = n + 1;
    console.log(index);
   
    
}
var nextClick1;
var resultTime;
var changeAnima;

function startAnimation(){
    nextClick1 = setInterval(nextClick, 1000);
    resultTime = nextClick1;
}
function stopAnimation(){
    clearInterval(resultTime);    
}

function changeAnimation(){
    nextClick1 = setInterval(nextClick, 500);
    resultTime = nextClick1;

}
function randomPics(){
    var img = document.getElementById("imgSlider");
    var rndPic = Math.floor(Math.random() * 10);
    img.src = pics[rndPic];

}
function picAsYourChoice(){
var picChoice = +prompt("give a number of picture that you wanna see");
var imgChoice = document.getElementById("imgChoice");
imgChoice.src = pics[picChoice]; 
}

var pos = 100;
function move(){
    moveBackBtn.addEventListener("click",moveBack);
    headline1.style.top = "-20px";
    headline1.style.left =`${pos}px`;
    pos+= 20;
    if(pos === 200){
        clearInterval()
        
    } 
}

function moveBack(){
    moveHeadline.addEventListener("click",move);
    
    headline1.style.left =`${pos}px`;
    
    pos -= 20;
    if(pos === 100){
        
        
    } 
}

function changeColor(){
    headline1.style.color = "red";
}
function removeColor(){
    headline1.style.color = "black";
}
function zoom(){
    img.style.width = "200px";
    img.style.height = "200px";
    clearInterval(resultTime);
}
function removeZoom(){
    img.style.width = "100px";
    img.style.height = "100px";
    
}

var imgChoice1 = document.getElementById("imgChoice");
var headline1 = document.getElementById("headline");
var userChoice = document.getElementById("choice");
var start = document.getElementById("startAnimation");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var stopAnimation1 = document.getElementById("stopAnimation");
var changeAnimation1 = document.getElementById("changeAnimation");
var randomPic = document.getElementById("randomPics");
var moveHeadline = document.getElementById("move");
var moveBackBtn = document.getElementById("moveBack");
var container = document.getElementById("btnsContainer");

start.addEventListener("click", startAnimation);
next.addEventListener("click", nextClick);
prev.addEventListener("click", prevClick);
changeAnimation1.addEventListener("click", changeAnimation);
stopAnimation1.addEventListener("click",stopAnimation);
randomPic.addEventListener("click",randomPics);
userChoice.addEventListener("click",picAsYourChoice);
container.style.display = "flex";
container.style.flexWrap = "wrap";
// container.style.flexDirection = "column";
container.style.justifyContent = "space-evently";



headline1.style.position = "absolute";
imgChoice1.style.position = "relative";
headline1.addEventListener("mouseover",changeColor);
headline1.addEventListener("mouseout",removeColor);
img.addEventListener("mouseover",zoom);
img.addEventListener("mouseleave",removeZoom);
moveHeadline.addEventListener("click",move);
moveBackBtn.addEventListener("click", moveBack)






