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
        </div>`;
        saveCard(div)
    })
    let card = document.getElementsByClassName("card flex-column justify-content-evenly")

    let hover = (card) => {

        for (let index = 0; index < card.length; index++) {
            let button = document.createElement("button")
            card[index].addEventListener("mouseout", e => {

                button.setAttribute("class", "btn-favority")
                button.innerHTML = '<i class="fa bi-eye-fill"></i> | <i class="fa bi-recycle"></i> | <i class="fa bi-heart btn"></i>'
                card[index].appendChild(button)

            })
            button.addEventListener("click", e => {
               let favorities = document.getElementById("favorities")
               favorities.appendChild(e.path[1])
            })
            card[index].addEventListener("mouseleave", e => {
                card[index].removeChild(button)
            })


        }
        // console.log(card)


    }
    hover(card)
}



showProducts()

