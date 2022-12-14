const API_URL = "http://localhost:3000" //json-server


const saveCard = (div) => {
    let div_main = document.querySelector("#topSaveToday")
    div_main.appendChild(div)
}

const products = async () => {
    try {
        let response = await fetch(API_URL + "/products")
        let data = await response.json()
        return data
    } catch (error) {
        console.log(error);

    }
}

const showProducts = async () => {
    let data = await products()
    data.forEach(element => {
        // console.log(element)
        let div = document.createElement("div")
        div.setAttribute("class", "card flex-column justify-content-evenly")
        div.innerHTML = `  
        <img src="${element.img}" alt="..." class="imgProduct">
        <div class="card-body">
            <h5 class="card-title">${element.typeOfProduct}</h5>
            <p class="card-text name">${element.name}</p>
            <p class="card-text"><small class="text-muted">${element.amount}</small></p>
            <p class="card-text"><small class="text-success">${element.promotionPrice}</small><small class="text-success"> ${element.realPrice}</small></p>
            <div class="addToCar bg-white">
                <!-- <button class="disadd">-</button> -->
                <p class="amountAdded"><strong>Add</strong></p>
                <button class="add">+</button>
            </div>
        </div>`
 
        saveCard(div)
    })
    let card = document.getElementsByClassName("card flex-column justify-content-evenly")
    let button2 = document.getElementsByClassName("add")

    const hover = (card) => {
        for (let index = 0; index < card.length; index++) {
            let button1 = document.createElement("button")
            card[index].addEventListener("mouseout", e => {
                button1.setAttribute("class", "btn-favority")
                button1.innerHTML = '<i class="fa bi-eye-fill"></i> | <i class="fa bi-recycle"></i> | <i class="fa bi-heart btn"></i>'
                card[index].appendChild(button1)

            })
            button2[index].addEventListener("click", e =>{
                console.log("hola")
                let _purchase = localStorage.getItem("purchases")
                let purchases = []
                if (_purchase == null) {
                    purchases = []
                } else {
                    purchases = JSON.parse(_purchase)
                }
                console.log(purchases)
                let newPurchase = e.path[3].innerHTML
                purchases.push(newPurchase)
                localStorage.setItem("purchases", JSON.stringify(purchases))
            })
            button1.addEventListener("click", e => {
                card[index].removeChild(button1)
                let _favority = localStorage.getItem("favorities")
                let favorities = []
                if (_favority == null) {
                    favorities = []
                } else {
                    favorities = JSON.parse(_favority)
                }
                console.log(favorities)
                let newCard = e.path[3].innerHTML
                favorities.push(newCard)
                localStorage.setItem("favorities", JSON.stringify(favorities))

            })
            card[index].addEventListener("mouseleave", e => {
                card[index].removeChild(button1)
            })


        }

    }
    hover(card)
}





showProducts()

