const menuButton = document.querySelector(".arrow")
const infoBlock = document.querySelector(".infoBlock")
const icons = document.querySelectorAll(".copy")
const infoContainer = document.querySelector(".info_container")
const navButtons = document.querySelectorAll(".navmenu")
const infotext = document.querySelectorAll(".infotext")
console.log(navButtons)

menuButton.onclick = function() {
    this.classList.toggle("arrowactive")
    infoContainer.classList.toggle("visible")
}

icons.forEach(element => {
    element.onclick = function() {
        navigator.clipboard.writeText(element.id)
            .then(() => {
                element.classList.add("copied")
                setTimeout(() => {
                    element.classList.remove("copied")
                }, 1000)
            }).catch(err => {
                console.log(err)
            })
    }
})

let oldActive = document.querySelector(".active")
let oldInfo = document.getElementById("activeInfo")
console.log(oldActive)
navButtons.forEach((element, index) => {
    console.log(1)
    element.onclick = function() {
        oldActive.classList.remove("active")
        element.classList.add("active")
        oldActive = document.querySelector(".active")
        oldInfo.classList.add("invisible")
        infotext[index].classList.remove("invisible")
        oldInfo = infotext[index]
    }
})