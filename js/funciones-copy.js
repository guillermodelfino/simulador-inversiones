/* =========================
VARIABLES PREESTABLECIDAD
========================= */

let asesorComercial = "Asesor Comercial";
let nombreYApellido = "Inversor Individual";
let moneda = "ARS";
let tipo = "Mensual";
let capitalTransferido = 210000;
let fechaDeTransferencia = new Date(2008,06,10);
let fechaDeTitulo = new Date(2008,06,11);
let duracionEnMeses = 6;
let tasaAnual = 80;
let verta = (tasaAnual / 100) + 1;
let tasaMensual = tasaAnual / 12;
let tasaDiaria = tasaMensual / 30;
let tasaEfectiva = 0;
let aplicaIva = true;
let iva = 1.21;
let iterar = (duracionEnMeses / 3) - 1;
var interesTotal = 0;


/* ==========
CALCULAR DIAS
========== */

function calcularDias() {

    var resultadoDias = fechaDeTitulo.getTime() - fechaDeTransferencia.getTime();
    var resultadoDias = Math.round(resultadoDias / (1000 * 60 * 60 * 24));
    return resultadoDias;

}

let dias = calcularDias();

/* =========================
CALCULAR CAPITAL ACTUALIZADO
========================= */

function calcularCapitalActualizado() {

    var resultadoCapitalActualizado = capitalTransferido * ((tasaDiaria * dias) / 100) + capitalTransferido;
    return resultadoCapitalActualizado;

}

let capitalActualizado = calcularCapitalActualizado();

let capitalActualizadoAux = capitalActualizado;

/* ===================
CALCULAR INTERES TOTAL
=================== */

if (tipo == "Capitaliza") {

    for(i = 1; i <= duracionEnMeses; i++) {

        interesPorMes = ((capitalActualizado * ((tasaAnual / 100) + 1)) - capitalActualizado) / 12;
        console.log("Interes del mes " + i + ": " + interesPorMes);
        capitalActualizado = interesPorMes + capitalActualizado;
        console.log("Capital compuesto del mes " + i + ": " + capitalActualizado);

    }

    tasaEfectiva = ((capitalActualizado * 100 / capitalActualizadoAux) - 100);

    console.log("Tasa efectiva: " + tasaEfectiva);

    var interesTotal = capitalActualizado - capitalActualizadoAux ;


} else {


    
/* ===================
CALCULAR CAPITAL FINAL
=================== */

let capitalFinal = capitalActualizado + interesTotal;

/* ============================
CALCULAR INTERES FIN DE PERIODO
============================ */

let interesFinDePerdiodo = interesTotal / duracionEnMeses;

for (i = 1; i <= iterar; i++) {
    console.log("Fin de periodo " + i + ": " + interesFinDePerdiodo);
}

console.log("Fin de periodo " + i + ": " + capitalFinal);

console.log("Interes a fin de perdiodo: ")
console.log(interesFinDePerdiodo);





//////////////////////////////////





}

function calcularInteresTotal() {

    if (aplicaIva == true) {

        interesTotal = interesTotal * iva;

    } else {
    
    }

    return interesTotal;

}

interesTotal = calcularInteresTotal();



console.log("Días: ");
console.log(dias);

console.log("Captal actualizado: ");
console.log(capitalActualizado);

console.log("Interes Total");
console.log(interesTotal);

console.log("Capital final: ");
console.log(capitalFinal = interesTotal +capitalActualizadoAux );

