function contar(numero) {
    let msg = document.getElementById("msg")
    msg.innerHTML = numero

    if (numero < 100) {
        setTimeout(function() {
            contar(numero + 1)
        }, 20)
    }
}

contar(1)