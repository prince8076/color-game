const color = document.getElementById('color-code')
const option =document.getElementById('options-container')
let randomColor= null;
const scoreContainer =document.getElementById('score')
let score =0;

function generateRandomNumberBetween(min, max) {
    return min+ Math.floor(Math.random()* (max - min +1));
}
function generateRandomColorRGB () {
    const red = generateRandomNumberBetween(0,255);
    const green =generateRandomNumberBetween(0,255);
    const blue =generateRandomNumberBetween(0,255);
    return `rgb(${red}, ${green}, ${blue})`;
}

function generateRandomNumberBetween(min, max) {
    return min+ Math.floor(Math.random()* (max - min +1));
}

function incrementScore(){
    score+=1;
    scoreContainer.innerText = score
}

function validateResult(el){
    console.log(el.target);
    const selectedColor = el.target.style.backgroundColor
    if (selectedColor === randomColor){
        incrementScore();
    }else{
        score=0;
    }
    window.localStorage.setItem('score',score);
    startGame();
}

function startGame (){
    score= Number(window.localStorage.getItem('score')) ?? 0;
    scoreContainer.innerText=score
    option.innerHTML=null;
    randomColor=generateRandomColorRGB();
    color.innerText=randomColor;
    const ansIndex = generateRandomNumberBetween(0,5)
    for (let i=0; i<6;i++){
        const div = document.createElement('div');
        div.addEventListener('click',validateResult)
        div.style.backgroundColor = i === ansIndex ? randomColor: generateRandomColorRGB();
        option.append(div)
    }
}

window.addEventListener('load',()=>startGame());
