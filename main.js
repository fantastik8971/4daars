function random (min, max){
    return Math.floor(Math.random() * max ) + min;
}
document.querySelector(`h2`).innerHTML = (`${random(0,100)}`)