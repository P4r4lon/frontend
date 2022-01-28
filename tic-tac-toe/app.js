const board = document.querySelector('#board')
let state = true //true x; false o 
let game = true
var field = []


for (let i = 0; i < 9; i++) {

    field[i] = document.createElement('div')
    field[i].classList.add('square')
    field[i].val = "e"
    field[i].addEventListener('click', () => {
        markSquare(field[i])
    })

    board.append(field[i])

}



function markSquare(element) {
    if (game) {
        if (element.val == "e") {
            let url = ""
            let val = ""
            if (state) {
                url = 'url("img/x.png")'
                val = "x"
                state = false
            } else {
                url = 'url("img/o.png")'
                val = "o"
                state = true
            }
            element.style.backgroundImage = url
            element.val = val
        }
        checkWinConditions();
    }
}

const comb = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
]


function checkWinConditions() {
    let result = ""

    let emptysqrs = 0

    for (let i = 0; i < 9; i++) {
        result += field[i].val
        if (field[i].val == 'e') {
            emptysqrs++
        }
    }

    for (c of comb) {

        if (result[c[0]] != 'e' && result[c[0]] == result[c[1]] && result[c[1]] == result[c[2]]) {
            console.log(c[0], c[1], c[2])
            let arr = [c[0], c[1], c[2]]
            game = false
            setTimeout(() => {
                for (el of arr) {
                    field[el].style.border = "3px solid red"
                }

                setTimeout(() => {
                    location.reload()
                }, 1800)
            }, 400)


        } else if (emptysqrs == 0) {
            setTimeout(() => {
                location.reload()
            }, 1000)
        }
    }
}