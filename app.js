//Punto 1
function verificarCalificacion() {
    const grado = parseInt(document.getElementById("grado").value);
    let mensaje = "";
    if (grado >= 90) {
        mensaje = "Aprobado con honores";
    } else if (grado >= 70) {
        mensaje = "Aprobado";
    } else {
        mensaje = "Reprobado";
    }
    document.getElementById("gradoSalida").innerText = mensaje;
}

//Punto 2
function determinarParidad() {
    const parImpar = parseInt(document.getElementById("parImpar").value);
    let mensaje = "";
    if (parImpar % 2 === 0) {
        mensaje = "El número es par";
    } else {
        mensaje = "El número es impar";
    }
    document.getElementById("parImparSalida").innerText = mensaje;
}

//Punto 3
function evaluarDescuento() {
    const descuento = parseFloat(document.getElementById("descuento").value);
    let precioFinal = descuento;
    if (descuento > 100000) {
        precioFinal = descuento * 0.9; // Aplica descuento del 10%
    }
    document.getElementById("descuentoSalida").innerText = `Monto final a pagar: $${precioFinal.toFixed(0)}`;
}

//Punto 4
function jugarAdivinanza() {
    const adivinar = parseInt(document.getElementById("adivinar").value);
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    let mensaje = "";
    if (adivinar === numeroAleatorio) {
        mensaje = "¡Felicidades, adivinaste el número!";
    } else {
        mensaje = `Lo siento, el número era ${numeroAleatorio}`;
    }
    document.getElementById("adivinarSalida").innerText = mensaje;
}