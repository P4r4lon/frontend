const startBtn = document.querySelector("#start")
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector("#time-list")
const timeEl = document.querySelector("#time")
const board = document.querySelector("#board")
let time = 0
let score = 0

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', event =>{
    if (event.target.classList.contains('time-btn')){
        console.log(event.target.getAttribute('data-time'))
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add("up")
        startGame()
    }
})

board.addEventListener('click', event =>{
    if(event.target.classList.contains('circle')){
        score++
        event.target.remove()
        createRandomCircle()
    }
})

function startGame(){  
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}

function decreaseTime(){
    if (time === 0){
        finishGame()
    }else{
        let current = --time
        if (current < 10){
           current = `0${current}`
        }
        setTime(current)
    }
}

function setTime(value){
    timeEl.innerHTML = `00:${value}`
}

function finishGame(){
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>счёт <span class = "primary">${score}</span></h1>`
}

function createRandomCircle(){
    const circle = document.createElement('div')
    circle.classList.add('circle')
    circle.style.background = getRandomColor()
    const size = GetRandomNumber(10, 60)
    const {width, height} = board.getBoundingClientRect()
    const x = GetRandomNumber(0, width - size)
    const y = GetRandomNumber(0, height - size)
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    circle.style.height = `${size}px`
    circle.style.width = `${size}px`
    board.append(circle)
}

function GetRandomNumber(min, max){
    return Math.round(Math.random() * (max - min) + min)
}

function getRandomColor() {
    var color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
    return color
}