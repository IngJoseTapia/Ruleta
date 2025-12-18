// ================== DATOS DEL CONCURSO ==================

const QUESTIONS_DATA = {
  VE: [
  {
    id: "VE-01",
    pregunta: "¿Es el régimen político mexicano que significó un periodo de inestabilidad para México, caracterizado principalmente por el presidencialismo?",
    opciones: ["1910-1940", "1910-1988", "1940-1988"],
    correcta: 2
  },
  {
    id: "VE-02",
    pregunta: "Año histórico en que sucedieron las elecciones presidenciales que marcaron el inicio de la reforma electoral que dio nacimiento al órgano electoral autónomo.",
    opciones: ["1977", "1988", "1994"],
    correcta: 1
  },
  {
    id: "VE-03",
    pregunta: "En la historia de los organismos electorales, el antecedente más remoto se encuentra en la Ley Federal Electoral de 1946, la cual introdujo la creación del siguiente organismo:",
    opciones: [
      "Comisión Federal Electoral",
      "Registro Nacional de Electores",
      "Consejo del Padrón Electoral"
    ],
    correcta: 0
  },
  {
    id: "VE-04",
    pregunta: "Reforma electoral que fue estratégicamente orientada a la democratización del país, ya que significó el fundamento jurídico para el nacimiento del Instituto Federal Electoral.",
    opciones: ["1973", "1977", "1989-1990"],
    correcta: 2
  },
  {
    id: "VE-05",
    pregunta: "Artículo constitucional que significa el fundamento de la materia electoral en nuestro país.",
    opciones: ["Artículo 34", "Artículo 41", "Artículo 35"],
    correcta: 1
  },
  {
    id: "VE-06",
    pregunta: "La legislación electoral sustantiva que surgió de la reforma legal de 1990 es:",
    opciones: [
      "Ley General de Instituciones y Procedimientos Electorales",
      "Código Federal de Instituciones y Procedimientos Electorales",
      "Compendio General Electoral Mexicano"
    ],
    correcta: 1
  },
  {
    id: "VE-07",
    pregunta: "Es el artículo constitucional que otorga a la ciudadanía mexicana la prerrogativa de votar en las elecciones.",
    opciones: ["Artículo 39", "Artículo 41", "Artículo 35"],
    correcta: 2
  },
  {
    id: "VE-08",
    pregunta: "Principios constitucionales que rigen el quehacer electoral en nuestro país.",
    opciones: [
      "Certeza, legalidad, independencia, imparcialidad y objetividad",
      "Certeza, legalidad, independencia, imparcialidad, máxima publicidad y objetividad",
      "Certeza, legalidad, independencia, imparcialidad, objetividad, transparencia y máxima publicidad"
    ],
    correcta: 1
  },
  {
    id: "VE-09",
    pregunta: "La autonomía es el atributo principal del Instituto Nacional Electoral y se ejerce en tres aspectos centrales que son:",
    opciones: [
      "Planeación, organización y dirección",
      "Estructura organizada, competencia territorial y permanencia en sus funciones",
      "Personalidad jurídica, patrimonio propio e independencia en sus decisiones"
    ],
    correcta: 2
  },
  {
    id: "VE-10",
    pregunta: "Es uno de los fines institucionales más relevantes del INE.",
    opciones: [
      "Contribuir al desarrollo de la vida democrática del país",
      "La capacitación electoral",
      "La ubicación y operación de casillas electorales"
    ],
    correcta: 0
  },
  {
    id: "VE-11",
    pregunta: "Es el máximo órgano de dirección del INE.",
    opciones: [
      "La Presidencia del Consejo General",
      "La Junta General",
      "El Consejo General"
    ],
    correcta: 2
  },
  {
    id: "VE-12",
    pregunta: "De conformidad con la reforma del 27 de mayo de 2015, el Consejo General del INE se integra por:",
    opciones: [
      "Un consejero Presidente y 9 consejeros electorales, consejeros del Poder Legislativo, representantes de partidos políticos y un Secretario Ejecutivo",
      "Un consejero Presidente y 6 consejeros electorales, consejeros del Poder Legislativo, representantes de partidos políticos y un Secretario Ejecutivo",
      "Un consejero Presidente y 10 consejeros electorales, consejeros del Poder Legislativo, representantes de partidos políticos y un Secretario Ejecutivo"
    ],
    correcta: 2
  },
  {
    id: "VE-13",
    pregunta: "Son tres direcciones ejecutivas que integran la Junta General del INE.",
    opciones: [
      "Dirección Jurídica, Dirección de Prerrogativas Políticas y Dirección de Asuntos Internacionales",
      "Dirección del Servicio Profesional Electoral Nacional, Dirección Ejecutiva de Administración y Dirección de Organización Electoral",
      "Dirección de Capacitación Electoral y Educación Cívica, Dirección del Secretariado y Dirección de Oficialía Electoral"
    ],
    correcta: 1
  },
  {
    id: "VE-14",
    pregunta: "Entre los órganos desconcentrados del INE encontramos:",
    opciones: [
      "Los organismos públicos electorales",
      "Las juntas locales y distritales ejecutivas",
      "Oficinas municipales y regionales"
    ],
    correcta: 1
  },
  {
    id: "VE-15",
    pregunta: "Es el número de órganos desconcentrados del INE distribuidos en todo el territorio nacional.",
    opciones: ["300", "32", "332"],
    correcta: 2
  },
  {
    id: "VE-16",
    pregunta: "Órganos colegiados establecidos para coadyuvar y supervisar los trabajos relativos al padrón electoral.",
    opciones: [
      "Una comisión nacional de vigilancia, 32 comisiones locales y 300 distritales",
      "Las comisiones de seguimiento y evaluación del padrón electoral",
      "Los vocales del Registro Federal de Electores"
    ],
    correcta: 0
  },
  {
    id: "VE-17",
    pregunta: "¿Cómo se integran los organismos públicos locales?",
    opciones: [
      "10 consejeros y 1 Consejero Presidente",
      "8 consejeros y 1 Consejero Presidente",
      "6 consejeros y 1 Consejero Presidente"
    ],
    correcta: 2
  },
  {
    id: "VE-18",
    pregunta: "Porcentaje mínimo de votos para que un partido político conserve su registro.",
    opciones: ["1%", "2%", "3%"],
    correcta: 2
  },
  {
    id: "VE-19",
    pregunta: "Periodo que dura en su cargo el Consejero Presidente y los consejeros electorales del INE.",
    opciones: ["Tres años", "Seis años", "Nueve años"],
    correcta: 2
  },
  {
    id: "VE-20",
    pregunta: "Número mínimo de afiliados en una asamblea distrital para constituir un partido político nacional.",
    opciones: ["301", "3,000", "300"],
    correcta: 2
  },
  {
    id: "VE-21",
    pregunta: "Número mínimo de afiliados en una asamblea estatal para constituir un partido político nacional.",
    opciones: ["301", "3,000", "300"],
    correcta: 1
  },
  {
    id: "VE-22",
    pregunta: "Función constitucional investida de fe pública para certificar actos electorales.",
    opciones: [
      "Oficialía Electoral",
      "Certificación de Asambleas Distritales",
      "Secretaría del Consejo Distrital"
    ],
    correcta: 0
  },
  {
    id: "VE-23",
    pregunta: "Porcentaje de apoyo requerido para que un candidato independiente aspire a la Presidencia de la República.",
    opciones: [
      "1% de la lista nominal en al menos 17 entidades",
      "2% de la lista nominal en al menos 17 entidades",
      "3% de la lista nominal en al menos 17 entidades"
    ],
    correcta: 0
  },
  {
    id: "VE-24",
    pregunta: "¿Cuándo inicia un proceso electoral ordinario?",
    opciones: [
      "Primera semana de septiembre del año previo a la elección",
      "Segunda semana de septiembre del año previo a la elección",
      "Tercera semana de septiembre del año previo a la elección"
    ],
    correcta: 0
  },
  {
    id: "VE-25",
    pregunta: "Mecanismos de participación ciudadana reconocidos en el artículo 35 constitucional.",
    opciones: [
      "Consulta popular y revocación de mandato",
      "Iniciativa popular y juicio político",
      "Iniciativa ciudadana y consejos vecinales"
    ],
    correcta: 0
  }
],

  VS: [
  {
    id: "VS-01",
    pregunta: "De las siguientes reglas, identifica la que no corresponde al registro o control de asistencia del personal del Instituto.",
    opciones: [
      "Realizar el registro después de los treinta minutos de la hora de entrada registra el día como falta de asistencia",
      "El personal del Instituto disfrutará de quince minutos de tolerancia para el registro de entrada",
      "La acumulación de tres retardos no autorizados en un mes genera descuento de un día de sueldo"
    ],
    correcta: 2
  },
  {
    id: "VS-02",
    pregunta: "Por trabajar en el Instituto tienes derecho, entre otras cosas, a:",
    opciones: [
      "Acreditar la evaluación anual del desempeño aplicable",
      "Ser asignado a un cargo o puesto de la estructura ocupacional del Instituto",
      "Contar con un entorno laboral agradable de acuerdo con preferencias personales y culturales"
    ],
    correcta: 1
  },
  {
    id: "VS-03",
    pregunta: "De acuerdo con el presupuesto disponible, el personal del Instituto contará con las prestaciones establecidas en el Estatuto con base en los criterios de:",
    opciones: [
      "Progresividad y equidad",
      "Racionalidad y austeridad",
      "Eficiencia y rendición de cuentas"
    ],
    correcta: 0
  },
  {
    id: "VS-04",
    pregunta: "Como personal del Instituto, identifica la prohibición establecida en el Estatuto:",
    opciones: [
      "Guardar reserva de los asuntos conocidos con motivo del trabajo",
      "Proporcionar información y documentación al personal que lo supla",
      "Tener más de tres faltas de asistencia en treinta días sin causa justificada"
    ],
    correcta: 2
  },
  {
    id: "VS-05",
    pregunta: "¿Cada cuánto tiempo se realiza la verificación física de bienes instrumentales para la actualización de resguardos en Juntas Locales y Distritales?",
    opciones: [
      "Cada seis meses",
      "Cada que se agrega un registro al empleado",
      "Cada año"
    ],
    correcta: 2
  },
  {
    id: "VS-06",
    pregunta: "Figura responsable del mantenimiento de instalaciones, mobiliario y equipo en Juntas Locales y Distritales:",
    opciones: [
      "Enlace Administrativo/a",
      "Vocal Ejecutivo/a",
      "Vocal Secretario/a"
    ],
    correcta: 1
  },
  {
    id: "VS-07",
    pregunta: "¿A quién corresponde verificar el estado del parque vehicular asignado y la vigencia de su póliza de seguro?",
    opciones: [
      "Juntas Locales y Distritales",
      "Dirección de Recursos Materiales y Servicios",
      "Dirección Ejecutiva de Administración"
    ],
    correcta: 0
  },
  {
    id: "VS-08",
    pregunta: "¿Cuáles son las etapas del concurso para la ocupación de vacantes del personal administrativo?",
    opciones: [
      "Selección y Contratación",
      "Reclutamiento y Selección",
      "Reclutamiento y Entrevista"
    ],
    correcta: 1
  },
  {
    id: "VS-09",
    pregunta: "Prestaciones de carácter monetario que se integran a las percepciones del personal al cumplir requisitos establecidos:",
    opciones: [
      "Incentivos",
      "Prestaciones económicas",
      "Apoyos económicos"
    ],
    correcta: 1
  },
  {
    id: "VS-10",
    pregunta: "¿Cada cuánto tiempo puede solicitar reembolso por adquisición de anteojos el personal de Plaza Presupuestal?",
    opciones: [
      "Cada dos años",
      "Cada año",
      "Cada tres años"
    ],
    correcta: 2
  },
  {
    id: "VS-11",
    pregunta: "Factores ponderados en la evaluación de competencias del personal técnico operativo:",
    opciones: [
      "Actitudes, aptitudes, eficiencia y resultados",
      "Habilidades, aptitudes, trabajo en equipo y resultados",
      "Actitudes, conocimientos, eficiencia y resultados"
    ],
    correcta: 0
  },
  {
    id: "VS-12",
    pregunta: "Factores que integran el resultado de la evaluación del desempeño del personal de la Rama Administrativa:",
    opciones: [
      "Competencias, Sistema de Gestión de la Calidad, Capacitación y metas individuales",
      "Competencias, metas colectivas, Capacitación y metas individuales",
      "Competencias, Capacitación, metas e índices de asistencia y puntualidad"
    ],
    correcta: 1
  },
  {
    id: "VS-13",
    pregunta: "Acción a realizar en caso de ausencia del personal operativo sin permiso del superior jerárquico:",
    opciones: [
      "Levantar acta de hechos con dos testigos y turnar al expediente",
      "Solicitar informe por oficio y turnar al expediente",
      "Levantar acta con un testigo y turnar a la autoridad instructora"
    ],
    correcta: 0
  },
  {
    id: "VS-14",
    pregunta: "Documento que acredita la comisión ordinaria o extraordinaria asignada a un servidor público del INE:",
    opciones: [
      "Informe de comisión",
      "Oficio de comisión",
      "Constancia de comisión"
    ],
    correcta: 1
  },
  {
    id: "VS-15",
    pregunta: "Instrumento que permite registrar de forma ordenada las compras, pagos y erogaciones del gasto:",
    opciones: [
      "Clave Presupuestaria",
      "Estructura Programática",
      "Clasificador por Objeto y Tipo de Gasto"
    ],
    correcta: 2
  },
  {
    id: "VS-16",
    pregunta: "Instrumento técnico que describe secciones y series documentales para orientar la búsqueda de información:",
    opciones: [
      "Inventario General por Expediente",
      "Guía de Archivo Documental",
      "Inventario de Transferencia Primaria"
    ],
    correcta: 1
  },
  {
    id: "VS-17",
    pregunta: "Documento que establece valores documentales, plazos de conservación y destino final de la documentación:",
    opciones: [
      "Cuadro General de Clasificación Archivística",
      "Catálogo de Disposición Documental",
      "Guía de Archivo Documental"
    ],
    correcta: 1
  },
  {
    id: "VS-18",
    pregunta: "Inventarios documentales que deben realizar las áreas responsables:",
    opciones: [
      "General por expediente, transferencia secundaria, baja documental y transferencia primaria",
      "General por expediente, transferencia primaria, valoración secundaria y baja documental",
      "Transferencia secundaria, baja documental, general por expediente y transferencia primaria"
    ],
    correcta: 2
  },
  {
    id: "VS-19",
    pregunta: "Instrumento de observancia obligatoria para el personal del INE en principios, valores y directrices:",
    opciones: [
      "Código de Ética de la Función Pública Electoral",
      "Código de Conducta",
      "Ley General de Responsabilidades Administrativas"
    ],
    correcta: 0
  },
  {
    id: "VS-20",
    pregunta: "Instrumento que determina estándares de comportamiento basados en principios y valores organizacionales:",
    opciones: [
      "Código de Ética de la Función Pública Electoral",
      "Código de Conducta",
      "Estatuto del Servicio Profesional Electoral Nacional"
    ],
    correcta: 1
  },
  {
    id: "VS-21",
    pregunta: "Atributos que debe cumplir la información publicada para cumplir obligaciones de transparencia:",
    opciones: [
      "Congruencia, integralidad, temporalidad y duplicidad",
      "Veracidad, oportunidad, accesibilidad y verificabilidad",
      "Confiabilidad, trazabilidad, responsabilidad y comprensibilidad"
    ],
    correcta: 1
  },
  {
    id: "VS-22",
    pregunta: "Elaboración de una versión de documento con información reservada o confidencial testada:",
    opciones: [
      "Versión original",
      "Versión clasificada",
      "Versión pública"
    ],
    correcta: 2
  },
  {
    id: "VS-23",
    pregunta: "Plazo para interponer un medio de impugnación tras conocer el acto o resolución impugnada:",
    opciones: [
      "Cuatro días",
      "48 horas",
      "Tres días"
    ],
    correcta: 0
  },
  {
    id: "VS-24",
    pregunta: "Medio de impugnación para combatir determinaciones sobre elecciones federales en etapa de resultados:",
    opciones: [
      "Recurso de Apelación",
      "Juicio de Inconformidad",
      "Juicio de Revisión Constitucional Electoral"
    ],
    correcta: 1
  },
  {
    id: "VS-25",
    pregunta: "Objeto de la oficialía electoral:",
    opciones: [
      "Permitir que se pierdan o alteren indicios relacionados con infracciones electorales",
      "Certificar actos relacionados con documentos básicos de partidos políticos",
      "Constatar actos y hechos que puedan afectar la equidad en la contienda electoral"
    ],
    correcta: 2
  }
],

  VOE: [
  {
    id: "VOE-01",
    pregunta: "¿En qué orden deben aparecer los nombres de los partidos políticos en las boletas?",
    opciones: [
      "De acuerdo con la fecha de su registro",
      "Por la cantidad de militantes",
      "De acuerdo con el porcentaje de votación obtenido en la última elección"
    ],
    correcta: 0
  },
  {
    id: "VOE-02",
    pregunta: "¿Con cuántos días de anticipación a la elección deben recibirse las boletas electorales en los consejos distritales?",
    opciones: ["8 días", "10 días", "15 días"],
    correcta: 2
  },
  {
    id: "VOE-03",
    pregunta: "Las boletas electorales se cuentan, sellan y agrupan como medida de control.",
    opciones: ["Verdadero", "Falso"],
    correcta: 0
  },
  {
    id: "VOE-04",
    pregunta: "La entrega de los paquetes y materiales electorales a las y los presidentes de Mesa directiva de casilla se debe realizar:",
    opciones: [
      "Dentro de los cinco días previos al anterior de la elección",
      "Cinco días antes del día de la elección",
      "Ocho días antes del día de la elección"
    ],
    correcta: 0
  },
  {
    id: "VOE-05",
    pregunta: "Los materiales electorales como urnas, mamparas especiales y canceles deben ser destruidos una vez que concluya el proceso electoral.",
    opciones: ["Verdadero", "Falso"],
    correcta: 1
  },
  {
    id: "VOE-06",
    pregunta: "El líquido indeleble que se utiliza en una Jornada Electoral puede ser conservado para su utilización en próximas jornadas electorales.",
    opciones: ["Verdadero", "Falso"],
    correcta: 1
  },
  {
    id: "VOE-07",
    pregunta: "El resguardo y cuidado de las boletas electorales se considera un asunto de seguridad nacional, por ello deben ser custodiadas por las fuerzas armadas.",
    opciones: ["Verdadero", "Falso"],
    correcta: 0
  },
  {
    id: "VOE-08",
    pregunta: "Mecanismo que provee resultados preliminares y no definitivos mediante la captura y publicación de actas.",
    opciones: [
      "Sistema de Información sobre el desarrollo de la Jornada Electoral (SIJE)",
      "Conteo Rápido",
      "Programa de Resultados Electorales Preliminares (PREP)"
    ],
    correcta: 2
  },
  {
    id: "VOE-09",
    pregunta: "Procedimiento estadístico diseñado para estimar tendencias de resultados finales a partir de una muestra probabilística.",
    opciones: [
      "Sistema de Información sobre el desarrollo de la Jornada Electoral (SIJE)",
      "Conteo Rápido",
      "Programa de Resultados Electorales Preliminares (PREP)"
    ],
    correcta: 1
  },
  {
    id: "VOE-10",
    pregunta: "¿Por cada cuántos electores se instala una casilla en una elección ordinaria?",
    opciones: ["750 electores o fracción", "1500 electores", "2500 electores"],
    correcta: 0
  },
  {
    id: "VOE-11",
    pregunta: "Son los tipos de casilla que se pueden instalar en una sección electoral:",
    opciones: [
      "Básica, Contigua 1 y Contigua 2",
      "Básica, Contigua, Extraordinaria y Especial",
      "Básica, Contigua y Especial"
    ],
    correcta: 1
  },
  {
    id: "VOE-12",
    pregunta: "En una sección electoral cuya Lista Nominal de Electores es de 2250 electores, ¿cuántas y qué tipo de casillas se instalarán?",
    opciones: [
      "3, 1 Básica y 2 Contiguas",
      "1 Básica",
      "3, 1 Básica, 1 Contigua y 1 Extraordinaria"
    ],
    correcta: 0
  },
  {
    id: "VOE-13",
    pregunta: "Tipo de casilla que se instala cuando las condiciones geográficas o socioculturales dificultan el acceso.",
    opciones: ["Contigua", "Especial", "Extraordinaria"],
    correcta: 2
  },
  {
    id: "VOE-14",
    pregunta: "Las escuelas y oficinas públicas son lugares preferentes para instalar casillas.",
    opciones: ["Verdadero", "Falso"],
    correcta: 0
  },
  {
    id: "VOE-15",
    pregunta: "Son ejemplos de lugares en los que no se puede instalar una casilla:",
    opciones: [
      "Iglesia, fábrica, cantina, casa de alguna persona candidata",
      "Iglesia, delegación municipal, casa de dirigentes partidistas",
      "Iglesia, escuela, casa de servidor público de confianza"
    ],
    correcta: 0
  },
  {
    id: "VOE-16",
    pregunta: "Actividad que realizan las juntas distritales ejecutivas para localizar lugares aptos para instalar casillas.",
    opciones: [
      "Visitas de examinación",
      "Recorridos de ubicación de casillas",
      "Recorridos secciónales"
    ],
    correcta: 1
  },
  {
    id: "VOE-17",
    pregunta: "Actividad que realiza el Consejo Distrital para verificar que los domicilios propuestos cumplan con los requisitos legales.",
    opciones: [
      "Visitas de examinación",
      "Recorridos de ubicación de casillas",
      "Recorridos secciónales de verificación"
    ],
    correcta: 0
  },
  {
    id: "VOE-18",
    pregunta: "La integración y ubicación de las mesas directivas de casilla se publica previo al día de la Jornada Electoral.",
    opciones: ["Verdadero", "Falso"],
    correcta: 0
  },
  {
    id: "VOE-19",
    pregunta: "Herramienta digital para consultar la ubicación de tu casilla el día de la Jornada Electoral.",
    opciones: [
      "Página de Internet del Instituto",
      "Página de Facebook del Instituto",
      "Sistema Ubica tu casilla"
    ],
    correcta: 2
  },
  {
    id: "VOE-20",
    pregunta: "Tipo de casilla que se instala para la recepción del voto de electores fuera de su sección.",
    opciones: ["Básica", "Especial", "Extraordinaria"],
    correcta: 1
  },
  {
    id: "VOE-21",
    pregunta: "En un proceso electoral ordinario, ¿hasta cuántas casillas especiales se pueden instalar en un distrito electoral?",
    opciones: ["2", "5", "10"],
    correcta: 2
  },
  {
    id: "VOE-22",
    pregunta: "Si no se puede integrar la casilla a las 8:15, ¿hasta qué hora se puede instalar?",
    opciones: ["Hasta las 8:30", "Hasta las 10:00", "No hay un tiempo límite"],
    correcta: 1
  },
  {
    id: "VOE-23",
    pregunta: "Si el lugar donde se instala la casilla se encuentra cerrado, ¿se puede cambiar de lugar?",
    opciones: ["Sí", "No", "Solo si lo autoriza el Consejo Distrital"],
    correcta: 0
  },
  {
    id: "VOE-24",
    pregunta: "Son razones por las cuales se puede cambiar la ubicación de la casilla el día de la Jornada Electoral:",
    opciones: [
      "Por acuerdo de funcionarios y representantes de partido",
      "Porque el lugar esté cerrado o sea un lugar prohibido por la ley",
      "Por decisión del Presidente de la casilla"
    ],
    correcta: 1
  },
  {
    id: "VOE-25",
    pregunta: "La votación solo puede suspenderse por causas de fuerza mayor.",
    opciones: ["Verdadero", "Falso"],
    correcta: 0
  },
  {
    id: "VOE-26",
    pregunta: "Son mecanismos para la recolección y entrega de los paquetes electorales.",
    opciones: [
      "Mecanismos de recepción de paquetes electorales",
      "Mecanismos de entrega de paquetes electorales",
      "Mecanismos de recolección de los paquetes electorales"
    ],
    correcta: 2
  },
  {
    id: "VOE-27",
    pregunta: "Mecanismo ubicado en un lugar fijo para la concentración de paquetes electorales.",
    opciones: ["CRyT Fijo", "CRyT Itinerante", "DAT"],
    correcta: 0
  },
  {
    id: "VOE-28",
    pregunta: "Los recibos por la entrega de paquetes electorales se expiden:",
    opciones: [
      "Uno por cada paquete electoral",
      "Un recibo por cada cinco paquetes",
      "Uno por la totalidad de los paquetes"
    ],
    correcta: 0
  },
  {
    id: "VOE-29",
    pregunta: "Actividad donde el consejo distrital suma los resultados de las actas de escrutinio y cómputo.",
    opciones: [
      "Escrutinio y cómputo en casilla",
      "Cómputo Distrital",
      "Conteo Rápido"
    ],
    correcta: 1
  },
  {
    id: "VOE-30",
    pregunta: "En las casillas especiales no hay lista nominal de electores impresa.",
    opciones: ["Verdadero", "Falso"],
    correcta: 0
  }
],

  VCEyEC: [
    {
    id: "VCEyEC-01",
    pregunta: "¿A qué se refieren las iniciales SCPRV?",
    opciones: [
      "Sección con Cambios para Revocación de Visita",
      "Sección con Cambio a la Propuesta de Ruta de Visita",
      "Sección Con Propuesta para Ruta de Visita"
    ],
    correcta: 1
  },
  {
    id: "VCEyEC-02",
    pregunta: "Durante el Proceso Electoral Extraordinario del Poder Judicial, las y los representantes de los partidos políticos pueden recibir copias de las actas.",
    opciones: ["Verdadero", "Falso", "Algunas veces"],
    correcta: 1
  },
  {
    id: "VCEyEC-03",
    pregunta: "¿A qué se refieren las iniciales SED?",
    opciones: [
      "Sección con Estrategia Diferenciada",
      "Sección Extraordinaria Distrital",
      "Sección con Estrategia Diferente"
    ],
    correcta: 0
  },
  {
    id: "VCEyEC-04",
    pregunta: "¿A partir de qué criterio se puede catalogar como SED a una sección durante los Procesos Electorales?",
    opciones: [
      "Que la soliciten los ciudadanos",
      "A petición de los partidos políticos",
      "Por la identificación de problemáticas en la sección (geográficas, culturales, difícil acceso, etc.)"
    ],
    correcta: 2
  },
  {
    id: "VCEyEC-05",
    pregunta: "¿Qué se hace en una SED?",
    opciones: [
      "Se sigue una ruta",
      "Se puede proponer omitir el seguimiento a la ruta de visita",
      "No se hace nada"
    ],
    correcta: 1
  },
  {
    id: "VCEyEC-06",
    pregunta: "¿Qué es una ARE?",
    opciones: [
      "Área de Recorrido Electoral",
      "Área de Responsabilidad Electoral",
      "Área de Recuperación de la Elección"
    ],
    correcta: 1
  },
  {
    id: "VCEyEC-07",
    pregunta: "¿Qué es una ZORE?",
    opciones: [
      "Zona de Operación para Recorrido Electoral",
      "Zona de Oportunidad de Reconocimiento",
      "Zona de Responsabilidad Electoral"
    ],
    correcta: 2
  },
  {
    id: "VCEyEC-08",
    pregunta: "Es el espacio geográfico en donde las y los SE coordinan y supervisan las actividades de capacitación y asistencia electoral:",
    opciones: ["ZORE", "ARE", "Distrito Electoral"],
    correcta: 0
  },
  {
    id: "VCEyEC-09",
    pregunta: "Procedimiento imparcial en el que se sortean ciudadanos de la Lista Nominal para integrar las mesas directivas de casilla:",
    opciones: [
      "Sorteo ciudadano",
      "Primera insaculación",
      "Segunda Insaculación"
    ],
    correcta: 1
  },
  {
    id: "VCEyEC-10",
    pregunta: "¿Qué porcentaje de ciudadanos de la Lista Nominal se sortean en la primera etapa de capacitación electoral?",
    opciones: ["13%", "10%", "15%"],
    correcta: 0
  },
  {
    id: "VCEyEC-11",
    pregunta: "Durante los Procesos Electorales, SE y CAE están bajo la coordinación conjunta de las siguientes vocalías:",
    opciones: [
      "Vocalía del Registro Federal de Electores y Vocalía de Organización Electoral",
      "Vocalía de Capacitación Electoral y Educación Cívica y Vocalía de Organización Electoral",
      "Vocalía de Capacitación Electoral y Educación Cívica y Vocalía Ejecutiva"
    ],
    correcta: 1
  },
  {
    id: "VCEyEC-12",
    pregunta: "Documento oficial que faculta a la ciudadanía para constituirse en autoridad electoral el día de la Jornada Electoral:",
    opciones: ["Carta-notificación", "Carta-invitación", "Nombramiento"],
    correcta: 2
  },
  {
    id: "VCEyEC-13",
    pregunta: "¿Qué funcionarios de Mesa Directiva de Casilla son responsables de armar el cancel electoral?",
    opciones: [
      "Los escrutadores/as",
      "El Presidente/a",
      "Los/as suplentes generales"
    ],
    correcta: 0
  },
  {
    id: "VCEyEC-14",
    pregunta: "Si están todos los funcionarios propietarios, ¿a qué hora inician los preparativos para la instalación de la casilla?",
    opciones: ["A las 7:30 horas", "A las 8:15 horas", "A las 10:00 horas"],
    correcta: 0
  },
  {
    id: "VCEyEC-15",
    pregunta: "¿Cuál es la acción que vulnera las características del voto?",
    opciones: ["Falta administrativa", "Propaganda partidista", "Delito electoral"],
    correcta: 2
  },
  {
    id: "VCEyEC-16",
    pregunta: "Ocurre cuando el ciudadano cumple requisitos legales pero no desea participar:",
    opciones: ["Notificación efectiva", "Rechazo", "Declinación a la notificación"],
    correcta: 1
  },
  {
    id: "VCEyEC-17",
    pregunta: "¿A qué se refieren las medidas de nivelación?",
    opciones: [
      "Que haya rampas en las casillas",
      "Que el piso esté parejo",
      "Acceso a igualdad de oportunidades eliminando barreras prioritariamente a grupos vulnerables"
    ],
    correcta: 2
  },
  {
    id: "VCEyEC-18",
    pregunta: "Documento que faculta a la ciudadanía para constituirse como autoridad electoral el día de la Jornada Electoral:",
    opciones: ["Notificación", "Carta notificación", "Nombramiento"],
    correcta: 2
  },
  {
    id: "VCEyEC-19",
    pregunta: "¿A partir de qué hora se realizan las suplencias el día de la Jornada Electoral?",
    opciones: ["7:30 horas", "8:00 horas", "8:15 horas"],
    correcta: 2
  },
  {
    id: "VCEyEC-20",
    pregunta: "El día de la Jornada Electoral se puede tomar a personas de la fila de otra sección:",
    opciones: ["Sí", "No", "Siempre y cuando esté cercana a la casilla"],
    correcta: 1
  },
  {
    id: "VCEyEC-21",
    pregunta: "Requisito para sustituir a una persona Funcionaria de Mesa Directiva de Casilla:",
    opciones: [
      "Estar formado sin credencial pero aparecer en la Lista Nominal",
      "Tener credencial de otra sección",
      "Contar con Credencial de Elector de la sección correspondiente"
    ],
    correcta: 2
  },
  {
    id: "VCEyEC-22",
    pregunta: "Modalidad de capacitación a personas funcionarias designadas durante la segunda insaculación:",
    opciones: ["Por correo electrónico", "Solo se entrega un manual", "Presencial"],
    correcta: 2
  },
  {
    id: "VCEyEC-23",
    pregunta: "Forma correcta de entregar un nombramiento:",
    opciones: ["Por correo", "Por medio de un familiar", "De manera directa"],
    correcta: 2
  },
  {
    id: "VCEyEC-24",
    pregunta: "¿Quién puede recibir una carta notificación durante la primera etapa de capacitación electoral?",
    opciones: ["Cónyuge", "Hijo/a menor de edad", "Nadie"],
    correcta: 0
  },
  {
    id: "VCEyEC-25",
    pregunta: "¿A qué se refiere la visita?",
    opciones: [
      "A la primera vez que el CAE acude al domicilio del ciudadano",
      "A la primera vez que el CAE identifica al posible FMDC",
      "A la primera vez que se capacita a la persona sorteada"
    ],
    correcta: 0
  }
  ],

  VRFE: [
  {
    id: "VRFE-01",
    pregunta: "Artículo de la LGPE que establece la obligación del Instituto de formular hasta tres avisos para que la ciudadanía pase a recoger su CPVF",
    opciones: ["155", "136", "130"],
    correcta: 1
  },
  {
    id: "VRFE-02",
    pregunta: "Orientar al ciudadano, revisar su documentación y realizar entrevistas para determinar el tipo de trámite de la CPVF es función de:",
    opciones: [
      "Responsable de Módulo",
      "Digitalizador de Medios de Identificación",
      "Auxiliar de Atención Ciudadana"
    ],
    correcta: 2
  },
  {
    id: "VRFE-03",
    pregunta: "Documentos obligatorios para realizar una Inscripción al Padrón:",
    opciones: [
      "Acta de Nacimiento, CURP y Comprobante de Domicilio",
      "Copia certificada del acta de nacimiento, comprobante de domicilio e identificación con fotografía",
      "Copia del acta de nacimiento, comprobante de domicilio e identificación con fotografía"
    ],
    correcta: 1
  },
  {
    id: "VRFE-04",
    pregunta: "¿Qué se entiende por atención prioritaria?",
    opciones: [
      "Priorizar la atención a mujeres embarazadas y ciudadanos con discapacidad",
      "Atender prioritariamente a adultos mayores",
      "Atender prioritariamente a personas en situación de vulnerabilidad"
    ],
    correcta: 2
  },
  {
    id: "VRFE-05",
    pregunta: "¿Cómo se conforma el Folio de la Solicitud Individual de Inscripción o Actualización al Padrón Electoral?",
    opciones: [
      "Entidad, distrito, año, módulo y consecutivo de trámite",
      "Año, entidad, distrito y consecutivo de trámite",
      "Año, entidad, distrito, módulo y consecutivo de trámite"
    ],
    correcta: 2
  },
  {
    id: "VRFE-06",
    pregunta: "Temporalidad que tarda en llegar la CPVF de un ciudadano que manifiesta residir en el extranjero:",
    opciones: ["7 días", "5 días", "10 días"],
    correcta: 1
  },
  {
    id: "VRFE-07",
    pregunta: "¿Qué significa CECYRD?",
    opciones: [
      "Centro de Cómputo y Resguardo Documental",
      "Centro de Cómputo y Revisión Documental",
      "Centro Estatal de Cómputo y Resguardo Documental"
    ],
    correcta: 0
  },
  {
    id: "VRFE-08",
    pregunta: "¿Qué es folio NEC?",
    opciones: [
      "Número de Expediente de Credencial",
      "Número de Expedición de Credencial",
      "Número de Entrega de Credencial"
    ],
    correcta: 2
  },
  {
    id: "VRFE-09",
    pregunta: "Lugar destinado por el INE para que la ciudadanía inscriba o actualice su registro en el padrón electoral",
    opciones: [
      "Junta Distrital Ejecutiva",
      "Vocalía del Registro Federal de Electores",
      "Módulos de Atención Ciudadana"
    ],
    correcta: 2
  },
  {
    id: "VRFE-10",
    pregunta: "¿Cuáles son los tipos de módulos de atención ciudadana existen?",
    opciones: [
      "Fijo Distrital, Fijo Adicional e Itinerantes",
      "Fijos, Semifijos y Móviles",
      "Fijos, Itinerantes y Fijos Adicionales"
    ],
    correcta: 1
  },
  {
    id: "VRFE-11",
    pregunta: "Coordinar, asignar actividades, controla la información, supervisa el Marco Geográfico en el MAC",
    opciones: [
      "Vocal del Registro Federal de Electores de Junta Distrital",
      "Responsable de Módulo",
      "Vocal Ejecutivo/a"
    ],
    correcta: 1
  },
  {
    id: "VRFE-12",
    pregunta: "¿Cuáles son los tipos de trámite que realiza el módulo de atención ciudadana?",
    opciones: [
      "Inscripción, corrección de datos, reposición, cambio de domicilio, reemplazo por vigencia y reincorporación",
      "Inscripción, corrección de datos personales, cambio de domicilio, reposición, corrección de datos en dirección, reincorporación y reemplazo",
      "Inscripción, corrección de datos personales, reposición, cambio de domicilio, reemplazo por vigencia y reincorporación"
    ],
    correcta: 1
  },
  {
    id: "VRFE-13",
    pregunta: "¿Qué significa ARCO?",
    opciones: [
      "Acceso, Rectificación, Corrección y Oposición de Datos Personales",
      "Actualización, Rectificación, Corrección y Oposición de Datos Personales",
      "Acceso, Ratificación, Corrección y Oposición de Datos Personales"
    ],
    correcta: 0
  },
  {
    id: "VRFE-14",
    pregunta: "En caso de que exista algún impedimento normativo para realizar el trámite de CPVF a un ciudadano ¿qué documento se deberá expedir al mismo?",
    opciones: [
      "Ficha de atención ciudadana",
      "Notificación de improcedencia",
      "Notificación de Trámite MI"
    ],
    correcta: 1
  },
  {
    id: "VRFE-15",
    pregunta: "Se considera Posible Usurpación de Identidad",
    opciones: [
      "Cuando los documentos coinciden pero los biométricos no",
      "Cuando los documentos no coinciden pero los biométricos sí",
      "Cuando los documentos y biométricos no coinciden"
    ],
    correcta: 0
  },
  {
    id: "VRFE-16",
    pregunta: "Se considera Dato Personal Presuntamente Irregular",
    opciones: [
      "Cuando los documentos coinciden pero los biométricos no",
      "Cuando los documentos no coinciden pero los biométricos sí",
      "Cuando los documentos y biométricos no coinciden"
    ],
    correcta: 1
  },
  {
    id: "VRFE-17",
    pregunta: "Requisitos para solicitar un trámite por aplicación del Artículo 141 de la LGIPE",
    opciones: [
      "Petición por escrito y certificado médico",
      "Petición por escrito, certificado médico y documentos vigentes",
      "Petición por escrito y receta médica"
    ],
    correcta: 1
  },
  {
    id: "VRFE-18",
    pregunta: "Alfredo Contreras se presenta al módulo a realizar un trámite de actualización al padrón, existe notificación de suspensión de derechos por lo que:",
    opciones: [
      "No se podrá realizar su trámite",
      "Su trámite será cancelado",
      "Se generará su credencial únicamente como medio de identificación"
    ],
    correcta: 2
  },
  {
    id: "VRFE-19",
    pregunta: "¿Qué significa SOGEC?",
    opciones: [
      "Sistema de Operación Geográfica-Electoral en Campo",
      "Sistema de Orientación Geográfico-Electoral Ciudadana",
      "Sistema de Orientación Geográfica-Estatal de Cartografía"
    ],
    correcta: 1
  },
  {
    id: "VRFE-20",
    pregunta: "¿Con cuántas secciones electorales cuenta el Distrito 09 en el Estado de México?",
    opciones: ["183", "185", "186"],
    correcta: 1
  },
  {
    id: "VRFE-21",
    pregunta: "Significado del código CIC",
    opciones: [
      "Código de Identificación de Credencial",
      "Código de Impresión de Credencial",
      "Código de Inscripción de Credencial"
    ],
    correcta: 0
  },
  {
    id: "VRFE-22",
    pregunta: "De conformidad con el artículo 138 de la LGPE la Campaña Anual Intensa se realizará anualmente en el periodo:",
    opciones: [
      "Del 01 de octubre al 15 de enero",
      "Del 01 de septiembre al 15 de febrero",
      "Del 01 de septiembre al 15 de diciembre"
    ],
    correcta: 1
  },
  {
    id: "VRFE-23",
    pregunta: "Proceso mediante el cual los registros de las ciudadanas y ciudadanos excluidos del padrón electoral se incluyen nuevamente:",
    opciones: ["Reposición", "Reincorporación", "Inscripción"],
    correcta: 0
  },
  {
    id: "VRFE-24",
    pregunta: "Cobertura del padrón, actualización, error en sección, empadronados fallecidos, ciudadanos no reconocidos, son indicadores de:",
    opciones: [
      "Encuestas de verificación de la VNM",
      "Verificación de domicilios y datos presuntamente irregulares en campo",
      "Técnica censal parcial"
    ],
    correcta: 2
  },
  {
    id: "VRFE-25",
    pregunta: "Información que se relaciona con una persona y que la identifica o la hace identificable:",
    opciones: ["Registro electoral", "Identidad", "Datos personales"],
    correcta: 1
  },
  {
    id: "VRFE-26",
    pregunta: "Derecho que permite solicitar que los datos personales sean transferidos a otro responsable:",
    opciones: ["Acceso", "Portabilidad", "Oposición"],
    correcta: 1
  },
  {
    id: "VRFE-27",
    pregunta: "Documento que informa los propósitos del tratamiento de datos personales:",
    opciones: [
      "Responsiva",
      "Aviso de privacidad",
      "Constancia de situación registral"
    ],
    correcta: 0
  },
  {
    id: "VRFE-28",
    pregunta: "Según el artículo 34 Constitucional son ciudadanos de la República quienes:",
    opciones: [
      "Hayan cumplido 18 años y tengan un modo honesto de vivir",
      "Hayan cumplido 18 años y cuenten con credencial para votar",
      "Hayan cumplido 18 años y no estén suspendidos en derechos político-electorales"
    ],
    correcta: 2
  },
  {
    id: "VRFE-29",
    pregunta: "Documento legal que certifica la identidad de una persona:",
    opciones: [
      "Certificado de nacimiento",
      "Credencial para votar con fotografía",
      "Acta de nacimiento"
    ],
    correcta: 0
  },
  {
    id: "VRFE-30",
    pregunta: "Artículo de la LGIPE que señala la cancelación del trámite si no se recoge la credencial dentro del plazo establecido:",
    opciones: ["155", "136", "133"],
    correcta: 2
  }
]
};

// Áreas disponibles (clave importante para la ruleta)
const AREAS = Object.keys(QUESTIONS_DATA);
