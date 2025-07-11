const quizData = [
    // --- Pregunta de Inicio: ENERGÍA SOSTENIBLE ---
    {
        id: "q1_inicio_energia",
        type: "multiple-choice",
        category: "Energía_Sostenible",
        isStartQuestion: true,
        points: 3, // Pregunta de inicio con peso principal
        question: "¿Cuál de las siguientes fuentes de energía renovable es la más adecuada para generar electricidad a gran escala en una ciudad costera con alta exposición al viento?",
        options: [
            { text: "Energía solar fotovoltaica.", outcome: "solar_no_optima", isCorrect: false },
            { text: "Energía eólica (parques eólicos marinos u onshore).", outcome: "eolica_optima", isCorrect: true },
            { text: "Energía geotérmica.", outcome: "geotermica_no_optima", isCorrect: false },
            { text: "Bioenergía a partir de biomasa.", outcome: "biomasa_no_optima", isCorrect: false }
        ],
        branching: {
            next: null, // Si no hay un outcome específico, esta es la siguiente por defecto (se puede cambiar)
            outcomes: {
                "eolica_optima": "q2_beneficios_eolica", // Acierto: profundiza en eólica
                "solar_no_optima": "q2_repaso_energia_solar", // Error: repaso de solar
                "geotermica_no_optima": "q2_repaso_energia_geotermica", // Error: repaso de geotérmica
                "biomasa_no_optima": "q2_repaso_bioenergia" // Error: repaso de bioenergía
            }
        },
        feedback: {
            correct: "¡Correcto! Las ciudades costeras suelen tener un gran potencial eólico.",
            incorrect: "Aunque todas son renovables, no todas son óptimas para ese entorno específico."
        },
        explanation: `La <a href="/glosary#energia-eolica">energía eólica</a>, especialmente la <a href="/glosary#parques-eolicos-marinos">marina</a>, aprovecha la fuerza del viento que es abundante en zonas costeras. Es una de las fuentes más eficientes para la <a href="/glosary#generacion-electrica">generación eléctrica</a> a gran escala. La <a href="/glosary#energia-solar">energía solar</a> es versátil, pero el viento es la ventaja clave en costas. Conoce más sobre <a href="/glosary#energias-renovables">energías renovables</a>.`
    },

    // --- Pregunta de Profundización: ENERGÍA SOSTENIBLE (Eólica) ---
    {
        id: "q2_beneficios_eolica",
        type: "multiple-choice",
        category: "Energía_Sostenible",
        points: 4, // Más puntos por ser una profundización
        question: "¿Cuál es el principal beneficio ambiental de un parque eólico marino en comparación con uno terrestre?",
        options: [
            { text: "Menor costo de instalación y mantenimiento.", outcome: "costo_falso", isCorrect: false },
            { text: "Menor impacto visual y acústico en áreas pobladas.", outcome: "impacto_menor_marino", isCorrect: true },
            { text: "Generación de energía solo durante el día.", outcome: "diurno_falso", isCorrect: false },
            { text: "Requiere menos espacio para la misma capacidad de generación.", outcome: "espacio_falso", isCorrect: false }
        ],
        branching: {
            next: "q3_transicion_impacto_climatico" // Acierto: transiciona a una nueva categoría
        },
        feedback: {
            correct: "¡Muy bien! El mar ofrece ventajas en cuanto a espacio y reducción de molestias.",
            incorrect: "Aunque hay factores económicos, el impacto ambiental y social es clave."
        },
        explanation: `Los <a href="/glosary#parques-eolicos-marinos">parques eólicos marinos</a>, o <a href="/glosary#offshore-wind">offshore wind</a>, se benefician de vientos más fuertes y constantes, y su ubicación lejos de la costa reduce el <a href="/glosary#impacto-visual">impacto visual</a> y el <a href="/glosary#contaminacion-acustica">ruido</a> para las comunidades terrestres. Su impacto en la <a href="/glosary#vida-marina">vida marina</a> es una consideración importante en su <a href="/glosary#planificacion-ambiental">planificación ambiental</a>.`
    },

    // --- Pregunta de Repaso: ENERGÍA SOSTENIBLE (Solar) ---
    {
        id: "q2_repaso_energia_solar",
        type: "multiple-choice",
        category: "Energía_Sostenible",
        points: 2, // Menos puntos por ser un repaso
        question: "¿Cuál es una limitación fundamental de la energía solar fotovoltaica que la eólica no posee?",
        options: [
            { text: "Dependencia de las horas de luz solar.", outcome: "dependencia_luz", isCorrect: true },
            { text: "Altos costos de mantenimiento de los paneles.", outcome: "mantenimiento_falso", isCorrect: false },
            { text: "Necesidad de grandes extensiones de terreno.", outcome: "terreno_compartido", isCorrect: false },
            { text: "Generación de ruido constante.", outcome: "ruido_falso", isCorrect: false }
        ],
        branching: {
            next: "q3_transicion_impacto_climatico" // Independientemente del resultado, transiciona a una nueva categoría
        },
        feedback: {
            correct: "¡Exacto! La intermitencia es su mayor desafío, pero se gestiona con almacenamiento.",
            incorrect: "Analiza bien cómo funciona cada tipo de energía para identificar sus limitaciones principales."
        },
        explanation: `La <a href="/glosary#energia-solar-fotovoltaica">energía solar fotovoltaica</a> es intermitente, ya que su <a href="/glosary#generacion-electrica">generación</a> depende directamente de la presencia de <a href="/glosary#luz-solar">luz solar</a>. Esto requiere soluciones de <a href="/glosary#almacenamiento-energia">almacenamiento de energía</a> como <a href="/glosary#baterias-electricas">baterías</a> para garantizar un suministro constante. A pesar de esto, su versatilidad la hace fundamental para la <a href="/glosary#transicion-energetica">transición energética</a>.`
    },

    // --- Pregunta de Repaso: ENERGÍA SOSTENIBLE (Geotérmica) ---
    {
        id: "q2_repaso_energia_geotermica",
        type: "multiple-choice",
        category: "Energía_Sostenible",
        points: 2,
        question: "¿Qué característica hace que la energía geotérmica sea una fuente de energía base confiable, a diferencia de la solar o eólica?",
        options: [
            { text: "Su dependencia de las condiciones climáticas.", outcome: "clima_falso", isCorrect: false },
            { text: "Su origen en el calor interno de la Tierra.", outcome: "calor_tierra", isCorrect: true },
            { text: "Su alto impacto visual en el paisaje.", outcome: "visual_falso", isCorrect: false },
            { text: "La facilidad de su instalación en cualquier lugar.", outcome: "facilidad_falso", isCorrect: false }
        ],
        branching: {
            next: "q3_transicion_impacto_climatico"
        },
        feedback: {
            correct: "¡Bien! El calor de la Tierra es una fuente constante.",
            incorrect: "Piensa en el origen de esta energía y cómo eso afecta su disponibilidad."
        },
        explanation: `La <a href="/glosary#energia-geotermica">energía geotérmica</a> aprovecha el <a href="/glosary#calor-interno-tierra">calor interno de la Tierra</a>, lo que la convierte en una <a href="/glosary#fuente-energia-base">fuente de energía base</a>; es decir, puede generar electricidad de manera continua e ininterrumpida, a diferencia de la <a href="/glosary#energia-solar">solar</a> o la <a href="/glosary#energia-eolica">eólica</a> que son <a href="/glosary#energias-intermitentes">intermitentes</a> y dependen de factores externos.`
    },

    // --- Pregunta de Repaso: ENERGÍA SOSTENIBLE (Bioenergía) ---
    {
        id: "q2_repaso_bioenergia",
        type: "multiple-choice",
        category: "Energía_Sostenible",
        points: 2,
        question: "¿Cuál es el principal insumo para la generación de bioenergía?",
        options: [
            { text: "Minerales extraídos de la tierra.", outcome: "minerales_falso", isCorrect: false },
            { text: "Viento y agua.", outcome: "viento_agua_falso", isCorrect: false },
            { text: "Materia orgánica y biomasa.", outcome: "biomasa_correcta", isCorrect: true },
            { text: "Radiación solar directa.", outcome: "solar_falso", isCorrect: false }
        ],
        branching: {
            next: "q3_transicion_impacto_climatico"
        },
        feedback: {
            correct: "¡Correcto! La bioenergía se basa en la materia viva.",
            incorrect: "Recuerda que la bioenergía utiliza recursos orgánicos."
        },
        explanation: `La <a href="/glosary#bioenergia">bioenergía</a> se obtiene a partir de la <a href="/glosary#biomasa">biomasa</a>, que incluye residuos agrícolas, forestales, urbanos o cultivos energéticos. Mediante procesos como la <a href="/glosary#combustion">combustión</a>, <a href="/glosary#gasificacion">gasificación</a> o <a href="/glosary#fermentacion">fermentación</a>, se genera <a href="/glosary#electricidad-biomasa">electricidad</a>, <a href="/glosary#biocombustibles">biocombustibles</a> o calor. Es una fuente renovable, pero su sostenibilidad depende de una <a href="/glosary#gestion-sostenible-recursos">gestión sostenible</a> de los recursos.`
    },

    // --- Transición a nueva categoría: IMPACTO CLIMÁTICO ---
    {
        id: "q3_transicion_impacto_climatico",
        type: "multiple-choice",
        category: "Impacto_Climático",
        points: 3,
        question: "¿Qué gas es el principal responsable del efecto invernadero causado por la actividad humana?",
        options: [
            { text: "Oxígeno (O2).", outcome: "oxigeno_falso", isCorrect: false },
            { text: "Nitrógeno (N2).", outcome: "nitrogeno_falso", isCorrect: false },
            { text: "Dióxido de carbono (CO2).", outcome: "co2_correcto", isCorrect: true },
            { text: "Argón (Ar).", outcome: "argon_falso", isCorrect: false }
        ],
        branching: {
            next: null, // Dejamos el next como null por ahora para no extender demasiado el ejemplo. Lo definiremos más adelante.
            outcomes: {
                "co2_correcto": "q4_fuentes_co2", // Acierto: profundiza en fuentes de CO2
                "oxigeno_falso": "q4_repaso_efecto_invernadero", // Error: repaso de efecto invernadero
                "nitrogeno_falso": "q4_repaso_efecto_invernadero",
                "argon_falso": "q4_repaso_efecto_invernadero"
            }
        },
        feedback: {
            correct: "¡Correcto! El CO2 es el que más contribuye al calentamiento global.",
            incorrect: "Es importante identificar el gas más impactante en el efecto invernadero."
        },
        explanation: `El <a href="/glosary#dioxido-carbono">dióxido de carbono (CO2)</a> es el <a href="/glosary#gas-efecto-invernadero">gas de efecto invernadero</a> más significativo derivado de actividades humanas, principalmente por la quema de <a href="/glosary#combustibles-fosiles">combustibles fósiles</a>. Contribuye al <a href="/glosary#calentamiento-global">calentamiento global</a> y al <a href="/glosary#cambio-climatico">cambio climático</a>. Otros GEI importantes incluyen el <a href="/glosary#metano">metano</a> y el <a href="/glosary#oxido-nitroso">óxido nitroso</a>.`
    },
    // --- Pregunta de Profundización: IMPACTO_CLIMÁTICO (Fuentes de CO2) ---
    {
        id: "q4_fuentes_co2",
        type: "multiple-choice",
        category: "Impacto_Climático",
        points: 4,
        question: "¿Cuál de estas actividades humanas es la principal fuente de emisiones de dióxido de carbono (CO2) a nivel global?",
        options: [
            { text: "La agricultura intensiva.", outcome: "agricultura_no_principal", isCorrect: false },
            { text: "La deforestación y cambios de uso del suelo.", outcome: "deforestacion_secundaria", isCorrect: false },
            { text: "La quema de combustibles fósiles para energía y transporte.", outcome: "combustibles_fosiles_principal", isCorrect: true },
            { text: "El uso excesivo de fertilizantes químicos.", outcome: "fertilizantes_no_principal", isCorrect: false }
        ],
        branching: {
            next: null, // Lo definiremos más adelante para transicionar a otra categoría o al final.
            outcomes: {
                "combustibles_fosiles_principal": "q5_transicion_gestion_residuos", // Acierto: transiciona a Residuos
                "agricultura_no_principal": "q5_repaso_impacto_climatico", // Error: repaso general de impacto climático
                "deforestacion_secundaria": "q5_repaso_impacto_climatico",
                "fertilizantes_no_principal": "q5_repaso_impacto_climatico"
            }
        },
        feedback: {
            correct: "¡Correcto! La dependencia de los combustibles fósiles es el mayor desafío.",
            incorrect: "Aunque todas contribuyen, una actividad es la predominante."
        },
        explanation: `La <a href="/glosary#quema-combustibles-fosiles">quema de combustibles fósiles</a> (carbón, petróleo, gas) para la <a href="/glosary#generacion-energia">generación de energía</a>, la <a href="/glosary#industria">industria</a> y el <a href="/glosary#transporte">transporte</a> es, con diferencia, la mayor fuente de <a href="/glosary#emisiones-co2">emisiones de CO2</a>. La <a href="/glosary#deforestacion">deforestación</a> también es un contribuyente significativo al <a href="/glosary#cambio-climatico">cambio climático</a>.`
    },

    // --- Pregunta de Repaso: IMPACTO_CLIMÁTICO (Efecto Invernadero General) ---
    {
        id: "q4_repaso_efecto_invernadero",
        type: "multiple-choice",
        category: "Impacto_Climático",
        points: 2,
        question: "¿Qué fenómeno natural es intensificado por la acumulación excesiva de gases como el CO2 en la atmósfera?",
        options: [
            { text: "La lluvia ácida.", outcome: "lluvia_acida_falso", isCorrect: false },
            { text: "El efecto invernadero.", outcome: "efecto_invernadero_correcto", isCorrect: true },
            { text: "La formación de agujeros en la capa de ozono.", outcome: "ozono_falso", isCorrect: false },
            { text: "La desertificación.", outcome: "desertificacion_falso", isCorrect: false }
        ],
        branching: {
            next: "q5_transicion_gestion_residuos" // Repasa y luego transiciona a Residuos
        },
        feedback: {
            correct: "¡Excelente! Es el efecto invernadero, pero su intensificación es el problema.",
            incorrect: "El gas CO2 está directamente relacionado con un fenómeno que regula la temperatura terrestre."
        },
        explanation: `El <a href="/glosary#efecto-invernadero">efecto invernadero</a> es un fenómeno natural y esencial para mantener la Tierra habitable. Sin embargo, la acumulación excesiva de <a href="/glosary#gases-efecto-invernadero">gases de efecto invernadero (GEI)</a>, como el <a href="/glosary#dioxido-carbono">CO2</a>, por actividades humanas, intensifica este efecto, provocando el <a href="/glosary#calentamiento-global">calentamiento global</a> y el <a href="/glosary#cambio-climatico">cambio climático</a>.`
    },

    // --- Pregunta de Transición e Inicio: GESTIÓN_DE_RESIDUOS_Y_ECONOMÍA_CIRCULAR ---
    {
        id: "q5_transicion_gestion_residuos",
        type: "multiple-choice",
        category: "Gestión_de_Residuos_y_Economía_Circular",
        isStartQuestion: true, // Puede ser un nuevo punto de inicio si se llega directamente aquí
        points: 3,
        question: "¿Cuál es la forma más efectiva de reducir la cantidad de residuos que llegan a los vertederos?",
        options: [
            { text: "Incinerar todos los residuos para generar energía.", outcome: "incineracion_no_optima", isCorrect: false },
            { text: "Aumentar la capacidad de los vertederos existentes.", outcome: "vertederos_no_optima", isCorrect: false },
            { text: "Aplicar la estrategia de las '3 R' (Reducir, Reutilizar, Reciclar).", outcome: "3r_optima", isCorrect: true },
            { text: "Exportar los residuos a otros países.", outcome: "exportar_no_optima", isCorrect: false }
        ],
        branching: {
            next: null, // Lo definiremos más adelante
            outcomes: {
                "3r_optima": "q6_profundiza_reducir", // Acierto: profundiza en la primera R
                "incineracion_no_optima": "q6_repaso_vertederos", // Error: repaso de impacto de vertederos
                "vertederos_no_optima": "q6_repaso_vertederos",
                "exportar_no_optima": "q6_repaso_vertederos"
            }
        },
        feedback: {
            correct: "¡Excelente! La clave está en la prevención y el aprovechamiento.",
            incorrect: "Pensar en la raíz del problema es fundamental para una gestión efectiva."
        },
        explanation: `La estrategia de las <a href="/glosary#3r">3 R (Reducir, Reutilizar, Reciclar)</a> es la base de la <a href="/glosary#gestion-residuos-solidos">gestión de residuos sólidos</a>. Prioriza <a href="/glosary#reducir">Reducir</a> el consumo, luego <a href="/glosary#reutilizar">Reutilizar</a> los productos y finalmente <a href="/glosary#reciclar">Reciclar</a> lo que ya no puede tener otro uso. Esto minimiza la cantidad de desechos que terminan en <a href="/glosary#vertederos">vertederos</a> o en la <a href="/glosary#incineracion">incineración</a>, contribuyendo a la <a href="/glosary#economia-circular">economía circular</a>.`
    },

    // --- Pregunta de Profundización: GESTIÓN_DE_RESIDUOS_Y_ECONOMÍA_CIRCULAR (Reducir) ---
    {
        id: "q6_profundiza_reducir",
        type: "multiple-choice",
        category: "Gestión_de_Residuos_y_Economía_Circular",
        points: 4,
        question: "Dentro de la jerarquía de residuos, ¿por qué 'Reducir' es la R más importante?",
        options: [
            { text: "Porque es la acción más fácil de realizar por el ciudadano.", outcome: "facil_falso", isCorrect: false },
            { text: "Porque evita la generación de residuos desde su origen.", outcome: "evita_generacion", isCorrect: true },
            { text: "Porque permite reciclar más materiales.", outcome: "reciclar_falso", isCorrect: false },
            { text: "Porque genera beneficios económicos directos.", outcome: "economico_falso", isCorrect: false }
        ],
        branching: {
            next: "q7_profundiza_reutilizar" // Profundiza más en las R
        },
        feedback: {
            correct: "¡Perfecto! Prevenir la basura es siempre la mejor opción.",
            incorrect: "Piensa en el principio fundamental de la prevención de residuos."
        },
        explanation: `<a href="/glosary#reducir">Reducir</a> es la <a href="/glosary#jerarquia-residuos">jerarquía de residuos</a> más importante porque ataca el problema en su raíz: evita la <a href="/glosary#generacion-residuos">generación de residuos</a>. Al disminuir el consumo y la demanda de nuevos productos, se ahorran <a href="/glosary#recursos-naturales">recursos naturales</a>, se reduce la <a href="/glosary#contaminacion">contaminación</a> asociada a la producción y se disminuye la cantidad de desechos que deben ser <a href="/glosary#gestion-residuos">gestionados</a>.`
    },

    // --- Pregunta de Profundización: GESTIÓN_DE_RESIDUOS_Y_ECONOMÍA_CIRCULAR (Reutilizar) ---
    {
        id: "q7_profundiza_reutilizar",
        type: "multiple-choice",
        category: "Gestión_de_Residuos_y_Economía_Circular",
        points: 4,
        question: "Un ejemplo de reutilización en una EcologicalCity sería:",
        options: [
            { text: "Fundir botellas de plástico para hacer nuevas botellas.", outcome: "reciclar_ejemplo", isCorrect: false },
            { text: "Transformar un contenedor de envío en una cafetería móvil.", outcome: "contenedor_cafeteria", isCorrect: true },
            { text: "Comprar productos con el menor empaque posible.", outcome: "reducir_ejemplo", isCorrect: false },
            { text: "Separar la basura orgánica para compostaje.", outcome: "compostaje_ejemplo", isCorrect: false }
        ],
        branching: {
            next: "q8_transicion_movilidad_urbana" // Transiciona a la siguiente categoría principal
        },
        feedback: {
            correct: "¡Excelente! Darle una nueva vida a objetos existentes es clave.",
            incorrect: "Recuerda que reutilizar significa usar algo de nuevo, a menudo con un propósito diferente."
        },
        explanation: `<a href="/glosary#reutilizar">Reutilizar</a> implica darle un segundo, tercer o incluso un nuevo uso a un objeto sin alterar significativamente su forma original. Transformar un <a href="/glosary#contenedor-envio">contenedor de envío</a> en una cafetería o vivienda es un claro ejemplo de <a href="/glosary#upcycling">upcycling</a> y <a href="/glosary#economia-circular">economía circular</a>. A diferencia de <a href="/glosary#reciclar">reciclar</a>, que implica transformar el material, la reutilización alarga directamente la <a href="/glosary#vida-util">vida útil</a> de los productos.`
    },

    // --- Pregunta de Repaso: GESTIÓN_DE_RESIDUOS_Y_ECONOMÍA_CIRCULAR (Impacto de Vertederos) ---
    {
        id: "q6_repaso_vertederos",
        type: "multiple-choice",
        category: "Gestión_de_Residuos_y_Economía_Circular",
        points: 2,
        question: "¿Cuál es uno de los principales problemas ambientales asociados a los vertederos tradicionales?",
        options: [
            { text: "Generación de energía limpia.", outcome: "energia_limpia_falso", isCorrect: false },
            { text: "Reducción de la huella de carbono.", outcome: "huella_carbono_falso", isCorrect: false },
            { text: "Producción de lixiviados y gas metano (GEI).", outcome: "lixiviados_metano_correcto", isCorrect: true },
            { text: "Mejora de la biodiversidad local.", outcome: "biodiversidad_falso", isCorrect: false }
        ],
        branching: {
            next: "q8_transicion_movilidad_urbana" // Repasa y transiciona a la siguiente categoría principal
        },
        feedback: {
            correct: "¡Exacto! Los vertederos son una fuente importante de contaminación.",
            incorrect: "Los vertederos no son una solución sostenible y tienen impactos negativos claros."
        },
        explanation: `Los <a href="/glosary#vertederos">vertederos</a> son fuentes significativas de <a href="/glosary#contaminacion">contaminación</a>. Producen <a href="/glosary#lixiviados">lixiviados</a> (líquidos tóxicos) que pueden contaminar el suelo y el agua, y generan <a href="/glosary#gas-metano">gas metano (CH4)</a>, un potente <a href="/glosary#gas-efecto-invernadero">gas de efecto invernadero</a>, lo que contribuye al <a href="/glosary#cambio-climatico">cambio climático</a>. Esto resalta la importancia de la <a href="/glosary#gestion-integral-residuos">gestión integral de residuos</a> y la <a href="/glosary#economia-circular">economía circular</a>.`
    },

    // --- Transición e Inicio: MOVILIDAD_URBANA_SOSTENIBLE ---
    {
        id: "q8_transicion_movilidad_urbana",
        type: "multiple-choice",
        category: "Movilidad_Urbana_Sostenible",
        isStartQuestion: true,
        points: 3,
        question: "¿Cuál de las siguientes opciones es la forma más sostenible de viajar diariamente en una ciudad para reducir tu huella de carbono?",
        options: [
            { text: "Usar un coche eléctrico de última generación.", outcome: "coche_electrico_no_mas_sostenible", isCorrect: false },
            { text: "Compartir coche con varios compañeros de trabajo.", outcome: "carpooling_bueno", isCorrect: false },
            { text: "Caminar o usar la bicicleta para distancias cortas y medias.", outcome: "caminar_bicicleta_optima", isCorrect: true },
            { text: "Usar el transporte público (autobús, metro, tren).", outcome: "transporte_publico_muy_bueno", isCorrect: false }
        ],
        branching: {
            next: null, // Lo definiremos más adelante
            outcomes: {
                "caminar_bicicleta_optima": "q9_beneficios_caminar_bici", // Acierto: profundiza
                "coche_electrico_no_mas_sostenible": "q9_repaso_coches_electricos", // Error: repaso de coches eléctricos
                "carpooling_bueno": "q9_repaso_transporte_alternativo", // Error: repaso general de transporte alternativo
                "transporte_publico_muy_bueno": "q9_beneficios_transporte_publico" // Aunque no es la 'más' sostenible en el absoluto, es muy buena.
            }
        },
        feedback: {
            correct: "¡Exacto! La opción más ecológica es la que no emite gases directamente.",
            incorrect: "Piensa en el impacto cero y el beneficio para tu salud."
        },
        explanation: `Caminar y usar la <a href="/glosary#bicicleta">bicicleta</a> son las formas de <a href="/glosary#movilidad-sostenible">movilidad sostenible</a> con menor <a href="/glosary#huella-carbono">huella de carbono</a>, ya que no generan <a href="/glosary#emisiones-gases-efecto-invernadero">emisiones de gases de efecto invernadero</a> directas. Además, promueven la <a href="/glosary#salud-urbana">salud urbana</a> y reducen la <a href="/glosary#congestion-trafico">congestión del tráfico</a>. El <a href="/glosary#transporte-publico">transporte público</a> y los <a href="/glosary#vehiculos-electricos">vehículos eléctricos</a> también son opciones sostenibles, pero la energía humana es la más pura.`
    },
    // --- Pregunta de Profundización: MOVILIDAD_URBANA_SOSTENIBLE (Beneficios de Caminar/Bici) ---
    {
        id: "q9_beneficios_caminar_bici",
        type: "multiple-choice",
        category: "Movilidad_Urbana_Sostenible",
        points: 4,
        question: "¿Además de la reducción de emisiones, qué otro beneficio directo para el ciudadano ofrece fomentar caminar y el uso de la bicicleta en una ciudad?",
        options: [
            { text: "Aumento de la congestión vehicular.", outcome: "congestion_falso", isCorrect: false },
            { text: "Mejora significativa de la salud física y mental.", outcome: "salud_directo", isCorrect: true },
            { text: "Incremento en el consumo de combustibles fósiles.", outcome: "combustible_falso", isCorrect: false },
            { text: "Disminución de las opciones de ocio en la ciudad.", outcome: "ocio_falso", isCorrect: false }
        ],
        branching: {
            next: null,
            outcomes: {
                "salud_directo": "q10_diseno_urbano_peaton", // Acierto: profundiza en diseño urbano
                "congestion_falso": "q10_repaso_alternativas_transporte", // Error: repaso de alternativas
                "combustible_falso": "q10_repaso_alternativas_transporte",
                "ocio_falso": "q10_repaso_alternativas_transporte"
            }
        },
        feedback: {
            correct: "¡Exacto! Es una victoria doble para el planeta y para ti.",
            incorrect: "Considera los beneficios personales de estas formas de movilidad."
        },
        explanation: `Fomentar el <a href="/glosary#caminar">caminar</a> y el uso de la <a href="/glosary#bicicleta">bicicleta</a> es clave para la <a href="/glosary#movilidad-sostenible">movilidad sostenible</a>. Además de reducir la <a href="/glosary#contaminacion-aire">contaminación del aire</a> y la <a href="/glosary#huella-carbono">huella de carbono</a>, estas actividades mejoran drásticamente la <a href="/glosary#salud-fisica-mental">salud física y mental</a> de los ciudadanos, reducen el <a href="/glosary#estres-urbano">estrés urbano</a> y promueven la <a href="/glosary#vida-comunitaria">vida comunitaria</a>.`
    },

    // --- Pregunta de Profundización: MOVILIDAD_URBANA_SOSTENIBLE (Transporte Público) ---
    {
        id: "q9_beneficios_transporte_publico",
        type: "multiple-choice",
        category: "Movilidad_Urbana_Sostenible",
        points: 3,
        question: "¿Qué beneficio principal ofrece un sistema de transporte público eficiente para la sostenibilidad de una ciudad?",
        options: [
            { text: "Aumento del uso de vehículos privados.", outcome: "privado_falso", isCorrect: false },
            { text: "Reducción significativa de la congestión vehicular y las emisiones.", outcome: "congestión_emisiones_correcto", isCorrect: true },
            { text: "Disminución de la accesibilidad para todos los ciudadanos.", outcome: "accesibilidad_falso", isCorrect: false },
            { text: "Mayor dependencia de los combustibles fósiles.", outcome: "combustibles_falsos", isCorrect: false }
        ],
        branching: {
            next: "q10_diseno_urbano_peaton" // Acierto: profundiza en diseño urbano, se une a la rama de 'caminar/bici'
        },
        feedback: {
            correct: "¡Correcto! El transporte público es un pilar para ciudades más limpias y fluidas.",
            incorrect: "Piensa en el impacto colectivo de muchas personas usando un solo medio de transporte."
        },
        explanation: `Un sistema de <a href="/glosary#transporte-publico-eficiente">transporte público eficiente</a> es fundamental para una <a href="/glosary#movilidad-urbana-sostenible">movilidad urbana sostenible</a>. Permite la <a href="/glosary#reduccion-congestion">reducción de la congestión vehicular</a>, disminuye las <a href="/glosary#emisiones-contaminantes">emisiones contaminantes</a> al aire y mejora la <a href="/glosary#accesibilidad-urbana">accesibilidad urbana</a> para todos. Complementa el uso de la <a href="/glosary#bicicleta">bicicleta</a> y el <a href="/glosary#caminar">caminar</a>, creando un ecosistema de <a href="/glosary#transporte-multimodal">transporte multimodal</a>.`
    },

    // --- Pregunta de Repaso: MOVILIDAD_URBANA_SOSTENIBLE (Coches Eléctricos) ---
    {
        id: "q9_repaso_coches_electricos",
        type: "multiple-choice",
        category: "Movilidad_Urbana_Sostenible",
        points: 2,
        question: "¿Cuál es el principal desafío de los coches eléctricos para ser 100% sostenibles?",
        options: [
            { text: "Su baja velocidad máxima.", outcome: "velocidad_falso", isCorrect: false },
            { text: "La fuente de electricidad utilizada para cargarlos.", outcome: "fuente_electricidad_desafio", isCorrect: true },
            { text: "Su alto nivel de ruido.", outcome: "ruido_falso", isCorrect: false },
            { text: "La escasez de modelos disponibles en el mercado.", outcome: "modelos_falso", isCorrect: false }
        ],
        branching: {
            next: "q10_repaso_alternativas_transporte" // Repasa y vuelve a un repaso más general
        },
        feedback: {
            correct: "¡Bien! La sostenibilidad del VE depende de cómo se genera su energía.",
            incorrect: "Aunque son cero emisiones en el punto de uso, su impacto total depende de la red eléctrica."
        },
        explanation: `Los <a href="/glosary#vehiculos-electricos">vehículos eléctricos (VE)</a> son una parte importante de la <a href="/glosary#movilidad-sostenible">movilidad sostenible</a>, ya que no producen <a href="/glosary#emisiones-escape">emisiones de escape</a> directas. Sin embargo, su sostenibilidad total depende de la <a href="/glosary#fuente-electricidad">fuente de electricidad</a>. Si la electricidad proviene de <a href="/glosary#energias-renovables">fuentes renovables</a> (solar, eólica), su <a href="/glosary#huella-carbono">huella de carbono</a> es mínima; si proviene de <a href="/glosary#combustibles-fosiles">combustibles fósiles</a>, el impacto se traslada a la <a href="/glosary#generacion-energia">generación</a>.`
    },

    // --- Pregunta de Repaso: MOVILIDAD_URBANA_SOSTENIBLE (Alternativas de Transporte) ---
    {
        id: "q9_repaso_transporte_alternativo",
        type: "multiple-choice",
        category: "Movilidad_Urbana_Sostenible",
        points: 2,
        question: "¿Qué alternativa al coche privado ayuda a reducir el número de vehículos en las calles?",
        options: [
            { text: "Construcción de más estacionamientos.", outcome: "estacionamiento_falso", isCorrect: false },
            { text: "Fomento del uso individual del taxi.", outcome: "taxi_falso", isCorrect: false },
            { text: "Sistemas de carsharing (coches compartidos).", outcome: "carsharing_correcto", isCorrect: true },
            { text: "Incentivar la compra de segundos coches.", outcome: "segundos_coches_falso", isCorrect: false }
        ],
        branching: {
            next: "q10_repaso_alternativas_transporte" // Vuelve a un repaso general, o a otra rama de movilidad si se decide.
        },
        feedback: {
            correct: "¡Exacto! Menos coches particulares, menos congestión.",
            incorrect: "Piensa en soluciones que optimicen el uso de los vehículos existentes o los reemplacen."
        },
        explanation: `Los sistemas de <a href="/glosary#carsharing">carsharing</a> o <a href="/glosary#coches-compartidos">coches compartidos</a> permiten que múltiples usuarios accedan a un vehículo cuando lo necesitan, reduciendo la necesidad de poseer un <a href="/glosary#vehiculo-privado">vehículo privado</a>. Esto disminuye el número total de <a href="/glosary#coches-en-circulacion">coches en circulación</a>, la <a href="/glosary#congestion-vehicular">congestión vehicular</a> y las <a href="/glosary#emisiones-contaminantes">emisiones contaminantes</a>, siendo una parte importante de la <a href="/glosary#movilidad-sostenible">movilidad sostenible</a>.`
    },

    // --- Pregunta de Profundización: URBANISMO_RESILIENTE (Diseño Urbano Peatonal) ---
    {
        id: "q10_diseno_urbano_peaton",
        type: "multiple-choice",
        category: "Urbanismo_Resiliente", // Transición a una categoría derivada
        points: 4,
        question: "¿Qué elemento de diseño urbano es fundamental para fomentar que los ciudadanos caminen más en la ciudad?",
        options: [
            { text: "Amplias autopistas de varios carriles.", outcome: "autopistas_falso", isCorrect: false },
            { text: "Acera estrecha con poca sombra.", outcome: "acera_falso", isCorrect: false },
            { text: "Red de aceras amplias, seguras, sombreadas y bien conectadas.", outcome: "aceras_optima", isCorrect: true },
            { text: "Grandes centros comerciales a las afueras de la ciudad.", outcome: "centros_comerciales_falso", isCorrect: false }
        ],
        branching: {
            next: null, // Lo definiremos más adelante
            outcomes: {
                "aceras_optima": "q11_transicion_tecnologia_verde", // Acierto: transiciona a Tecnología_Verde
                "autopistas_falso": "q11_repaso_urbanismo_basico", // Error: repaso de urbanismo
                "acera_falso": "q11_repaso_urbanismo_basico",
                "centros_comerciales_falso": "q11_repaso_urbanismo_basico"
            }
        },
        feedback: {
            correct: "¡Correcto! Un entorno amigable para el peatón es esencial.",
            incorrect: "Piensa en lo que hace que una caminata sea agradable y segura en una ciudad."
        },
        explanation: `Un <a href="/glosary#diseno-urbano-peatonal">diseño urbano peatonal</a> prioriza al <a href="/glosary#peatones">peatón</a> con <a href="/glosary#aceras-amplias">aceras amplias</a>, <a href="/glosary#seguridad-peatonal">seguridad</a>, <a href="/glosary#sombra-urbana">sombra</a> (árboles) y una <a href="/glosary#red-conectada">red conectada</a>. Esto no solo fomenta el <a href="/glosary#caminar">caminar</a> como forma de <a href="/glosary#movilidad-sostenible">movilidad sostenible</a>, sino que también mejora la <a href="/glosary#calidad-vida-urbana">calidad de vida urbana</a> y la <a href="/glosary#interaccion-social">interacción social</a>, haciendo las ciudades más <a href="/glosary#ciudades-resilientes">resilientes</a> y atractivas.`
    },

    // --- Pregunta de Repaso: URBANISMO_RESILIENTE (Alternativas Transporte General) ---
    {
        id: "q10_repaso_alternativas_transporte",
        type: "multiple-choice",
        category: "Movilidad_Urbana_Sostenible", // Aunque es un repaso, sigue en la categoría de Movilidad
        points: 2,
        question: "¿Cuál de estas opciones **NO** es considerada una alternativa de transporte sostenible para reducir la dependencia del coche privado?",
        options: [
            { text: "Uso de bicicletas compartidas.", outcome: "bici_compartida_sostenible", isCorrect: false },
            { text: "Fomento del teletrabajo.", outcome: "teletrabajo_sostenible", isCorrect: false },
            { text: "Construcción de aparcamientos subterráneos en el centro.", outcome: "aparcamientos_no_sostenible", isCorrect: true },
            { text: "Ampliación de las líneas de metro.", outcome: "metro_sostenible", isCorrect: false }
        ],
        branching: {
            next: "q11_transicion_tecnologia_verde" // Repasa y transiciona a Tecnología_Verde
        },
        feedback: {
            correct: "¡Exacto! Construir más aparcamientos fomenta más coches, no menos.",
            incorrect: "Piensa en qué acción realmente reduce la necesidad de usar un coche privado."
        },
        explanation: `Las <a href="/glosary#alternativas-transporte-sostenible">alternativas de transporte sostenible</a> buscan reducir la dependencia del <a href="/glosary#vehiculo-privado">coche privado</a>. Esto incluye <a href="/glosary#bicicletas-compartidas">bicicletas compartidas</a>, <a href="/glosary#transporte-publico">transporte público</a>, <a href="/glosary#teletrabajo">teletrabajo</a> (que reduce la necesidad de desplazamiento) y el <a href="/glosary#carpooling">carpooling</a>. La construcción de más <a href="/glosary#aparcamientos">aparcamientos</a>, aunque puede aliviar la <a href="/glosary#congestion-trafico">congestión</a> a corto plazo, a menudo incentiva el uso del coche y va en contra de una <a href="/glosary#movilidad-urbana-sostenible">movilidad urbana sostenible</a> a largo plazo.`
    },

    // --- Pregunta de Repaso: URBANISMO_RESILIENTE (Urbanismo Básico) ---
    {
        id: "q11_repaso_urbanismo_basico",
        type: "multiple-choice",
        category: "Urbanismo_Resiliente",
        points: 2,
        question: "¿Qué concepto de planificación urbana busca integrar la naturaleza en la ciudad para mejorar la calidad de vida y la sostenibilidad?",
        options: [
            { text: "Urbanismo gris.", outcome: "gris_falso", isCorrect: false },
            { text: "Expansión urbana descontrolada.", outcome: "expansion_falso", isCorrect: false },
            { text: "Infraestructura verde.", outcome: "infraestructura_verde_correcto", isCorrect: true },
            { text: "Zonificación industrial exclusiva.", outcome: "industrial_falso", isCorrect: false }
        ],
        branching: {
            next: "q11_transicion_tecnologia_verde" // Repasa y transiciona a Tecnología_Verde
        },
        feedback: {
            correct: "¡Correcto! La naturaleza es clave para una ciudad resiliente.",
            incorrect: "Piensa en cómo se puede 'colorear de verde' la infraestructura urbana."
        },
        explanation: `La <a href="/glosary#infraestructura-verde">infraestructura verde</a> es un enfoque de <a href="/glosary#planificacion-urbana">planificación urbana</a> que integra elementos naturales (parques, techos verdes, jardines verticales, corredores ecológicos) en el entorno construido. Su objetivo es proporcionar <a href="/glosary#servicios-ecosistemicos">servicios ecosistémicos</a>, como la gestión del <a href="/glosary#agua-lluvia">agua de lluvia</a>, la mejora de la <a href="/glosary#calidad-aire">calidad del aire</a> y el fomento de la <a href="/glosary#biodiversidad-urbana">biodiversidad urbana</a>, lo que contribuye a un <a href="/glosary#urbanismo-resiliente">urbanismo resiliente</a>.`
    },

    // --- Transición e Inicio: TECNOLOGÍA_VERDE ---
    {
        id: "q11_transicion_tecnologia_verde",
        type: "multiple-choice",
        category: "Tecnología_Verde",
        isStartQuestion: true,
        points: 3,
        question: "¿Qué tipo de tecnología ayuda a las ciudades a gestionar de manera más eficiente recursos como el agua y la energía a través de sensores y datos?",
        options: [
            { text: "Tecnología de la información tradicional.", outcome: "ti_tradicional_falso", isCorrect: false },
            { text: "Inteligencia artificial (IA) avanzada.", outcome: "ia_avanzada_falso", isCorrect: false },
            { text: "Tecnologías de Ciudades Inteligentes (Smart Cities).", outcome: "smart_cities_correcto", isCorrect: true },
            { text: "Desarrollo de videojuegos de simulación.", outcome: "videojuegos_falso", isCorrect: false }
        ],
        branching: {
            next: null, // Lo definiremos más adelante
            outcomes: {
                "smart_cities_correcto": "q12_aplicaciones_smart_cities", // Acierto: profundiza en Smart Cities
                "ti_tradicional_falso": "q12_repaso_tecnologia_verde", // Error: repaso general de tecnología verde
                "ia_avanzada_falso": "q12_repaso_tecnologia_verde",
                "videojuegos_falso": "q12_repaso_tecnologia_verde"
            }
        },
        feedback: {
            correct: "¡Exacto! Las Smart Cities usan la tecnología para optimizar la vida urbana.",
            incorrect: "Piensa en la integración de tecnología para una gestión urbana holística."
        },
        explanation: `Las <a href="/glosary#tecnologias-ciudades-inteligentes">Tecnologías de Ciudades Inteligentes (Smart Cities)</a> utilizan <a href="/glosary#internet-cosas">Internet de las Cosas (IoT)</a>, <a href="/glosary#big-data">Big Data</a> y <a href="/glosary#sensores-inteligentes">sensores inteligentes</a> para recolectar y analizar datos en tiempo real. Esto permite una <a href="/glosary#gestion-eficiente-recursos">gestión eficiente de recursos</a> como el <a href="/glosary#agua">agua</a>, la <a href="/glosary#energia">energía</a> y el <a href="/glosary#transporte">transporte</a>, promoviendo la <a href="/glosary#sostenibilidad-urbana">sostenibilidad urbana</a> y la <a href="/glosary#calidad-vida">calidad de vida</a> de los ciudadanos.`
    },
    // --- Pregunta de Profundización: TECNOLOGÍA_VERDE (Aplicaciones Smart Cities) ---
    {
        id: "q12_aplicaciones_smart_cities",
        type: "multiple-choice",
        category: "Tecnología_Verde",
        points: 4,
        question: "¿Qué aplicación específica de las tecnologías de Ciudades Inteligentes (Smart Cities) puede ayudar directamente a reducir el consumo de energía en el alumbrado público?",
        options: [
            { text: "Sensores de calidad del aire en autobuses.", outcome: "aire_falso", isCorrect: false },
            { text: "Semáforos inteligentes que optimizan el flujo de tráfico.", outcome: "trafico_falso", isCorrect: false },
            { text: "Sistemas de alumbrado público con sensores de presencia y luminosidad.", outcome: "alumbrado_correcto", isCorrect: true },
            { text: "Plataformas de votación electrónica para ciudadanos.", outcome: "votacion_falso", isCorrect: false }
        ],
        branching: {
            next: null, // Lo definiremos más adelante
            outcomes: {
                "alumbrado_correcto": "q13_profundiza_iot", // Acierto: profundiza en IoT
                "aire_falso": "q13_repaso_smart_cities_general", // Error: repaso general de Smart Cities
                "trafico_falso": "q13_repaso_smart_cities_general",
                "votacion_falso": "q13_repaso_smart_cities_general"
            }
        },
        feedback: {
            correct: "¡Exacto! El alumbrado inteligente es un gran ahorrador de energía.",
            incorrect: "Piensa en cómo la tecnología puede hacer que las luces se usen de forma más eficiente."
        },
        explanation: `Los <a href="/glosary#sistemas-alumbrado-inteligente">sistemas de alumbrado público inteligente</a> utilizan <a href="/glosary#sensores-presencia">sensores de presencia</a> y <a href="/glosary#sensores-luminosidad">luminosidad</a>, y se integran en las <a href="/glosary#plataformas-smart-city">plataformas Smart City</a>. Esto permite ajustar la intensidad de la luz o encenderla solo cuando es necesario, resultando en un ahorro energético significativo y una reducción de la <a href="/glosary#contaminacion-luminica">contaminación lumínica</a>, lo que contribuye a la <a href="/glosary#sostenibilidad-energetica">sostenibilidad energética</a> de la <a href="/glosary#ciudad-inteligente">ciudad inteligente</a>.`
    },

    // --- Pregunta de Profundización: TECNOLOGÍA_VERDE (Importancia del IoT) ---
    {
        id: "q13_profundiza_iot",
        type: "multiple-choice",
        category: "Tecnología_Verde",
        points: 4,
        question: "¿Cuál es el rol fundamental del 'Internet de las Cosas' (IoT) en el desarrollo de una EcologicalCity?",
        options: [
            { text: "Permitir solo la conexión de ordenadores personales.", outcome: "ordenadores_falso", isCorrect: false },
            { text: "Facilitar la comunicación exclusiva entre humanos.", outcome: "humanos_falso", isCorrect: false },
            { text: "Conectar dispositivos y sensores para recopilar y compartir datos en tiempo real.", outcome: "iot_conectividad_datos", isCorrect: true },
            { text: "Reemplazar completamente la infraestructura física de la ciudad.", outcome: "reemplazar_infra_falso", isCorrect: false }
        ],
        branching: {
            next: "q14_transicion_recursos_hidricos" // Acierto: transiciona a Recursos Hídricos
        },
        feedback: {
            correct: "¡Correcto! El IoT es el corazón de la recopilación de información en una Smart City.",
            incorrect: "El IoT va más allá de la interacción humana o el uso de computadoras."
        },
        explanation: `El <a href="/glosary#iot">Internet de las Cosas (IoT)</a> es crucial para las <a href="/glosary#ciudades-inteligentes">Ciudades Inteligentes</a> y la <a href="/glosary#sostenibilidad">sostenibilidad</a>. Implica la conexión de dispositivos, <a href="/glosary#sensores">sensores</a> y objetos cotidianos a internet, permitiéndoles <a href="/glosary#recopilacion-datos">recopilar y compartir datos en tiempo real</a>. Esta información se usa para optimizar la <a href="/glosary#gestion-recursos">gestión de recursos</a> (energía, agua, tráfico) y tomar decisiones basadas en datos para hacer la ciudad más eficiente y <a href="/glosary#resiliente">resiliente</a>.`
    },

    // --- Pregunta de Repaso: TECNOLOGÍA_VERDE (Smart Cities General) ---
    {
        id: "q13_repaso_smart_cities_general",
        type: "multiple-choice",
        category: "Tecnología_Verde",
        points: 2,
        question: "¿Qué objetivo principal persiguen las iniciativas de 'Ciudad Inteligente' (Smart City)?",
        options: [
            { text: "Promover el uso exclusivo de vehículos privados de lujo.", outcome: "lujo_falso", isCorrect: false },
            { text: "Ignorar la participación ciudadana en la toma de decisiones.", outcome: "participacion_falso", isCorrect: false },
            { text: "Mejorar la eficiencia urbana, la sostenibilidad y la calidad de vida de sus habitantes mediante tecnología.", outcome: "eficiencia_sostenibilidad_calidad_vida_correcto", isCorrect: true },
            { text: "Construir únicamente edificios con diseños futuristas.", outcome: "futurista_falso", isCorrect: false }
        ],
        branching: {
            next: "q14_transicion_recursos_hidricos" // Repasa y luego transiciona a Recursos Hídricos
        },
        feedback: {
            correct: "¡Correcto! Es una visión integral para el bienestar urbano.",
            incorrect: "Las Smart Cities buscan una mejora general de la ciudad usando la tecnología como herramienta."
        },
        explanation: `El objetivo de las <a href="/glosary#ciudades-inteligentes">Ciudades Inteligentes (Smart Cities)</a> es utilizar la <a href="/glosary#tecnologia-urbana">tecnología urbana</a> para mejorar la <a href="/glosary#eficiencia-urbana">eficiencia urbana</a>, la <a href="/glosary#sostenibilidad">sostenibilidad</a> y la <a href="/glosary#calidad-vida">calidad de vida</a> de sus ciudadanos. Esto abarca desde la <a href="/glosary#gestion-residuos">gestión de residuos</a> y la <a href="/glosary#movilidad-inteligente">movilidad inteligente</a> hasta el uso eficiente de la <a href="/glosary#energia">energía</a> y el <a href="/glosary#agua">agua</a>, fomentando también la <a href="/glosary#participacion-ciudadana">participación ciudadana</a>.`
    },

    // --- Pregunta de Transición e Inicio: RECURSOS_HÍDRICOS_Y_AGUA ---
    {
        id: "q14_transicion_recursos_hidricos",
        type: "multiple-choice",
        category: "Recursos_Hídricos_y_Agua",
        isStartQuestion: true,
        points: 3,
        question: "¿Por qué la escasez de agua dulce es un desafío creciente para las ciudades a nivel global?",
        options: [
            { text: "Debido a que los océanos se están secando.", outcome: "oceanos_falso", isCorrect: false },
            { text: "Porque la mayor parte del agua en la Tierra es salada o está congelada, y el aumento de la demanda y el cambio climático.", outcome: "agua_dulce_escasez", isCorrect: true },
            { text: "El agua se está volviendo tóxica en todas partes.", outcome: "toxica_falso", isCorrect: false },
            { text: "Porque la tecnología no permite desalinizar el agua.", outcome: "desalinizacion_falso", isCorrect: false }
        ],
        branching: {
            next: null,
            outcomes: {
                "agua_dulce_escasez": "q15_profundiza_ahorro_agua", // Acierto: profundiza en ahorro de agua
                "oceanos_falso": "q15_repaso_ciclo_agua", // Error: repaso ciclo del agua
                "toxica_falso": "q15_repaso_ciclo_agua",
                "desalinizacion_falso": "q15_repaso_ciclo_agua"
            }
        },
        feedback: {
            correct: "¡Correcto! La disponibilidad de agua dulce es limitada y bajo presión.",
            incorrect: "Considera la distribución global del agua y los factores que afectan su disponibilidad."
        },
        explanation: `La <a href="/glosary#escasez-agua-dulce">escasez de agua dulce</a> es un desafío crítico porque la mayor parte del <a href="/glosary#agua-tierra">agua en la Tierra</a> es salada o está atrapada en glaciares. La pequeña fracción de <a href="/glosary#agua-dulce-accesible">agua dulce accesible</a> se ve afectada por el <a href="/glosary#aumento-demanda-agua">aumento de la demanda</a> (crecimiento poblacional, industria) y el <a href="/glosary#cambio-climatico">cambio climático</a> (sequías, alteraciones del <a href="/glosary#ciclo-hidrologico">ciclo hidrológico</a>). Las <a href="/glosary#ciudades-agua">ciudades</a> deben implementar <a href="/glosary#gestion-sostenible-agua">gestión sostenible del agua</a>.`
    },

    // --- Pregunta de Profundización: RECURSOS_HÍDRICOS_Y_AGUA (Ahorro de Agua Doméstico) ---
    {
        id: "q15_profundiza_ahorro_agua",
        type: "multiple-choice",
        category: "Recursos_Hídricos_y_Agua",
        points: 4,
        question: "¿Qué acción individual tiene el mayor impacto en la reducción del consumo de agua en el hogar?",
        options: [
            { text: "Lavar el coche con una manguera en lugar de cubos.", outcome: "lavar_coche_falso", isCorrect: false },
            { text: "Dejar el grifo abierto mientras te cepillas los dientes.", outcome: "grifo_abierto_falso", isCorrect: false },
            { text: "Tomar duchas cortas en lugar de baños de tina largos.", outcome: "duchas_cortas_correcto", isCorrect: true },
            { text: "Regar el jardín durante las horas de mayor sol.", outcome: "regar_sol_falso", isCorrect: false }
        ],
        branching: {
            next: "q16_transicion_biodiversidad" // Acierto: transiciona a Biodiversidad Urbana
        },
        feedback: {
            correct: "¡Exacto! Las duchas son de los mayores consumidores de agua.",
            incorrect: "Piensa en las actividades diarias que usan grandes volúmenes de agua."
        },
        explanation: `El <a href="/glosary#ahorro-agua-domestico">ahorro de agua doméstico</a> es vital. Las <a href="/glosary#duchas-cortas">duchas cortas</a> son más eficientes que los <a href="/glosary#banos-tina">baños de tina</a> largos, que consumen mucha más <a href="/glosary#agua">agua</a>. Implementar medidas como cerrar el grifo, reparar fugas y usar <a href="/glosary#electrodomesticos-eficientes">electrodomésticos eficientes</a> contribuye a la <a href="/glosary#gestion-sostenible-agua">gestión sostenible del agua</a> en las ciudades, reduciendo la <a href="/glosary#huella-hidrica">huella hídrica</a> individual y colectiva.`
    },

    // --- Pregunta de Repaso: RECURSOS_HÍDRICOS_Y_AGUA (Ciclo del Agua Básico) ---
    {
        id: "q15_repaso_ciclo_agua",
        type: "multiple-choice",
        category: "Recursos_Hídricos_y_Agua",
        points: 2,
        question: "¿Cuál es el proceso natural por el cual el agua se mueve entre la superficie terrestre, la atmósfera y los cuerpos de agua?",
        options: [
            { text: "La fotosíntesis.", outcome: "fotosintesis_falso", isCorrect: false },
            { text: "El ciclo del carbono.", outcome: "carbono_falso", isCorrect: false },
            { text: "El ciclo hidrológico (o ciclo del agua).", outcome: "ciclo_agua_correcto", isCorrect: true },
            { text: "La formación de nubes por contaminación.", outcome: "contaminacion_nubes_falso", isCorrect: false }
        ],
        branching: {
            next: "q16_transicion_biodiversidad" // Repasa y transiciona a Biodiversidad Urbana
        },
        feedback: {
            correct: "¡Bien! El ciclo hidrológico es fundamental para la vida.",
            incorrect: "Este ciclo describe cómo el agua circula en nuestro planeta."
        },
        explanation: `El <a href="/glosary#ciclo-hidrologico">ciclo hidrológico</a>, o <a href="/glosary#ciclo-agua">ciclo del agua</a>, es el proceso continuo de circulación del <a href="/glosary#agua">agua</a> en la Tierra. Incluye la <a href="/glosary#evaporacion">evaporación</a>, la <a href="/glosary#condensacion">condensación</a>, la <a href="/glosary#precipitacion">precipitación</a>, la <a href="/glosary#transpiracion">transpiración</a> y la <a href="/glosary#escorrentia">escorrentía</a>. Comprender este ciclo es vital para la <a href="/glosary#gestion-recursos-hidricos">gestión de recursos hídricos</a> y la <a href="/glosary#resiliencia-hidrica">resiliencia hídrica</a> de las <a href="/glosary#ciudades-agua">ciudades</a> frente al <a href="/glosary#cambio-climatico">cambio climático</a>.`
    },

    // --- Pregunta de Profundización: RECURSOS_HÍDRICOS_Y_AGUA (Tecnologías de Tratamiento) ---
    {
        id: "q16_tecnologias_tratamiento_agua",
        type: "multiple-choice",
        category: "Recursos_Hídricos_y_Agua",
        points: 4,
        question: "¿Qué tecnología avanzada es crucial para convertir agua de mar en agua potable en regiones con escasez severa de recursos hídricos?",
        options: [
            { text: "Cloración.", outcome: "cloracion_falso", isCorrect: false },
            { text: "Desalinización por ósmosis inversa.", outcome: "desalinizacion_correcto", isCorrect: true },
            { text: "Filtración simple.", outcome: "filtracion_falso", isCorrect: false },
            { text: "Uso de ozono.", outcome: "ozono_falso", isCorrect: false }
        ],
        branching: {
            next: "q17_transicion_biodiversidad" // Acierto: Transiciona a Biodiversidad Urbana
        },
        feedback: {
            correct: "¡Excelente! La desalinización es clave en muchas zonas costeras.",
            incorrect: "Piensa en el proceso que elimina la sal del agua para hacerla potable."
        },
        explanation: `La <a href="/glosary#desalinizacion">desalinización</a>, especialmente a través de la <a href="/glosary#osmosis-inversa">ósmosis inversa</a>, es una <a href="/glosary#tecnologia-agua-avanzada">tecnología avanzada</a> que elimina la sal y otros minerales del <a href="/glosary#agua-mar">agua de mar</a> o <a href="/glosary#agua-salobre">agua salobre</a> para producir <a href="/glosary#agua-potable">agua potable</a>. Es vital para la <a href="/glosary#seguridad-hidrica">seguridad hídrica</a> en regiones áridas y costeras, aunque es un proceso intensivo en <a href="/glosary#energia">energía</a> y con consideraciones de <a href="/glosary#gestion-salmuera">gestión de la salmuera</a>, lo que conecta con la <a href="/glosary#energia-sostenible">energía sostenible</a>.`
    },

    // --- Pregunta de Transición e Inicio: BIODIVERSIDAD_URBANA ---
    {
        id: "q17_transicion_biodiversidad",
        type: "multiple-choice",
        category: "Biodiversidad_Urbana",
        isStartQuestion: true,
        points: 3,
        question: "¿Qué beneficio principal aporta la 'infraestructura verde' (parques, techos verdes) a la biodiversidad en las ciudades?",
        options: [
            { text: "Aumenta la necesidad de pesticidas químicos.", outcome: "pesticidas_falso", isCorrect: false },
            { text: "Crea nuevos hábitats y corredores para la fauna y flora.", outcome: "habitats_correcto", isCorrect: true },
            { text: "Reduce la cantidad de oxígeno en la atmósfera.", outcome: "oxigeno_falso", isCorrect: false },
            { text: "Promueve la expansión de especies invasoras.", outcome: "invasoras_falso", isCorrect: false }
        ],
        branching: {
            next: null,
            outcomes: {
                "habitats_correcto": "q18_profundiza_polinizadores", // Acierto: profundiza en polinizadores
                "pesticidas_falso": "q18_repaso_beneficios_naturaleza", // Error: repaso beneficios naturaleza urbana
                "oxigeno_falso": "q18_repaso_beneficios_naturaleza",
                "invasoras_falso": "q18_repaso_beneficios_naturaleza"
            }
        },
        feedback: {
            correct: "¡Exacto! Es crucial para mantener la vida silvestre en el entorno urbano.",
            incorrect: "Piensa en cómo los espacios verdes benefician directamente a los animales y plantas de la ciudad."
        },
        explanation: `La <a href="/glosary#infraestructura-verde">infraestructura verde</a> (parques urbanos, <a href="/glosary#techos-verdes">techos verdes</a>, <a href="/glosary#jardines-verticales">jardines verticales</a>) es vital para la <a href="/glosary#biodiversidad-urbana">biodiversidad urbana</a>. Proporciona <a href="/glosary#nuevos-habitats">nuevos hábitats</a>, <a href="/glosary#corredores-ecologicos">corredores ecológicos</a> y fuentes de alimento para la <a href="/glosary#fauna-flora-urbana">fauna y flora urbana</a>. Esto ayuda a mantener el <a href="/glosary#equilibrio-ecosistema">equilibrio del ecosistema</a>, mejora la <a href="/glosary#calidad-aire">calidad del aire</a> y del <a href="/glosary#agua">agua</a>, y aumenta la <a href="/glosary#resiliencia-urbana">resiliencia urbana</a> frente al <a href="/glosary#cambio-climatico">cambio climático</a>.`
    },
    // --- Pregunta de Profundización: BIODIVERSIDAD_URBANA (Polinizadores) ---
    {
        id: "q18_profundiza_polinizadores",
        type: "multiple-choice",
        category: "Biodiversidad_Urbana",
        points: 4,
        question: "¿Por qué es crucial proteger a los polinizadores (como abejas y mariposas) en el entorno urbano?",
        options: [
            { text: "Solo porque son bonitos y decoran la ciudad.", outcome: "bonitos_falso", isCorrect: false },
            { text: "Son esenciales para la reproducción de muchas plantas, incluyendo cultivos de alimentos.", outcome: "polinizadores_esenciales", isCorrect: true },
            { text: "Ayudan a controlar la población de roedores.", outcome: "roedores_falso", isCorrect: false },
            { text: "Porque se alimentan de plagas de mosquitos.", outcome: "mosquitos_falso", isCorrect: false }
        ],
        branching: {
            next: null, // Lo definiremos más adelante
            outcomes: {
                "polinizadores_esenciales": "q19_profundiza_beneficios_ecosistemas", // Acierto: profundiza en servicios ecosistémicos
                "bonitos_falso": "q19_repaso_biodiversidad_basico", // Error: repaso general de biodiversidad
                "roedores_falso": "q19_repaso_biodiversidad_basico",
                "mosquitos_falso": "q19_repaso_biodiversidad_basico"
            }
        },
        feedback: {
            correct: "¡Exacto! Son pequeños héroes de nuestros ecosistemas y nuestra alimentación.",
            incorrect: "Su función va mucho más allá de su apariencia o de control de plagas directas."
        },
        explanation: `Los <a href="/glosary#polinizadores">polinizadores</a>, como <a href="/glosary#abejas">abejas</a>, <a href="/glosary#mariposas">mariposas</a> y otros insectos, son fundamentales para la <a href="/glosary#biodiversidad-urbana">biodiversidad urbana</a> y los <a href="/glosary#ecosistemas">ecosistemas</a> globales. Son los responsables de la <a href="/glosary#reproduccion-plantas">reproducción de la mayoría de las plantas</a> con flores, incluyendo un gran porcentaje de nuestros <a href="/glosary#cultivos-alimentos">cultivos de alimentos</a>. Proteger sus <a href="/glosary#habitats-polinizadores">hábitats</a> y evitar <a href="/glosary#pesticidas-nocivos">pesticidas nocivos</a> es clave para la <a href="/glosary#seguridad-alimentaria">seguridad alimentaria</a> y la <a href="/glosary#salud-ecosistema">salud del ecosistema</a>.`
    },

    // --- Pregunta de Repaso: BIODIVERSIDAD_URBANA (Beneficios Naturaleza Urbana) ---
    {
        id: "q18_repaso_beneficios_naturaleza",
        type: "multiple-choice",
        category: "Biodiversidad_Urbana",
        points: 2,
        question: "¿Qué beneficio principal aportan los espacios verdes urbanos a los ciudadanos, además de la biodiversidad?",
        options: [
            { text: "Aumento del ruido ambiental.", outcome: "ruido_falso", isCorrect: false },
            { text: "Mejora de la calidad del aire y reducción del estrés.", outcome: "aire_estres_correcto", isCorrect: true },
            { text: "Incremento de las temperaturas urbanas.", outcome: "temperaturas_falso", isCorrect: false },
            { text: "Disminución de la actividad física.", outcome: "fisica_falso", isCorrect: false }
        ],
        branching: {
            next: "q19_repaso_biodiversidad_basico" // Repasa y vuelve al repaso general si falló
        },
        feedback: {
            correct: "¡Muy bien! Los parques son pulmones y sanatorios para la ciudad.",
            incorrect: "Piensa en cómo un paseo por un parque te hace sentir, y el aire que respiras."
        },
        explanation: `Los <a href="/glosary#espacios-verdes-urbanos">espacios verdes urbanos</a> no solo fomentan la <a href="/glosary#biodiversidad-urbana">biodiversidad urbana</a>, sino que ofrecen múltiples <a href="/glosary#beneficios-ciudadanos">beneficios a los ciudadanos</a>. Actúan como <a href="/glosary#filtros-aire">filtros de aire</a> naturales, reducen el <a href="/glosary#efecto-isla-calor">efecto de isla de calor urbano</a> y promueven la <a href="/glosary#salud-mental">salud mental</a> y el <a href="/glosary#bienestar">bienestar</a> al reducir el <a href="/glosary#estres-urbano">estrés urbano</a> y ofrecer lugares para la <a href="/glosary#actividad-fisica">actividad física</a> y la <a href="/glosary#interaccion-social">interacción social</a>.`
    },

    // --- Pregunta de Profundización: BIODIVERSIDAD_URBANA (Servicios Ecosistémicos) ---
    {
        id: "q19_profundiza_beneficios_ecosistemas",
        type: "multiple-choice",
        category: "Biodiversidad_Urbana",
        points: 4,
        question: "¿Qué se entiende por 'servicios ecosistémicos' en el contexto de una ciudad sostenible?",
        options: [
            { text: "Solo los beneficios monetarios que la naturaleza genera para la economía.", outcome: "monetarios_falso", isCorrect: false },
            { text: "Los servicios de limpieza y mantenimiento de parques.", outcome: "limpieza_falso", isCorrect: false },
            { text: "Los beneficios que los ecosistemas naturales aportan a los humanos, como aire limpio, agua, regulación del clima, etc.", outcome: "servicios_ecosistemicos_correcto", isCorrect: true },
            { text: "La venta de productos orgánicos en mercados urbanos.", outcome: "organicos_falso", isCorrect: false }
        ],
        branching: {
            next: "q20_transicion_ciudadania_participacion" // Acierto: transiciona a Ciudadanía_y_Participación
        },
        feedback: {
            correct: "¡Exacto! Son los regalos vitales que la naturaleza nos da.",
            incorrect: "Piensa en todas las formas en que la naturaleza sostiene nuestra vida, no solo en un sentido económico o de mantenimiento."
        },
        explanation: `Los <a href="/glosary#servicios-ecosistemicos">servicios ecosistémicos</a> son los múltiples <a href="/glosary#beneficios-ecosistemas">beneficios que los ecosistemas naturales</a> (dentro y fuera de la ciudad) proporcionan a los <a href="/glosary#humanos">humanos</a>. Incluyen la provisión de <a href="/glosary#aire-limpio">aire limpio</a>, <a href="/glosary#agua-potable">agua potable</a>, <a href="/glosary#polinizacion">polinización</a> de cultivos, <a href="/glosary#regulacion-clima">regulación del clima</a>, control de <a href="/glosary#inundaciones">inundaciones</a> y <a href="/glosary#suelos-fertiles">suelos fértiles</a>. Preservar la <a href="/glosary#biodiversidad">biodiversidad</a> es clave para mantener estos <a href="/glosary#servicios-vitales">servicios vitales</a> en una <a href="/glosary#ciudad-sostenible">ciudad sostenible</a>.`
    },

    // --- Pregunta de Repaso: BIODIVERSIDAD_URBANA (Básico) ---
    {
        id: "q19_repaso_biodiversidad_basico",
        type: "multiple-choice",
        category: "Biodiversidad_Urbana",
        points: 2,
        question: "¿Qué significa 'biodiversidad' en el contexto de un ecosistema urbano?",
        options: [
            { text: "La cantidad de edificios de diferentes estilos en la ciudad.", outcome: "edificios_falso", isCorrect: false },
            { text: "La variedad de especies de vida silvestre (animales, plantas, microorganismos) presentes en el entorno urbano.", outcome: "variedad_especies_correcto", isCorrect: true },
            { text: "El número de vehículos de diferentes marcas en circulación.", outcome: "vehiculos_falso", isCorrect: false },
            { text: "La diversidad de culturas humanas en la ciudad.", outcome: "culturas_falso", isCorrect: false }
        ],
        branching: {
            next: "q20_transicion_ciudadania_participacion" // Repasa y transiciona a Ciudadanía_y_Participación
        },
        feedback: {
            correct: "¡Correcto! La diversidad de vida es un indicador de salud ecológica.",
            incorrect: "La biodiversidad se refiere a la vida natural, no a elementos creados por el hombre o la cultura."
        },
        explanation: `La <a href="/glosary#biodiversidad">biodiversidad</a>, en cualquier <a href="/glosary#ecosistema">ecosistema</a> (incluyendo el <a href="/glosary#entorno-urbano">entorno urbano</a>), se refiere a la <a href="/glosary#variedad-vida">variedad de vida</a>: la diversidad de <a href="/glosary#especies">especies</a> (<a href="/glosary#animales">animales</a>, <a href="/glosary#plantas">plantas</a>, <a href="/glosary#microorganismos">microorganismos</a>), la diversidad genética dentro de esas especies y la diversidad de los <a href="/glosary#ecosistemas">ecosistemas</a> en sí. Es un indicador clave de la <a href="/glosary#salud-ecosistemica">salud ecosistémica</a> y la <a href="/glosary#resiliencia-urbana">resiliencia urbana</a>.`
    },

    // --- Pregunta de Transición e Inicio: CIUDADANÍA_Y_PARTICIPACIÓN ---
    {
        id: "q20_transicion_ciudadania_participacion",
        type: "multiple-choice",
        category: "Ciudadanía_y_Participación",
        isStartQuestion: true,
        points: 3,
        question: "¿Qué rol juega la participación ciudadana activa en la construcción de una EcologicalCity?",
        options: [
            { text: "Ninguno, las decisiones las toman únicamente los expertos.", outcome: "expertos_falso", isCorrect: false },
            { text: "Asegura que las políticas ambientales reflejen las necesidades y valores de la comunidad.", outcome: "participacion_activa_correcto", isCorrect: true },
            { text: "Solo sirve para retrasar los proyectos urbanos.", outcome: "retraso_falso", isCorrect: false },
            { text: "Es útil solo en países con baja educación ambiental.", outcome: "baja_educacion_falso", isCorrect: false }
        ],
        branching: {
            next: null,
            outcomes: {
                "participacion_activa_correcto": "q21_profundiza_educacion_ambiental", // Acierto: profundiza en educación ambiental
                "expertos_falso": "q21_repaso_rol_ciudadano", // Error: repaso rol ciudadano
                "retraso_falso": "q21_repaso_rol_ciudadano",
                "baja_educacion_falso": "q21_repaso_rol_ciudadano"
            }
        },
        feedback: {
            correct: "¡Correcto! La voz del ciudadano es esencial para una sostenibilidad real.",
            incorrect: "La sostenibilidad es un esfuerzo colectivo. ¿Quién mejor que los propios habitantes para guiarla?"
        },
        explanation: `La <a href="/glosary#participacion-ciudadana-activa">participación ciudadana activa</a> es un pilar de la <a href="/glosary#gobernanza-urbana-sostenible">gobernanza urbana sostenible</a>. Permite que las <a href="/glosary#politicas-ambientales">políticas ambientales</a> y los <a href="/glosary#proyectos-urbanos">proyectos urbanos</a> reflejen las <a href="/glosary#necesidades-valores-comunidad">necesidades y valores de la comunidad</a>, fomentando el sentido de <a href="/glosary#apropiacion-ciudadana">apropiación ciudadana</a>. Esto resulta en soluciones más efectivas y equitativas para los desafíos de <a href="/glosary#sostenibilidad">sostenibilidad</a> y <a href="/glosary#resiliencia-urbana">resiliencia urbana</a>, construyendo una verdadera <a href="/glosary#ecologicalcity">EcologicalCity</a>.`
    },

    // --- Pregunta de Profundización: CIUDADANÍA_Y_PARTICIPACIÓN (Educación Ambiental) ---
    {
        id: "q21_profundiza_educacion_ambiental",
        type: "multiple-choice",
        category: "Ciudadanía_y_Participación",
        points: 4,
        question: "¿Cuál es el propósito principal de la educación ambiental en el contexto de una ciudad sostenible?",
        options: [
            { text: "Enseñar a los niños a reciclar solo en la escuela.", outcome: "solo_escuela_falso", isCorrect: false },
            { text: "Informar a los ciudadanos sobre problemas ambientales y capacitarlos para tomar decisiones responsables.", outcome: "informar_capacitar_correcto", isCorrect: true },
            { text: "Promover el miedo a los desastres naturales.", outcome: "miedo_falso", isCorrect: false },
            { text: "Obligar a todos a vivir de una manera específica.", outcome: "obligar_falso", isCorrect: false }
        ],
        branching: {
            next: "q22_transicion_consumo_responsable" // Acierto: transiciona a Consumo_Responsable
        },
        feedback: {
            correct: "¡Excelente! El conocimiento es poder para la acción ambiental.",
            incorrect: "La educación ambiental busca empoderar a las personas con información y herramientas para un cambio positivo."
        },
        explanation: `La <a href="/glosary#educacion-ambiental">educación ambiental</a> busca <a href="/glosary#informar-ciudadanos">informar a los ciudadanos</a> sobre los <a href="/glosary#problemas-ambientales">problemas ambientales</a> y las <a href="/glosary#soluciones-sostenibles">soluciones sostenibles</a>. Su propósito principal es <a href="/glosary#capacitar-decisiones-responsables">capacitarlos para tomar decisiones responsables</a> en su vida diaria, tanto a nivel individual como colectivo, fomentando la <a href="/glosary#conciencia-ambiental">conciencia ambiental</a>, el <a href="/glosary#pensamiento-critico">pensamiento crítico</a> y la <a href="/glosary#participacion-activa">participación activa</a> en la construcción de una <a href="/glosary#sociedad-sostenible">sociedad sostenible</a> y una <a href="/glosary#ecologicalcity">EcologicalCity</a>.`
    },

    // --- Pregunta de Repaso: CIUDADANÍA_Y_PARTICIPACIÓN (Rol Ciudadano) ---
    {
        id: "q21_repaso_rol_ciudadano",
        type: "multiple-choice",
        category: "Ciudadanía_y_Participación",
        points: 2,
        question: "¿Cuál de estas acciones representa un compromiso activo del ciudadano con la sostenibilidad urbana?",
        options: [
            { text: "Descartar los residuos sin separar.", outcome: "descartar_falso", isCorrect: false },
            { text: "Ignorar las iniciativas de reciclaje comunitarias.", outcome: "ignorar_falso", isCorrect: false },
            { text: "Participar en programas de voluntariado ambiental local.", outcome: "voluntariado_correcto", isCorrect: true },
            { text: "Usar excesivamente el aire acondicionado en casa.", outcome: "ac_excesivo_falso", isCorrect: false }
        ],
        branching: {
            next: "q22_transicion_consumo_responsable" // Repasa y transiciona a Consumo_Responsable
        },
        feedback: {
            correct: "¡Excelente! Involucrarse directamente es clave.",
            incorrect: "Las acciones sostenibles requieren un esfuerzo consciente y participativo."
        },
        explanation: `El <a href="/glosary#rol-ciudadano-sostenibilidad">rol ciudadano en la sostenibilidad</a> es fundamental. <a href="/glosary#participar-voluntariado-ambiental">Participar en programas de voluntariado ambiental</a> local es una forma directa y activa de contribuir. Otras acciones incluyen la <a href="/glosary#separacion-residuos">separación de residuos</a>, el <a href="/glosary#ahorro-energia-agua">ahorro de energía y agua</a>, el uso de <a href="/glosary#transporte-sostenible">transporte sostenible</a> y el apoyo al <a href="/glosary#consumo-responsable">consumo responsable</a>. Cada acción, por pequeña que parezca, contribuye a la <a href="/glosary#transformacion-urbana">transformación urbana</a> hacia una <a href="/glosary#ecologicalcity">EcologicalCity</a>.`
    },

    // --- Pregunta de Transición e Inicio: CONSUMO_RESPONSABLE ---
    {
        id: "q22_transicion_consumo_responsable",
        type: "multiple-choice",
        category: "Consumo_Responsable",
        isStartQuestion: true,
        points: 3,
        question: "¿Qué significa el concepto de 'obsolescencia programada' y por qué es un desafío para la sostenibilidad?",
        options: [
            { text: "Es la capacidad de los productos para durar indefinidamente.", outcome: "indefinido_falso", isCorrect: false },
            { text: "Es el diseño intencional de productos para que tengan una vida útil limitada y así fomentar nuevas compras.", outcome: "obsolescencia_programada_correcto", isCorrect: true },
            { text: "Se refiere a la reparación gratuita de productos antiguos.", outcome: "reparacion_falso", isCorrect: false },
            { text: "Es una técnica para hacer productos más baratos.", outcome: "baratos_falso", isCorrect: false }
        ],
        branching: {
            next: null,
            outcomes: {
                "obsolescencia_programada_correcto": "q23_profundiza_economia_circular", // Acierto: profundiza en Economía Circular (ya vista, pero la reforzamos)
                "indefinido_falso": "q23_repaso_consumo_sostenible", // Error: repaso consumo sostenible
                "reparacion_falso": "q23_repaso_consumo_sostenible",
                "baratos_falso": "q23_repaso_consumo_sostenible"
            }
        },
        feedback: {
            correct: "¡Exacto! Un gran obstáculo para la circularidad y la reducción de residuos.",
            incorrect: "La obsolescencia programada no busca hacer productos más duraderos ni fáciles de reparar."
        },
        explanation: `La <a href="/glosary#obsolescencia-programada">obsolescencia programada</a> es el diseño y fabricación de productos con una <a href="/glosary#vida-util-limitada">vida útil intencionalmente limitada</a> para estimular el <a href="/glosary#consumo-constante">consumo constante</a>. Representa un gran desafío para la <a href="/glosary#sostenibilidad">sostenibilidad</a> porque genera una enorme cantidad de <a href="/glosary#residuos">residuos</a>, agota <a href="/glosary#recursos-naturales">recursos naturales</a> y contribuye al <a href="/glosary#cambio-climatico">cambio climático</a> al aumentar la <a href="/glosary#huella-carbono">huella de carbono</a> asociada a la producción y eliminación. Combatirla es clave para el <a href="/glosary#consumo-responsable">consumo responsable</a> y la <a href="/glosary#economia-circular">economía circular</a>.`
    },
    {
        id: "q23_profundiza_economia_circular",
        type: "multiple-choice",
        category: "Consumo_Responsable",
        points: 4,
        question: "Más allá del reciclaje, ¿cuál es el principio fundamental de la Economía Circular para reducir el impacto de nuestros productos?",
        options: [
            { text: "Producir más bienes para tener una mayor oferta.", outcome: "mas_oferta_falso", isCorrect: false },
            { text: "Descartar los productos al final de su vida útil sin preocuparse por sus componentes.", outcome: "descartar_falso", isCorrect: false },
            { text: "Diseñar productos para que sean duraderos, reparables y reutilizables, manteniendo sus materiales en uso el mayor tiempo posible.", outcome: "diseno_circular_correcto", isCorrect: true },
            { text: "Solo enfocarse en la eficiencia energética durante la fase de uso del producto.", outcome: "eficiencia_uso_falso", isCorrect: false }
        ],
        branching: {
            next: null,
            outcomes: {
                "diseno_circular_correcto": "q24_profundiza_consumo_impacto_social",
                "mas_oferta_falso": "q24_repaso_compras_sostenibles",
                "descartar_falso": "q24_repaso_compras_sostenibles",
                "eficiencia_uso_falso": "q24_repaso_compras_sostenibles"
            }
        },
        feedback: {
            correct: "¡Exacto! La clave está en el diseño y en cerrar el ciclo.",
            incorrect: "La Economía Circular busca evitar el residuo desde el diseño, no solo gestionarlo al final."
        },
        explanation: `La <a href="/glosary#economia-circular">Economía Circular</a> es un modelo de <a href="/glosary#produccion-consumo">producción y consumo</a> que busca <a href="/glosary#extender-vida-util">extender la vida útil de productos</a>, materiales y recursos, reduciendo la generación de <a href="/glosary#residuos">residuos</a> al mínimo. Su principio fundamental es <a href="/glosary#disenar-para-durabilidad">diseñar para la durabilidad</a>, <a href="/glosary#reparabilidad">reparabilidad</a> y <a href="/glosary#reutilizacion">reutilización</a>, manteniendo los <a href="/glosary#materiales-en-uso">materiales en uso</a> el mayor tiempo posible. Esto se opone a la <a href="/glosary#economia-lineal">economía lineal</a> de 'extraer, producir, usar y tirar', y es esencial para la <a href="/glosary#sostenibilidad">sostenibilidad</a> en una <a href="/glosary#ecologicalcity">EcologicalCity</a>.`
    },

    // --- Pregunta de Repaso: CONSUMO_RESPONSABLE (Compras Sostenibles) ---
    {
        id: "q24_repaso_compras_sostenibles",
        type: "multiple-choice",
        category: "Consumo_Responsable",
        points: 2,
        question: "¿Cuál es una práctica clave para realizar 'compras sostenibles' en tu día a día?",
        options: [
            { text: "Comprar siempre lo más barato, sin importar su origen.", outcome: "barato_sin_origen_falso", isCorrect: false },
            { text: "Adquirir productos de un solo uso en grandes cantidades para ahorrar.", outcome: "un_solo_uso_falso", isCorrect: false },
            { text: "Investigar el origen de los productos, priorizar lo local, duradero y con certificaciones sostenibles.", outcome: "investigar_priorizar_correcto", isCorrect: true },
            { text: "Ignorar las etiquetas y solo fijarse en la marca popular.", outcome: "ignorar_etiquetas_falso", isCorrect: false }
        ],
        branching: {
            next: "q25_profundiza_impacto_huella_digital"
        },
        feedback: {
            correct: "¡Exacto! Cada compra es un voto por el tipo de mundo que queremos.",
            incorrect: "Las compras sostenibles requieren un poco de investigación y consciencia sobre lo que adquieres."
        },
        explanation: `Las <a href="/glosary#compras-sostenibles">compras sostenibles</a> implican tomar decisiones de <a href="/glosary#consumo">consumo</a> que minimicen el <a href="/glosary#impacto-ambiental-social">impacto ambiental y social</a> negativo. Esto incluye <a href="/glosary#investigar-origen">investigar el origen</a> de los productos, <a href="/glosary#priorizar-productos-locales">priorizar productos locales</a> y de temporada, elegir bienes <a href="/glosary#productos-duraderos">duraderos</a>, <a href="/glosary#reparables">reparables</a> y con <a href="/glosary#certificaciones-sostenibles">certificaciones sostenibles</a> (como comercio justo o energía renovable). También implica <a href="/glosary#reducir-consumo">reducir el consumo</a> general y optar por la <a href="/glosary#reutilizacion">reutilización</a>.`
    },

    // --- Pregunta de Profundización: CONSUMO_RESPONSABLE (Impacto Social del Consumo) ---
    {
        id: "q24_profundiza_consumo_impacto_social",
        type: "multiple-choice",
        category: "Consumo_Responsable",
        points: 4,
        question: "¿Cómo influye el consumo responsable en las condiciones laborales y sociales de los productores?",
        options: [
            { text: "No tiene ninguna relación, solo afecta al medio ambiente.", outcome: "no_relacion_falso", isCorrect: false },
            { text: "Fomenta la producción rápida y barata, a menudo a expensas de los derechos laborales.", outcome: "barato_derechos_falso", isCorrect: false },
            { text: "Promueve cadenas de suministro transparentes y asegura prácticas de comercio justo y condiciones laborales dignas.", outcome: "comercio_justo_correcto", isCorrect: true },
            { text: "Incentiva el trabajo infantil para reducir costes de producción.", outcome: "trabajo_infantil_falso", isCorrect: false }
        ],
        branching: {
            next: "q25_profundiza_impacto_huella_digital"
        },
        feedback: {
            correct: "¡Absolutamente! El consumo consciente es también un acto de justicia social.",
            incorrect: "El consumo irresponsable a menudo esconde condiciones laborales injustas y explotación."
        },
        explanation: `El <a href="/glosary#consumo-responsable">consumo responsable</a> tiene un profundo <a href="/glosary#impacto-social">impacto social</a>. Al elegir productos de <a href="/glosary#comercio-justo">comercio justo</a> y empresas con <a href="/glosary#cadenas-suministro-transparentes">cadenas de suministro transparentes</a>, los consumidores pueden <a href="/glosary#promover-condiciones-laborales-dignas">promover condiciones laborales dignas</a>, salarios justos y el respeto a los <a href="/glosary#derechos-humanos">derechos humanos</a> a lo largo de toda la <a href="/glosary#cadena-valor">cadena de valor</a>. Es un pilar de la <a href="/glosary#etica-consumo">ética del consumo</a> y contribuye a una <a href="/glosary#sociedad-mas-justa">sociedad más justa</a> y equitativa en el marco de una <a href="/glosary#ecologicalcity">EcologicalCity</a>.`
    },

    // --- Pregunta de Transición/Cierre Potencial (Huella Digital) ---
    {
        id: "q25_profundiza_impacto_huella_digital",
        type: "multiple-choice",
        category: "Consumo_Responsable",
        points: 3,
        question: "¿Cómo se relaciona la 'huella digital' con la sostenibilidad y el consumo de energía?",
        options: [
            { text: "No tiene relación, es solo un término informático.", outcome: "no_relacion_falso", isCorrect: false },
            { text: "Se refiere únicamente a la energía que consume un dispositivo cuando está apagado.", outcome: "apagado_falso", isCorrect: false },
            { text: "Representa el impacto ambiental de nuestras actividades en línea, incluyendo el consumo energético de servidores, centros de datos y dispositivos.", outcome: "huella_digital_correcto", isCorrect: true },
            { text: "Mide la cantidad de papel que usamos al imprimir documentos digitales.", outcome: "papel_digital_falso", isCorrect: false }
        ],
        branching: {
            next: null // Será el punto de inicio para las preguntas de cierre en el siguiente bloque
        },
        feedback: {
            correct: "¡Exacto! Incluso en el mundo digital, nuestras acciones tienen un impacto real.",
            incorrect: "Nuestra actividad en línea tiene una huella energética y ambiental que a menudo subestimamos."
        },
        explanation: `La <a href="/glosary#huella-digital">huella digital</a> se refiere al <a href="/glosary#impacto-ambiental-actividades-online">impacto ambiental de nuestras actividades en línea</a>. Aunque no siempre es visible, el almacenamiento de datos, la transmisión de información y el uso de servicios en la nube requieren una enorme cantidad de <a href="/glosary#energia-servidores">energía para servidores</a>, <a href="/glosary#centros-datos">centros de datos</a> y los propios <a href="/glosary#dispositivos">dispositivos</a>. Ser consciente de esta huella digital, optimizar el uso y apoyar servicios con <a href="/glosary#energia-renovable-digital">energía renovable</a> es parte del <a href="/glosary#consumo-responsable">consumo responsable</a> y la <a href="/glosary#sostenibilidad-digital">sostenibilidad digital</a> en una <a href="/glosary#ecologicalcity">EcologicalCity</a>.`
    }
    // CONTINUAR AQUÍ CON MÁS PREGUNTAS HASTA LLEGAR A 40
];