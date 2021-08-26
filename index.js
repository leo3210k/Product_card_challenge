(() => {    
    const colorButtons = document.querySelectorAll(".buttons__colors")
    const buttonNew = document.querySelector(".title__button")
    const buttonAddTo = document.querySelector(".footer__button")

    let currentColor = "background-blue"

    function changeColors(element, indexToRemove, attribute) {
        element.classList.remove(element.classList[indexToRemove])
        element.classList.add(attribute)
    }

    colorButtons.forEach(element => {
        element.addEventListener("click", event => {

            const element = event.target.classList.item(1)
            const background = document.querySelector(".shoes")
            const activedButtonSize = document.querySelector('.active')

            switch(element) {
                case "background-blue":
                    background.scrollTo(0, 0)
                    currentColor = "background-blue"

                    document.querySelector(".overlap").classList.remove("overlap")
                    document.querySelector("img[src='./assets/blue-shoes.png']")
                        .classList.add("overlap")

                    changeColors(buttonNew, 1, currentColor)
                    changeColors(buttonAddTo, 1, currentColor)
                    changeColors(activedButtonSize, 2, currentColor)
                break;
                case "background-red":
                    background.scrollTo(440, 0)
                    currentColor = "background-red"

                    document.querySelector(".overlap").classList.remove("overlap")
                    document.querySelector("img[src='./assets/red-shoes.png']")
                        .classList.add("overlap")

                    changeColors(buttonNew, 1, currentColor)
                    changeColors(buttonAddTo, 1, currentColor)
                    changeColors(activedButtonSize, 2, currentColor)
                break;
                case "background-green":
                    background.scrollTo(880, 0)
                    currentColor = "background-green"

                    document.querySelector(".overlap").classList.remove("overlap")
                    document.querySelector("img[src='./assets/green-shoes.png']")
                        .classList.add("overlap")

                    changeColors(buttonNew, 1, currentColor)
                    changeColors(buttonAddTo, 1, currentColor)
                    changeColors(activedButtonSize, 2, currentColor)
                break;
                case "background-orange":
                    background.scrollTo(1320, 0)
                    currentColor = "background-orange"

                    document.querySelector(".overlap").classList.remove("overlap")
                    document.querySelector("img[src='./assets/orange-shoes.png']")
                        .classList.add("overlap")

                    changeColors(buttonNew, 1, currentColor)
                    changeColors(buttonAddTo, 1, currentColor)
                    changeColors(activedButtonSize, 2, currentColor)
                break;
                case "background-black":
                    background.scrollTo(1760, 0)
                    currentColor = "background-black"

                    document.querySelector(".overlap").classList.remove("overlap")
                    document.querySelector("img[src='./assets/black-shoes.png']")
                        .classList.add("overlap")

                    changeColors(buttonNew, 1, currentColor)
                    changeColors(buttonAddTo, 1, currentColor)
                    changeColors(activedButtonSize, 2, currentColor)
                break;
            }
        })
    })

    const sizeButtons = document.querySelectorAll(".buttons__size")

    sizeButtons.forEach(element => {
        element.addEventListener("click", event => {
            if(!event.target.classList.contains("active")) {
                const activedButton = document.querySelector(".active")

                activedButton.classList.remove("active", activedButton.classList[2])

                event.target.classList.add("active", currentColor)
            }
        })
    })

})();