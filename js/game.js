    //js/game.js
    const areas = AREAS;
    const ruletaArea = document.getElementById("ruleta-area");

    const contenedorRuletaArea = document.getElementById("contenedor-ruleta");
    const contenedorRuletaPreguntas = document.getElementById("contenedor-ruleta-preguntas");

    const faseArea = document.getElementById("fase-area");
    const btnIrPreguntas = document.getElementById("btn-ir-preguntas");

    const encabezadoArea = document.getElementById("encabezado-area");
    const encabezadoPreguntas = document.getElementById("encabezado-preguntas");

    const COLORES_RULETA = [
        "#fc9c9cff", 
        "#eef988ff", 
        "#8493feff", 
        "#96ff8eff", 
        "#b3ff90ff"  
    ];

    /* ================== ESTADO ================== */

    let areaSeleccionada = "";
    let preguntaActual = null;
    let tiempo = 10;
    let intervalo;

    let rotacionTotal = 0;

    let girando = false;

    /* ================== CREAR RULETA ================== */

    const totalAreas = areas.length;
    const anguloPorArea = 360 / totalAreas;

    areas.forEach((area, i) => {
    const sector = document.createElement("div");
    sector.className = "sector";
    sector.style.transform = `rotate(${i * anguloPorArea}deg)`;

    const texto = document.createElement("span");
    texto.textContent = area;

    // 🔑 Centro del sector
    const anguloTexto = anguloPorArea / 2;

    // Distancia radial (ajustable)
    const radio = 170;

    texto.style.transform = `
        rotate(${anguloTexto}deg)
        translate(${radio}px)
        rotate(${-anguloTexto}deg)
    `;

    sector.appendChild(texto);
    ruletaArea.appendChild(sector);
    });

    // Crear líneas divisorias
    for (let i = 0; i < totalAreas; i++) {
    const linea = document.createElement("div");
    linea.className = "linea";
    linea.style.transform = `rotate(${i * anguloPorArea}deg)`;
    ruletaArea.appendChild(linea);
    }

    /* ================== LÓGICA ================== */

    window.girarArea = function() {
    if (girando) return;
    girando = true;

    areaSeleccionada = "";
    btnIrPreguntas.style.display = "none";

    const vueltas = 360 * (4 + Math.floor(Math.random() * 3));
    const desplazamiento = Math.random() * 360;

    rotacionTotal += vueltas + desplazamiento;

    ruletaArea.style.transform = `rotate(${rotacionTotal}deg)`;

    setTimeout(() => {
        detectarAreaSeleccionada();
        girando = false;
    }, 3000);
    }

    function detectarAreaSeleccionada() {

    // Ángulo visible actual (0–360)
    const anguloActual = ((rotacionTotal % 360) + 360) % 360;

    /**
     * Flecha está a la DERECHA = 0°
     * CSS rota en sentido horario
     * El sector ganador es el que "entra" a 0°
     */
    const anguloFlecha = (360 - anguloActual) % 360;

    const indexGanador = Math.floor(anguloFlecha / anguloPorArea);

    areaSeleccionada = areas[indexGanador];

    mostrarAreaSeleccionada();
    }

    function mostrarAreaSeleccionada() {
    document.getElementById("area-ganadora").textContent = areaSeleccionada;
    document.getElementById("modal-area").style.display = "flex";
    // ✅ Mostrar botón solo si hay área
    if (areaSeleccionada) {
        btnIrPreguntas.style.display = "inline-block";
    }
    }

    window.cerrarModal = function () {
    document.getElementById("modal-area").style.display = "none";
    };

    //Segunda ruleta

    window.irAPreguntas = function () {
    cerrarModal();
    cambiarARuletaPreguntas();
    mostrarRuletaPreguntas(areaSeleccionada);
    };

    let preguntasDisponibles = [];
    let preguntaSeleccionada = null;
    let preguntaYaGiró = false;

    const ruletaPregunta = document.getElementById("ruleta-pregunta");

    let rotacionPregunta = 0;
    let girandoPregunta = false;
    let anguloPorPregunta = 0;
    let preguntaRespondida = false;

    function mostrarRuletaPreguntas(area) {
    preguntasDisponibles = QUESTIONS_DATA[area].filter(p => !p.usada);
    construirRuletaPreguntas(preguntasDisponibles);
    }

    function cambiarARuletaPreguntas() {
    // Ocultar encabezado y ruleta de áreas
    encabezadoArea.style.display = "none";
    contenedorRuletaArea.style.display = "none";
    faseArea.style.display = "none";

    // Mostrar encabezado de preguntas
    encabezadoPreguntas.style.display = "block";

    // Mostrar únicamente la ruleta de preguntas
    contenedorRuletaPreguntas.style.display = "flex";
    document.getElementById("fase-pregunta").style.display = "block";
    }

    function construirRuletaPreguntas(preguntas) {
    ruletaPregunta.innerHTML = "";

    const total = preguntas.length;
    anguloPorPregunta = 360 / total;

    preguntas.forEach((pregunta, i) => {
        const sector = document.createElement("div");
        sector.className = "sector";
        sector.style.transform = `rotate(${i * anguloPorPregunta}deg)`;

        const texto = document.createElement("span");

        // Extraer número del ID → VOE-01 → 01
        const numero = pregunta.id.split("-")[1];
        texto.textContent = numero;

        const anguloTexto = anguloPorPregunta / 2;
        const radio = 170;

        texto.style.transform = `
        rotate(${anguloTexto}deg)
        translate(${radio}px)
        rotate(${-anguloTexto}deg)
        `;

        sector.appendChild(texto);
        ruletaPregunta.appendChild(sector);
    });

    // Líneas divisorias
    for (let i = 0; i < total; i++) {
        const linea = document.createElement("div");
        linea.className = "linea";
        linea.style.transform = `rotate(${i * anguloPorPregunta}deg)`;
        ruletaPregunta.appendChild(linea);
    }
    }

    window.girarPregunta = function () {
    if (girandoPregunta || preguntasDisponibles.length === 0) {
        alert("Ya no hay preguntas disponibles en esta área");
        return;
    }

    document.getElementById("btn-mostrar-pregunta").style.display = "none";

    girandoPregunta = true;

    const vueltas = 360 * (4 + Math.floor(Math.random() * 3));
    const desplazamiento = Math.random() * 360;

    rotacionPregunta += vueltas + desplazamiento;
    ruletaPregunta.style.transform = `rotate(${rotacionPregunta}deg)`;

    setTimeout(() => {
        detectarPreguntaSeleccionada();
        girandoPregunta = false;
    }, 3000);
    };

    function mostrarCorrecta() {
    preguntaActual.usada = true;

    document.querySelectorAll(".opciones button").forEach((btn, i) => {
        btn.disabled = true;
        btn.classList.add(
        i === preguntaActual.correcta ? "correcta" : "incorrecta"
        );
    });
    }

    function detectarPreguntaSeleccionada() {

    const anguloActual = ((rotacionPregunta % 360) + 360) % 360;
    const anguloFlecha = (360 - anguloActual) % 360;

    const indexGanador = Math.floor(anguloFlecha / anguloPorPregunta);

    preguntaSeleccionada = preguntasDisponibles[indexGanador];

    // 🆕 marcar que ya se giró la ruleta
    preguntaYaGiró = true;
    document.getElementById("btn-mostrar-pregunta").style.display = "inline-block";

    // ⏳ Delay antes de abrir el modal (3 segundos)
    setTimeout(() => {
        mostrarPreguntaEnModal();
    }, 3000);
    }

    function mostrarPreguntaEnModal() {

    // Guardamos como pregunta actual
    preguntaActual = preguntaSeleccionada;

    // Área seleccionada
    document.getElementById("modal-area-titulo").textContent =
        "Área: " + areaSeleccionada;

    // Texto de la pregunta
    document.getElementById("modal-pregunta-texto").textContent =
        preguntaActual.pregunta;

    // Opciones
    const contenedorOpciones = document.getElementById("modal-opciones");
    contenedorOpciones.innerHTML = "";

    preguntaActual.opciones.forEach((opcion, index) => {
        const btn = document.createElement("button");
        btn.textContent = opcion;

        // 🧠 Si ya fue respondida
        if (preguntaActual.usada) {
            btn.disabled = true;
            btn.classList.add(
                index === preguntaActual.correcta ? "correcta" : "incorrecta"
        );
        } else {
            btn.onclick = () => seleccionarRespuesta(index);
        }

        contenedorOpciones.appendChild(btn);
    });

    // Mostrar modal
    document.getElementById("modal-pregunta").style.display = "flex";
    }

    function seleccionarRespuesta(index) {
    const botones = document.querySelectorAll("#modal-opciones button");

    botones.forEach((btn, i) => {
        btn.disabled = true;
        btn.classList.add(
        i === preguntaActual.correcta ? "correcta" : "incorrecta"
        );
    });

    // Marcar pregunta como usada
    preguntaActual.usada = true;

    // 🔑 NUEVO: marcar que ya fue respondida
    preguntaRespondida = true;
    }

    function cerrarModalPregunta() {
    document.getElementById("modal-pregunta").style.display = "none";
    preguntaYaGiró = false;

    // ✅ Si la pregunta fue respondida
    if (preguntaRespondida) {

        // Volver a filtrar preguntas disponibles
        preguntasDisponibles = QUESTIONS_DATA[areaSeleccionada].filter(
        p => !p.usada
        );

        // Reconstruir ruleta SIN la pregunta contestada
        construirRuletaPreguntas(preguntasDisponibles);

        // Resetear bandera
        preguntaRespondida = false;
    }
    }

    //Opcional (no utilizado aun)
    function volverARuletaAreas() {

  // Ocultar preguntas
  encabezadoPreguntas.style.display = "none";
  contenedorRuletaPreguntas.style.display = "none";
  document.getElementById("fase-pregunta").style.display = "none";

  // Mostrar áreas
  encabezadoArea.style.display = "block";
  contenedorRuletaArea.style.display = "flex";
  faseArea.style.display = "block";

  // Reset de estados visuales
  preguntaSeleccionada = null;
  preguntaActual = null;
  preguntaRespondida = false;
}

window.mostrarPreguntaExistente = function () {
  if (!preguntaSeleccionada) return;

  mostrarPreguntaEnModal();
};
