class Galery {
    constructor() {
        this.buttons = document.querySelectorAll('.gallery__card-item')
        this.tabs = document.querySelectorAll('.gallery__main-content')
    }

    clearActiveClass = (element, nameClass = 'is-active') => {
        element.forEach(item => item.classList.remove(`${ nameClass }`))
    }

    setActiveClass = (element, index, nameClass = 'is-active') => {
        element[index].classList.add(`${ nameClass }`)
    }

    elementClick = (element = this.buttons, nameClass = 'is-active') => {
        element.forEach((item, index) => {
            item.addEventListener('pointerdown', () => {

                if (item.classList.contains(nameClass)) return

                this.clearActiveClass(this.buttons)
                this.clearActiveClass(this.tabs)
                this.setActiveClass(this.buttons, index)
                this.setActiveClass(this.tabs, index)
            })
        })
    }
}

const galery = new Galery()
galery.elementClick()



















