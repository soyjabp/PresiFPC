const estilosDT = [
  "ofensivo",
  "defensivo",
  "equilibrado",
  "motivador",
  "posesion",
  "juego por bandas",
  "juego interior",
  "vertical",
  "conservador",
  "juego lento",
  "atrevido",
  "experimental",
  "creativo",
  "contragolpe",
  "presión alta",
  "intensidad alta",
  "transiciones rápidas"
];

// 📌 Variable global para guardar el DT del usuario
let dtUsuario = null;

// 📌 Seleccionar DT desde el <select>
function seleccionarDT(claveDT) {
  dtUsuario = entrenadores[claveDT];
  if (dtUsuario) {

  dtSeleccionado = dtUsuario.nombre;

    document.getElementById("fotoDT").src = dtUsuario.foto;
document.getElementById("dtNombre").innerText = dtUsuario.nombre;
document.getElementById("dtEstilo").innerText = `Estilo: ${dtUsuario.estilo}`;
  }
}

function asignarEstiloAleatorio() {
  return estilosDT[Math.floor(Math.random() * estilosDT.length)];
}

const entrenadores = {
  gonzalez: { nombre: "David González", foto: "img/dts/gonzalez.png", estilo: asignarEstiloAleatorio() },
  bustos: { nombre: "Fabián Bustos", foto: "img/dts/bustos.png", estilo: asignarEstiloAleatorio() },
  herrera: { nombre: "Hernán Darío Herrera", foto: "img/dts/herrera.png", estilo: asignarEstiloAleatorio() },
  arias: { nombre: "Alfredo Arias", foto: "img/dts/arias.png", estilo: asignarEstiloAleatorio() },
  ayala: { nombre: "Camilo Ayala", foto: "img/dts/ayala.png", estilo: asignarEstiloAleatorio() },
  lucas: { nombre: "Lucas González", foto: "img/dts/lucas.png", estilo: asignarEstiloAleatorio() },
  flecha: { nombre: "Jhon Gómez", foto: "img/dts/flecha.png", estilo: asignarEstiloAleatorio() },
  oliveros: { nombre: "Sebastián Oliveros", foto: "img/dts/oliveros.png", estilo: asignarEstiloAleatorio() },
  garciajl: { nombre: "José Luis García", foto: "img/dts/garciajl.png", estilo: asignarEstiloAleatorio() },
  valiño: { nombre: "Ricardo Valiño", foto: "img/dts/valiño.png", estilo: asignarEstiloAleatorio() },
  bodhert: { nombre: "Hubert Bodhert", foto: "img/dts/bodhert.png", estilo: asignarEstiloAleatorio() },
  silva: { nombre: "Carlos Silva", foto: "img/dts/silva.png", estilo: asignarEstiloAleatorio() },
  alvaro: { nombre: "Alvaro Hernández", foto: "img/dts/alvaro.png", estilo: asignarEstiloAleatorio() },
  rivera: { nombre: "Harold Rivera", foto: "img/dts/rivera.png", estilo: asignarEstiloAleatorio() },
  dayron: { nombre: "Dayron Perez", foto: "img/dts/dayron.png", estilo: asignarEstiloAleatorio() },
  willy: { nombre: "José Manuel Rodríguez", foto: "img/dts/willy.png", estilo: asignarEstiloAleatorio() },
  repetto: { nombre: "Pablo Repetto", foto: "img/dts/repetto.png", estilo: asignarEstiloAleatorio() },
  reyes: { nombre: "Arturo Reyes", foto: "img/dts/reyes.png", estilo: asignarEstiloAleatorio() },
  duda: { nombre: "Rafael Dudamel", foto: "img/dts/dudamel.png", estilo: asignarEstiloAleatorio() },
  peirano: { nombre: "Pablo Peirano", foto: "img/dts/peirano.png", estilo: asignarEstiloAleatorio() },
  robatto: { nombre: "Flavio Robatto", foto: "img/dts/robatto.png", estilo: asignarEstiloAleatorio() },
  perea: { nombre: "Amaranto Perea", foto: "img/dts/perea.png", estilo: asignarEstiloAleatorio() },

//dts con fotos genérica
  rafael: { nombre: "Rafael Rodríguez", foto: "img/dts/generico.png", estilo: asignarEstiloAleatorio() },
  giraldo: { nombre: "Carlos Giraldo", foto: "img/dts/generico.png", estilo: asignarEstiloAleatorio() },
  oscar: { nombre: "Oscar Alvarez", foto: "img/dts/generico.png", estilo: asignarEstiloAleatorio() },
  alejo: { nombre: "Alejandro Arboleda", foto: "img/dts/generico.png", estilo: asignarEstiloAleatorio() },
  mazo: { nombre: "Diego Mazo", foto: "img/dts/generico.png", estilo: asignarEstiloAleatorio() },
  botero: { nombre: "Sebastian Botero", foto: "img/dts/generico.png", estilo: asignarEstiloAleatorio() },
  alberto: { nombre: "Alberto Suarez", foto: "img/dts/generico.png", estilo: asignarEstiloAleatorio() },
  sicacha: { nombre: "Andrés Sicacha", foto: "img/dts/generico.png", estilo: asignarEstiloAleatorio() },
  arquez: { nombre: "Mauricio Arquez", foto: "img/dts/generico.png", estilo: asignarEstiloAleatorio() },
  rolo: { nombre: "Nelson Florez", foto: "img/dts/rolo.png", estilo: asignarEstiloAleatorio() },
  chiesa: { nombre: "Nicolas Chiesa", foto: "img/dts/generico.png", estilo: asignarEstiloAleatorio() },
  serrano: { nombre: "Nicolas Serrano", foto: "img/dts/generico.png", estilo: asignarEstiloAleatorio() },
  rene: { nombre: "Rene Rosero", foto: "img/dts/generico.png", estilo: asignarEstiloAleatorio() },

//con foto y sin equipo  
  darias: { nombre: "Diego Arias", foto: "img/dts/darias.png", estilo: asignarEstiloAleatorio() },
  cardenas: { nombre: "Héctor Cardenas", foto: "img/dts/cardenas.png", estilo: asignarEstiloAleatorio() },
  gamero: { nombre: "Alberto Gamero", foto: "img/dts/gamero.png", estilo: asignarEstiloAleatorio() },
  leonel: { nombre: "Leonel Álvarez", foto: "img/dts/leonel.png", estilo: asignarEstiloAleatorio() },
  restrepo: { nombre: "Alejandro Restrepo", foto: "img/dts/restrepo.png", estilo: asignarEstiloAleatorio() },
  viera: { nombre: "Sebastián Viera", foto: "img/dts/viera.png", estilo: asignarEstiloAleatorio() },
  juarez: { nombre: "Efraín Juarez", foto: "img/dts/juarez.png", estilo: asignarEstiloAleatorio() },
  hernan: { nombre: "Hernán Torres", foto: "img/dts/hernan.png", estilo: asignarEstiloAleatorio() },
  flabio: { nombre: "Flabio Torres", foto: "img/dts/flabio.png", estilo: asignarEstiloAleatorio() },
  jcr: { nombre: "Juan Cruz Real", foto: "img/dts/jcr.png", estilo: asignarEstiloAleatorio() }
};

// 📌 DTs predeterminados para cada equipo
const dtPorEquipo = {
  "Millonarios": "gamero",
  "Nacional": "lucas",
  "América": "gonzalez",
  "Cali": "duda",
  "Junior": "viera",
  "Santa Fe": "repetto",
  "Tolima": "oliveros",
  "Medellín": "perea",
  "Once Caldas": "herrera",
  "Pereira": "reyes",
  "Alianza": "flabio",
  "Bucaramanga": "peirano",
  "Inter Bogotá": "valiño",
  "Envigado": "alberto",
  "Pasto": "rene",
  "Águilas": "robatto",
  "B.Chico": "flecha",
  "Fortaleza": "darias",
  "Llaneros": "garciajl",
  "U.Magdalena": "silva",

  // SEGUNDA DIVISIÓN
  "Jaguares": "bodhert",
  "Real Cartagena": "alvaro",
  "Cucuta": "chiesa",
  "IVC": "serrano",
  "Patriotas": "giraldo",
  "R.Cundinamarca": "mazo",
  "Inter Palmira": "rolo",
  "Leones": "alejo",
  "Tigres": "rafael",
  "Quindio": "rivera",
  "R.Santander": "oscar",
  "Orsomarso": "arquez",
  "Boca Jrs. Cali": "willy",
  "Barranquilla": "dayron",
  "Atlético FC": "sicacha",
  "Bogotá": "botero"
};


// 📌 Relación DT → Equipo actual
let equipoDeDT = {}; // { gamero: "Millonarios", ... }


/*=== CHAT y TABLA de DTS===*/


// Abrir y cerrar modal
const modalDT = document.getElementById("dtModal");
const btnAbrirChat = document.getElementById("abrirChatDT");
const btnCerrarChat = document.querySelector(".dt-modal-cerrar");

btnAbrirChat.onclick = function() {
  if (!dtUsuario) {
    alert("Primero elige un DT.");
    return;
  }
  document.getElementById("chatFotoDT").src = dtUsuario.foto;
  document.getElementById("chatNombreDT").innerText = dtUsuario.nombre;
  modalDT.style.display = "block";
}

btnCerrarChat.onclick = function() {
  modalDT.style.display = "none";
}

// Función para enviar mensajes al chat
function agregarMensaje(texto, tipo = "dt") {
  const chat = document.getElementById("chatMensajes");
  const p = document.createElement("p");

  if (tipo === "dt") {
    p.innerText = "Dt: " + texto;
    p.classList.add("mensaje-dt");

  } else if (tipo === "user") {
    p.innerText = "Tu: " + texto;
    p.classList.add("mensaje-tu");

  } else if (tipo === "sistema") {
    p.innerText = "Sistema: " + texto;
    p.classList.add("mensaje-sistema");
  }

  chat.appendChild(p);
  chat.scrollTop = chat.scrollHeight;
}

function activarBotones() {
  document.getElementById("btnFichajes").disabled = false;
  document.getElementById("btnEstilos").disabled = false;
  document.getElementById("btnVentasdt").disabled = false;
}

// Botón: Cambio de estilo
function cambiarEstiloDT() {

   const boton = document.getElementById("btnEstilos");
   boton.disabled = true;

  agregarMensaje("¿Podrías cambiar tu estilo de juego?", "user");

  // 60% de probabilidad de aceptar, 40% de rechazar
  const acepta = Math.random() < 0.6;

  if (!acepta) {
    agregarMensaje(
      "Prefiero mantener mi estilo de juego. Creo que es el más adecuado para el equipo.",
      "dt"
    );
    return;
  }

  let nuevo;
  do {
    nuevo = estilosDT[Math.floor(Math.random() * estilosDT.length)];
  } while (nuevo === dtUsuario.estilo);

  dtUsuario.estilo = nuevo;

  document.getElementById("dtEstilo").innerText =
    `Estilo: ${dtUsuario.estilo}`;

  agregarMensaje(
    `He cambiado mi estilo a: ${dtUsuario.estilo}.`,
    "dt"
  );
}


function nombrePosicion(pos) {
  const nombres = {
    PO: "portero",
    DFC: "defensa central",
    LI: "lateral izquierdo",
    LD: "lateral derecho",
    MO: "mediocampista ofensivo",
    MD: "mediocampista defensivo",
    DC: "delantero",
    EI: "extremo izquierdo",
    ED: "extremo derecho"
  };

  return nombres[pos] || pos;
}

function fichajesDT() {

   const boton = document.getElementById("btnFichajes");
   boton.disabled = true;

  // 👤 Mensaje del presidente
  agregarMensaje("¿Qué jugadores te gustaría fichar?", "user");

  const MAX_PLANTILLA = 30;

  // 📊 Cantidad actual de jugadores
  const jugadoresActuales = plantillasJugadores[equipoUsuario].length;

  // ❌ Plantilla completa
  if (jugadoresActuales >= MAX_PLANTILLA) {

    const mensajesPlantillaCompleta = [
      "Plantilla Completa 30/30.",
    ];

    agregarMensaje(mensajesPlantillaCompleta[Math.floor(Math.random() * mensajesPlantillaCompleta.length)],"sistema");
    document.getElementById("btnFichajes").disabled = false;
    return;
  }

  // 💪 Fuerza del equipo
  const fuerzaEquipo = obtenerFuerzaTotal(equipoUsuario);

  const { min, max } =
    obtenerRangoFichajePorFuerza(fuerzaEquipo);

  const candidatos = [];

  // 🔍 Buscar jugadores de cualquier posición
  Object.keys(plantillasJugadores).forEach(equipo => {

    if (equipo === equipoUsuario) return;

    plantillasJugadores[equipo].forEach(jugador => {

      const mediaValida =
        jugador.media >= min &&
        jugador.media <= max;

      if (mediaValida) {
        candidatos.push({
          jugador,
          equipo
        });
      }

    });

  });

  // ❌ No hay candidatos
  if (candidatos.length === 0) {

    const mensajesSinFichajes = [
      "He revisado el mercado, pero no encuentro jugadores que realmente mejoren nuestra plantilla.",
      "El mercado está complicado. Prefiero esperar antes que fichar por fichar.",
      "He analizado varias opciones, pero ninguna termina de convencerme.",
      "No veo oportunidades claras en este momento.",
      "Creo que debemos ser pacientes y esperar una mejor oportunidad.",
      "No encuentro jugadores que encajen con el nivel que necesitamos.",
      "Por ahora prefiero mantener la plantilla como está."
    ];

    agregarMensaje(
      mensajesSinFichajes[
        Math.floor(Math.random() * mensajesSinFichajes.length)
      ],
      "dt"
    );

    return;
  }

  // 🎲 Mezclar candidatos
  candidatos.sort(() => Math.random() - 0.5);

  // 📦 Espacios disponibles
  const espaciosDisponibles =
    MAX_PLANTILLA - jugadoresActuales;

  // 📋 Entre 2 y 6 candidatos,
  // pero nunca más de los espacios disponibles
  let cantidad;

  if (espaciosDisponibles === 1) {
    cantidad = 1;
  } else {
    const maxCandidatos = Math.min(
      6,
      espaciosDisponibles,
      candidatos.length
    );

    const minCandidatos = Math.min(2, maxCandidatos);

    cantidad =
      Math.floor(
        Math.random() * (maxCandidatos - minCandidatos + 1)
      ) + minCandidatos;
  }

  const seleccionados = candidatos.slice(0, cantidad);

  // 💬 Presentación
  const mensajesInicio = [
    "He estado analizando el mercado y estos son los candidatos que más me interesan.",
    "He revisado varias opciones y estos son algunos jugadores que considero interesantes.",
    "Tengo varios nombres en mente que podrían reforzar la plantilla.",
    "Después de analizar el mercado, estas son mis principales opciones.",
    "Creo que podemos encontrar algún refuerzo interesante entre estos jugadores.",
    "He preparado una lista con jugadores que podrían encajar en nuestro proyecto."
  ];

  agregarMensaje(
    mensajesInicio[
      Math.floor(Math.random() * mensajesInicio.length)
    ],
    "dt"
  );

  // 📋 Lista
  let listaJugadores = `Candidatos a fichar para ${temporadaActual}-${semestreActual}:\n`;

  seleccionados.forEach((candidato, index) => {

    const jugador = candidato.jugador;
    const nombrePos = nombrePosicion(jugador.posicion);

    listaJugadores +=
      `${index + 1}. ${jugador.nombre} | ${nombrePos} | Media: ${jugador.media}\n`;
  });

  agregarMensaje(listaJugadores, "dt");

}



function ventasDT() {

   const boton = document.getElementById("btnVentasdt");
   boton.disabled = true;

  // 👤 Mensaje del presidente
  agregarMensaje(
    "¿Hay algún jugador con el que no cuentes?",
    "user"
  );

  const plantilla = plantillasJugadores[equipoUsuario];

  if (!plantilla || plantilla.length === 0) {
    agregarMensaje(
      "No hay jugadores disponibles para valorar una salida.",
      "sistema"
    );
    return;
  }

  const jugadoresDisponibles = plantilla.filter(
    jugador => jugador.leyenda !== true
  );

  if (jugadoresDisponibles.length === 0) {
    agregarMensaje(
      "No hay ningún jugador disponible para poner en venta.",
      "sistema"
    );
    return;
  }

  // 🧠 Calcular puntuación de salida de cada jugador
  const jugadoresValorados = plantilla.map(jugador => {

    if (jugador.forma === undefined) {
      jugador.forma = 0;
    }


    /*
      La media tiene bastante peso.
      La forma negativa aumenta la posibilidad de salida.
      La forma positiva la reduce.
      El pequeño factor aleatorio evita que siempre salgan los mismos.
    */

    let puntuacionSalida =
      (100 - jugador.media) * 0.7 +
      (-jugador.forma) * 2 +
      Math.random() * 10;

    // ⭐ Jugadores de media muy alta son difíciles de vender
    if (jugador.media >= 80) {
      puntuacionSalida -= 15;
    }

    // 🔥 Jugadores en muy buena forma tienen menos posibilidades
    if (jugador.forma >= 4) {
      puntuacionSalida -= 5;
    }

    return {
      jugador,
      puntuacionSalida
    };

  });

  // 🔀 Ordenar de mayor a menor puntuación de salida
  jugadoresValorados.sort(
    (a, b) => b.puntuacionSalida - a.puntuacionSalida
  );

  // 📋 Elegir entre 1 y 4 jugadores
  const cantidadMaxima = Math.min(
    4,
    jugadoresValorados.length
  );

  const cantidad =
    Math.floor(Math.random() * cantidadMaxima) + 1;

  const seleccionados =
    jugadoresValorados
      .slice(0, cantidad)
      .map(item => item.jugador);

  // 💬 Mensajes iniciales
  const mensajesInicio = [
    "He estado revisando la plantilla y creo que hay algunos jugadores con los que podríamos buscar una salida.",
    "He analizado el rendimiento de la plantilla y tengo algunos nombres que considero transferibles.",
    "Creo que debemos hacer algunos cambios en la plantilla. Estos jugadores no están entrando demasiado en mis planes.",
    "Después de revisar el equipo, considero que algunos jugadores podrían buscar una nueva oportunidad fuera del club.",
    "Hay algunos jugadores con los que no estoy contando demasiado y creo que sería conveniente estudiar su salida.",
    "He revisado el rendimiento reciente del equipo y creo que podemos buscar una salida para algunos jugadores.",
    "No cuento demasiado con estos jugadores y creo que lo mejor sería venderlos.",
    "Considero que podemos buscarles una salida y utilizar esos espacios de la plantilla de otra manera.",
    "Creo que sería beneficioso para el equipo vender a estos jugadores.",
    "No son jugadores que estén teniendo demasiado protagonismo en mis planes.",
    "Si llega una buena oferta, estaría dispuesto a dejar salir a estos jugadores.",
    "Creo que podemos encontrar mejores alternativas para sus posiciones.",
    "No quiero cerrarles la puerta, pero considero que lo mejor sería su salida.",
    "Son jugadores que actualmente tienen pocas posibilidades de ser importantes en el equipo."
  ];

  agregarMensaje(
    mensajesInicio[
      Math.floor(Math.random() * mensajesInicio.length)
    ],
    "dt"
  );

  // 📋 Lista de jugadores
  let listaJugadores =
    "Jugadores con los que no contare:\n\n";

  seleccionados.forEach((jugador, index) => {

    const nombrePos =
      nombrePosicion(jugador.posicion);

    listaJugadores +=
      `${index + 1}. ${jugador.nombre} | ` +
      `Forma: ${jugador.forma > 0 ? "+" : ""}${jugador.forma}\n`;
  });

  agregarMensaje(listaJugadores, "dt");

}



//despedir
function despedirDT() {
  if (!dtUsuario) {
    alert("No tienes DT para despedir.");
    return;
  }

  // limpiar DT actual
  dtUsuario = null;

  document.getElementById("fotoDT").src = "";
  document.getElementById("dtNombre").innerText = "Sin DT";
  document.getElementById("dtEstilo").innerText = "Estilo: -";

  // cerrar modal actual
  modalDT.style.display = "none";

  // abrir nuevo modal de contratación
  mostrarOpcionesDT();
}

function obtenerDTsAleatorios(cantidad = 3) {
  const claves = Object.keys(entrenadores);
  const seleccionados = [];

  while (seleccionados.length < cantidad) {
    const random = claves[Math.floor(Math.random() * claves.length)];
    if (!seleccionados.includes(random)) {
      seleccionados.push(random);
    }
  }

  return seleccionados;
}

function mostrarOpcionesDT() {
   if (dtUsuario) {
    alert("Ya tienes DT debes despedirlo para contratar.");
    return;
  }
  
   if (!equipoUsuario) {
    alert("Elige un equipo.");
    return;
  }
  const modalOpciones = document.getElementById("modalContratarDT");
  const contenedor = document.getElementById("listaDTs");

  contenedor.innerHTML = "";

  const dts = obtenerDTsAleatorios(3);

  dts.forEach(clave => {
    const dt = entrenadores[clave];

    const div = document.createElement("div");
    div.classList.add("card-dt");

    div.innerHTML = `
      <img src="${dt.foto}" width="80">
      <h4>${dt.nombre}</h4>
      <p>${dt.estilo}</p>
      <button onclick="contratarDT('${clave}')">Contratar</button>
    `;

    contenedor.appendChild(div);
  });

  modalOpciones.style.display = "block";
}

function contratarDT(claveDT) {
  dtUsuario = entrenadores[claveDT];

  document.getElementById("fotoDT").src = dtUsuario.foto;
  document.getElementById("dtNombre").innerText = dtUsuario.nombre;
  document.getElementById("dtEstilo").innerText =
    `Estilo: ${dtUsuario.estilo}`;

  document.getElementById("modalContratarDT").style.display = "none";

agregarNotificacion( 
  "Nos complace comunicar oficialmente la contratación como nuevo Director Técnico del club. Al señor " + dtUsuario.nombre +
  "\nLe damos la bienvenida y le deseamos muchos éxitos en esta nueva etapa. " +
  "Atentamente, el Presidente y la Junta Directiva del Club."
);
}



function limpiarDT() {

  // limpiar chat
  document.getElementById("chatMensajes").innerHTML = "";
}


function inicializarDTsPorEquipo() {
  const listaEquipos = [
    ...equiposPrimera.map(e => e.nombre),
    ...equiposSegunda.map(e => e.nombre)
  ];

  listaEquipos.forEach(equipo => {
    const claveDT = dtPorEquipo[equipo];
    if (claveDT) {
      equipoDeDT[claveDT] = equipo;
    }
  });
}
