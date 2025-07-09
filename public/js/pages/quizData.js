// public/js/quizData.js

const quizData = [
    {
        id: "q1_inicio_movilidad",
        type: "multiple-choice",
        category: "movilidad_urbana",
        isStartQuestion: true,
        points: 2, // Pregunta inicial de peso medio
        question: "¿Cuál de estas estrategias contribuye MÁS a una **movilidad urbana sostenible** y a la reducción de la contaminación atmosférica?",
        options: [
            { text: "Ampliar las autopistas urbanas para más vehículos privados.", outcome: "autopistas", isCorrect: false },
            { text: "Fomentar el uso de vehículos eléctricos sin cambios en la infraestructura vial.", outcome: "electricos_sin_infra", isCorrect: false },
            { text: "Invertir masivamente en transporte público eficiente, ciclovías y zonas peatonales.", outcome: "transporte_sostenible", isCorrect: true },
            { text: "Reducir el costo del combustible para que más personas usen sus coches.", outcome: "combustible_barato", isCorrect: false }
        ],
        branching: {
            next: "q_cierre_acciones_individuales", // Siguiente pregunta general si no hay ramificación específica
            outcomes: {
                "transporte_sostenible": "q2_beneficios_movilidad_sostenible", // Acierto: profundiza
                "autopistas": "q2_repaso_contaminacion_trafico", // Error: repaso de impacto
                "electricos_sin_infra": "q2_repaso_contaminacion_trafico", // Error: repaso de impacto
                "combustible_barato": "q2_repaso_contaminacion_trafico" // Error: repaso de impacto
            }
        },
        feedback: {
            correct: "¡Excelente! Has identificado el camino hacia ciudades más limpias y habitables.",
            incorrect: "Aunque algunas opciones parecen lógicas, una de ellas tiene un impacto mucho más transformador."
        },
        explanation: `La inversión en <a href="/glosary#transporte-publico">transporte público eficiente</a>, la creación de <a href="/glosary#ciclovias">ciclovías seguras</a> y el aumento de <a href="/glosary#zonas-peatonales">zonas peatonales</a> son pilares fundamentales de la <a href="/glosary#movilidad-sostenible">movilidad sostenible</a>. Estas medidas no solo reducen directamente la <a href="/glosary#contaminacion-atmosferica">contaminación atmosférica</a> y la <a href="/glosary#huella-carbono">huella de carbono</a> urbana, sino que también mejoran la salud pública y la calidad de vida en las ciudades.`
    },
    {
        id: "q2_beneficios_movilidad_sostenible",
        type: "multiple-choice",
        category: "movilidad_urbana",
        isStartQuestion: false,
        points: 3, // Pregunta de profundización, más puntos
        question: "Más allá de la reducción de emisiones, ¿qué beneficio social clave se deriva de una infraestructura de transporte público y movilidad activa bien integrada?",
        options: [
            { text: "Aumento de la congestión vial en el centro de la ciudad.", outcome: "congestion", isCorrect: false },
            { text: "Mayor dependencia del automóvil privado para todos los ciudadanos.", outcome: "dependencia_auto", isCorrect: false },
            { text: "Mejora de la equidad social al garantizar acceso a servicios y oportunidades para todos.", outcome: "equidad_social", isCorrect: true },
            { text: "Disminución de la actividad económica local debido a menos tráfico.", outcome: "actividad_economica", isCorrect: false }
        ],
        branching: {
            next: "q3_interconexion_urbanismo", // Conexión a otro tema
            outcomes: {
                "equidad_social": "q3_interconexion_urbanismo" // Si acierta, va directo a la interconexión
            }
        },
        feedback: {
            correct: "¡Absolutamente! La sostenibilidad tiene un fuerte componente social.",
            incorrect: "Aunque parezca contradictorio, las ciudades con buena movilidad sostenible son más inclusivas."
        },
        explanation: `Una infraestructura de <a href="/glosary#transporte-publico">transporte público</a> y <a href="/glosary#movilidad-activa">movilidad activa</a> (caminar, bicicleta) fomenta la <a href="/glosary#equidad-social">equidad social</a>. Permite que todos los ciudadanos, independientemente de su nivel socioeconómico o si poseen un vehículo, tengan acceso a empleo, educación, atención médica y ocio, reduciendo las barreras y la exclusión social. Esto es parte de un concepto más amplio de <a href="/glosary#urbanismo-sostenible">urbanismo sostenible</a>.`
    },
    {
        id: "q2_repaso_contaminacion_trafico",
        type: "multiple-choice",
        category: "repaso_movilidad",
        isStartQuestion: false,
        points: 1, // Pregunta de repaso, menos puntos
        question: "¿Cuál de estos contaminantes, emitido por vehículos de combustión interna, es especialmente perjudicial para la salud respiratoria humana en entornos urbanos?",
        options: [
            { text: "Ozono estratosférico.", outcome: "ozono_estratosferico", isCorrect: false },
            { text: "Dióxido de carbono (CO2).", outcome: "co2", isCorrect: false },
            { text: "Partículas en suspensión (PM2.5) y óxidos de nitrógeno (NOx).", outcome: "pm25_nox", isCorrect: true },
            { text: "Vapor de agua.", outcome: "vapor_agua", isCorrect: false }
        ],
        branching: {
            next: "q1_inicio_gestion_recursos" // Lleva al inicio de otro tema para continuar el quiz
        },
        feedback: {
            correct: "¡Correcto! Estos son los principales culpables de los problemas respiratorios en las ciudades.",
            incorrect: "Aunque todos tienen impacto, uno de ellos es directamente responsable de enfermedades respiratorias urbanas."
        },
        explanation: `Las <a href="/glosary#particulas-en-suspension">partículas en suspensión (PM2.5)</a> y los <a href="/glosary#oxidos-de-nitrogeno">óxidos de nitrógeno (NOx)</a> son emitidos por los vehículos de combustión. Son <a href="/glosary#contaminantes-criterio">contaminantes criterio</a> altamente perjudiciales, penetran en los pulmones causando enfermedades respiratorias y cardiovasculares, y contribuyen a la formación de <a href="/glosary#smog">smog</a> urbano.`
    },
    {
        id: "q1_inicio_gestion_recursos",
        type: "multiple-choice",
        category: "gestion_recursos_circular",
        isStartQuestion: true,
        points: 2,
        question: "En una **Economía Circular**, ¿cuál es el principio fundamental en la gestión de residuos orgánicos para maximizar su valor y minimizar el impacto ambiental?",
        options: [
            { text: "Incinar para generar energía, quemando todos los residuos.", outcome: "incineracion_sin_separar", isCorrect: false },
            { text: "Enviar a vertederos bien gestionados con captura de metano.", outcome: "vertedero_avanzado", isCorrect: false },
            { text: "Transformar en compost y biogás mediante procesos biológicos.", outcome: "compost_biogas", isCorrect: true },
            { text: "Empaquetar y exportar a otros países para su procesamiento.", outcome: "exportacion_residuos", isCorrect: false }
        ],
        branching: {
            next: "q_cierre_acciones_individuales", // Siguiente pregunta general
            outcomes: {
                "compost_biogas": "q2_beneficios_compostaje_biogas", // Acierto: profundiza
                "incineracion_sin_separar": "q2_repaso_residuos_zero", // Error: repaso
                "vertedero_avanzado": "q2_repaso_residuos_zero", // Error: repaso
                "exportacion_residuos": "q2_repaso_residuos_zero" // Error: repaso
            }
        },
        feedback: {
            correct: "¡Correcto! Cerrar el ciclo de nutrientes es clave en la economía circular.",
            incorrect: "Aunque algunas opciones gestionan residuos, una de ellas es la más alineada con la economía circular."
        },
        explanation: `La <a href="/glosary#economia-circular">Economía Circular</a> busca mantener los productos y materiales en uso el mayor tiempo posible. Para los residuos orgánicos, esto significa transformarlos en recursos valiosos. El <a href="/glosary#compostaje">compostaje</a> genera un fertilizante natural, mientras la <a href="/glosary#biodigestion-anaerobica">biodigestión anaeróbica</a> produce <a href="/glosary#biogas">biogás</a> (fuente de energía renovable) y digestato (abono). Ambas prácticas evitan las emisiones de <a href="/glosary#metano">metano</a> de los vertederos y reducen la necesidad de fertilizantes sintéticos.`
    },
    {
        id: "q2_beneficios_compostaje_biogas",
        type: "multiple-choice",
        category: "gestion_recursos_circular",
        isStartQuestion: false,
        points: 3,
        question: "¿Qué impacto positivo directo tiene la producción de **biogás** a partir de residuos orgánicos en el contexto energético de una ciudad?",
        options: [
            { text: "Aumenta la dependencia de combustibles fósiles importados.", outcome: "mas_fosiles", isCorrect: false },
            { text: "Disminuye la eficiencia energética general de la ciudad.", outcome: "menos_eficiencia", isCorrect: false },
            { text: "Genera una fuente de energía renovable local y reduce las emisiones de metano.", outcome: "energia_renovable_local", isCorrect: true },
            { text: "Incrementa el volumen de residuos peligrosos.", outcome: "mas_peligrosos", isCorrect: false }
        ],
        branching: {
            next: "q3_interconexion_energia", // Conexión a otro tema
            outcomes: {
                "energia_renovable_local": "q3_interconexion_energia"
            }
        },
        feedback: {
            correct: "¡Exacto! Es un doble beneficio para la sostenibilidad energética y ambiental.",
            incorrect: "El biogás es una solución energética muy prometedora. Revisa sus beneficios."
        },
        explanation: `El <a href="/glosary#biogas">biogás</a>, producido por la <a href="/glosary#biodigestion-anaerobica">biodigestión anaeróbica</a> de residuos orgánicos, es una valiosa <a href="/glosary#energia-renovable">fuente de energía renovable</a>. Puede usarse para generar electricidad, calor o como combustible vehicular. Su producción local reduce la dependencia de <a href="/glosary#combustibles-fosiles">combustibles fósiles</a> y, al capturar el <a href="/glosary#metano">metano</a> que de otro modo se liberaría de los vertederos, contribuye significativamente a la mitigación del <a href="/glosary#cambio-climatico">cambio climático</a>.`
    },
    {
        id: "q2_repaso_residuos_zero",
        type: "multiple-choice",
        category: "repaso_recursos",
        isStartQuestion: false,
        points: 1,
        question: "El concepto de 'Basura Cero' (Zero Waste) es fundamental. ¿Cuál es la jerarquía correcta de acciones que prioriza este concepto para gestionar los materiales?",
        options: [
            { text: "Enterrar, Quemar, Reutilizar.", outcome: "enterrar", isCorrect: false },
            { text: "Reducir, Reutilizar, Reciclar, Compostar.", outcome: "jerarquia_correcta", isCorrect: true },
            { text: "Reciclar, Reducir, Reutilizar, Eliminar.", outcome: "reciclar_primero", isCorrect: false },
            { text: "Comprar, Usar, Tirar.", outcome: "comprar_tirar", isCorrect: false }
        ],
        branching: {
            next: "q1_inicio_energia_sostenible" // Lleva al inicio de otro tema
        },
        feedback: {
            correct: "¡Muy bien! Esa es la secuencia ideal para un manejo sostenible.",
            incorrect: "El enfoque de Basura Cero tiene un orden específico de prioridades. Piénsalo bien."
        },
        explanation: `La jerarquía de la <a href="/glosary#basura-cero">Basura Cero</a> prioriza: 1) <a href="/glosary#reducir">Reducir</a> el consumo; 2) <a href="/glosary#reutilizar">Reutilizar</a> productos y envases; 3) <a href="/glosary#reciclar">Reciclar</a> los materiales que no se pueden reducir o reutilizar; y 4) <a href="/glosary#compostaje">Compostar</a> los residuos orgánicos. Los últimos recursos deben ser la incineración y el vertedero, solo para lo que no tiene otra opción, lejos de ser una prioridad.`
    },
    {
        id: "q1_inicio_energia_sostenible",
        type: "multiple-choice",
        category: "energia_sostenible",
        isStartQuestion: true,
        points: 2,
        question: "¿Cuál es la principal ventaja de las **energías renovables** (solar, eólica) en comparación con los combustibles fósiles para el suministro eléctrico de una ciudad?",
        options: [
            { text: "Son más baratas de instalar inicialmente.", outcome: "costo_inicial", isCorrect: false },
            { text: "Producen grandes cantidades de gases de efecto invernadero.", outcome: "gei", isCorrect: false },
            { text: "No se agotan y no emiten gases de efecto invernadero en su operación.", outcome: "no_agotamiento_no_gei", isCorrect: true },
            { text: "Requieren menos espacio para su instalación.", outcome: "menos_espacio", isCorrect: false }
        ],
        branching: {
            next: "q_cierre_acciones_individuales",
            outcomes: {
                "no_agotamiento_no_gei": "q2_desafios_energia_renovable",
                "costo_inicial": "q2_repaso_fuentes_energia",
                "gei": "q2_repaso_fuentes_energia",
                "menos_espacio": "q2_repaso_fuentes_energia"
            }
        },
        feedback: {
            correct: "¡Exacto! Son inagotables y respetuosas con el clima.",
            incorrect: "Revisa las características fundamentales de las energías limpias frente a las tradicionales."
        },
        explanation: `Las <a href="/glosary#energias-renovables">energías renovables</a>, como la <a href="/glosary#energia-solar">solar</a> y la <a href="/glosary#energia-eolica">eólica</a>, son "limpias" porque no producen <a href="/glosary#gases-efecto-invernadero">gases de efecto invernadero (GEI)</a> durante su operación y son <a href="/glosary#fuentes-inagotables">fuentes inagotables</a> (a diferencia de los <a href="/glosary#combustibles-fosiles">combustibles fósiles</a>). Su adopción es crucial para combatir el <a href="/glosary#cambio-climatico">cambio climático</a> y construir una <a href="/glosary#resiliencia-energetica">resiliencia energética</a>.`
    },
    {
        id: "q2_desafios_energia_renovable",
        type: "multiple-choice",
        category: "energia_sostenible",
        isStartQuestion: false,
        points: 3,
        question: "Uno de los mayores desafíos para la integración de energías renovables como la solar y eólica en la red eléctrica es su intermitencia. ¿Qué solución tecnológica ayuda a mitigar este problema?",
        options: [
            { text: "Aumentar la quema de carbón cuando no hay sol o viento.", outcome: "mas_carbon", isCorrect: false },
            { text: "Construir centrales nucleares de respaldo.", outcome: "nucleares", isCorrect: false },
            { text: "Desarrollo de sistemas de almacenamiento de energía a gran escala (ej. baterías).", outcome: "almacenamiento_energia", isCorrect: true },
            { text: "Reducir la demanda de energía en los picos.", outcome: "reducir_demanda", isCorrect: false }
        ],
        branching: {
            next: "q3_interconexion_gestion_recursos"
        },
        feedback: {
            correct: "¡Correcto! El almacenamiento es vital para la estabilidad de la red.",
            incorrect: "La intermitencia es un desafío superable con la tecnología adecuada."
        },
        explanation: `La <a href="/glosary#intermitencia">intermitencia</a> de las <a href="/glosary#energia-solar">energías solar</a> y <a href="/glosary#energia-eolica">eólica</a> (no siempre hay sol o viento) es un desafío. La solución clave es el desarrollo de <a href="/glosary#almacenamiento-energia">sistemas de almacenamiento de energía</a>, como <a href="/glosary#baterias-ion-litio">grandes baterías de ion-litio</a> o <a href="/glosary#hidrogeno-verde">hidrógeno verde</a>, que permitan guardar el exceso de energía producida en los momentos de alta generación para usarla cuando la producción es baja. Esto es fundamental para la estabilidad de las <a href="/glosary#redes-electricas-inteligentes">redes eléctricas inteligentes</a>.`
    },
    {
        id: "q2_repaso_fuentes_energia",
        type: "multiple-choice",
        category: "repaso_energia",
        isStartQuestion: false,
        points: 1,
        question: "¿Cuál de las siguientes fuentes de energía NO se considera una energía renovable?",
        options: [
            { text: "Energía geotérmica.", outcome: "geotermica", isCorrect: false },
            { text: "Biomasa.", outcome: "biomasa", isCorrect: false },
            { text: "Gas natural.", outcome: "gas_natural", isCorrect: true },
            { text: "Energía hidroeléctrica.", outcome: "hidroelectrica", isCorrect: false }
        ],
        branching: {
            next: "q1_inicio_agua_saneamiento" // Lleva al inicio de otro tema
        },
        feedback: {
            correct: "¡Así es! El gas natural es un combustible fósil.",
            incorrect: "Revisa bien. Solo una de estas opciones no es considerada renovable."
        },
        explanation: `El <a href="/glosary#gas-natural">gas natural</a> es un <a href="/glosary#combustible-fosil">combustible fósil</a>. Aunque se le considera una opción más limpia que el carbón o el petróleo en términos de emisiones de CO2 al quemarse, su extracción y transporte pueden liberar <a href="/glosary#metano">metano</a>, un potente gas de efecto invernadero. Las demás opciones son <a href="/glosary#energias-renovables">energías renovables</a>.`
    },
    {
        id: "q1_inicio_agua_saneamiento",
        type: "multiple-choice",
        category: "agua_saneamiento",
        isStartQuestion: true,
        points: 2,
        question: "¿Cuál es la forma más efectiva de gestionar el agua de lluvia en una ciudad para reducir inundaciones y reponer acuíferos, en lugar de simplemente enviarla al alcantarillado?",
        options: [
            { text: "Construir más alcantarillas gigantes.", outcome: "mas_alcantarillas", isCorrect: false },
            { text: "Desviar el agua directamente a los ríos.", outcome: "rios_directo", isCorrect: false },
            { text: "Implementar infraestructura verde como techos verdes, jardines de lluvia y pavimentos permeables.", outcome: "infraestructura_verde", isCorrect: true },
            { text: "Bombear el agua de lluvia directamente al mar.", outcome: "bombear_mar", isCorrect: false }
        ],
        branching: {
            next: "q_cierre_acciones_individuales",
            outcomes: {
                "infraestructura_verde": "q2_beneficios_infraestructura_verde"
            }
        },
        feedback: {
            correct: "¡Excelente! La naturaleza tiene las mejores soluciones.",
            incorrect: "Hay una forma mucho más natural y sostenible de manejar el agua de lluvia urbana."
        },
        explanation: `La <a href="/glosary#infraestructura-verde">infraestructura verde</a> es un enfoque innovador para la gestión del <a href="/glosary#agua-lluvia">agua de lluvia</a>. <a href="/glosary#techos-verdes">Techos verdes</a>, <a href="/glosary#jardines-lluvia">jardines de lluvia</a>, <a href="/glosary#pavimentos-permeables">pavimentos permeables</a> y <a href="/glosary#humedales-construidos">humedales construidos</a> permiten que el agua se filtre naturalmente en el suelo, reponiendo los <a href="/glosary#acuiferos">acuíferos</a>, reduciendo las <a href="/glosary#inundaciones-urbanas">inundaciones urbanas</a> y filtrando contaminantes. Es una alternativa superior a los sistemas de alcantarillado tradicionales.`
    },
    {
        id: "q2_beneficios_infraestructura_verde",
        type: "multiple-choice",
        category: "agua_saneamiento",
        isStartQuestion: false,
        points: 3,
        question: "Además de la gestión del agua, ¿qué otro beneficio significativo aportan los **techos verdes** y los **jardines de lluvia** a las ciudades, especialmente en climas cálidos?",
        options: [
            { text: "Incrementan el efecto 'isla de calor urbana'.", outcome: "isla_calor", isCorrect: false },
            { text: "Aumentan la necesidad de aire acondicionado.", outcome: "mas_ac", isCorrect: false },
            { text: "Reducen la temperatura ambiental y mejoran la biodiversidad urbana.", outcome: "reduccion_temperatura_biodiversidad", isCorrect: true },
            { text: "Generan más escorrentía superficial.", outcome: "mas_escorrentia", isCorrect: false }
        ],
        branching: {
            next: "q3_interconexion_biodiversidad"
        },
        feedback: {
            correct: "¡Exacto! Son soluciones multifuncionales para el urbanismo sostenible.",
            incorrect: "Piensa en el efecto directo que tiene la vegetación en el clima local."
        },
        explanation: `Los <a href="/glosary#techos-verdes">techos verdes</a> y <a href="/glosary#jardines-lluvia">jardines de lluvia</a> son elementos clave de la <a href="/glosary#infraestructura-verde">infraestructura verde</a>. Contribuyen a mitigar el <a href="/glosary#isla-de-calor-urbana">efecto 'isla de calor urbana'</a>, ya que la vegetación absorbe menos calor y proporciona sombra. Además, crean nuevos hábitats para la <a href="/glosary#biodiversidad-urbana">biodiversidad urbana</a>, como insectos polinizadores y aves, y mejoran la calidad del aire.`
    },
    {
        id: "q1_inicio_urbanismo_verde",
        type: "multiple-choice",
        category: "urbanismo_verde",
        isStartQuestion: true,
        points: 2,
        question: "Para diseñar una **ciudad más habitable y sostenible**, ¿qué principio de planificación urbana es crucial para reducir la dependencia del automóvil y fomentar la vida comunitaria?",
        options: [
            { text: "Crear grandes zonas residenciales monofuncionales muy alejadas de servicios.", outcome: "monofuncional", isCorrect: false },
            { text: "Priorizar la construcción de grandes centros comerciales en las afueras.", outcome: "centros_comerciales", isCorrect: false },
            { text: "Desarrollar una ciudad compacta con usos mixtos y alta densidad en zonas bien conectadas.", outcome: "ciudad_compacta", isCorrect: true },
            { text: "Eliminar todos los espacios verdes para construir más edificios.", outcome: "eliminar_verdes", isCorrect: false }
        ],
        branching: {
            next: "q_cierre_acciones_individuales",
            outcomes: {
                "ciudad_compacta": "q2_beneficios_ciudad_compacta"
            }
        },
        feedback: {
            correct: "¡Correcto! Es la base de un urbanismo más eficiente y social.",
            incorrect: "Esas opciones generarían más problemas de tráfico y menos interacción. Piensa en la eficiencia del espacio."
        },
        explanation: `El concepto de <a href="/glosary#ciudad-compacta">ciudad compacta</a>, a menudo asociado al <a href="/glosary#urbanismo-sostenible">urbanismo sostenible</a>, promueve la densidad, los <a href="/glosary#usos-mixtos">usos mixtos</a> (residencial, comercial, oficinas, ocio) y la buena conexión a <a href="/glosary#transporte-publico">transporte público</a> y <a href="/glosary#movilidad-activa">movilidad activa</a>. Esto reduce la necesidad del automóvil, fomenta la interacción social y hace la ciudad más eficiente en el uso de recursos y energía, combatiendo la <a href="/glosary#expansion-urbana">expansión urbana</a> descontrolada.`
    },
    {
        id: "q2_beneficios_ciudad_compacta",
        type: "multiple-choice",
        category: "urbanismo_verde",
        isStartQuestion: false,
        points: 3,
        question: "¿Qué papel juegan los **espacios verdes urbanos** (parques, jardines, arbolado viario) en una ciudad compacta y sostenible, más allá de lo estético?",
        options: [
            { text: "Son principalmente para recreación y no tienen otro impacto significativo.", outcome: "solo_recreacion", isCorrect: false },
            { text: "Aumentan la polución al atrapar el aire.", outcome: "mas_polucion", isCorrect: false },
            { text: "Mejoran la calidad del aire, regulan la temperatura y aumentan la biodiversidad.", outcome: "beneficios_multiples", isCorrect: true },
            { text: "Incrementan el riesgo de inundaciones.", outcome: "mas_inundaciones", isCorrect: false }
        ],
        branching: {
            next: "q3_interconexion_agua_biodiversidad"
        },
        feedback: {
            correct: "¡Magnífico! Son ecosistemas clave dentro de la ciudad.",
            incorrect: "Los espacios verdes son mucho más que un adorno; tienen funciones vitales."
        },
        explanation: `Los <a href="/glosary#espacios-verdes-urbanos">espacios verdes urbanos</a> son "pulmones" de la ciudad. Además de su valor estético y recreativo, purifican el aire al absorber CO2 y otros <a href="/glosary#contaminantes-atmosfericos">contaminantes atmosféricos</a>, regulan la temperatura mitigando el <a href="/glosary#isla-de-calor-urbana">efecto isla de calor</a>, y son esenciales para la <a href="/glosary#biodiversidad-urbana">biodiversidad urbana</a>. También juegan un papel en la gestión del <a href="/glosary#agua-lluvia">agua de lluvia</a> y la <a href="/glosary#salud-mental">salud mental</a> de los habitantes.`
    },
    // Interconexiones entre temas (ejemplos)
    {
        id: "q3_interconexion_urbanismo", // Pregunta que conecta Movilidad con Urbanismo
        type: "multiple-choice",
        category: "interconexion",
        isStartQuestion: false,
        points: 2,
        question: "Si una ciudad invierte en carriles exclusivos para autobuses y fomenta la construcción de viviendas y comercios cerca de las estaciones, ¿qué concepto de planificación urbana está aplicando?",
        options: [
            { text: "Expansión urbana (Sprawl).", outcome: "sprawl", isCorrect: false },
            { text: "Desarrollo orientado al automóvil.", outcome: "auto_dependencia", isCorrect: false },
            { text: "Desarrollo Orientado al Transporte (DOT).", outcome: "dot", isCorrect: true },
            { text: "Urbanismo de baja densidad.", outcome: "baja_densidad", isCorrect: false }
        ],
        branching: {
            next: "q_cierre_acciones_individuales"
        },
        feedback: {
            correct: "¡Correcto! Es una estrategia clave para ciudades eficientes.",
            incorrect: "Esa opción genera más tráfico y dependencia del coche. Piensa en la eficiencia."
        },
        explanation: `El <a href="/glosary#desarrollo-orientado-al-transporte">Desarrollo Orientado al Transporte (DOT)</a>, o Transit-Oriented Development (TOD), es una estrategia de <a href="/glosary#urbanismo-sostenible">urbanismo sostenible</a> que concentra el desarrollo urbano (viviendas, comercios, oficinas) alrededor de estaciones de <a href="/glosary#transporte-publico">transporte público</a> de alta capacidad. Esto reduce la necesidad de vehículos privados, fomenta la <a href="/glosary#movilidad-activa">movilidad activa</a> y crea comunidades más vibrantes y compactas.`
    },
    {
        id: "q3_interconexion_energia", // Pregunta que conecta Gestión de Recursos con Energía
        type: "multiple-choice",
        category: "interconexion",
        isStartQuestion: false,
        points: 2,
        question: "La 'simbiosis industrial' es un concepto donde los residuos de una industria se convierten en recursos para otra. ¿Cómo se relaciona esto con la eficiencia energética a nivel urbano?",
        options: [
            { text: "No tiene relación con la energía, solo con los residuos.", outcome: "sin_relacion", isCorrect: false },
            { text: "Aumenta la necesidad de producir más energía en cada industria.", outcome: "mas_energia_individual", isCorrect: false },
            { text: "Reduce la necesidad de energía primaria al valorizar subproductos y minimizar procesos de extracción/producción.", outcome: "eficiencia_energetica", isCorrect: true },
            { text: "Incrementa el transporte de residuos, consumiendo más energía.", outcome: "mas_transporte_energia", isCorrect: false }
        ],
        branching: {
            next: "q_cierre_acciones_individuales"
        },
        feedback: {
            correct: "¡Así es! Es un ejemplo brillante de eficiencia circular.",
            incorrect: "Piensa en cómo la reutilización de recursos puede impactar el consumo total de energía."
        },
        explanation: `La <a href="/glosary#simbiosis-industrial">simbiosis industrial</a> es una aplicación de la <a href="/glosary#economia-circular">economía circular</a>. Al transformar los <a href="/glosary#residuos-industriales">residuos industriales</a> de una empresa en materias primas para otra, se reduce drásticamente la necesidad de extraer y procesar nuevos <a href="/glosary#recursos-naturales">recursos naturales</a>. Esto se traduce en una significativa <a href="/glosary#eficiencia-energetica">eficiencia energética</a>, ya que se consume mucha menos energía en la producción de nuevos materiales y se minimiza el transporte de residuos, contribuyendo a la <a href="/glosary#sostenibilidad-urbana">sostenibilidad urbana</a> general.`
    },
    {
        id: "q3_interconexion_biodiversidad", // Pregunta que conecta Agua/Urbanismo con Biodiversidad
        type: "multiple-choice",
        category: "interconexion",
        isStartQuestion: false,
        points: 2,
        question: "Los parques, corredores verdes y techos verdes no solo embellecen la ciudad, sino que son vitales para la 'conectividad ecológica'. ¿Por qué es importante esta conectividad en el entorno urbano?",
        options: [
            { text: "Solo para la recreación humana.", outcome: "solo_recreacion", isCorrect: false },
            { text: "Para aumentar el valor de las propiedades.", outcome: "valor_propiedades", isCorrect: false },
            { text: "Permite el movimiento y la supervivencia de la fauna y flora, mejorando la resiliencia del ecosistema urbano.", outcome: "movimiento_fauna_flora", isCorrect: true },
            { text: "Solo para la gestión del agua de lluvia.", outcome: "solo_agua_lluvia", isCorrect: false }
        ],
        branching: {
            next: "q_cierre_acciones_individuales"
        },
        feedback: {
            correct: "¡Excelente! La naturaleza necesita espacios interconectados para prosperar.",
            incorrect: "Piensa más allá de un solo beneficio; la conectividad ecológica es integral."
        },
        explanation: `La <a href="/glosary#conectividad-ecologica">conectividad ecológica</a> es crucial en las ciudades. Los <a href="/glosary#corredores-verdes">corredores verdes</a>, <a href="/glosary#parques-urbanos">parques urbanos</a> y <a href="/glosary#techos-verdes">techos verdes</a> actúan como "escalones" o "puentes" que permiten el movimiento de especies de flora y fauna entre diferentes hábitats urbanos. Esto es esencial para mantener la <a href="/glosary#biodiversidad-urbana">biodiversidad urbana</a>, la salud de los <a href="/glosary#ecosistemas-urbanos">ecosistemas urbanos</a> y su <a href="/glosary#resiliencia">resiliencia</a> frente a cambios y perturbaciones.`
    },
    {
        id: "q_cierre_acciones_individuales",
        type: "multiple-choice",
        category: "cierre",
        isStartQuestion: false,
        points: 1,
        question: "Finalmente, como ciudadano, ¿cuál de estas acciones cotidianas tiene el mayor impacto colectivo positivo para fomentar la sostenibilidad en tu comunidad?",
        options: [
            { text: "Comprar productos con exceso de embalaje y tirarlos a la basura común.", outcome: "consumo_irresponsable", isCorrect: false },
            { text: "Ignorar las iniciativas de reciclaje y compostaje locales.", outcome: "ignorar_iniciativas", isCorrect: false },
            { text: "Participar activamente en la separación de residuos, usar transporte público/bicicleta y apoyar negocios locales sostenibles.", outcome: "accion_ciudadana", isCorrect: true },
            { text: "Esperar a que el gobierno resuelva todos los problemas ambientales.", outcome: "pasividad", isCorrect: false }
        ],
        branching: {
            next: null // Finaliza el quiz
        },
        feedback: {
            correct: "¡Exacto! El cambio empieza por la acción individual y colectiva.",
            incorrect: "Cada pequeña acción suma. Piensa en lo que puedes hacer en tu día a día."
        },
        explanation: `Las <a href="/glosary#acciones-individuales">acciones individuales</a> sumadas tienen un inmenso <a href="/glosary#impacto-colectivo">impacto colectivo</a>. La <a href="/glosary#separacion-residuos">separación de residuos</a>, el uso de <a href="/glosary#transporte-sostenible">transporte sostenible</a>, el <a href="/glosary#consumo-responsable">consumo responsable</a> y el apoyo a la <a href="/glosary#economia-local">economía local</a> y sostenible son pilares de la <a href="/glosary#ciudadania-activa">ciudadanía activa</a> en la construcción de una <a href="/glosary#ecologicalcity">EcologicalCity</a>. La <a href="/glosary#educacion-ambiental">educación ambiental</a> y la <a href="/glosary#participacion-ciudadana">participación ciudadana</a> son fundamentales.`
    },
    // Añade más preguntas aquí siguiendo la misma estructura para cubrir más temas y ramificaciones
];