
let derechosReclamados = false;
let decisionSueldosTomada = false;
let alquilerPagado = false;

let deudaSueldos = 0;
let impagosSueldos = 0;

function abrirModalEconomico() {

  const montoDerechosTV = derechosTV?.monto || 1500000;
  const sueldoAnual = calcularSueldoPorFuerza(
    obtenerFuerzaTotal(equipoUsuario)
  );

  document.getElementById("infoDerechos").innerText =
    `Derechos de TV: $${montoDerechosTV.toLocaleString()}`;

  document.getElementById("infoSueldos").innerText =
    `Sueldos de plantilla: $${sueldoAnual.toLocaleString()}`;

  document.getElementById("modalEconomico").style.display = "flex";

  derechosReclamados = false;
  decisionSueldosTomada = false;
  alquilerPagado = false;
  document.getElementById("btnPagarAlquiler").disabled = false;
}

//Reclamar derechos 
document.getElementById("btnReclamarTV").addEventListener("click", function () {

  if (derechosReclamados) return;

  const montoDerechosTV = derechosTV?.monto || 1500000;

  if (!presupuestosEquipos[equipoUsuario]) {
    presupuestosEquipos[equipoUsuario] = 0;
  }

  presupuestosEquipos[equipoUsuario] += montoDerechosTV;
  sumarPresupuesto(montoDerechosTV);

  balanceEconomico.derechos += montoDerechosTV;
  actualizarBalanceUI();

  alert(` Derechos de TV pagados + $${montoDerechosTV.toLocaleString()}`);

  derechosReclamados = true;
  verificarCerrarModal();
});

//Pagar 
document.getElementById("btnPagarSueldos").addEventListener("click", function () {

  if (!derechosReclamados) {
    alert("Primero debes reclamar los Derechos de TV.");
    return;
  }

  if (decisionSueldosTomada) return;

  const sueldoAnual = calcularSueldoPorFuerza(
    obtenerFuerzaTotal(equipoUsuario)
  );

  if (presupuestoVisible >= sueldoAnual) {

    restarPresupuesto(sueldoAnual);

    balanceEconomico.sueldos -= sueldoAnual;
    actualizarBalanceUI();

    alert(` Sueldos pagados: $${sueldoAnual.toLocaleString()}`);

    decisionSueldosTomada = true;
    verificarCerrarModal();
  }else {
    alert(
      `❌ No tienes presupuesto suficiente para pagar los sueldos.\n\n` +
      `Necesitas $${sueldoAnual.toLocaleString()} y solo tienes $${presupuestoVisible.toLocaleString()}.`
    );

  }
});

//No Pagar
document.getElementById("btnNoPagarSueldos").addEventListener("click", function () {

  if (!derechosReclamados) {
    alert("Primero debes reclamar los Derechos de TV.");
    return;
  }

  if (decisionSueldosTomada) return;

  const sueldoAnual = calcularSueldoPorFuerza(
    obtenerFuerzaTotal(equipoUsuario)
  );

  deudaSueldos += sueldoAnual;
  impagosSueldos++;

    const plantilla = plantillasJugadores[equipoUsuario];
    let efecto = "";

    plantilla.forEach(j => j.media = Math.max(1, j.media - 4));
    
    efecto = `😞 No has pagado los sueldos.\n` +
    `Deuda acumulada: $${deudaSueldos.toLocaleString()}\n` +
    `Impagos: ${impagosSueldos}/3\n` +
    `Los jugadores estan desmotivados. -4 de media para toda la plantilla.`;

    actualizarDeudaSueldosUI();

    agregarNotificacion(efecto);

    if (impagosSueldos >= 3) {
    abrirDespidoPorImpagos();
    return;
  }

  decisionSueldosTomada = true;
  verificarCerrarModal();
});


//alquiler
document.getElementById("btnPagarAlquiler").addEventListener("click", function () {

  if (alquilerPagado) return;

  let montos = 1800000;
  let montoss = 1000000;

  if (!equipoUsuario) {
    alert("No has elegido un equipo todavia.");
    return;
  }

  if (equipoUsuario === "Cali") {

    alert("Debes pagar el mantenimiento del estadio 1M");

    restarPresupuesto(montoss);
    balanceEconomico.alquiler -= montoss;

  } else {

    alert("Debes pagar el alquiler del estadio 1.8M");

    restarPresupuesto(montos);
    balanceEconomico.alquiler -= montos;

  }

  actualizarBalanceUI();

  alquilerPagado = true;
  this.disabled = true;

  verificarCerrarModal();
});


function verificarCerrarModal() {

  if (derechosReclamados && decisionSueldosTomada && alquilerPagado) {
    document.getElementById("modalEconomico").style.display = "none";
  }
}


function actualizarDeudaSueldosUI() {

  const texto = document.getElementById("textoDeudaSueldos");

  if (deudaSueldos <= 0) {
    texto.textContent = "Sin deuda";
    return;
  }

  texto.textContent =
    `Deuda: $${deudaSueldos.toLocaleString()} | Impagos: ${impagosSueldos}/3`;
}

//pagar deuda
document.getElementById("btnPagarDeuda")
.addEventListener("click", function() {

  if (deudaSueldos <= 0) {
    alert("No hay deuda salarial.");
    return;
  }

  if (presupuestoVisible < deudaSueldos) {
    alert("No tienes dinero suficiente.");
    return;
  }

  restarPresupuesto(deudaSueldos);

  const plantilla = plantillasJugadores[equipoUsuario];

  plantilla.forEach(j => {
    j.media += 2;
  });

  deudaSueldos = 0;
  impagosSueldos = 0;

  actualizarDeudaSueldosUI();

  alert(
    "✅ Deuda salarial pagada.\n" +
    "Los jugadores recuperan confianza (+2 media)."
  );
});



// PRÉSTAMOS
let deudaPendiente = 0;
let cuotasRestantes = 0;

const LIMITE_DEUDA = 100000000; // Máximo que el banco presta

function pedirPrestamo() {


    if (deudaPendiente > 0) {

        agregarNotificacion(
`📨 Asunto: Solicitud de préstamo rechazada

Estimado presidente:

Su solicitud no pudo ser procesada debido a que el club mantiene un préstamo activo con nuestra entidad.

De acuerdo con nuestras políticas de crédito, es necesario cancelar la totalidad de la deuda vigente antes de acceder a una nueva financiación.

Una vez saldado el préstamo actual, estaremos encantados de evaluar una nueva solicitud.

Atentamente,
Departamento de Créditos
Banco Nacional`
        );
        return;
    }

    const opcion = prompt(
`PRÉSTAMOS DISPONIBLES

1 Recibes $10.000.000
   Devuelves $12.000.000
   4 cuotas

2 Recibes $20.000.000
   Devuelves $25.000.000
   4 cuotas

3 Recibes $40.000.000
   Devuelves $52.000.000
   6 cuotas

Escribe el número de la opción:`
    );

    switch(opcion){

        case "1":
            aprobarPrestamo(10000000,12000000,4);
            break;

        case "2":
            aprobarPrestamo(20000000,25000000,4);
            break;

        case "3":
            aprobarPrestamo(40000000,52000000,6);
            break;

        default:
            alert("Operación cancelada.");
    }
}

function aprobarPrestamo(recibes, devuelves, cuotas){

    if(deudaPendiente + devuelves > LIMITE_DEUDA){
       agregarNotificacion(
`📨 Asunto: Solicitud de préstamo rechazada

Estimado presidente:

Lamentamos informarle que no podemos aprobar una nueva línea de crédito.

Tras revisar el nivel actual de endeudamiento del club, consideramos que supera el límite permitido por nuestra entidad.

Le recomendamos reducir la deuda existente antes de presentar una nueva solicitud.

Atentamente,
Departamento de Créditos
Banco Nacional`
);
        return;
    }

    sumarPresupuesto(recibes);

    deudaPendiente += devuelves;
    cuotasRestantes += cuotas;

    actualizarPrestamoUI();
    agregarNotificacion(
`📨 Asunto: Solicitud de préstamo aprobada

Estimado presidente:

Tras analizar la situación financiera del club, hemos aprobado su solicitud de financiación.

Detalles del préstamo:
• Capital otorgado: ${formatearPrecio(recibes)}
• Total a devolver: ${formatearPrecio(devuelves)}
• Cuotas restantes: ${cuotas}

Los fondos ya se encuentran disponibles en las arcas del club.

Atentamente,
Departamento de Créditos
Banco Nacional`
);

}

function cobrarCuotaPrestamo(){

    if(cuotasRestantes <= 0) return;

    const cuota = Math.ceil(deudaPendiente / cuotasRestantes);

    restarPresupuesto(cuota);

    deudaPendiente -= cuota;
    cuotasRestantes--;

    if(deudaPendiente <= 0){
        deudaPendiente = 0;
        cuotasRestantes = 0;
    }
    actualizarPrestamoUI();
}

function actualizarPrestamoUI(){

    const info = document.getElementById("prestamoInfo");

    if(!info) return;

    if(deudaPendiente <= 0){
        info.innerHTML = "Sin préstamos.";
        return;
    }

    const valorCuota = Math.ceil(deudaPendiente / cuotasRestantes);

    info.innerHTML = `
        Deuda: ${formatearPrecio(deudaPendiente)}<br>
        Cuotas restantes: ${cuotasRestantes}<br>
        Valor por cuota: ${formatearPrecio(valorCuota)}
    `;
}