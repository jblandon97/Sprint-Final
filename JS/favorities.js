const saveCard = (div) => {
    let div_main = document.querySelector("#favorities")
    div_main.appendChild(div)
}

const showFavorities = () => {
    let _cards = localStorage.getItem("cards")
    let cards = JSON.parse(_cards)
    console.log(cards)
    cards.forEach(element => {
        // console.log(element)
        let div = document.createElement("div")
        div.setAttribute("class", "card flex-column justify-content-around w-25 h-25")
        div.innerHTML = element
        saveCard(div)
    })
}

showFavorities()
