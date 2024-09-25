function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById("txtano")
    var res = window.document.getElementById("res")
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var fsex = window.document.getElementsByName("radsex")
        var idade = ano - fano.value
        var genêro = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        img.style.width = "300px";
        img.style.height = "300px";
        img.style.marginTop = "1.5rem";
        if (fsex[0].checked) {
            genêro = "Homem"
            if (idade >=0 && idade < 8) {
                img.setAttribute("src", "image/bebe.png")
            } else if (idade <= 22) {
                img.setAttribute("src", "image/homem_jv.png")
            } else if (idade <= 50) {
                img.setAttribute("src", "image/homem_adt.png")
            } else {
                img.setAttribute("src", "image/homem_id.png")
            }
        } else if (fsex[1].checked) {
            genêro = "Mulher"
            if (idade >=0 && idade < 8) {
                img.setAttribute("src", "image/bebe.png")
            } else if (idade <= 22) {
                img.setAttribute("src", "image/mulher_jv.png")
            } else if (idade <= 50) {
                img.setAttribute("src", "image/mulher_adt.png")
            } else {
                img.setAttribute("src", "image/mulher_id.png")
            }
        }
        res.innerHTML = `Dectamos, um <strong>${genêro}</strong> com ${idade} anos.`
        res.appendChild(img)
    }
}