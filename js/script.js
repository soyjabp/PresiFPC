function abrirRenuncia() {
  if (!equipoUsuario) {
    alert("No has elegido un equipo todavia.");
    return;
  }

  const confirmar = confirm(`Seguro que deseas renunciar como Presidente del ${equipoUsuario}?`);
  if (!confirmar) return;

  // 📅 Fecha actual real
  const fechaActual = `Temporada ${temporadaActual} - Semestre ${semestreActual}`;

  // 🏆 Escudo del equipo
  /*
  const nombreLimpio = equipoUsuario
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ /g, "_");
*/

  document.getElementById("fechaRenuncia").innerText = fechaActual;
  document.getElementById("nombreEquipoCarta").innerText = equipoUsuario;
  document.getElementById("escudoEquipo").src = getEscudoEquipo(equipoUsuario);
 // document.getElementById("escudoEquipo").src = `escudos/${nombreLimpio}.png`;

  // 🪶 Carta formal
  const textoFormal = `
    Por medio de la presente, comunico mi decision irrevocable de presentar mi renuncia al cargo de Presidente del club ${equipoUsuario}.
    <br><br>
    Ha sido un honor representar y liderar esta institucion, pero considero que es momento de dar un paso al costado para permitir una nueva direccion.
    <br><br>
    Agradezco profundamente a la directiva, jugadores, cuerpo tecnico y aficion por el apoyo brindado durante mi gestion.
    <br><br>
    Sin otro particular, me despido con el mayor de los respetos.
    <br><br>
    Atentamente,
  `;
  document.getElementById("textoCarta").innerHTML = textoFormal;

  // 🪟 Mostrar modal
  document.getElementById("modalRenuncia").style.display = "flex";
}

function enviarRenuncia() {
  const firma = document.getElementById("firmaInput").value.trim();

  if (firma === "") {
    alert("Por favor, escribe tu firma antes de enviar.");
    return;
  }

  alert(`Gracias por tu gestion, ${firma}. La directiva del ${equipoUsuario} te desea lo mejor en tu futuro.`);
  document.getElementById("modalRenuncia").style.display = "none";
  location.reload();
}

function cerrarmodalRenuncia() {
  document.getElementById("modalRenuncia").style.display = "none";
}


function abrirDespido() {
  if (!equipoUsuario) return;

  // 📅 Fecha actual real
  const fechaActual = `Temporada ${temporadaActual} - Semestre ${semestreActual}`;

  // 🏆 Escudo del equipo
  /*
  const nombreLimpio = equipoUsuario
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ /g, "_");
    */

  document.getElementById("fechaRenuncia").innerText = fechaActual;
  document.getElementById("nombreEquipoCarta").innerText = equipoUsuario;
  document.getElementById("escudoEquipo").src = getEscudoEquipo(equipoUsuario);
  //document.getElementById("escudoEquipo").src = `escudos/${nombreLimpio}.png`;

  // 🧾 Texto de despido
  const textoDespido = `
    Por medio de la presente, la directiva del club ${equipoUsuario} le comunica su <strong>desvinculacion inmediata</strong> del cargo de Presidente.
    <br><br>
    Esta decision se toma tras una evaluacion exhaustiva del desempeno institucional y deportivo durante su gestion.
    <br><br>
    Agradecemos los servicios prestados y le deseamos Exitos en sus futuros proyectos.
    <br><br>
    Atentamente,<br>
    <strong>La Junta Directiva</strong>
  `;
  document.getElementById("textoCarta").innerHTML = textoDespido;

  // 🪟 Mostrar modal
  document.getElementById("modalRenuncia").style.display = "flex";

  // 🛑 Desactivar el botón "Cancelar"
  const btnCancelar = document.getElementById("btnCancell");
  btnCancelar.disabled = true;
  btnCancelar.style.opacity = "0.5";
  btnCancelar.style.cursor = "not-allowed";
}

function abrirDespidoPorImpagos() {
  if (!equipoUsuario) return;

  const fechaActual = `Temporada ${temporadaActual} - Semestre ${semestreActual}`;

  document.getElementById("fechaRenuncia").innerText = fechaActual;
  document.getElementById("nombreEquipoCarta").innerText = equipoUsuario;
  document.getElementById("escudoEquipo").src = getEscudoEquipo(equipoUsuario);

  const textoDespidoip = `
    Por medio de la presente, la directiva del club ${equipoUsuario}
    le comunica su <strong>desvinculación inmediata</strong> del cargo de Presidente.
    <br><br>
    Esta decisión se toma debido al reiterado incumplimiento en el pago
    de salarios de la plantilla profesional.
    <br><br>
    El club acumula una deuda salarial de
    <strong>$${deudaSueldos.toLocaleString()}</strong>
    tras registrar <strong>${impagosSueldos} impagos consecutivos</strong>.
    <br><br>
    La Junta Directiva considera esta situación incompatible con la
    estabilidad institucional y deportiva de la entidad.
    <br><br>
    Atentamente,<br>
    <strong>La Junta Directiva</strong>
  `;

  document.getElementById("textoCarta").innerHTML = textoDespidoip;

  document.getElementById("modalRenuncia").style.display = "flex";

  const btnCancelar = document.getElementById("btnCancell");
  btnCancelar.disabled = true;
  btnCancelar.style.opacity = "0.5";
  btnCancelar.style.cursor = "not-allowed";
}



// ==========================
// ASAMBLEA DIMAYOR
// ==========================

let patrocinadorLiga = "BetPlay";
let derechosTV = { canal: "WIN Sports", monto: 1500000, logo: "img/logos/win.png" };
let ultimaAsamblea = 2026;
let temaActual = null;
let equiposLiga = equiposPrimera.length; // 👈 ahora vale 20

function verificarAsambleaDimayor() {
  // Cada 2 años (4 semestres)
  if ((temporadaActual - ultimaAsamblea) >= 2 && semestreActual === 1) {
    mostrarModalAsamblea();
    ultimaAsamblea = temporadaActual;
  }
}

function mostrarModalAsamblea() {
  const modal = document.createElement("div");
  modal.id = "modalAsamblea";
  modal.className = "modal-asamblea";
  modal.innerHTML = `
    <div class="modal-content-asamblea">
      <h2>Asamblea Dimayor ${temporadaActual}</h2>
      <p><strong>Liga actual:</strong> Liga ${patrocinadorLiga} Dimayor</p>
      <p><img src="${derechosTV.logo}" alt="logo" style="height:25px;"> 
      <strong>Derechos TV:</strong> ${derechosTV.canal} - Monto: $${derechosTV.monto.toLocaleString()}</p>
      <button id="btnIniciarAsamblea">Empezar Asamblea</button>
    </div>
  `;
  document.body.appendChild(modal);
  document.getElementById("btnIniciarAsamblea").onclick = iniciarAsambleaDimayor;
}

// 📋 Lista fija de propuestas (puedes agregar todas las que quieras)
const temasAsamblea = [
  // 🔹 Patrocinadores
  { tipo: "patrocinador", propuesta: "Cambiar patrocinador principal a Tobon" },
  { tipo: "patrocinador", propuesta: "Cambiar patrocinador principal: Kesta" },
  { tipo: "patrocinador", propuesta: "Cambiar patrocinador principal: Betmom" },
  { tipo: "patrocinador", propuesta: "Cambiar patrocinador principal: Anguila" },
  { tipo: "patrocinador", propuesta: "Cambiar patrocinador principal: Wjugar" },

  // 🔹 Televisión
  { tipo: "tv", propuesta: "Firmar contrato de TV con Gol Caracol" },
  { tipo: "tv", propuesta: "Firmar contrato de TV con WIN Sports" },
  { tipo: "tv", propuesta: "Firmar contrato de TV con ESPN" },
  { tipo: "tv", propuesta: "Firmar contrato de TV con RCN Deportes" },
  { tipo: "tv", propuesta: "Firmar contrato de TV con DirecTV" },
  { tipo: "tv", propuesta: "Firmar contrato de TV con RTVC" },
  { tipo: "tv", propuesta: "Crear Nuevo Canal de TV ,  Dimayor TV" },
  { tipo: "tv", propuesta: "Firmar contrato con Netflix por transmision exclusiva" },
  { tipo: "tv", propuesta: "Firmar contrato con Disney+ para derechos internacionales" },

   // 🔹 Formatos
  { tipo: "formato", propuesta: "Reducir la liga a 18 equipos" },
  { tipo: "formato", propuesta: "Aumentar la liga a 22 equipos" },

  // 🔹 Simbólicos (sin efecto real)
  { tipo: "var", propuesta: "Invertir en la implementacion del VAR   para segunda division" }

];

function iniciarAsambleaDimayor() {
  const modal = document.querySelector("#modalAsamblea .modal-content-asamblea");

  // 🧠 Filtra los temas para no repetir patrocinador o canal actual
  const temasFiltrados = temasAsamblea.filter(t => {
  if (t.tipo === "tv" && t.propuesta.includes(derechosTV.canal)) return false;
  if (t.tipo === "patrocinador" && t.propuesta.includes(patrocinadorLiga)) return false;
  if (t.tipo === "formato" && equiposLiga === 18 && t.propuesta.includes("18 equipos")) return false;
  if (t.tipo === "formato" && equiposLiga === 22 && t.propuesta.includes("22 equipos")) return false;
  return true;
});

  // ✄1�7 Si después del filtro no queda ninguno, usar todos (por seguridad)
  const temasDisponibles = temasFiltrados.length > 0 ? temasFiltrados : temasAsamblea;

  // 🎲 Escoge un tema aleatorio del grupo disponible
  const tema = temasDisponibles[Math.floor(Math.random() * temasDisponibles.length)];

  // Guardar tipo y texto de la propuesta
  temaActual = tema.tipo;
  propuestaActual = tema.propuesta;

  // 🧾 Interfaz del modal
  modal.innerHTML = `
    <h3>Presidente Dimayor:</h3>
    <p id="temaAsamblea">Propuesta: ${tema.propuesta}</p>
    <div id="votacionAsamblea" style="margin-top:10px;">
      <button id="btnSi">Si</button>
      <button id="btnNo">No</button>
    </div>
    <div id="resultadoAsamblea" style="margin-top:10px;"></div>
  `;

  // 🗳︄1�7 Votación (usuario)
  document.getElementById("btnSi").onclick = () => simularVotacion(true);
  document.getElementById("btnNo").onclick = () => simularVotacion(false);
}

function simularVotacion(votoUsuario) {
  const totalPresidentesIA = 35; // 35 presidentes IA + tú = 36
  let votosSi = 0;
  let votosNo = 0;

  // 🎯 Ajustar probabilidad de voto "Sí" según el tipo de tema
  let probabilidadSi = 0.5;
  switch (temaActual) {
    case "patrocinador":
      probabilidadSi = 0.7; // 💰 Suelen aprobar patrocinadores nuevos
      break;
    case "tv":
      probabilidadSi = 0.6; // 📺 TV genera debate pero se aprueba con frecuencia
      break;
    case "formato":
      probabilidadSi = 0.55; // ⚄1�7 Cambios de formato son más discutidos
      break;
    case "var":
      probabilidadSi = 0.65; // 🖥︄1�7 Mejora tecnológica, suele aprobarse
      break;
  }

  // 🧠 Cada presidente IA vota una vez
  for (let i = 0; i < totalPresidentesIA; i++) {
    const voto = Math.random() < probabilidadSi;
    if (voto) votosSi++;
    else votosNo++;
  }

  // 👤 Agregar el voto del usuario
  if (votoUsuario) votosSi++;
  else votosNo++;

  // 📊 Mostrar resultado total
  const resultado = document.getElementById("resultadoAsamblea");
  resultado.innerHTML = `
    <p>Votos a favor: ${votosSi}</p>
    <p>Votos en contra: ${votosNo}</p>
    <p>= Total votos: ${votosSi + votosNo} (35 IA + Tú)</p>
  `;

  // ⚖️ Evaluar resultado (24 votos o más = aprobado)
  if (votosSi >= 24) {
    resultado.innerHTML += `<p>Aprobado por mayoría calificada (${votosSi} votos a favor)</p>`;
    aplicarDecisionAsamblea();
  } else {
    resultado.innerHTML += `<p>No aprobado (se requieren 24 votos a favor)</p>`;
  }

  // ⏄1�7 Cierra el modal después de unos segundos
  setTimeout(() => cerrarAsamblea(), 8000);
}



function aplicarDecisionAsamblea() {
  if (temaActual === "patrocinador") {
    if (propuestaActual.includes("Tobon")) patrocinadorLiga = "Tobon";
    else if (propuestaActual.includes("Kesta")) patrocinadorLiga = "Kesta";
    else if (propuestaActual.includes("Betmom")) patrocinadorLiga = "Betmom";
    else if (propuestaActual.includes("Anguila")) patrocinadorLiga = "Anguila";
    else if (propuestaActual.includes("Wjugar")) patrocinadorLiga = "Wjugar";
  } 
  else if (temaActual === "tv") {
    if (propuestaActual.includes("Gol Caracol")) derechosTV = { canal: "Gol Caracol", monto: 1100000, logo: "img/logos/caracol.png" };
    else if (propuestaActual.includes("RCN")) derechosTV = { canal: "RCN Deportes", monto: 1000000, logo: "img/logos/rcn.png" };
    else if (propuestaActual.includes("Netflix")) derechosTV = { canal: "Netflix", monto: 970000, logo: "img/logos/netflix.png" };
    else if (propuestaActual.includes("Disney")) derechosTV = { canal: "Disney+", monto: 1900000, logo: "img/logos/disney.png" };
    else if (propuestaActual.includes("WIN Sports")) derechosTV = { canal: "WIN Sports", monto: 1500000, logo: "img/logos/win.png" };
    else if (propuestaActual.includes("DirecTV")) derechosTV = { canal: "DirecTV", monto: 1400000, logo: "img/logos/directv.png" };
    else if (propuestaActual.includes("ESPN")) derechosTV = { canal: "ESPN", monto: 2000000, logo: "img/logos/espn.png" };
    else if (propuestaActual.includes("RTVC")) derechosTV = { canal: "RTVC", monto: 600000, logo: "img/logos/rtvc.png" };
    else if (propuestaActual.includes("Dimayor")) derechosTV = { canal: "Dimayor TV", monto: 1400000, logo: "img/logos/dimayor.png" };
  } 
   else if (temaActual === "formato") {
   if (propuestaActual.includes("18 equipos")) {
    alert("Se aprobo reducir la liga a 18 equipos. Habra mas descendidos esta temporada.");
    numeroDescensos = -4; // 👈 por ejemplo, 4 descendidos
  }
   else if (propuestaActual.includes("22 equipos")) {
  alert("Se aprobo aumentar la liga a 22 equipos. Subiran mas clubes esta temporada.");
  numeroAscensosExtra = 2; // por ejemplo, 2 ascensos adicionales
}
}
  else if (temaActual === "var") {
    alert("La Dimayor aprobo inversión en el sistema VAR. Transparencia al arbitraje!");
  }
  

  actualizarDatosLigaEnPantalla();
}

function cerrarAsamblea() {
  const modal = document.getElementById("modalAsamblea");
  if (modal) modal.remove();
}

function actualizarDatosLigaEnPantalla() {
  const cont = document.getElementById("infoLiga");
  if (cont) {
    cont.innerHTML = `
      <p><strong>Liga:</strong> Liga ${patrocinadorLiga} Dimayor</p>
      <p><img src="${derechosTV.logo}" alt="logo" style="height:25px;"> 
      <strong>Derechos TV:</strong> ${derechosTV.canal} - $: $${derechosTV.monto.toLocaleString()}</p>
    `;
  }
}

function verificarEleccionesPresidenciales() {
  const cadaCuantosAnios = 3;

  if ((temporadaActual - 2028) % cadaCuantosAnios !== 0 || temporadaActual < 2028) return;

  const base = moralHinchada;
  const azar = Math.floor(Math.random() * 20) - 10;

  // Limitar entre 0 y 100
  const apoyoFinal = Math.max(0, Math.min(100, base + azar));

  alert("🗳️ ¡Es año de elecciones presidenciales!");

  if (apoyoFinal >= 50) {
    alert(`✅ Ganaste las elecciones con un apoyo del ${apoyoFinal}%. La hinchada te respalda.`);
  } else {
    alert(`❌ Perdiste las elecciones con solo ${apoyoFinal}%. Otro presidente toma el cargo...`);
    location.reload();
  }
}


// 🟦 Periodistas estilo Twitter
const periodistas = [
  { usuario: "@olsendeportes", foto: "recursos/periodistas/per1.png" },
  { usuario: "@PSierraR", foto: "recursos/periodistas/per2.png" },
  { usuario: "@guilloarango", foto: "recursos/periodistas/per3.png" },
  { usuario: "@CLMerlo", foto: "recursos/periodistas/per4.png" },
  { usuario: "@JulianCaperaB", foto: "recursos/periodistas/per5.png" },
  { usuario: "@Alejo170403", foto: "recursos/periodistas/per6.png" },
  { usuario: "@JuanSalvadorB", foto: "recursos/periodistas/per7.png" }
];

function publicarNoticiaTwitter(equipo, jugador, precio) {

    // ❗ Solo fichajes mayores a 800k generan noticia
    if (precio < 3300000) return;

    // 40% de probabilidad de que salga noticia
    if (Math.random() > 0.80) return;

    const periodista = periodistas[Math.floor(Math.random() * periodistas.length)];

    // 📝 Mensajes variados (automáticos)
    const textos = [
        `🚨 BOMBA: ${equipo} cerró el fichaje de ${jugador} por ${formatearPrecio(precio)}. Operación clave para lo que viene.`,
        `📢 Fuentes confirman que ${equipo} pagó ${formatearPrecio(precio)} para asegurar a ${jugador}. Refuerzo de lujo.`,
        `🔵 ${equipo} se adelantó a varios clubes y firmó a ${jugador} por ${formatearPrecio(precio)}.`,
        `📝 Movimiento importante: ${jugador} ahora es nuevo jugador de ${equipo}. La operación ronda los ${formatearPrecio(precio)}.`,
        `🔥 Mercado activo: ${equipo} invierte ${formatearPrecio(precio)} en el fichaje de ${jugador}.`,
        `⚽ ${jugador} se une a ${equipo} en un traspaso valuado en ${formatearPrecio(precio)}. Gran golpe del club.`,
        `🤑 ${equipo} sorprendió pagando ${formatearPrecio(precio)} por ${jugador}. ¿Les saldrá bien el movimiento?`,
        `📈 ${equipo} apuesta fuerte y ficha a ${jugador} por ${formatearPrecio(precio)}.`
    ];

    const textoFinal = textos[Math.floor(Math.random() * textos.length)];

    const divNoticias = document.getElementById("noticiasTwitter");

    const noticia = document.createElement("div");
    noticia.classList.add("tweet");

    noticia.innerHTML = `
      <div class="tweet-header">
        <img src="${periodista.foto}" class="tweet-foto">
        <span class="tweet-user">${periodista.usuario}</span>
      </div>
      <div class="tweet-body">
        ${textoFinal}
      </div>
    `;

    divNoticias.prepend(noticia);
}


// =========================
// 📌 Esquemas tácticos
// =========================

const ordenLinea = {
  defensa: {
    li: 1,
    dfc: 2,
    ld: 3
  },
  medio: {
    md: 1,
    mo: 2
  },
  delantero: {
    ei: 1,
    dc: 2,
    ed: 3
  }
};

const esquemas = {
  "4-3-3": {
    defensa: ["LI","DFC","DFC","LD"],
    medio: ["MD","MO","MD"],
    delantero: ["EI","DC","ED"]
  },

  "4-4-2": {
    defensa: ["LI","DFC","DFC","LD"],
    medio: ["EI","MD","MD","ED"],
    delantero: ["DC","DC"]
  },

  "3-4-3": {
    defensa: ["DFC","DFC","DFC"],
    medio: ["LI","MD","MO","LD"],
    delantero: ["EI", "DC", "ED"]
  },

  "3-4-3B": {
    defensa: ["DFC","DFC","DFC"],
    medio: ["MO","MD","MD","MO"],
    delantero: ["EI", "DC", "ED"]
  },

  "3-3-4": {
    defensa: ["LI","DFC","DFC"],
    medio: ["MD","MD","MD"],
    delantero: ["EI", "DC", "DC", "ED"]
  },

  "4-2-4": {
    defensa: ["LI", "DFC", "DFC", "LD"],
    medio: ["MD", "MD"],
    delantero: ["EI","DC","DC","ED"]
  },

  "4-2-4B": {
    defensa: ["LI", "DFC", "DFC", "LD"],
    medio: ["MO", "MO"],
    delantero: ["EI","DC","DC","ED"]
  },

   "4-4-2B": {
    defensa: ["LI","DFC","DFC","LD"],
    medio: ["MO","MD","MD","ED"],
    delantero: ["DC","MO"]
  },

   "4-2-2-2": {
    defensa: ["LI","DFC","DFC","LD"],
    medio: ["MO","MD","MD","MO"],
    delantero: ["DC","DC"]
  },

   "5-3-2": {
    defensa: ["LI","DFC","DFC","DFC","LD"],
    medio: ["MD","MD","MD"],
    delantero: ["DC","DC"]
  },

   "3-5-2": {
    defensa: ["DFC","DFC","DFC"],
    medio: ["LI","MD","MD","MD","LD"],
    delantero: ["DC","DC"]
  },

  "5-2-3": {
    defensa: ["LI","DFC","DFC","DFC","LD"],
    medio: ["MD","MD"],
    delantero: ["EI","DC","ED"]
  },

   "4-5-1": {
    defensa: ["LI","DFC","DFC","LD"],
    medio: ["EI","MO","MD","MO","ED"],
    delantero: ["DC"]
  },

   "5-4-1": {
    defensa: ["LI","DFC","DFC","DFC","LD"],
    medio: ["EI","MD","MD","ED"],
    delantero: ["DC"]
  }
};

const posicionesSecundarias = {

  DFC: ["MD", "LI", "LD"],
  LI: ["DFC"],
  LD: ["DFC"],

  MD: ["MO", "DFC"],
  MO: ["MD"],

  DC: ["EI", "ED"],
  EI: ["ED", "MO","DC"],
  ED: ["EI", "MO","DC"]

};

const esquemasEquipos = {

    // PRIMERA
    "Nacional": "4-3-3",
    "Junior": "4-3-3",
    "América": "4-3-3",
    "Tolima": "4-3-3",
    "Santa Fe": "4-3-3",
    "Medellín": "4-4-2B",
    "Millonarios": "5-2-3",
    "Cali": "5-3-2",
    "Bucaramanga": "4-5-1",
    "Once Caldas": "4-3-3",
    "Inter Bogotá": "4-3-3",
    "Pasto": "4-3-3",
    "Águilas": "4-3-3",
    "Fortaleza": "4-2-2-2",
    "Cucuta": "4-4-2B",
    "Llaneros": "4-3-3",
    "Alianza": "5-3-2",
    "Pereira": "4-3-3",
    "Jaguares": "4-4-2",
    "B.Chico": "5-3-2",

    // SEGUNDA
    "Envigado": "4-3-3",
    "Real Cartagena": "4-3-3",
    "U.Magdalena": "4-3-3",
    "Inter Palmira": "4-3-3",
    "Quindio": "4-3-3",
    "IVC": "4-2-4B",
    "Patriotas": "4-3-3",
    "Bogotá": "3-3-4",
    "Orsomarso": "5-2-3",
    "Barranquilla": "4-4-2",
    "R.Cundinamarca": "4-2-4",
    "Tigres": "3-4-3B",
    "Leones": "4-4-2B",
    "Atlético FC": "5-2-3",
    "Boca Jrs. Cali": "4-3-3",
    "R.Santander": "3-3-4"
};

//let esquemaActual = "4-3-3";


// =========================
// 📌 Procesar plantilla (se asegura de usar la que ya está modificada con retiros/ascensos)
// =========================
function procesarPlantilla(nombreEquipo) {
  return plantillasJugadores[nombreEquipo] || [];
}

//<img src="${jugador.foto || jugador.avatar || 'img/jugadores/default.png'}"
    //class="fotoJugadorModal"></img>

function mostrarInfoJugador(jugador) {
  
  const esLeyenda = jugador.leyenda === true;

  const modal = document.getElementById("modalJugador");
  const contenido = document.getElementById("modalContenidoJugador");
  contenido.classList.toggle("modal-leyenda", esLeyenda);

  const bandera = jugador.nacionalidad 
        ? `recursos/banderas/${jugador.nacionalidad}.png`
        : `recursos/banderas/colombia.png`; // bandera por defecto

  
const esJugadorUsuario =
  plantillasJugadores[equipoUsuario]?.some(
    j => j.nombre === jugador.nombre
  );

const botonVenta = esJugadorUsuario && !jugador.leyenda
  ? `
    <button class="btnVenderJugador"
      onclick="venderJugador('${jugador.nombre}')">
      💰 Vender jugador
    </button>
  `
  : "";
  
  // <div class="card-header"> , <h2 class="nombre-jug">${jugador.nombre}</h2>
contenido.innerHTML = `

  <div class="card-header ${esLeyenda ? 'header-leyenda' : ''}">
    <div class="media-circulo">${jugador.media}</div>
    <h2 class="nombre-jug">
     ${jugador.nombre}
     ${esLeyenda ? '<span class="badge-leyenda">⭐ LEYENDA</span>' : ''}
    </h2>
  </div>

  <div class="card-body">

    <img src="${getFotoJugador(jugador)}"
     onerror="this.src='img/jugadores/default.png'"
     class="fotoJugadorModal">

    <div class="info-lateral">
      <p><b>Posición:</b> ${jugador.posicion}</p>
      <p>
        <b>Nacionalidad:</b>
        <img src="${bandera}" class="banderaJugador">
      </p>
      <p><b>Forma:</b> ${jugador.forma > 0 ? "🔥" : jugador.forma < 0 ? "❄️" : "😐"} (${jugador.forma})</p>
    </div>
  </div>

<div class="card-footer">
  <div class="item">
    <p>Edad</p>
    <span>${jugador.edad} años</span>
  </div>

  <div class="item">
    <p>S.Anual</p>
    <span>${formatearPrecio(jugador.salarioAnual)}</span>
  </div>

  <div class="item">
    <p>S.Mensual</p>
    <span>${formatearSalarioMensual(jugador.salarioMensual)}</span>
  </div>

  <div class="item">
    <p>Valor</p>
    <span>${formatearPrecio(jugador.valor)}</span>
  </div>
</div>

  ${botonVenta}
`;

  modal.style.display = "flex";
}

function cerrarModal() {
  document.getElementById("modalJugador").style.display = "none";
}

// =========================
// 📌 Mostrar plantilla en el campo
// =========================

let vistaActual = "cancha"; // puede ser "cancha" o "lista"

function toggleVista() {
  vistaActual = vistaActual === "cancha" ? "lista" : "cancha";
  mostrarPlantilla();
}

function cerrarPlantilla() {
  const contenedor = document.getElementById("alineacion");
  contenedor.innerHTML = "<p>Selecciona un equipo</p>";
}

function obtenerTitulares(nombreEquipo) {


  const plantilla = procesarPlantilla(nombreEquipo);
  

  const nombreEsquema = esquemasEquipos[nombreEquipo] || "4-4-2";
  const esquema = esquemas[nombreEsquema];

  if (!esquema) return null;

  const usados = [];

  const porteroTitular = plantilla.find(j =>
    j.posicion === "PO" &&
    !usados.includes(j)
  );

  if (porteroTitular) usados.push(porteroTitular);

  function rellenarLinea(arrayPosiciones) {

    return arrayPosiciones.map(pos => {

      let jugador = plantilla.find(j =>
        j.posicion === pos &&
        !usados.includes(j)
      );

      if (!jugador && posicionesSecundarias[pos]) {

        for (const posAlt of posicionesSecundarias[pos]) {

          jugador = plantilla.find(j =>
            j.posicion === posAlt &&
            !usados.includes(j)
          );

          if (jugador) break;
        }
      }

      if (jugador) {
        usados.push(jugador);
      }

      return jugador || null;
    });
  }

  const defensasTitulares =
    rellenarLinea(esquema.defensa);

  const mediosTitulares =
    rellenarLinea(esquema.medio);

  const delanterosTitulares =
    rellenarLinea(esquema.delantero);

  const titulares = [
    porteroTitular,
    ...defensasTitulares,
    ...mediosTitulares,
    ...delanterosTitulares
  ].filter(Boolean);

  return {
    porteroTitular,
    defensasTitulares,
    mediosTitulares,
    delanterosTitulares,
    titulares
  };
}

function mostrarPlantilla(nombreEquipo) {

  if (!nombreEquipo) {
    const selector = document.getElementById("selectorEquipo");
    if (!selector) return;
    nombreEquipo = selector.value;
  }

  const plantilla = agregarSueldosAPlantilla(
    procesarPlantilla(nombreEquipo),
    nombreEquipo
  );

  const contenedor = document.getElementById("alineacion");

  if (!plantilla.length) {
    contenedor.innerHTML =
      "<p>❌ Sin jugadores o Vuelve a Seleccionar</p>";
    return;
  }

  // 👉 VISTA CANCHA
  if (vistaActual === "cancha") {

    // =========================================
    // OBTENER LOS TITULARES
    // =========================================

    const alineacion = obtenerTitulares(nombreEquipo);

    if (!alineacion) {
      contenedor.innerHTML = `
        <p>❌ Error: el esquema del equipo no existe.</p>
      `;
      return;
    }

    const {
      porteroTitular,
      defensasTitulares,
      mediosTitulares,
      delanterosTitulares,
      titulares
    } = alineacion;

  const agregarDatosJugador = jugador => {
  if (!jugador) return null;
  return plantilla.find(j => j.nombre === jugador.nombre) || jugador;
  };

  const porteroTitularConDatos = agregarDatosJugador(porteroTitular);

  const defensasTitularesConDatos =
  defensasTitulares.map(agregarDatosJugador);

  const mediosTitularesConDatos =
  mediosTitulares.map(agregarDatosJugador);

  const delanterosTitularesConDatos =
  delanterosTitulares.map(agregarDatosJugador);


    // =========================================
    // SUPLENTES
    // =========================================

    /*
    const suplentes = plantilla.filter(
      j => !titulares.includes(j)
    );
    */

    const suplentes = plantilla.filter(
  j => !titulares.some(t => t.nombre === j.nombre)
);


    // =========================================
    // INFO PRESUPUESTO
    // =========================================

    const edadPromedio = Math.round(
      plantilla.reduce((acc, j) => acc + j.edad, 0) /
      plantilla.length
    );

    let tipoEquipo = "";

    if (edadPromedio < 24)
      tipoEquipo = "Joven";
    else if (edadPromedio < 29)
      tipoEquipo = "Estable";
    else
      tipoEquipo = "Veterano";

    const numeroJugadores = plantilla.length;

    const sueldoanual = calcularSueldoPorFuerza(
      obtenerFuerzaEquipo(nombreEquipo)
    );

    const añoFundacion =
      fundaciones[nombreEquipo] || "Desconocido";


    // =========================================
    // RENDER
    // =========================================

    contenedor.innerHTML = `

      <div class="info-presupuesto">

        <div class="item">
          <span class="titulo">División</span>
          <span class="valor">
            ${equiposPrimera.some(e => e.nombre === nombreEquipo)
              ? "Primera A"
              : "Primera B"}
          </span>
        </div>

        <div class="item">
          <span class="titulo">Sueldo Total</span>
          <span class="valor">
            ${formatearPrecio(sueldoanual)}
          </span>
        </div>

        <div class="item">
          <span class="titulo">Jugadores</span>
          <span class="valor">
            ${plantilla.length}
          </span>
        </div>

        <div class="item">
          <span class="titulo">Edad media</span>
          <span class="valor">
            ${edadPromedio} años - ${tipoEquipo}
          </span>
        </div>

        <div class="item">
          <span class="titulo">Formacion</span>
          <span class="valor">
            (${esquemasEquipos[nombreEquipo] || "4-4-2"})
          </span>
        </div>

        <div class="item">
          <span class="titulo">Fundación</span>
          <span class="valor">
            ${añoFundacion}
          </span>
        </div>

      </div>


      <div class="campo">

        <div class="titulares">

          <h4 class="h4-text">Titulares</h4>

          <div class="linea portero">
            ${porteroTitularConDatos ? `
              <div class="jugador titular"
                   onclick='mostrarInfoJugador(${JSON.stringify(porteroTitularConDatos)})'>
                 <p>${porteroTitularConDatos.nombre}</P>
                 <img src="${getFotoJugador(porteroTitularConDatos)}"
                 onerror="this.src='img/jugadores/default.png'"
                 class="fotoJugadorPla">

              </div>
            ` : ""}
          </div>


          <div class="linea defensa">
            ${defensasTitularesConDatos.map(j => j ? `
              <div class="jugador titular"
                   onclick='mostrarInfoJugador(${JSON.stringify(j)})'>
                <p>${j.nombre}</P>
                <img src="${getFotoJugador(j)}"
                 onerror="this.src='img/jugadores/default.png'"
                 class="fotoJugadorPla">

              </div>
            ` : "").join("")}
          </div>


          <div class="linea medio">
            ${mediosTitularesConDatos.map(j => j ? `
              <div class="jugador titular"
                   onclick='mostrarInfoJugador(${JSON.stringify(j)})'>
                <p>${j.nombre}</P>
                <img src="${getFotoJugador(j)}"
                 onerror="this.src='img/jugadores/default.png'"
                 class="fotoJugadorPla">

              </div>
            ` : "").join("")}
          </div>


          <div class="linea delantero">
            ${delanterosTitularesConDatos.map(j => j ? `
              <div class="jugador titular"
                   onclick='mostrarInfoJugador(${JSON.stringify(j)})'>
                <p>${j.nombre}</P>
                <img src="${getFotoJugador(j)}"
                 onerror="this.src='img/jugadores/default.png'"
                 class="fotoJugadorPla">

              </div>
            ` : "").join("")}
          </div>

        </div>

         <h4 class="h4-text">Suplentes</h4>
        <div class="suplentes">

          ${suplentes.map(j => `
            <div class="jugador suplente"
                 onclick='mostrarInfoJugador(${JSON.stringify(j)})'>
              <p>${j.nombre}</P>
              <img src="${getFotoJugador(j)}"
                 onerror="this.src='img/jugadores/default.png'"
                 class="fotoJugadorPla">
            </div>
          `).join("")}

        </div>

      </div>

    `;
  }
}

function actualizarAlineacionEquipo(nombreEquipo) {

    const plantilla = plantillasJugadores[nombreEquipo];

    if (!plantilla) return;

    // Entre 0 y 3 cambios
    const cambios = Math.floor(Math.random() * 4);

    console.log(
        `🔄 ${nombreEquipo}: se harán ${cambios} cambios`
    );

    for (let i = 0; i < cambios; i++) {

        // Obtener los titulares actuales
        const alineacion = obtenerTitulares(nombreEquipo);

        if (!alineacion) return;

        const titulares = alineacion.titulares;

        // Buscar posiciones donde exista:
        // 1 titular + al menos 1 suplente de esa misma posición
        const opciones = titulares.filter(titular => {

            return plantilla.some(j =>
                j.nombre !== titular.nombre &&
                j.posicion === titular.posicion
            );

        });

        if (!opciones.length) {
            console.log("⚠️ No hay posiciones disponibles para cambiar");
            return;
        }

        // Elegir titular al azar
        const titular =
            opciones[
                Math.floor(Math.random() * opciones.length)
            ];

        // Buscar suplentes de la MISMA posición
        const suplentes = plantilla.filter(j =>
            j.nombre !== titular.nombre &&
            j.posicion === titular.posicion &&
            !titulares.some(t => t.nombre === j.nombre)
        );

        if (!suplentes.length) {
            continue;
        }

        // Elegir suplente al azar
        const suplente =
            suplentes[
                Math.floor(Math.random() * suplentes.length)
            ];

        // Buscar posiciones reales dentro de plantillasJugadores
        const indiceTitular = plantilla.findIndex(j =>
            j.nombre === titular.nombre
        );

        const indiceSuplente = plantilla.findIndex(j =>
            j.nombre === suplente.nombre
        );

        if (
            indiceTitular === -1 ||
            indiceSuplente === -1
        ) {
            console.log("⚠️ No se encontraron los jugadores");
            continue;
        }

        // Intercambiar
        [
            plantilla[indiceTitular],
            plantilla[indiceSuplente]
        ] = [
            plantilla[indiceSuplente],
            plantilla[indiceTitular]
        ];

        console.log(
            `✅ ${nombreEquipo}: ${titular.nombre} SALE → ${suplente.nombre} ENTRA`
        );
    }
}
const sueldosEquipos = {};

function agregarSueldosAPlantilla(plantilla, nombreEquipo) {

  const sueldoanual = calcularSueldoPorFuerza(
    obtenerFuerzaEquipo(nombreEquipo)
  );

  // Si ya tenemos información salarial del equipo,
  // la reutilizamos para NO cambiar los sueldos.
  const sueldosGuardados = sueldosEquipos[nombreEquipo] || {};

  const sumaPesos = plantilla.reduce(
    (acc, j) => acc + Math.pow(j.media, 3),
    0
  );

  const plantillaConSueldos = plantilla.map(j => {

    // Si el jugador ya tenía sueldo guardado,
    // conservarlo aunque haya cambiado de posición
    // dentro del array.
    if (sueldosGuardados[j.nombre]) {

      return {
        ...j,
        salarioAnual: sueldosGuardados[j.nombre].salarioAnual,
        salarioMensual: sueldosGuardados[j.nombre].salarioMensual,
        valor: j.valor ?? sueldosGuardados[j.nombre].valor
      };
    }

    // Jugador nuevo → calcular sueldo
    const peso = Math.pow(j.media, 3) / sumaPesos;
    const factor = generarFactorJugador(j.nombre);

    const salarioAnual =
      Math.round(sueldoanual * peso * factor);

    const salarioMensual =
      Math.round(salarioAnual / 12);

    return {
      ...j,
      salarioAnual,
      salarioMensual,
      valor: j.valor ?? calcularPrecioJugador(j)
    };
  });

  // Guardar los datos salariales POR JUGADOR,
  // no una copia fija del orden de la plantilla.
  const nuevosSueldos = {};

  plantillaConSueldos.forEach(j => {

    nuevosSueldos[j.nombre] = {
      salarioAnual: j.salarioAnual,
      salarioMensual: j.salarioMensual,
      valor: j.valor
    };

  });

  sueldosEquipos[nombreEquipo] = nuevosSueldos;

  return plantillaConSueldos;
}


function abrirModalADY(descendidos, ascendidos, repechajeEquipos = []) {
  const modal = document.getElementById("modalAscensoDescenso");

  // función helper
  function ponerEscudos(divId, equipos) {
    const cont = document.getElementById(divId);
    cont.innerHTML = "";

    equipos.forEach(nombre => {
      /*
      const nombreLimpio = nombre
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/ /g, "_");

      cont.innerHTML += `
        <img src="escudos/${nombreLimpio}.png" title="${nombre}">
      `;
      */

    cont.innerHTML += `
  <div class="equipoItem">
    <img src="${getEscudoEquipo(nombre)}" 
    onerror="this.src='escudos/default.png'">
    <span>${nombre}</span>
  </div>
`;


    });
  }

  ponerEscudos("escudosDescenso", descendidos);
  ponerEscudos("escudosAscenso", ascendidos);
  ponerEscudos("escudosRepechaje", repechajeEquipos);

  modal.style.display = "block";
}

function cerrarModalADY() {
  document.getElementById("modalAscensoDescenso").style.display = "none";
}


let numeroDescensos = -2; // valor normal
let numeroAscensosExtra = 0; // por defecto no hay ascensos adicionales


function descenso() {
  if (!descensoPendiente) {
    alert("Debes simular al menos un semestre antes de procesar.");
    return;
  }

  // ✄1�7 Fin del semestre 1
  if (semestreActual < 2) {
    semestreActual++;
    actualizarTemporada();
    activarBotones();
    campeon1S = obtenerCampeonSemestre(); // Guardar campeón 1S
    alert("Fin del semestre 1. Ahora puedes simular el segundo semestre.");
    simularCopaColombiaNuevoFormato();
    abrirModalEconomico();
    procesarSemestrePatrocinio();
    procesarSemestreMarca();
    yaVendioCamisetas = false;
    actividadSemestreUsada = false;
    return;
    
  }


  //Fin de temporada (semestre 2)
  campeon2S = obtenerCampeonSemestre(); // Guardar campeón 2S
  procesarSemestrePatrocinio();
  procesarSemestreMarca();
  activarBotones();
  cobrarCuotaPrestamo();
  yaVendioCamisetas = false;

  // Calcular tabla anual
  let anual = Object.values(tablaAnual).map(e => ({
    ...e,
    pts: parseFloat((e.pts / 38).toFixed(3))
  }));
  anual.sort((a, b) => b.pts - a.pts || (b.gf - b.gc) - (a.gf - a.gc));
  mostrarTabla("tctr", anual, `Reclasificación - Descenso ${temporadaActual}`, false, [], true);
 
  // 👇 Usa una variable global dinámica
   let descendidos = anual.slice(numeroDescensos).map(e => e.nombre);


/*
  let descendidos = anual.slice(-4).map(e => e.nombre);
*/


  // ⚠️ Expulsión por deuda financiera
  if (alertaPresupuestoSinResolver) {
    alert("🚨 Tu equipo fue expulsado por deuda financiera.");
    const idx = anual.findIndex(e => e.nombre === equipoUsuario);
    if (idx !== -1) anual.splice(idx, 1);
    alert("XX COMUNICADO DIMAYOR: Tu club perdio su ficha profesional.");
    location.reload();
    alertaPresupuestoSinResolver = false;
    return;
  }

  // 🔼 Sistema realista de ascenso FPC
  const {
    equiposQueAscienden,
    repechaje: repechajeResultado
  } = simularAscensoRealista();

  const ascendidos = equiposSegunda.filter(e =>
    equiposQueAscienden.includes(e.nombre)
  );

  // Mensaje final
  let mensajeFinal = `Descendieron: ${descendidos.join(", ")}` +
                     `\nAscienden directamente: ${equiposQueAscienden.slice(0, 2).join(", ")}`;

  if (repechajeResultado) {
    mensajeFinal += `\nRepechaje de Ascenso:` +
                    `\n  Ida: ${repechajeResultado.equipo1} ${repechajeResultado.resultadoIda} ${repechajeResultado.equipo2}` +
                    `\n  Vuelta: ${repechajeResultado.equipo2} ${repechajeResultado.resultadoVuelta} ${repechajeResultado.equipo1}` +
                    `\n  Global: ${repechajeResultado.resultadoGlobal}` +
                    `\n  Ganador: ${repechajeResultado.ganador}`;
  }

/*
  alert(mensajeFinal);
*/

// Mostrar modal con escudos
abrirModalADY(
  descendidos,
  equiposQueAscienden,
  repechajeResultado ? [repechajeResultado.equipo1, repechajeResultado.equipo2] : []
);

// 🔄 MOVER EQUIPOS ENTRE DIVISIONES USANDO EL NUEVO SISTEMA

// 1. Sacar los descendidos de Primera
equiposPrimera = equiposPrimera.filter(e => !descendidos.includes(e.nombre));

// 2. Sacar los ascendidos de Segunda
equiposSegunda = equiposSegunda.filter(e => !equiposQueAscienden.includes(e.nombre));

// 3. Agregar a Primera los ascendidos
const nuevosPrimera = equiposQueAscienden.map(nombre => {
  return {
    nombre,
    fuerza: obtenerFuerzaTotal(nombre) || 63   // fuerza base para ascendidos
  };
});
equiposPrimera = equiposPrimera.concat(nuevosPrimera);

// 4. Agregar a Segunda los descendidos
const nuevosSegunda = descendidos.map(nombre => {
  return {
    nombre,
    fuerza: obtenerFuerzaTotal(nombre) || 61   // fuerza base para descendidos
  };
});
equiposSegunda = equiposSegunda.concat(nuevosSegunda);


actualizarFuerzaUI();


  // 🧾 Guardar copia de la tabla anual antes de reiniciar
tablasAnualesPorTemporada[temporadaActual] = Object.values(tablaAnual);

numeroDescensos = -2; // 🔁 volver a normalidad

// 1️⃣ Termina temporada local
// 2️⃣ Llamás esto:
ligasLibertadores.colombia.equipos = obtenerClasificadosColombia();

// 3️⃣ Simulás Libertadores
simularLibertadores();

  // 🧹 Reset
  semestreActual = 1;
  temporadaActual++;
  actualizarTemporada();
  tablaAnual = {};
  descensoPendiente = false;
  actividadSemestreUsada = false;

  // Limpieza
  procesarRetirosYAltas();
  simularSuperliga();
  verificarAsambleaDimayor();
  resetearBalanceEconomico();
  
  verificarEleccionesPresidenciales();
  presupuestoNegativoDetectado = false;

}


//===CANTERA y RETIROS ===*/

let nivelCantera = 0; // Nivel inicial de la cantera (1 a 5, por ejemplo)
const costoMejoraCantera = [0, 500000, 1000000, 3000000, 5000000, 10000000]; // costo por nivel


function mejorarCantera() {
  const siguienteNivel = nivelCantera + 1;

  if (siguienteNivel > 5) {
    alert("🏆 La cantera ya está en el nivel máximo (5).");
    return;
  }

  const costo = costoMejoraCantera[siguienteNivel];

  if (typeof costo !== "number") {
    alert("❌ Error: costo inválido.");
    return;
  }

  if (presupuestoVisible < costo) {
    alert(`💰 No tienes suficiente dinero. Se necesitan ${formatearPrecio(costo)}`);
    return;
  }

  presupuestoVisible -= costo;
  nivelCantera = siguienteNivel;

  document.getElementById("Presupuesto").textContent =
    `Presupuesto: ${formatearPrecio(presupuestoVisible)}`;

  document.getElementById("nivelCanteraTexto").textContent =
    `Nivel de Cantera: ${nivelCantera}`;

  alert(`✅ Cantera mejorada a nivel ${nivelCantera} (-${formatearPrecio(costo)})`);
}


  const nombres = [
   "Gómez", "Rodríguez", "Martínez", "López", "Pérez", "Ramírez",
  "Moreno", "Romero", "Hernández", "Vargas", "Jiménez", "Torres",
  "Silva", "Ruiz", "Mendoza", "Delgado", "Serrano", "Navarro",
  "Ortega", "Aguilar", "Suárez", "Peña", "Flores", "Campos",
  "Herrera", "García", "Fernández", "Sánchez", "Álvarez", "Molina",
  "Montoya", "Blanco", "Ibarra", "Castaño", "Mosquera", "Murillo",
  "Valencia", "Córdoba", "Palacios", "Rincón", "Cuesta", "Mejía",
  "Pardo", "Angulo", "Arboleda", "Castro", "Zapata", "Arias",
  "Bermúdez", "Chávez", "Forero", "Gallego", "Guerrero", "León",
  "Marín", "Montero", "Nieto", "Parra", "Quintero", "Reyes",
  "Salazar", "Urbina", "Velásquez", "Quiñones", "Bonilla", "Pineda",
  "Guzmán", "Cárdenas", "Ospina", "Rojas", "Rivera", "Gaitán",
  "Barrera", "Restrepo", "Tobar", "Amaya", "Téllez", "Barbosa",
  "Caicedo", "Benavides", "Grisales", "Hincapié", "Londoño",
  "Isaza", "Cadavid", "Zúñiga", "Villegas", "Osorio", "Lagos",
  "Lora", "Trujillo", "Bolaños", "Vallejo", "Arango", "Giraldo",
  "Patiño", "Sierra", "Camargo", "Orjuela", "Perdomo", "Padilla",
  "Galeano", "Cortés", "Fajardo", "Murcia", "Cifuentes", "Roldán",
  "Lizarazo", "Botero", "Sandoval", "Tamayo", "Manrique", "Barreto",
  "Espinosa", "Cuéllar", "Montes", "Chacón", "Villalba", "Riaño",
  "Beltrán", "Bohórquez", "Pulido", "Santamaría", "Vélez", "Lucumí",
  "Mina", "Banguera", "Balanta", "Cuadrado", "Borja", "Sinisterra",
  "Campaz", "Carrascal", "Díaz", "Durán", "Asprilla", "Cabal",
  "Machado", "Carbonero", "Becerra", "Correa", "Mosquera",
  "Hinestroza", "Preciado", "Palomeque", "Maturana", "Cabezas",
  "Aristizábal", "Bedoya", "Carmona", "Chara", "Díaz",
  "Echeverri", "Enríquez", "Escobar", "Franco", "Gaviria",
  "Lerma", "Lucena", "Mafla", "Márquez", "Marulanda",
  "Mier", "Núñez", "Ordóñez", "Palma", "Rentería",
  "Sambueza", "Tafur", "Toloza", "Viveros", "Yépez"
];

  const nombresCortos = [
  // ==========================================
  // CLÁSICOS Y TRADICIONALES
  // ==========================================
  "Juan", "Luis", "Carlos", "Andrés", "Mateo", "Sebastián",
  "Camilo", "Santiago", "Tomás", "Esteban", "Lucas", "Emilio",
  "Iván", "Fernando", "Mario", "Julián", "Samuel", "David",
  "Miguel", "José", "Antonio", "Eduardo", "Francisco", "Felipe",
  "Daniel", "Sergio", "Manuel", "Nicolás", "Simón", "Matías",
  "Pablo", "Diego", "Ricardo", "Mauricio", "Leonardo", "Álvaro",
  "Adrián", "Víctor", "Hernán", "Jairo", "Néstor", "Milton",
  "César", "Darío", "Ramiro", "Julio", "Rubén", "Fabio",
  "Gilberto", "Hugo", "Jacobo", "Alonso", "Josué", "Raúl",
  "Edgar", "Orlando", "Germán", "Héctor", "Nelson", "Ángel",
  "Fabián", "Harold", "Wilson", "Elkin", "Ariel", "Arley",

  // ==========================================
  // MUY FRECUENTES EN FUTBOLISTAS COLOMBIANOS
  // ==========================================
  "Cristian", "Cristian", "Edwin", "Jhon", "Jeison",
  "Yeferson", "Yimmi", "Yairo", "Fredy", "Óscar",
  "Kevin", "Brayan", "Johan", "Darwin", "Duván",
  "Anderson", "Wilmar", "James", "Radamel", "Teófilo",
  "Giovanny", "Aldair", "Yeison", "Deiver", "Deiby",
  "Yeimar", "Yerson", "Stiven", "Stiwart", "Jordy",
  "Bayron", "Dilan", "Cristofer", "Elvis", "Alexis",
  "Wilmer", "Harrison", "Jimmy", "Alex", "Reinel",
  "Edison", "Marlon", "Jefferson", "Jader",

  // ==========================================
  // GENERACIÓN MODERNA Y JOVEN
  // ==========================================
  "Thiago", "Elian", "Ian", "Emmanuel", "Isaac",
  "Jerónimo", "Emir", "Dylan", "Ezequiel", "Gael",
  "Benjamín", "Luciano", "Brayhan", "Yilmar",
  "Eyder", "Eiver", "Yulian", "Edier", "Stiwar",
  "Yair", "Yeiler", "Yilber", "Brayner", "Yeider",
  "Jostin", "Jhonier", "Derson", "Andry", "Wilinton",
  "Deiner", "Jordán", "Yorman", "Yairon", "Yuber",
  "Yader", "Hansel", "Elier", "Didier", "Harlim",
  "Yuriel", "Emanuel", "Edwar", "Enmanuel",
  "Jhonatan", "Yovani", "Maicol", "Yenner",
  "Yeicol", "Yulián", "Deivinson", "Yarison",
  "Yhon", "Andru", "Jhostin", "Yildrey", "Jair",
  "Jorman", "Yeiner", "Yoiner", "Yadier",
  "Yasmani", "Braydon",

  // ==========================================
  // NOMBRES MUY COMUNES EN NUEVAS GENERACIONES
  // ==========================================
  "Alejandro", "Emiliano", "Valentín", "Máximo",
  "Franco", "Bruno", "Enzo", "Lorenzo", "Agustín",
  "Joaquín", "Bautista", "Salvador", "Damián",
  "Thiago", "Gael", "Liam", "Noah", "Iker",
  "Axel", "Dante", "Facundo", "Tadeo",
  "Rodrigo", "Ramón", "Gabriel", "Rafael",
  "Israel", "Isaías", "Abraham", "Emanuel",
  "Bryan", "Brandon", "Steven", "Stiven",
  "Jordan", "Dilan", "Dylan", "Kevin",
  "Maikel", "Michael", "Jhonatan", "Jonathan",

  // ==========================================
  // VARIANTES MUY COLOMBIANAS / LATINAS
  // ==========================================
  "Jhonatan", "Jhonier", "Jhonny", "Jhon",
  "Yeison", "Yerson", "Yeferson", "Yéiler",
  "Yéiner", "Yeimar", "Yeider", "Yair",
  "Yairo", "Yairon", "Yorman", "Yuber",
  "Yader", "Yadier", "Yilmar", "Yilber",
  "Wilinton", "Wilmar", "Wilmer", "Wilman",
  "Deiner", "Deiver", "Deiby", "Deivis",
  "Edilson", "Edison", "Edwar", "Edier",
  "Brayan", "Bryan", "Brayhan", "Brayner",
  "Jostin", "Jhostin", "Cristofer", "Anderson",
  "Jefferson", "Maicol", "Stiven", "Stiwart",

  // ==========================================
  // OPCIONES ADICIONALES PARA MÁS VARIEDAD
  // ==========================================
  "Abel", "Adolfo", "Alberto", "Alfredo",
  "Amílcar", "Aníbal", "Armando", "Arnoldo",
  "Arturo", "Belisario", "Bernardo", "Ciro",
  "Claudio", "Cristóbal", "Damián", "Edmundo",
  "Ernesto", "Efraín", "Félix", "Gonzalo",
  "Guillermo", "Horacio", "Ismael", "Javier",
  "Leandro", "León", "Lisandro", "Marcelo",
  "Marcos", "Martín", "Maximiliano", "Nataniel",
  "Omar", "Patricio", "Rafael", "René",
  "Renato", "Roberto", "Rodolfo", "Rolando",
  "Saúl", "Silvio", "Ulises", "Valentín",
  "Vicente", "Walter", "Wilfredo"
];

function procesarRetirosYAltas() {
  const posiciones = ["DFC", "LI", "LD", "MO", "DC", "EI", "ED", "MD"];

  // 👉 Listas globales
  let retirosTotales = [];
  let canteranosPorEquipo = {}; // { equipo: cantidad }

  for (const equipo in plantillasJugadores) {
    let plantilla = plantillasJugadores[equipo];
    let porteroReemplazado = false;
    let nuevosCanteranos = 0; // contador local por equipo

    // ✄1�7 Procesar retiros
    plantilla = plantilla.map(jugador => {
      jugador.edad += 1;

      const probRetiro = calcularProbabilidadRetiro(jugador.edad);
      if (Math.random() < probRetiro) {
        if (jugador.posicion.toLowerCase() === "PO") {
          porteroReemplazado = true;
        }
        retirosTotales.push(`👴 ${jugador.nombre} (${jugador.posicion}, ${jugador.edad}) se retira de ${equipo}`);
        return null;
      }
      return jugador;
    }).filter(j => j !== null);

    // ✄1�7 Verificar si queda portero
    const tienePortero = plantilla.some(j => j.posicion.toLowerCase() === "PO");
    if (!tienePortero || porteroReemplazado) {
      const nuevoPortero = generarJugador("PO", nombresCortos, nombres, equipo);
      plantilla.push(nuevoPortero);
      nuevosCanteranos++;
    }

    while (plantilla.length < 23) {
      const nuevo = generarJugador(null, nombresCortos, nombres, equipo);
      plantilla.push(nuevo);
      nuevosCanteranos++;
    }

   

    // Guardar la cuenta de canteranos ascendidos por equipo
    if (nuevosCanteranos > 0) {
      if (!canteranosPorEquipo[equipo]) {
        canteranosPorEquipo[equipo] = 0;
      }
      canteranosPorEquipo[equipo] += nuevosCanteranos;
    }

    plantillasJugadores[equipo] = plantilla;
  }

  // 🆕 Construir mensaje unificado
  let mensajeFinal = "";

  if (retirosTotales.length > 0) {
    mensajeFinal += "📋 Retiros:\n" + retirosTotales.join("\n") + "\n\n";
  }

  const equiposCanteranos = Object.keys(canteranosPorEquipo);
  if (equiposCanteranos.length > 0) {
    mensajeFinal += "🌱 Canteranos ascendidos:\n";
    equiposCanteranos.forEach(eq => {
      mensajeFinal += `${eq} (${canteranosPorEquipo[eq]}),`;
    });
  }

  if (mensajeFinal !== "") {
    agregarNotificacion(mensajeFinal.trim());
    //notificacionPendiente = mensajeFinal.trim();
   // mensajesPendientes++;
    //actualizarBuzon();
  }

}

// Probabilidad de retiro según edad
function calcularProbabilidadRetiro(edad) {
  if (edad < 34) return 0;
  if (edad === 34) return 0;
  if (edad === 35) return 0.01;
  if (edad === 36) return 0.02;
  if (edad === 37) return 0.05;
  if (edad === 38) return 0.07;
  if (edad === 39) return 0.10;
  if (edad >= 40 && edad < 43) return 0.15;
  if (edad >= 43 && edad < 46) return 0.30;
  if (edad >= 46 && edad < 50) return 0.50;
  if (edad >= 50) return 1.0; // 100% chance de retiro
}


// Genera un jugador aleatorio
function generarJugador(posicionFija, nombresCortos, nombres, equipoActual) {
  const posiciones = ["DFC", "LI", "LD", "MO", "DC", "EI", "ED", "MD"];

  const nombrePropio = nombresCortos[Math.floor(Math.random() * nombresCortos.length)];
  const apellido = nombres[Math.floor(Math.random() * nombres.length)];
  const nombre = `${nombrePropio} ${apellido}`;

  const edad = Math.floor(Math.random() * 5) + 18;

  const r = Math.random();
  let baseMedia;
  let esPromesa = false;

  if (r < 0.03) {
    baseMedia = Math.floor(Math.random() * 6) + 77;
    esPromesa = true;
  } else if (r < 0.075) {
    baseMedia = Math.floor(Math.random() * 5) + 70;
    esPromesa = true;
  } else {
    baseMedia = Math.floor(Math.random() * 10) + 58;
  }

  let bonificacionCantera = 0;
  if (equipoActual === equipoUsuario) {
    bonificacionCantera = (nivelCantera - 1) * 2;
  }

  const media = Math.min(baseMedia + bonificacionCantera, 99);
  const posicion = posicionFija || posiciones[Math.floor(Math.random() * posiciones.length)];

  // 🖼️ Avatar fijo aleatorio
  const numeroAvatar = Math.floor(Math.random() * 46) + 1;
  const avatar = `img/avatares/avatar_${numeroAvatar.toString().padStart(2, "0")}.png`;

  return {
    nombre,
    edad,
    media,
    posicion,
    promesa: esPromesa,
    avatar,
    forma: 0,
    valor: calcularPrecioJugador({ nombre, edad, media })
  };
}

function generarPlantillaEquipo(equipoActual) {
  const plantilla = [];

  // Porteros
  plantilla.push(generarJugador("PO", nombresCortos, nombres, equipoActual));
  plantilla.push(generarJugador("PO", nombresCortos, nombres, equipoActual));

  // Defensas centrales
  for (let i = 0; i < 4; i++) {
    plantilla.push(
      generarJugador("DFC", nombresCortos, nombres, equipoActual)
    );
  }

  // Laterales izquierdos
  for (let i = 0; i < 2; i++) {
    plantilla.push(
      generarJugador("LI", nombresCortos, nombres, equipoActual)
    );
  }

  // Laterales derechos
  for (let i = 0; i < 2; i++) {
    plantilla.push(
      generarJugador("LD", nombresCortos, nombres, equipoActual)
    );
  }

  // Mediocampistas ofensivos
  for (let i = 0; i < 4; i++) {
    plantilla.push(
      generarJugador("MO", nombresCortos, nombres, equipoActual)
    );
  }

  // Delanteros centro
  for (let i = 0; i < 4; i++) {
    plantilla.push(
      generarJugador("DC", nombresCortos, nombres, equipoActual)
    );
  }

  // Extremos izquierdos
  for (let i = 0; i < 2; i++) {
    plantilla.push(
      generarJugador("EI", nombresCortos, nombres, equipoActual)
    );
  }

  // Extremos derechos
  for (let i = 0; i < 2; i++) {
    plantilla.push(
      generarJugador("ED", nombresCortos, nombres, equipoActual)
    );
  }

  // Mediocampistas derechos
  for (let i = 0; i < 1; i++) {
    plantilla.push(
      generarJugador("MD", nombresCortos, nombres, equipoActual)
    );
  }

  return plantilla;
}
