class Gallery {
    constructor() {
        // верхние контроллы
        this.galleryCoverBtns = document.querySelectorAll('.gallery__cover-item')
        this.galleryCoverMain = document.querySelectorAll('.gallery__cover-main')

        // нижние контроллы
        this.galleryCardBtns = document.querySelectorAll('.gallery__card-item')
        this.galleryMainContents = document.querySelectorAll('.gallery__main-content')

        this.src = null
    }

    getImageSrc = () => {
        this.galleryCoverBtns.forEach(item => {
            item.addEventListener('pointerdown', () => {
                this.src = item.querySelector('img').getAttribute('src')
                this.changeCoverImage()
            })
        })
    }

    changeCoverImage = () => {
        console.log(this.src)

        this.galleryCoverMain.forEach(item => {
            if (item.classList.contains('is-active')) {
                item.setAttribute('src', this.src)
            }
        })
    }

    clearActiveClass = (element, nameClass = 'is-active') => {
        element.forEach(item => item.classList.remove(`${ nameClass }`))
    }

    setActiveClass = (element, index, nameClass = 'is-active') => {
        element[index].classList.add(`${ nameClass }`)
    }

    elementClick = (element = this.galleryCardBtns, nameClass = 'is-active') => {
        element.forEach((item, index) => {
            item.addEventListener('pointerdown', () => {

                if (item.classList.contains(nameClass)) return

                this.clearActiveClass(this.galleryCardBtns)
                this.clearActiveClass(this.galleryMainContents)
                this.clearActiveClass(this.galleryCoverMain)

                this.setActiveClass(this.galleryCardBtns, index)
                this.setActiveClass(this.galleryMainContents, index)
                this.setActiveClass(this.galleryCoverMain, index)
            })
        })
    }

    init = () => {
        console.log(' gallery init')
        this.getImageSrc()
        this.elementClick()
        this.getImageSrc()
    }
}

const gallery = new Gallery()
gallery.init()



















