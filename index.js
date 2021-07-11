(() => {
    const shoes = [
        {
            src: "./assets/blue-shoes.png",
            textColor: "text-blue",
            background: "linear-blue"
        },
        {
            src: "./assets/red-shoes.png",
            textColor: "text-red",
            background: "linear-red"
        },
        {
            src: "./assets/green-shoes.png",
            textColor: "text-green",
            background: "linear-green"
        }, 
        {
            src: "./assets/orange-shoes.png",
            textColor: "text-orange",
            background: "linear-orange"
        }, 
        {
            src: "./assets/black-shoes.png",
            textColor: "text-black",
            background: "linear-black"
        }
    ]

    const parent = document.querySelector(".shoes")
    const element = document.querySelector(".content-1")
    
    for(let i = 0; i < 5; i++) {
        const elementClone = element.cloneNode(true)
        const elementsChild = elementClone.childNodes

        elementsChild[5].src = shoes[i].src
        elementClone.classList.add(shoes[i].background)
        elementsChild[1].childNodes[3].childNodes[1].classList.add(shoes[i].textColor)

        if(i == 0) { elementClone.classList.add("overlap") }

        parent.appendChild(elementClone)
    }

    parent.removeChild(parent.childNodes[1])
    
    const colorButtons = document.querySelectorAll(".buttons__colors")
    const buttonNew = document.querySelector(".title__button")
    const buttonAddTo = document.querySelector(".footer__button")
    
})();