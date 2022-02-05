const canvas = document.querySelector("canvas")
const context = canvas.getContext("2d")

const cblock = document.querySelector(".wrapper")

let w = canvas.width = cblock.clientWidth
let h = canvas.height = cblock.offsetHeight




const str = "39 13 uhajrh13913ru hr30 103h38 h38 hjahajdbjsbn1-3 939zxncmnz, nqi1= -915910 iwk lzmnf[q =1= 0i rpjk1n3 b13hr13"
const matrix = str.split('')

let font = 12

let columns = w / font
let arr = []

for (let i = 0; i < columns; i++) {
    arr[i] = 1
}

function drawMatrix() {
    context.fillStyle = "rgba(0, 0, 0, .05)"
    context.fillRect(0, 0, w, h)
    context.fillStyle = "#0f0"
    context.font = font + "px system ui"

    for (let i = 0; i < arr.length; i++) {
        let txt = matrix[Math.floor(Math.random() * matrix.length)]
        context.fillText(txt, i * font, arr[i] * font)
        if (arr[i] * font > h && Math.random() > 0.975) arr[i] = 0
        arr[i]++
    }
}

let interval = setInterval(drawMatrix, 100)

window.addEventListener('resize', () => {
    clearInterval(interval)
    w = canvas.width = cblock.clientWidth
    h = canvas.height = cblock.offsetHeight
    columns = w / font

    for (let i = 0; i < columns; i++) {
        arr[i] = 1
    }

    interval = setInterval(drawMatrix, 100)
})