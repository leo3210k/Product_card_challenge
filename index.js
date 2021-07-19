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

    colorButtons.forEach(e => {
        e.addEventListener("click", (e => {
            const element = e.target.classList[1]

            switch(element) {
                case "background-blue":
                    parent.scrollTo(0, 0)

                    document.querySelector(".overlap").classList.remove("overlap")
                    document.querySelector("img[src='./assets/blue-shoes.png']")
                        .classList.add("overlap")

                    buttonNew.classList.remove(buttonNew.classList[1])
                    buttonNew.classList.add("background-blue")

                    buttonAddTo.classList.remove(buttonAddTo.classList[1])
                    buttonAddTo.classList.add("background-blue")
                break;
                case "background-red":
                    parent.scrollTo(440, 0)

                    document.querySelector(".overlap").classList.remove("overlap")
                    document.querySelector("img[src='./assets/red-shoes.png']")
                        .classList.add("overlap")

                    buttonNew.classList.remove(buttonNew.classList[1])
                    buttonNew.classList.add("background-red")
                    
                    buttonAddTo.classList.remove(buttonAddTo.classList[1])
                    buttonAddTo.classList.add("background-red")
                break;
                case "background-green":
                    parent.scrollTo(880, 0)

                    document.querySelector(".overlap").classList.remove("overlap")
                    document.querySelector("img[src='./assets/green-shoes.png']")
                        .classList.add("overlap")

                    buttonNew.classList.remove(buttonNew.classList[1])
                    buttonNew.classList.add("background-green")

                    buttonAddTo.classList.remove(buttonAddTo.classList[1])
                    buttonAddTo.classList.add("background-green")
                break;
                case "background-orange":
                    parent.scrollTo(1320, 0)

                    document.querySelector(".overlap").classList.remove("overlap")
                    document.querySelector("img[src='./assets/orange-shoes.png']")
                        .classList.add("overlap")

                    buttonNew.classList.remove(buttonNew.classList[1])
                    buttonNew.classList.add("background-orange")

                    buttonAddTo.classList.remove(buttonAddTo.classList[1])
                    buttonAddTo.classList.add("background-orange")
                break;
                case "background-black":
                    parent.scrollTo(1760, 0)

                    document.querySelector(".overlap").classList.remove("overlap")
                    document.querySelector("img[src='./assets/black-shoes.png']")
                        .classList.add("overlap")

                    buttonNew.classList.remove(buttonNew.classList[1])
                    buttonNew.classList.add("background-black")

                    buttonAddTo.classList.remove(buttonAddTo.classList[1])
                    buttonAddTo.classList.add("background-black")
                break;
            }
        }))
    })
    
})();