$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky")
        } else {
            $('.navbar').removeClass("sticky")
        } if(this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show")
        } else {
            $('.scroll-up-btn').removeClass("show")
        }
    })
})
    $('.scroll-up-btn').click(function() {
        $('html').animate({scrollTop: 0})
})

function funcaoElementos() {
    window.open("https://patrikalmeida.github.io/projeto-elementos/", "_blank")
}

function funcaoMario() {
    window.open("https://patrikalmeida.github.io/projeto-mario/", "_blank")
}

function funcaoMZ() {
    window.open("https://patrikalmeida.github.io/projeto-marvel-zombies/", "_blank")
}

function funcaoCordel() {
    window.open("https://patrikalmeida.github.io/projeto-cordel/", "_blank")
}

function funcaoAndroid() {
    window.open("https://patrikalmeida.github.io/projeto-android/", "_blank")
}

function funcaoSPFC() {
    window.open("https://patrikalmeida.github.io/projeto-spfc/", "_blank")
}

function funcaoCalc() {
    window.open("https://patrikalmeida.github.io/projeto-calculadora/", "_blank")
}

function funcaoJdV() {
    window.open("https://patrikalmeida.github.io/projeto-jogo-da-velha/", "_blank")
}