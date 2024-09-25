function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = "image/amanhecer.png"
        document.body.style.background = "#68733F"
    } else if (hora >= 12 && hora < 18) {
        img.src = "image/entardecer.png"
        document.body.style.background = "#F27830"
    } else {
        img.src = "image/anoitecer.png"
        document.body.style.background = "#5F4C73"
    }
}
