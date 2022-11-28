const d = document
const input = "#search"

const selector = ".card"


function filterProducts(input, selector) {
    d.addEventListener("keyup", e => {
        if (e.target.matches(input)) {
            console.log(e.target.value)
            d.querySelectorAll(selector).forEach(element => element.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ? element.classList.remove("hidden")
                : element.classList.add("hidden"))
        }
    })
}

filterProducts(input, selector)