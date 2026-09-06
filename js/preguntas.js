

let actividadSemestreUsada = false;


function actividadPrimerSemestre() {
  if(!equipoUsuario){
    alert("Elige tu equipo");
    return;
  }

  if (actividadSemestreUsada) {
    agregarNotificacion("🏁 Pretemporada finalizada. Disponible nuevamente el próximo semestre.");
    return;
  }

  actividadSemestreUsada = true;

  const pregunta =
    preguntasPrimerSemestre[
      Math.floor(Math.random() * preguntasPrimerSemestre.length)
    ];

  document.getElementById("textoPregunta").innerText = pregunta.texto;
  document.getElementById("buzonPregunta").style.display = "flex";

  document.getElementById("btnAceptar").onclick = () => {
    pregunta.si();
    document.getElementById("buzonPregunta").style.display = "none";
  };

  document.getElementById("btnCancelar").onclick = () => {
    pregunta.no();
    document.getElementById("buzonPregunta").style.display = "none";
  };
}



function golesAleatorios() {
  const r = Math.random();

  if (r < 0.15) return 0;
  if (r < 0.45) return 1;
  if (r < 0.70) return 2;
  if (r < 0.85) return 3;
  if (r < 0.93) return 4;
  if (r < 0.97) return 5;
  if (r < 0.99) return 6;

  return 7;
}



const preguntasPrimerSemestre = [

{
texto: "📋 Semana tranquila sin novedades. ¿Deseas continuar normalmente?",
si: () => {
  if (Math.random() < 0.6) {
    agregarNotificacion("📋 La semana transcurre sin eventos relevantes.");
  } else {
    agregarNotificacion("📋 Se detectan pequeños ajustes internos, sin impacto deportivo.");
  }
},
no: () => {
  agregarNotificacion("📋 El cuerpo técnico decide no realizar cambios.");
}
},

{
texto: "🏋️ Bloque intenso de entrenamiento. ¿Implementarlo?",
si: () => {
  const plantilla = plantillasJugadores[equipoUsuario];
  const beneficiado =
    plantilla[Math.floor(Math.random() * plantilla.length)];

  beneficiado.media += 2;

  agregarNotificacion(`🏋️ ${beneficiado.nombre} destaca en entrenamientos. Gana +2 de media.`);
},
no: () => {
  agregarNotificacion("📋 Se mantiene la planificación habitual.");
}
},

{
texto: "🚨 Conflicto interno con un jugador. ¿Sancionar?",
si: () => {
  const plantilla = plantillasJugadores[equipoUsuario];
  const sancionado =
    plantilla[Math.floor(Math.random() * plantilla.length)];

  sancionado.media = Math.max(1, sancionado.media - 2);

  agregarNotificacion(`🚨 ${sancionado.nombre} es sancionado. Pierde -2 de media.`);
},
no: () => {
  agregarNotificacion("🤝 El caso se resuelve puertas adentro.");
}
},

{
texto: "🧪 Pruebas tácticas experimentales. ¿Arriesgar?",
si: () => {
  const plantilla = plantillasJugadores[equipoUsuario];
  const jugador =
    plantilla[Math.floor(Math.random() * plantilla.length)];

  if (Math.random() < 0.5) {
    jugador.media += 2;

    agregarNotificacion(`🧪 ${jugador.nombre} se adapta perfecto. Gana +2 de media.`);
  } else {
    jugador.media = Math.max(1, jugador.media - 1);

    agregarNotificacion(`🧪 ${jugador.nombre} no rinde bien. Pierde -1 de media.`);
  }
},
no: () => {
  agregarNotificacion("📋 Se descartan las pruebas tácticas.");
}
},

{
texto: "🇦🇷 Pretemporada en Argentina. ¿Aceptar?",
si: () => {

  const coste = 1500000;
  restarPresupuesto(coste);

  const equipos = [
    "River Plate",
    "Boca Juniors",
    "Racing",
    "Independiente",
    "San Lorenzo",
    "Estudiantes",
    "Vélez",
    "Rosario Central"
  ];

  const [rivalA, rivalB] =
    equipos.sort(() => Math.random() - 0.5).slice(0, 2);

  const g1 = golesAleatorios();
  const r1 = golesAleatorios();
  const g2 = golesAleatorios();
  const r2 = golesAleatorios();

  let victorias = 0;

  if (g1 > r1) victorias++;
  if (g2 > r2) victorias++;

  const plantilla = plantillasJugadores[equipoUsuario];
  let efecto = "";
  let ingresos = 0;

  if (victorias === 2) {

    ingresos = 4000000;

    plantilla.forEach(j => j.media += 1);

    efecto =
      "🔥 Dos victorias. Los jugadores están motivados. +1 de media para toda la plantilla.";

  } else if (victorias === 1) {

    ingresos = 2000000;

    const jugador =
      plantilla[Math.floor(Math.random() * plantilla.length)];

    if (Math.random() < 0.5) {
      jugador.media += 1;
      efecto =
        `🔥 Buen rendimiento de ${jugador.nombre}. Gana +1 de media.`;
    } else {
      jugador.media = Math.max(1, jugador.media - 1);
      efecto =
        `😓 Fatiga acumulada: ${jugador.nombre} pierde -1 de media.`;
    }

  } else {

    ingresos = 500000;

    plantilla.forEach(j => {
      j.media = Math.max(1, j.media - 2);
    });

    efecto =
      "😞 Dos derrotas. Los jugadores pierden confianza. -2 de media para toda la plantilla.";
  }

  sumarPresupuesto(ingresos);

  const balance = ingresos - coste;

  agregarNotificacion(
`🇦🇷 Gira en Argentina
${equipoUsuario} ${g1} - ${r1} ${rivalA}
${equipoUsuario} ${g2} - ${r2} ${rivalB}

${efecto}

💸 Gastos de la gira: $1.5M
💵 Ingresos por resultados: $${(ingresos / 1000000).toFixed(1)}M
📊 Balance de la gira: ${balance >= 0 ? "+" : ""}$${(balance / 1000000).toFixed(1)}M`
  );
},
no: () => {
  agregarNotificacion("🇦🇷 Se cancela la gira por Argentina.");
}
},

{
texto: "🇲🇽 Pretemporada en México. ¿Aceptar?",
si: () => {

  const coste = 1200000;
  restarPresupuesto(coste);

  const equipos = [
    "América",
    "Chivas",
    "Cruz Azul",
    "Pumas",
    "Tigres",
    "Monterrey",
    "Toluca",
    "Santos Laguna"
  ];

  const [rivalA, rivalB] =
    equipos.sort(() => Math.random() - 0.5).slice(0, 2);

  const g1 = golesAleatorios();
  const r1 = golesAleatorios();
  const g2 = golesAleatorios();
  const r2 = golesAleatorios();

  let victorias = 0;

  if (g1 > r1) victorias++;
  if (g2 > r2) victorias++;

  const plantilla = plantillasJugadores[equipoUsuario];
  let efecto = "";
  let ingresos = 0;

  if (victorias === 2) {

    ingresos = 3500000;

    plantilla.forEach(j => j.media += 1);

    efecto =
      "🔥 Gran gira mexicana. +1 de media para todos.";

  } else if (victorias === 1) {

    ingresos = 2000000;

    const jugador =
      plantilla[Math.floor(Math.random() * plantilla.length)];

    if (Math.random() < 0.5) {
      jugador.media += 1;

      efecto =
        `🔥 Buen rendimiento de ${jugador.nombre}. Gana +1 de media.`;
    } else {
      jugador.media = Math.max(1, jugador.media - 1);

      efecto =
        `😓 Fatiga del viaje: ${jugador.nombre} pierde -1 de media.`;
    }

  } else {

    ingresos = 500000;

    plantilla.forEach(j => {
      j.media = Math.max(1, j.media - 2);
    });

    efecto =
      "😞 Mal rendimiento en la gira. -2 de media para todos.";
  }

  sumarPresupuesto(ingresos);

  const balance = ingresos - coste;

  agregarNotificacion(
`🇲🇽 Gira en México
${equipoUsuario} ${g1} - ${r1} ${rivalA}
${equipoUsuario} ${g2} - ${r2} ${rivalB}

${efecto}

💸 Gastos de la gira: $1.2M
💵 Ingresos por resultados: $${(ingresos / 1000000).toFixed(1)}M
📊 Balance de la gira: ${balance >= 0 ? "+" : ""}$${(balance / 1000000).toFixed(1)}M`
  );
},
no: () => {
  agregarNotificacion("🇲🇽 Se decide no viajar a México.");
}
},

{
texto: "🇺🇸 Pretemporada en Estados Unidos. ¿Aceptar?",
si: () => {

  const coste = 1800000;
  restarPresupuesto(coste);

  const equipos = [
    "LA Galaxy",
    "Inter Miami",
    "LAFC",
    "Seattle Sounders",
    "Atlanta United",
    "NYC FC",
    "Orlando City",
    "Austin FC"
  ];

  const [rivalA, rivalB] =
    equipos.sort(() => Math.random() - 0.5).slice(0, 2);

  const g1 = golesAleatorios();
  const r1 = golesAleatorios();
  const g2 = golesAleatorios();
  const r2 = golesAleatorios();

  let victorias = 0;

  if (g1 > r1) victorias++;
  if (g2 > r2) victorias++;

  const plantilla = plantillasJugadores[equipoUsuario];
  let efecto = "";
  let ingresos = 0;

  if (victorias === 2) {

    ingresos = 4500000;

    plantilla.forEach(j => j.media += 1);

    efecto =
      "🔥 Gran gira internacional. +1 de media para todo el plantel.";

  } else if (victorias === 1) {

    ingresos = 2500000;

    const jugador =
      plantilla[Math.floor(Math.random() * plantilla.length)];

    if (Math.random() < 0.5) {

      jugador.media += 1;

      efecto =
        `🔥 ${jugador.nombre} se adapta bien al viaje. Gana +1 de media.`;

    } else {

      jugador.media = Math.max(1, jugador.media - 1);

      efecto =
        `😓 Viaje largo: ${jugador.nombre} pierde -1 de media.`;
    }

  } else {

    ingresos = 750000;

    plantilla.forEach(j => {
      j.media = Math.max(1, j.media - 2);
    });

    efecto =
      "😞 Resultados muy flojos. -2 de media para todos.";
  }

  sumarPresupuesto(ingresos);

  const balance = ingresos - coste;

  agregarNotificacion(
`🇺🇸 Gira en Estados Unidos
${equipoUsuario} ${g1} - ${r1} ${rivalA}
${equipoUsuario} ${g2} - ${r2} ${rivalB}

${efecto}

💸 Gastos de la gira: $1.8M
💵 Ingresos por resultados: $${(ingresos / 1000000).toFixed(1)}M
📊 Balance de la gira: ${balance >= 0 ? "+" : ""}$${(balance / 1000000).toFixed(1)}M`
  );
},
no: () => {
  agregarNotificacion("🇺🇸 Se prioriza entrenar en casa.");
}
},

{
texto: "💰 Prima de pretemporada. ¿Pagar una prima al plantel?",
si: () => {

  const coste = 1000000;
  sumarPresupuesto(-coste);

  const plantilla = plantillasJugadores[equipoUsuario];

  plantilla.forEach(j => j.media += 1);

  agregarNotificacion(
    "💰 Se paga una prima de $1M al plantel. Todos los jugadores ganan +1 de media."
  );
},
no: () => {
  agregarNotificacion(
    "💰 El club decide no pagar la prima de pretemporada."
  );
}
},

{
texto: "⭐ El entrenador quiere realizar un entrenamiento individual especial. ¿Aprobarlo?",
si: () => {

  const plantilla = plantillasJugadores[equipoUsuario];

  const jugador =
    plantilla[Math.floor(Math.random() * plantilla.length)];

  jugador.media += 2;

  agregarNotificacion(
    `⭐ ${jugador.nombre} realiza un entrenamiento especial y gana +2 de media.`
  );
},
no: () => {
  agregarNotificacion(
    "📋 Se mantiene el programa de entrenamiento habitual."
  );
}
},

{
texto: "🗣️ El capitán pide una reunión con todo el vestuario. ¿Organizarla?",
si: () => {

  const plantilla = plantillasJugadores[equipoUsuario];

  if (Math.random() < 0.7) {

    plantilla.forEach(j => j.media += 1);

    agregarNotificacion(
      "🗣️ La reunión fortalece al grupo. Toda la plantilla gana +1 de media."
    );

  } else {

    const jugador =
      plantilla[Math.floor(Math.random() * plantilla.length)];

    jugador.media = Math.max(1, jugador.media - 1);

    agregarNotificacion(
      `🗣️ La reunión termina mal. ${jugador.nombre} pierde -1 de media.`
    );
  }
},
no: () => {
  agregarNotificacion(
    "🗣️ El presidente decide no intervenir en el vestuario."
  );
}
},


{
texto: "🥊 Dos jugadores terminan discutiendo durante el entrenamiento. ¿Intervenir?",
si: () => {

  const plantilla = plantillasJugadores[equipoUsuario];

  const jugadorA =
    plantilla[Math.floor(Math.random() * plantilla.length)];

  let jugadorB =
    plantilla[Math.floor(Math.random() * plantilla.length)];

  while (jugadorB === jugadorA) {
    jugadorB =
      plantilla[Math.floor(Math.random() * plantilla.length)];
  }

  jugadorA.media = Math.max(1, jugadorA.media - 1);
  jugadorB.media += 1;

  agregarNotificacion(`🥊 ${jugadorA.nombre} pierde -1 de media, mientras ${jugadorB.nombre} gana +1 tras resolver el conflicto.`);
},
no: () => {

  const plantilla = plantillasJugadores[equipoUsuario];

  const jugador =
    plantilla[Math.floor(Math.random() * plantilla.length)];

  if (Math.random() < 0.5) {
    jugador.media += 2;
    agregarNotificacion(`🥊 El vestuario resuelve el conflicto por su cuenta. ${jugador.nombre} gana +2 de media.`);

  } else {
    jugador.media = Math.max(1, jugador.media - 2);
    agregarNotificacion(`🥊 El conflicto empeora. ${jugador.nombre} pierde -2 de media.`);
  }
}
},


{
texto: "🎰 El entrenador propone apostar el resultado del próximo amistoso. ¿Aceptar?",
si: () => {

  const plantilla = plantillasJugadores[equipoUsuario];

  if (Math.random() < 0.5) {
    plantilla.forEach(j => j.media += 2);
    agregarNotificacion("🎰 ¡Apuesta ganada! Toda la plantilla gana +2 de media.");

  } else {
    plantilla.forEach(j => {
      j.media = Math.max(1, j.media - 2);
    });

    agregarNotificacion("🎰 ¡Apuesta perdida! Toda la plantilla pierde -2 de media.");
  }
},
no: () => {
  agregarNotificacion("🎰 decides no arriesgarte.");
}
},


{
texto: "🧙 El preparador físico propone un método de entrenamiento bastante extraño. ¿Probarlo?",
si: () => {

  const plantilla = plantillasJugadores[equipoUsuario];

  const jugador =
    plantilla[Math.floor(Math.random() * plantilla.length)];

  if (Math.random() < 0.5) {
    jugador.media += 3;
    agregarNotificacion(`🧙 El método funciona sorprendentemente bien. ${jugador.nombre} gana +3 de media.`);

  } else {
    jugador.media = Math.max(1, jugador.media - 3);
    agregarNotificacion(`🧙 El experimento sale mal. ${jugador.nombre} pierde -3 de media.`);
  }
},
no: () => {
  agregarNotificacion("🧙 El club decide no experimentar antes del comienzo de temporada.");
}
},


{
texto: "🕺 Los jugadores quieren organizar una fiesta antes del próximo amistoso. ¿Permitirla?",
si: () => {

  const plantilla = plantillasJugadores[equipoUsuario];

  if (Math.random() < 0.5) {
    plantilla.forEach(j => j.media += 1);
    agregarNotificacion("🕺 La fiesta une al vestuario. Todos ganan +1 de media.");

  } else {
    const jugador =
      plantilla[Math.floor(Math.random() * plantilla.length)];

    jugador.media = Math.max(1, jugador.media - 2);
    agregarNotificacion(`🕺 La fiesta se alarga demasiado. ${jugador.nombre} pierde -2 de media.`);
  }
},
no: () => {
  agregarNotificacion("🕺 Mantienes la disciplina y cancela la fiesta.");
}
},


{
texto: "😴 El plantel pide cancelar un entrenamiento para descansar. ¿Aceptar?",
si: () => {

  const plantilla = plantillasJugadores[equipoUsuario];

  plantilla.forEach(j => j.media += 1);

  agregarNotificacion("😴 El descanso funciona. Toda la plantilla gana +1 de media.")
},
no: () => {

  const plantilla = plantillasJugadores[equipoUsuario];

  const jugador =
    plantilla[Math.floor(Math.random() * plantilla.length)];

  if (Math.random() < 0.5) {
    jugador.media += 2;
    agregarNotificacion(`🏋️ El entrenamiento extra da resultado. ${jugador.nombre} gana +2 de media.`);

  } else {
    jugador.media = Math.max(1, jugador.media - 1);
    agregarNotificacion(`😓 El entrenamiento extra pasa factura. ${jugador.nombre} pierde -1 de media.`);
  }
}
},


{
texto: "🚪 Un jugador no aparece en el entrenamiento y nadie sabe dónde está. ¿Sancionarlo?",
si: () => {

  const plantilla = plantillasJugadores[equipoUsuario];

  const jugador =
    plantilla[Math.floor(Math.random() * plantilla.length)];

  jugador.media = Math.max(1, jugador.media - 3);

  agregarNotificacion(`🚪 ${jugador.nombre} recibe una sanción y pierde -3 de media.`);
},
no: () => {

  const plantilla = plantillasJugadores[equipoUsuario];

  const jugador =
    plantilla[Math.floor(Math.random() * plantilla.length)];

  if (Math.random() < 0.5) {
    jugador.media += 2;
    agregarNotificacion(`🚪 ${jugador.nombre} aparece y explica lo ocurrido. Gana +2 de media.`);

  } else {
    jugador.media = Math.max(1, jugador.media - 1);
    agregarNotificacion(`🚪 ${jugador.nombre} vuelve a causar problemas. Pierde -1 de media.`);
  }
}
},


{
texto: "📱 Un jugador publica un mensaje polémico sobre el club. ¿Sancionarlo?",
si: () => {

  const plantilla = plantillasJugadores[equipoUsuario];

  const jugador =
    plantilla[Math.floor(Math.random() * plantilla.length)];

  jugador.media = Math.max(1, jugador.media - 2);

  agregarNotificacion(`📱 ${jugador.nombre} recibe una sanción por sus declaraciones. Pierde -2 de media.`);
},
no: () => {

  const plantilla = plantillasJugadores[equipoUsuario];

  if (Math.random() < 0.5) {
    agregarNotificacion("📱 El asunto desaparece rápidamente y no tiene consecuencias.");

  } else {
    const jugador =
      plantilla[Math.floor(Math.random() * plantilla.length)];

    jugador.media = Math.max(1, jugador.media - 1);

    agregarNotificacion(`📱 La polémica crece. ${jugador.nombre} pierde -1 de media.`);
  }
}
},


{
texto: "🗞️ El capitán critica públicamente la planificación de pretemporada. ¿Responder?",
si: () => {

  const plantilla = plantillasJugadores[equipoUsuario];

  const jugador =
    plantilla[Math.floor(Math.random() * plantilla.length)];

  jugador.media += 1;

  agregarNotificacion(`🗞️ El club responde públicamente. ${jugador.nombre} gana +1 de media por respaldar al equipo.`);
},
no: () => {

  const plantilla = plantillasJugadores[equipoUsuario];

  const jugador =
    plantilla[Math.floor(Math.random() * plantilla.length)];

  jugador.media = Math.max(1, jugador.media - 2);

  agregarNotificacion(`🗞️ El silencio del club genera tensión. ${jugador.nombre} pierde -2 de media.`);
}
},


{
texto: "🐔 La mascota del equipo invade el entrenamiento y provoca el caos. ¿Continuar?",
si: () => {

  const plantilla = plantillasJugadores[equipoUsuario];

  const jugador =
    plantilla[Math.floor(Math.random() * plantilla.length)];

  jugador.media += 2;

  agregarNotificacion(`🐔 El entrenamiento continúa entre risas. ${jugador.nombre} gana +2 de media.`);
},
no: () => {

  const plantilla = plantillasJugadores[equipoUsuario];

  const jugador =
    plantilla[Math.floor(Math.random() * plantilla.length)];

  jugador.media = Math.max(1, jugador.media - 1);

  agregarNotificacion(`🐔 El entrenamiento se interrumpe. ${jugador.nombre} pierde -1 de media.`);
}
},


{
texto: "🎤 Un jugador quiere organizar un concierto para unir al vestuario. ¿Permitirlo?",
si: () => {

  const plantilla = plantillasJugadores[equipoUsuario];

  if (Math.random() < 0.5) {
    plantilla.forEach(j => j.media += 1);
    agregarNotificacion("🎤 El concierto es un éxito. Todo el vestuario gana +1 de media.");

  } else {
    const jugador =
      plantilla[Math.floor(Math.random() * plantilla.length)];

    jugador.media = Math.max(1, jugador.media - 2);

    agregarNotificacion(`🎤 El evento termina en desastre. ${jugador.nombre} pierde -2 de media.`);
  }
},
no: () => {
  agregarNotificacion("🎤 El club decide centrarse exclusivamente en la preparación.");
}
},


{
texto: "🍕 El vestuario pide pizza después de un entrenamiento intenso. ¿Invitará el club?",
si: () => {

  const plantilla = plantillasJugadores[equipoUsuario];
  plantilla.forEach(j => j.media += 1);
  agregarNotificacion("🍕 La comida mejora el ambiente del vestuario. Todos ganan +1 de media.");
},
no: () => {

  const plantilla = plantillasJugadores[equipoUsuario];

  const jugador =
    plantilla[Math.floor(Math.random() * plantilla.length)];

  jugador.media = Math.max(1, jugador.media - 1);

  agregarNotificacion(`🍕 El plantel no queda contento. ${jugador.nombre} pierde -1 de media.`);
}
},


{
texto: "🚌 El autobús se pierde camino al amistoso. ¿Intentar llegar igualmente?",
si: () => {

  const plantilla = plantillasJugadores[equipoUsuario];

  const g1 = golesAleatorios();
  const r1 = golesAleatorios();

  if (g1 > r1) {
    plantilla.forEach(j => j.media += 1);
    agregarNotificacion(`🚌 ¡Llegan justo a tiempo y ganan ${g1}-${r1}! Toda la plantilla gana +1 de media.`);

  } else {

    plantilla.forEach(j => {
      j.media = Math.max(1, j.media - 1);
    });

    agregarNotificacion(`🚌 Llegan tarde y pierden ${g1}-${r1}. Toda la plantilla pierde -1 de media.`);
  }
},
no: () => {
  agregarNotificacion("🚌 Se cancela el amistoso debido al retraso.");
}
},


{
texto: "🎲 Apostar todo a una decisión del entrenador. ¿Confiar?",
si: () => {

  const plantilla = plantillasJugadores[equipoUsuario];
  const resultado = Math.floor(Math.random() * 4);

  if (resultado === 0) {
    plantilla.forEach(j => j.media += 3);
    agregarNotificacion("🎲 ¡Decisión perfecta! Toda la plantilla gana +3 de media.");

  } else if (resultado === 1) {
    plantilla.forEach(j => j.media += 1);
    agregarNotificacion("🎲 La decisión funciona. Toda la plantilla gana +1 de media.");

  } else if (resultado === 2) {
    plantilla.forEach(j => {
      j.media = Math.max(1, j.media - 1);
    });

    agregarNotificacion("🎲 La decisión sale mal. Toda la plantilla pierde -1 de media.");

  } else {
    plantilla.forEach(j => {
      j.media = Math.max(1, j.media - 3);
    });

    agregarNotificacion("🎲 ¡Desastre absoluto! Toda la plantilla pierde -3 de media.");
  }
},
no: () => {
  agregarNotificacion("🎲 decidiste no jugar con fuego.");
}
},


{
texto: "🌪️ Última sesión de pretemporada. ¿Realizar un entrenamiento extremo?",
si: () => {

  const plantilla = plantillasJugadores[equipoUsuario];

  const jugadorA =
    plantilla[Math.floor(Math.random() * plantilla.length)];

  let jugadorB =
    plantilla[Math.floor(Math.random() * plantilla.length)];

  while (jugadorB === jugadorA) {
    jugadorB =
      plantilla[Math.floor(Math.random() * plantilla.length)];
  }

  jugadorA.media += 3;
  jugadorB.media = Math.max(1, jugadorB.media - 2);

  agregarNotificacion(
    `🌪️ El entrenamiento extremo produce resultados inesperados.\n\n🔥 ${jugadorA.nombre}: +3 de media.\n😓 ${jugadorB.nombre}: -2 de media.`);
},
no: () => {
  agregarNotificacion("📋 Se termina la pretemporada con una sesión normal.");
}
},


{
texto: "⚡ El equipo parece estar en un momento extraordinario. ¿Forzar una última sesión?",
si: () => {

  const plantilla = plantillasJugadores[equipoUsuario];

  if (Math.random() < 0.5) {

    plantilla.forEach(j => j.media += 2);

    agregarNotificacion("⚡ ¡El equipo está encendido! Toda la plantilla gana +2 de media.");

  } else {
    plantilla.forEach(j => {
      j.media = Math.max(1, j.media - 2);
    });

    agregarNotificacion("⚡ La decisión sale mal y el equipo termina agotado. Todos pierden -2 de media.");
  }
},
no: () => {
  agregarNotificacion("⚡ Se decide no arriesgar antes del inicio de temporada.");
}
},


{
texto: "🏆 Invitación a un torneo de pretemporada. ¿Aceptar?",
si: () => {

  const equipos = [
    "Barcelona SC",
    "IDV",
    "Bolivar",
    "Independiente",
    "Nacional",
    "Peñarol",
    "Colo-Colo",
    "Universidad de Chile"
  ];

  const [rivalA, rivalB] =
    equipos.sort(() => Math.random() - 0.5).slice(0, 2);

  const g1 = golesAleatorios();
  const r1 = golesAleatorios();

  const g2 = golesAleatorios();
  const r2 = golesAleatorios();

  let victorias = 0;

  if (g1 > r1) victorias++;
  if (g2 > r2) victorias++;

  const plantilla = plantillasJugadores[equipoUsuario];

  if (victorias === 2) {

    plantilla.forEach(j => j.media += 2);

    agregarNotificacion(
`🏆 Torneo de pretemporada
${equipoUsuario} ${g1} - ${r1} ${rivalA}
${equipoUsuario} ${g2} - ${r2} ${rivalB}

🔥 Dos victorias. Toda la plantilla gana +2 de media.`
    );

  } else if (victorias === 1) {
    const jugador =
      plantilla[Math.floor(Math.random() * plantilla.length)];

    jugador.media += 1;

    agregarNotificacion(
`🏆 Torneo de pretemporada
${equipoUsuario} ${g1} - ${r1} ${rivalA}
${equipoUsuario} ${g2} - ${r2} ${rivalB}

🔥 Buen torneo. ${jugador.nombre} gana +1 de media.`
    );

  } else {
    plantilla.forEach(j => {
      j.media = Math.max(1, j.media - 1);
    });

    agregarNotificacion(
`🏆 Torneo de pretemporada
${equipoUsuario} ${g1} - ${r1} ${rivalA}
${equipoUsuario} ${g2} - ${r2} ${rivalB}

😞 Mal torneo. Toda la plantilla pierde -1 de media.`
    );
  }
},
no: () => {
  agregarNotificacion("🏆 Se rechaza la invitación al torneo de pretemporada.");
}
}

];