const board = document.querySelector("#board")

const cardNum = 49

let cards = []

let fruits = ["apple.png", "pear.png", "watermelon.png", "cherry.png"]

let searchingSecond = false
let globalCard = null
for (let i = 0; i < cardNum; i++) {
    cards[i] = document.createElement('div')
    cards[i].classList.add('card')
    board.append(cards[i])

    cards[i].addEventListener('click', changeState)
    cards[i].key = getRandomElement(fruits)
    cards[i].ind = i
}

function changeState() {
    this.classList.add("reversed")
    setTimeout(changeBackground, 200, this)
    console.log(searchingSecond)
    setTimeout(() => {
        console.log(searchingSecond)
        if (searchingSecond) {
            if (this.key == globalCard.key && this.ind != globalCard.ind) {
                deleteCard(this)
                deleteCard(globalCard)
            } else {
                backToState(this)
                backToState(globalCard)
                this.classList.remove("reversed")
                this.style.backgroundImage = "url('img/x.png')"

                globalCard.classList.remove("reversed")
                globalCard.style.backgroundImage = "url('img/x.png')"

            }
        }
        searchingSecond ? searchingSecond = false : searchingSecond = true
        globalCard = this
    }, 1000)


}


function changeBackground(element) {
    element.style.backgroundImage = `url(img/${element.key})`
    element.style.backgroundSize = "100%"

}

function getRandomElement(arr) {
    let index = Math.floor(Math.random() * arr.length)
    return arr[index]
}

function deleteCard(card) {
    card.removeEventListener('click', changeState)
    card.style.backgroundColor = "rgb(209, 209, 146)"
    card.style.backgroundImage = "url('img/mark.png')"
    card.style.backgroundRepeat = "no-repeat"
    card.style.backgroundSize = "100%"
    card.style.cursor = "default"
}

function backToState(card) {
    card.classList.remove("reversed")
    card.style.backgroundImage = "url('img/x.png')"
    card.style.backgroundRepeat = "no-repeat"
    card.style.backgroundSize = "100%"
    setTimeout(() => {
        card.style.backgroundImage = "none"
    }, 400)
}