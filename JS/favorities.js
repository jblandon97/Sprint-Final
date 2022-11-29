const saveFavorities = (div) => {
    let div_main = document.querySelector("#favorities")
    div_main.appendChild(div)
}

const showFavorities = () => {
    let _favorities = localStorage.getItem("favorities")
    let favorities = JSON.parse(_favorities)
    console.log(favorities)
    favorities.forEach(element => {
        // console.log(element)
        let div = document.createElement("div")
        div.setAttribute("class", "card flex-column justify-content-around w-25 h-25")
        div.innerHTML = element
        saveFavorities(div)
    })
}

showFavorities()
