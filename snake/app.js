const board = document.querySelector("#board")

const SQUARES_NUM = 529


var snakeColors = ['#cf0c0c', '#0fe04e', '#6b42fc', '#0f69f0', 'white']

var SquaresArr = []

var snakeArr = []



var snakeSize = 1;

var directionInt;

let currentDirection;

const GameEnd = false
let StartColorSqr;
let foodSqr;
let foodSqrInterval;
document.addEventListener('keydown', moveSnake)



for (let i = 0; i < SQUARES_NUM; i++) {
    SquaresArr[i] = document.createElement('div')
    SquaresArr[i].classList.add('square')



    // square.addEventListener('mouseover', () => {

    //     setColor(square)
    // })

    // square.addEventListener('mouseleave', () => {

    //     removeColor(square)
    // })

    board.append(SquaresArr[i])
}

function moveSnake() {
    for (let sqr in snakeArr) {
        switch (event.key) {
            case "ArrowUp":
                directionInt = -23
                ChangeDirection()
                break
            case "ArrowDown":
                directionInt = 23
                ChangeDirection()
                break
            case "ArrowLeft":
                directionInt = -1
                ChangeDirection()
                break
            case "ArrowRight":
                directionInt = 1
                ChangeDirection()
                break

        }
    }
}


let fastArr = []
let painted = 0

function ChangeDirection() {
    if (currentDirection) clearInterval(currentDirection)

    currentDirection = setInterval(function() {
        // for (let i = 0; i <= snakeSize; i++) {
        //    

        // }
        let square = SquaresArr[parseInt(giveMeIndexOfSquare(snakeArr[0])) + directionInt]
        fastArr.push(square)
        if (window.getComputedStyle(square).backgroundColor != 'rgb(29, 29, 29)' && square != foodSqr) {
            alert("Game end")
            location.reload();
        }
        setRedColor(square)

        snakeArr[0] = square

        painted++;
        console.log(fastArr, painted)
        if (painted == snakeSize) {
            painted--;
            removeColor(fastArr[0])
            fastArr.shift()
        }




    }, 100)
}



function setColor(square) {
    // var audio = new Audio();
    // audio.preload = 'auto';
    // audio.src = 'noty-do.mp3';
    // audio.play()
    color = getRandomColor() //getRandomElement(snakeColors)
    square.style.background = color;
    square.style.boxShadow = `0 0 5px ${color}`
}

function setRedColor(square) {
    color = "red"
    square.style.background = color;
    square.style.boxShadow = `0 0 5px ${color}`
}


function removeColor(square) {

    square.style.background = "#1d1d1d"
    square.style.boxShadow = "0 0 5px #000"
}

function getRandomColor() {
    var color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
    return color
}


function getRandomElement(arr) {
    let index = Math.floor(Math.random() * arr.length)
    return arr[index]
}

function giveMeIndexOfSquare(square) {
    for (let key in SquaresArr) {

        if (SquaresArr[key] === square) return key
    }
}

function CreateSnakeFood() {
    randomSqr = getRandomElement(SquaresArr)
    if (window.getComputedStyle(randomSqr).backgroundColor != "rgb(29, 29, 29)") {
        CreateSnakeFood()
        return
    }
    foodSqr = randomSqr

    foodSqrInterval = setInterval(function() {
        setColor(foodSqr)
    }, 1000)
}

CreateSnakeFood()

function createHeadSnake() {
    do {
        snakeArr[0] = getRandomElement(SquaresArr)

    } while (snakeArr[0] === foodSqr)

    if (snakeArr[0]) {
        setRedColor(snakeArr[0])
        StartColorSqr = setInterval(function() {
            setRedColor(snakeArr[0])
        }, 1500)
    }
    let gainInterval = setInterval(function() {
            if (snakeArr[0] === foodSqr) {
                clearInterval(foodSqrInterval)
                CreateSnakeFood()
                var audio = new Audio();
                audio.preload = 'auto';
                audio.src = 'noty-do.mp3';
                audio.play()


                snakeSize++;
            }
        },
        100)



    fastArr.push(snakeArr[0])

}

function createBlockOfSnake(indexOfSnake, squareNum) {
    snakeArr[indexOfSnake] = SquaresArr[squareNum];
    setRedColor(SquaresArr[squareNum])
}


createHeadSnake()