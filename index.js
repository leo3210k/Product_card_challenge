(() => {    
    const colorButtons = document.querySelectorAll(".buttons__colors")
    const buttonNew = document.querySelector(".title__button")
    const buttonAddTo = document.querySelector(".footer__button")

    colorButtons.forEach(element => {
        element.addEventListener("click", event => {
            console.log('testeeeeeeeeeeeeeeeee')

            const element = event.target.classList.item(1)
            const background = document.querySelector(".shoes")

            switch(element) {
                case "background-blue":
                    background.scrollTo(0, 0)

                    document.querySelector(".overlap").classList.remove("overlap")
                    document.querySelector("img[src='./assets/blue-shoes.png']")
                        .classList.add("overlap")

                    buttonNew.classList.remove(buttonNew.classList[1])
                    buttonNew.classList.add("background-blue")

                    buttonAddTo.classList.remove(buttonAddTo.classList[1])
                    buttonAddTo.classList.add("background-blue")
                break;
                case "background-red":
                    background.scrollTo(440, 0)

                    document.querySelector(".overlap").classList.remove("overlap")
                    document.querySelector("img[src='./assets/red-shoes.png']")
                        .classList.add("overlap")

                    buttonNew.classList.remove(buttonNew.classList[1])
                    buttonNew.classList.add("background-red")
                    
                    buttonAddTo.classList.remove(buttonAddTo.classList[1])
                    buttonAddTo.classList.add("background-red")
                break;
                case "background-green":
                    background.scrollTo(880, 0)

                    document.querySelector(".overlap").classList.remove("overlap")
                    document.querySelector("img[src='./assets/green-shoes.png']")
                        .classList.add("overlap")

                    buttonNew.classList.remove(buttonNew.classList[1])
                    buttonNew.classList.add("background-green")

                    buttonAddTo.classList.remove(buttonAddTo.classList[1])
                    buttonAddTo.classList.add("background-green")
                break;
                case "background-orange":
                    background.scrollTo(1320, 0)

                    document.querySelector(".overlap").classList.remove("overlap")
                    document.querySelector("img[src='./assets/orange-shoes.png']")
                        .classList.add("overlap")

                    buttonNew.classList.remove(buttonNew.classList[1])
                    buttonNew.classList.add("background-orange")

                    buttonAddTo.classList.remove(buttonAddTo.classList[1])
                    buttonAddTo.classList.add("background-orange")
                break;
                case "background-black":
                    background.scrollTo(1760, 0)

                    document.querySelector(".overlap").classList.remove("overlap")
                    document.querySelector("img[src='./assets/black-shoes.png']")
                        .classList.add("overlap")

                    buttonNew.classList.remove(buttonNew.classList[1])
                    buttonNew.classList.add("background-black")

                    buttonAddTo.classList.remove(buttonAddTo.classList[1])
                    buttonAddTo.classList.add("background-black")
                break;
            }
        })

        colorButtons.forEach(e => {
            e.addEventListener("click", e => {
                console.log('testee')
            })
        })
    })
})();