const slider = {
    active: 's-1',
    actveValues: {
        's-1': 's-2',
        's-2': 's-3',
        's-3': 's-1'
    },
    makeStaticHeight() {
        if(window.innerWidth <= 500) {
            document.getElementById('slider').style.height = '718px'
        } else {
            document.getElementById('slider').style.height = '880px'
        }
    },
    makeDefaultHeight() {
        document.getElementById('slider').style.height = 'auto'
    },
    start() {
        
        setInterval(() => {
           
            document.getElementById(this.active).classList.add('op-0')
            document.getElementById(this.actveValues[this.active]).classList.remove('op-0')
            
            this.active = this.actveValues[this.active]

            
        }, 3000)
    },
}

const crypto_logo = {
    id: 0,
    class: (window.innerWidth <= 500) ? 'mobile-img' : 'token-img',
    start() {
        setInterval(() => {
            
            if(this.id == 7) {
                document.querySelectorAll('.' + this.class)[7].classList.remove('token-img-animate')
                document.querySelectorAll('.' + this.class)[0].classList.add('token-img-animate')
            } else {
                document.querySelectorAll('.' + this.class)[this.id].classList.remove('token-img-animate')
                document.querySelectorAll('.' + this.class)[this.id + 1].classList.add('token-img-animate')
            }
            // document.querySelectorAll('.token-img')[this.id].style.width = '96px'
            // document.querySelectorAll('.token-img')[this.id].style.height = '96px'

            this.id++

            if(this.id == 8) this.id = 0
            
        }, 1000)
            
    }
} 

if(localStorage.getItem('theme') == undefined) {
    localStorage.setItem('theme', 'light')
    document.querySelector('.theme-btn').setAttribute('src', 'assets/img/UI/light.svg')
}

const theme = {
    set() {
        if(localStorage.getItem('theme') == 'light') {
            localStorage.setItem('theme', 'dark')
            document.querySelector('.theme-btn').setAttribute('src', 'assets/img/UI/dark.svg')
        } else {
            localStorage.setItem('theme', 'light')
            document.querySelector('.theme-btn').setAttribute('src', 'assets/img/UI/light.svg')
        }
        document.getElementById('style').setAttribute('href', 'style/' + localStorage.getItem('theme') + '.css')
    }
}
crypto_logo.start()

slider.start()