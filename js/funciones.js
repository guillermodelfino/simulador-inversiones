function getFormData() {

}

var asesorComercial = "Asesor Comercial";
var nombreYApellido = "Inversor Individual";
var moneda = "ARS";
var tipo = "Trimestral";
var capitalTransferido = 210000;
var fechaDeTransferencia = new Date(2008,06,10);
var fechaDeTitulo = new Date(2008,06,11);
var plazo = 12;
var tasaAnual = 80;
var tasaMensual = tasaAnual / 12;
var tasaDiaria = tasaMensual / 30;
var tasaEfectiva = 0;
var aplicaIva = true;

var iva = 21;
var interesTotal = 0;
var itera = 1;

if(tipo == "Trimestral") {
    iterar = plazo / 3;
} else {
    itera = plazo;
}

if(aplicaIva == true) {

    iva = (iva /100) + 1;

} else {

    iva = 1;

}



/* =================================
VARIABLES AUXILIARES
================================= */

function calcularDias() {

    var calculoDias = fechaDeTitulo.getTime() - fechaDeTransferencia.getTime();
    var calculoDias = Math.round(calculoDias / (1000 * 60 * 60 * 24));
    return calculoDias;

}

var dias = calcularDias();

function calcularCapitalActualizado() {

    var calculoCapitalActualizado = capitalTransferido * ((tasaDiaria * dias) / 100) + capitalTransferido;
    return calculoCapitalActualizado;

}

var capitalActualizado = calcularCapitalActualizado();

var capitalActualizadoInicial = capitalActualizado;

if(tipo == "Capitaliza") {

    for(i = 1; i <= plazo; i++) {

        interesMensual = ((capitalActualizado * ((tasaAnual / 100) + 1)) - capitalActualizado) / 12;
        console.log("Interes del mes " + i + ": " + interesMensual);
        capitalActualizado = interesMensual + capitalActualizado;
        console.log("Capital compuesto del mes " + i + ": " + capitalActualizado);

    }

    tasaEfectiva = ((capitalActualizado * 100 / capitalActualizadoInicial) - 100);

    var interesTotal = capitalActualizado - capitalActualizadoInicial;

    console.log("Tasa efectiva: " + tasaEfectiva);

    // SI A APLICA IVA

    

    if(aplicaIva == true) {

        capitalActualizado = capitalActualizado * IVA;
        interesTotal = interesTotal * IVA;

    } else {

    }

} else if (tipo == "Mensual" || tipo == "Trimestral") {



    interesTotal = capitalActualizadoInicial * ((tasaAnual / 100) + 1);
    interesMensual = (interesTotal - capitalActualizadoInicial) / 12;

    console.log(interesMensual);

    for(i = 1; i <= itera; i++) {
        console.log("Interes del mes " + i + ": " + interesMensual);
    }

    for(i = 1; i <= itera - 1; i++) {
        console.log("Pago del mes " + i + ": " + interesMensual);
    }

    console.log("Pago del mes " + plazo + ": " + (interesMensual + capitalActualizadoInicial));

    interesTotal = (interesMensual * plazo) + capitalActualizadoInicial;
    capitalActualizado = interesTotal - capitalActualizadoInicial;
    console.log(capitalActualizado);
    console.log(interesTotal);


}

else {

    alert("El tipo ingresado es incorrecto");


}


/*
console.log("Días: " + dias);

console.log("Captal actualizado: ");
console.log(capitalActualizado);

console.log("Interes Total");
console.log(interesTotal);

console.log("Capital final: ");
console.log(capitalFinal);

console.log("Interes a fin de perdiodo: ")
console.log(interesFinDePerdiodo);

*/

