

const savePurchases = (div) => {
    let div_main = document.querySelector("#purchases")
    div_main.appendChild(div)
}



const showPurchases = () => {
    
    let _purchases = localStorage.getItem("purchases")
    let purchases = JSON.parse(_purchases)
    console.log(purchases)
    purchases.forEach(element => {
        console.log(typeof(element))
        let div_purchase = document.createElement("div")
        div_purchase.setAttribute("class", "container justify-content-around bg-white")     
        div_purchase.innerHTML = ` 
        <div class="row row-cols-7">
        <div class="col"><img
                src="${element.image}"
                alt="" class="w-50"></div>
        <div class="col">
            <p class="name">${element.name}</p>
            <p class="quantity">${element.amount}</p>
        </div>
        <div class="col">
            <h6><strong>Price</strong></h6>
            <p class="price">${element.promotionPrice}</p>
        </div>
        <div class="col-4">
            <h6><strong>Qty</strong></h6>
            <div class="addPurchase">
                <button class="disadd">-</button>
                <p class="amountAdded">0</p>
                <button class="add">+</button>
            </div>
        </div>
        <div class="col">
            <h6><strong>Total</strong></h6>
            <p class="price">${element.promotionPrice}</p>
        </div>
        <div class="col">
            <h6><strong>Action</strong></h6>
            <p class="saveForLater">Save for later</p>
            <p class="remove">Remove</p>
        </div>
    </div>
        `
        savePurchases(div_purchase)
    })
}

showPurchases()