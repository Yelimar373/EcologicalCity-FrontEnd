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
                "electricos_sin_infra": "q2_repaso_contaminacion_trafico",
                "combustible_barato": "q2_repaso_contaminacion_trafico"
            }
        },
        feedback: {
            correct: "¡Correcto! Menos coches, más espacios para las personas y el aire limpio.",
            incorrect: "Las soluciones deben priorizar el transporte colectivo y activo."
        },
        explanation: `La <a href="/glosary#movilidad-urbana-sostenible">movilidad urbana sostenible</a> busca reducir el uso del <a href="/glosary#vehiculo-privado">vehículo privado</a> y fomentar alternativas más <a href="/glosary#ecologicas">ecológicas</a>. Invertir en <a href="/glosary#transporte-publico-eficiente">transporte público eficiente</a> (trenes, autobuses eléctricos), construir <a href="/glosary#ciclovias">ciclovías</a> seguras y crear <a href="/glosary#zonas-peatonales">zonas peatonales</a> no solo reduce la <a href="/glosary#contaminacion-atmosferica">contaminación atmosférica</a>, sino que también mejora la <a href="/glosary#calidad-vida-urbana">calidad de vida urbana</a>, promueve la <a href="/glosary#salud">salud</a> y fomenta la <a href="/glosary#interaccion-social">interacción social</a>. Los <a href="/glosary#vehiculos-electricos">vehículos eléctricos</a> son una parte de la solución, pero sin cambios en la <a href="/glosary#infraestructura-vial">infraestructura vial</a>, pueden seguir generando <a href="/glosary#congestion-trafico">congestión de tráfico</a>. Es esencial un <a href="/glosary#enfoque-integral">enfoque integral</a> para una <a href="/glosary#ecologicalcity">EcologicalCity</a>.`
    },

    // Pregunta 2: Beneficios de la movilidad sostenible
    {
        id: "q2_beneficios_movilidad_sostenible",
        type: "multiple-choice",
        category: "movilidad_urbana",
        points: 3,
        question: "¿Qué beneficio clave, además de la reducción de la contaminación, aporta la promoción de la bicicleta y el caminar en una ciudad?",
        options: [
            { text: "Aumento del tráfico en las horas punta.", outcome: "aumento_trafico_falso", isCorrect: false },
            { text: "Disminución de la actividad física de los ciudadanos.", outcome: "disminucion_fisica_falso", isCorrect: false },
            { text: "Mejora de la salud pública, reducción del ruido y mayor cohesión social.", outcome: "salud_ruido_cohesion_correcto", isCorrect: true },
            { text: "Incremento de la necesidad de aparcamientos en el centro urbano.", outcome: "aparcamientos_falso", isCorrect: false }
        ],
        branching: {
            next: null,
            outcomes: {
                "salud_ruido_cohesion_correcto": "q3_profundiza_infraestructura_movilidad",
                "aumento_trafico_falso": "q3_repaso_planificacion_urbana",
                "disminucion_fisica_falso": "q3_repaso_planificacion_urbana",
                "aparcamientos_falso": "q3_repaso_planificacion_urbana"
            }
        },
        feedback: {
            correct: "¡Correcto! Es un ganar-ganar para todos.",
            incorrect: "La movilidad activa tiene muchos beneficios ocultos para la ciudad y sus habitantes."
        },
        explanation: `Fomentar el uso de la <a href="/glosary#bicicleta">bicicleta</a> y el <a href="/glosary#caminar">caminar</a> en una ciudad va más allá de la <a href="/glosary#reduccion-contaminacion">reducción de la contaminación</a>. Contribuye directamente a la <a href="/glosary#mejora-salud-publica">mejora de la salud pública</a> al promover la <a href="/glosary#actividad-fisica">actividad física</a>, reduce significativamente la <a href="/glosary#contaminacion-acustica">contaminación acústica</a> (ruido) y, al crear espacios urbanos más amigables para las personas, fomenta una mayor <a href="/glosary#cohesion-social">cohesión social</a> e <a href="/glosary#interaccion-comunitaria">interacción comunitaria</a>. Es una inversión en el <a href="/glosary#bienestar-ciudadano">bienestar ciudadano</a> y la <a href="/glosary#habitabilidad-urbana">habitabilidad urbana</a> de la <a href="/glosary#ecologicalcity">EcologicalCity</a>.`
    },

    // Pregunta 3 (Profundización): Infraestructura de movilidad
    {
        id: "q3_profundiza_infraestructura_movilidad",
        type: "multiple-choice",
        category: "movilidad_urbana",
        points: 4,
        question: "¿Qué elemento de infraestructura es esencial para garantizar la seguridad y eficiencia de los ciclistas en una ciudad?",
        options: [
            { text: "Grandes avenidas con muchos carriles para coches.", outcome: "avenidas_coches_falso", isCorrect: false },
            { text: "Ciclovías segregadas y bien señalizadas.", outcome: "ciclovias_segregadas_correcto", isCorrect: true },
            { text: "Acera más ancha para que los ciclistas compartan con peatones.", outcome: "acera_ancha_falso", isCorrect: false },
            { text: "Más semáforos peatonales para regular el flujo ciclista.", outcome: "semaforos_peatonales_falso", isCorrect: false }
        ],
        branching: {
            next: null,
            outcomes: {
                "ciclovias_segregadas_correcto": "q4_profundiza_transporte_electrico",
                "avenidas_coches_falso": "q4_repaso_incentivos_movilidad",
                "acera_ancha_falso": "q4_repaso_incentivos_movilidad",
                "semaforos_peatonales_falso": "q4_repaso_incentivos_movilidad"
            }
        },
        feedback: {
            correct: "¡Excelente! La segregación es clave para la seguridad.",
            incorrect: "Compartir espacio con coches o peatones sin segregación aumenta el riesgo y disminuye la eficiencia."
        },
        explanation: `Para garantizar la <a href="/glosary#seguridad-ciclistas">seguridad de los ciclistas</a> y la <a href="/glosary#eficiencia-movilidad">eficiencia de la movilidad</a> en una <a href="/glosary#ciudad-sostenible">ciudad sostenible</a>, las <a href="/glosary#ciclovias-segregadas">ciclovías segregadas</a> (separadas del tráfico motorizado y de los peatones) y <a href="/glosary#bien-senalizadas">bien señalizadas</a> son absolutamente esenciales. Esto reduce drásticamente el <a href="/glosary#riesgo-accidentes">riesgo de accidentes</a>, promueve un flujo constante y animan a más personas a elegir la <a href="/glosary#bicicleta">bicicleta</a> como medio de <a href="/glosary#transporte">transporte</a>, fomentando un <a href="/glosary#ecosistema-urbano">ecosistema urbano</a> más seguro y verde en la <a href="/glosary#ecologicalcity">EcologicalCity</a>.`
    },

    // Pregunta 4 (Repaso): Incentivos para la movilidad
    {
        id: "q4_repaso_incentivos_movilidad",
        type: "multiple-choice",
        category: "movilidad_urbana",
        points: 2,
        question: "¿Qué tipo de incentivo es más efectivo para que los ciudadanos dejen el coche en casa y usen el transporte público?",
        options: [
            { text: "Aumentar el precio de la gasolina sin mejorar el transporte público.", outcome: "gasolina_cara_falso", isCorrect: false },
            { text: "Ofrecer abonos de transporte público asequibles y mejorar la frecuencia de las rutas.", outcome: "abonos_frecuencia_correcto", isCorrect: true },
            { text: "Crear más aparcamientos gratuitos en el centro de la ciudad.", outcome: "aparcamientos_gratuitos_falso", isCorrect: false },
            { text: "Promocionar vehículos SUV más grandes y potentes.", outcome: "suv_falso", isCorrect: false }
        ],
        branching: {
            next: "q5_transicion_energia_agua"
        },
        feedback: {
            correct: "¡Exacto! Facilidad y economía son claves.",
            incorrect: "Los incentivos deben hacer que el transporte sostenible sea la opción más atractiva y conveniente."
        },
        explanation: `Para fomentar el uso del <a href="/glosary#transporte-publico">transporte público</a> y reducir la <a href="/glosary#dependencia-coche">dependencia del coche</a>, es crucial ofrecer <a href="/glosary#abonos-asequibles">abonos asequibles</a> y, fundamentalmente, <a href="/glosary#mejorar-frecuencia-rutas">mejorar la frecuencia y cobertura de las rutas</a>. Un sistema de transporte público fiable, cómodo y accesible es el mayor <a href="/glosary#incentivo">incentivo</a>. Las medidas punitivas sin alternativas viables suelen ser menos efectivas que las que premian y facilitan las <a href="/glosary#elecciones-sostenibles">elecciones sostenibles</a> en una <a href="/glosary#ecologicalcity">EcologicalCity</a>.`
    },

    // Pregunta de Transición: Movilidad -> Energía y Agua
    {
        id: "q5_transicion_energia_agua",
        type: "multiple-choice",
        category: "Transicion",
        points: 2,
        question: "Ya hemos hablado de cómo nos movemos. Ahora, pensando en el hogar, ¿cuál de estas acciones tiene un impacto significativo en la reducción de tu huella ecológica diaria?",
        options: [
            { text: "Dejar las luces encendidas todo el día para mayor comodidad.", outcome: "luces_encendidas_falso", isCorrect: false },
            { text: "Usar electrodomésticos eficientes y reducir el consumo de agua.", outcome: "eficiencia_agua_correcto", isCorrect: true },
            { text: "Calentar tu casa con sistemas de combustión de combustibles fósiles.", outcome: "combustibles_fosiles_falso", isCorrect: false },
            { text: "Regar el jardín con agua potable todos los días en verano.", outcome: "regar_agua_potable_falso", isCorrect: false }
        ],
        branching: {
            next: null,
            outcomes: {
                "eficiencia_agua_correcto": "q6_profundiza_energia_renovable",
                "luces_encendidas_falso": "q6_repaso_ahorro_energetico_agua",
                "combustibles_fosiles_falso": "q6_repaso_ahorro_energetico_agua",
                "regar_agua_potable_falso": "q6_repaso_ahorro_energetico_agua"
            }
        },
        feedback: {
            correct: "¡Muy bien! Pequeñas acciones en casa hacen una gran diferencia.",
            incorrect: "Las decisiones en el hogar sobre energía y agua son cruciales para la sostenibilidad."
        },
        explanation: `Reducir tu <a href="/glosary#huella-ecologica">huella ecológica</a> diaria en el hogar implica un <a href="/glosary#consumo-consciente">consumo consciente</a> de <a href="/glosary#energia">energía</a> y <a href="/glosary#agua">agua</a>. Usar <a href="/glosary#electrodomesticos-eficientes">electrodomésticos eficientes</a> (con etiquetas energéticas A+++), desconectar aparatos que no se usan, y reducir el <a href="/glosary#consumo-agua">consumo de agua</a> (duchas cortas, reuso cuando sea posible) son acciones con un <a href="/glosary#impacto-significativo">impacto significativo</a>. Contribuyen a la <a href="/glosary#sostenibilidad-hogar">sostenibilidad del hogar</a> y de la <a href="/glosary#ecologicalcity">EcologicalCity</a>.`
    },

    // Pregunta 6 (Profundización): Fuentes de energía renovable
    {
        id: "q6_profundiza_energia_renovable",
        type: "multiple-choice",
        category: "Energia_y_Agua",
        points: 4,
        question: "¿Cuál de estas fuentes de energía renovable NO produce emisiones de gases de efecto invernadero durante su operación?",
        options: [
            { text: "Carbón.", outcome: "carbon_falso", isCorrect: false },
            { text: "Petróleo.", outcome: "petroleo_falso", isCorrect: false },
            { text: "Energía solar fotovoltaica.", outcome: "solar_fotovoltaica_correcto", isCorrect: true },
            { text: "Gas natural.", outcome: "gas_natural_falso", isCorrect: false }
        ],
        branching: {
            next: null,
            outcomes: {
                "solar_fotovoltaica_correcto": "q7_profundiza_ciclo_agua",
                "carbon_falso": "q7_repaso_uso_agua",
                "petroleo_falso": "q7_repaso_uso_agua",
                "gas_natural_falso": "q7_repaso_uso_agua"
            }
        },
        feedback: {
            correct: "¡Correcto! La energía del sol es limpia y abundante.",
            incorrect: "Las energías renovables son clave para descarbonizar nuestra matriz energética."
        },
        explanation: `Las <a href="/glosary#fuentes-energia-renovable">fuentes de energía renovable</a>, como la <a href="/glosary#energia-solar-fotovoltaica">energía solar fotovoltaica</a>, la <a href="/glosary#energia-eolica">eólica</a>, la <a href="/glosary#energia-hidraulica">hidráulica</a> y la <a href="/glosary#energia-geotermica">geotérmica</a>, no producen <a href="/glosary#emisiones-gases-efecto-invernadero">emisiones de gases de efecto invernadero</a> (GEI) durante su operación, a diferencia de los <a href="/glosary#combustibles-fosiles">combustibles fósiles</a> (carbón, petróleo, gas natural). Esto las convierte en elementos cruciales para la <a href="/glosary#transicion-energetica">transición energética</a> y la lucha contra el <a href="/glosary#cambio-climatico">cambio climático</a> en la <a href="/glosary#ecologicalcity">EcologicalCity</a>. Es importante destacar que la fabricación y desmantelamiento sí tienen una huella, pero mucho menor que la operación de fuentes fósiles.`
    },

    // Pregunta 7 (Repaso): Uso responsable del agua
    {
        id: "q7_repaso_uso_agua",
        type: "multiple-choice",
        category: "Energia_y_Agua",
        points: 2,
        question: "¿Cuál de las siguientes acciones es la más efectiva para el ahorro de agua en el hogar?",
        options: [
            { text: "Dejar el grifo abierto mientras te cepillas los dientes.", outcome: "grifo_abierto_falso", isCorrect: false },
            { text: "Tomar duchas de 20 minutos o más.", outcome: "duchas_largas_falso", isCorrect: false },
            { text: "Recolectar agua de lluvia para regar plantas o limpiar.", outcome: "recolectar_lluvia_correcto", isCorrect: true },
            { text: "Lavar el coche con manguera diariamente.", outcome: "lavar_coche_falso", isCorrect: false }
        ],
        branching: {
            next: "q8_profundiza_infraestructura_agua"
        },
        feedback: {
            correct: "¡Sí! El reuso es fundamental para una gestión inteligente del agua.",
            incorrect: "El ahorro de agua es vital. Pequeños cambios en los hábitos diarios hacen una gran diferencia."
        },
        explanation: `La <a href="/glosary#gestion-responsable-agua">gestión responsable del agua</a> es clave para la <a href="/glosary#sostenibilidad">sostenibilidad</a>. <a href="/glosary#recolectar-agua-lluvia">Recolectar agua de lluvia</a> para usos no potables (como regar plantas, limpiar o incluso la cisterna del inodoro) es una de las acciones más efectivas para reducir el <a href="/glosary#consumo-agua-potable">consumo de agua potable</a> en el hogar. Otros hábitos incluyen cerrar el grifo, tomar duchas cortas y reparar fugas. La <a href="/glosary#conservacion-agua">conservación del agua</a> es un pilar de la <a href="/glosary#ecologicalcity">EcologicalCity</a>.`
    },

    // Pregunta 8 (Profundización): Infraestructura hídrica urbana
    {
        id: "q8_profundiza_infraestructura_agua",
        type: "multiple-choice",
        category: "Energia_y_Agua",
        points: 4,
        question: "¿Qué papel juegan los 'sistemas urbanos de drenaje sostenible' (SUDS) en la gestión del agua en una EcologicalCity?",
        options: [
            { text: "Aumentar la dependencia de la infraestructura gris tradicional (alcantarillado).", outcome: "dependencia_gris_falso", isCorrect: false },
            { text: "Desviar el agua de lluvia directamente a los ríos sin tratamiento.", outcome: "desviar_sin_tratamiento_falso", isCorrect: false },
            { text: "Imitar los procesos naturales para gestionar el agua de lluvia, reducir inundaciones y recargar acuíferos.", outcome: "imitar_procesos_naturales_correcto", isCorrect: true },
            { text: "Solo se usan para tratar aguas residuales domésticas.", outcome: "solo_aguas_residuales_falso", isCorrect: false }
        ],
        branching: {
            next: null,
            outcomes: {
                "imitar_procesos_naturales_correcto": "q9_profundiza_desarrollo_urbano_sostenible",
                "dependencia_gris_falso": "q9_repaso_ciudades_verdes",
                "desviar_sin_tratamiento_falso": "q9_repaso_ciudades_verdes",
                "solo_aguas_residuales_falso": "q9_repaso_ciudades_verdes"
            }
        },
        feedback: {
            correct: "¡Excelente! Los SUDS son vitales para la resiliencia hídrica urbana.",
            incorrect: "Los SUDS son una herramienta innovadora para gestionar el agua de lluvia de forma ecológica."
        },
        explanation: `Los <a href="/glosary#sistemas-urbanos-drenaje-sostenible">Sistemas Urbanos de Drenaje Sostenible (SUDS)</a> son infraestructuras que buscan <a href="/glosary#imitar-procesos-naturales-agua">imitar los procesos naturales</a> de un <a href="/glosary#ciclo-hidrologico">ciclo hidrológico</a>. Su objetivo principal es <a href="/glosary#gestionar-agua-lluvia">gestionar el agua de lluvia</a> en su origen, <a href="/glosary#reducir-inundaciones">reducir el riesgo de inundaciones</a>, mejorar la <a href="/glosary#calidad-agua">calidad del agua</a> antes de que llegue a los ríos, y <a href="/glosary#recargar-acuiferos">recargar acuíferos</a>. Incluyen <a href="/glosary#tecnicas-suds">técnicas</a> como cubiertas verdes, pavimentos permeables y jardines de lluvia, que transforman la <a href="/glosary#infraestructura-gris">infraestructura gris</a> tradicional en soluciones más <a href="/glosary#verdes">verdes</a> y <a href="/glosary#resilientes">resilientes</a> para la <a href="/glosary#ecologicalcity">EcologicalCity</a>.`
    },

    // Pregunta 9 (Repaso): Beneficios de las ciudades verdes
    {
        id: "q9_repaso_ciudades_verdes",
        type: "multiple-choice",
        category: "Energia_y_Agua",
        points: 2,
        question: "¿Cuál es el principal beneficio de tener más zonas verdes y parques en una ciudad, además del estético?",
        options: [
            { text: "Aumento de la temperatura urbana debido al efecto isla de calor.", outcome: "aumento_temperatura_falso", isCorrect: false },
            { text: "Mayor necesidad de pesticidas para mantener la vegetación.", outcome: "pesticidas_falso", isCorrect: false },
            { text: "Mejora de la calidad del aire, reducción del efecto isla de calor y fomento de la biodiversidad.", outcome: "calidad_aire_isla_biodiversidad_correcto", isCorrect: true },
            { text: "Incremento de los costos de mantenimiento de la ciudad.", outcome: "costos_mantenimiento_falso", isCorrect: false }
        ],
        branching: {
            next: "q10_transicion_residuos_consumo"
        },
        feedback: {
            correct: "¡Correcto! Los espacios verdes son pulmones para la ciudad y oasis para la vida.",
            incorrect: "Los beneficios de las zonas verdes son mucho más que solo la belleza."
        },
        explanation: `Las <a href="/glosary#zonas-verdes">zonas verdes</a> y <a href="/glosary#parques-urbanos">parques urbanos</a> son esenciales para una <a href="/glosary#ciudad-sostenible">ciudad sostenible</a>. Además de su valor <a href="/glosary#valor-estetico">estético</a>, son cruciales para la <a href="/glosary#mejora-calidad-aire">mejora de la calidad del aire</a> (al absorber CO2 y producir oxígeno), la <a href="/glosary#reduccion-efecto-isla-calor">reducción del efecto isla de calor</a> (al proporcionar sombra y enfriamiento por evaporación), y el <a href="/glosary#fomento-biodiversidad">fomento de la biodiversidad</a> urbana. También ofrecen espacios para la <a href="/glosary#recreacion">recreación</a>, la <a href="/glosary#salud-mental">salud mental</a> y la <a href="/glosary#interaccion-social">interacción social</a>, siendo vitales para la <a href="/glosary#habitabilidad">habitabilidad</a> y <a href="/glosary#resiliencia-urbana">resiliencia urbana</a> de la <a href="/glosary#ecologicalcity">EcologicalCity</a>.`
    },

    // Pregunta 10 (Profundización): Desarrollo Urbano Sostenible
    {
        id: "q9_profundiza_desarrollo_urbano_sostenible",
        type: "multiple-choice",
        category: "Desarrollo_Urbano",
        points: 5,
        question: "¿Qué concepto es fundamental en el 'Desarrollo Urbano Sostenible' para asegurar que el crecimiento de la ciudad no comprometa los recursos futuros?",
        options: [
            { text: "Expansión ilimitada de la mancha urbana sin planificación.", outcome: "expansion_ilimitada_falso", isCorrect: false },
            { text: "Uso exclusivo de hormigón y asfalto en nuevas construcciones.", outcome: "hormigon_asfalto_falso", isCorrect: false },
            { text: "Equilibrio entre crecimiento económico, equidad social y protección ambiental.", outcome: "equilibrio_tres_pilares_correcto", isCorrect: true },
            { text: "Priorizar solo la creación de grandes centros comerciales en las periferias.", outcome: "centros_comerciales_falso", isCorrect: false }
        ],
        branching: {
            next: "q10_transicion_residuos_consumo"
        },
        feedback: {
            correct: "¡Impresionante! Has captado la esencia del desarrollo sostenible.",
            incorrect: "El desarrollo sostenible es un equilibrio delicado entre diferentes dimensiones."
        },
        explanation: `El <a href="/glosary#desarrollo-urbano-sostenible">Desarrollo Urbano Sostenible</a> se basa en un <a href="/glosary#equilibrio-tres-pilares">equilibrio intrínseco</a> entre tres pilares: el <a href="/glosary#crecimiento-economico">crecimiento económico</a>, la <a href="/glosary#equidad-social">equidad social</a> y la <a href="/glosary#proteccion-ambiental">protección ambiental</a>. Este enfoque garantiza que el <a href="/glosary#crecimiento-ciudad">crecimiento de la ciudad</a> satisfaga las necesidades del presente sin <a href="/glosary#comprometer-recursos-futuros">comprometer la capacidad de las generaciones futuras para satisfacer sus propias necesidades</a>. Implica una <a href="/glosary#planificacion-urbana-integral">planificación urbana integral</a> que integre <a href="/glosary#infraestructuras-verdes">infraestructuras verdes</a>, <a href="/glosary#transporte-sostenible">transporte sostenible</a>, <a href="/glosary#vivienda-asequible">vivienda asequible</a> y <a href="/glosary#resiliencia-climatica">resiliencia climática</a> en la <a href="/glosary#ecologicalcity">EcologicalCity</a>.`
    },

    // Pregunta de Transición: Energía y Agua -> Residuos y Consumo
    {
        id: "q10_transicion_residuos_consumo",
        type: "multiple-choice",
        category: "Transicion",
        points: 2,
        question: "Hemos cubierto cómo nuestras ciudades se abastecen de energía y gestionan el agua. Ahora, pensando en lo que 'desechamos', ¿qué principio es clave para una gestión de residuos realmente sostenible?",
        options: [
            { text: "Incinerar todos los residuos para generar energía.", outcome: "incinerar_todo_falso", isCorrect: false },
            { text: "Enviar todos los residuos a rellenos sanitarios lejanos.", outcome: "rellenos_lejanos_falso", isCorrect: false },
            { text: "La regla de las '3 R': Reducir, Reutilizar, Reciclar, en ese orden de prioridad.", outcome: "tres_r_correcto", isCorrect: true },
            { text: "Producir más envases desechables para mayor higiene.", outcome: "envases_desechables_falso", isCorrect: false }
        ],
        branching: {
            next: null,
            outcomes: {
                "tres_r_correcto": "q11_profundiza_economia_circular_residuos",
                "incinerar_todo_falso": "q11_repaso_clasificacion_residuos",
                "rellenos_lejanos_falso": "q11_repaso_clasificacion_residuos",
                "envases_desechables_falso": "q11_repaso_clasificacion_residuos"
            }
        },
        feedback: {
            correct: "¡Exacto! El orden de las 3 R es crucial.",
            incorrect: "La gestión de residuos empieza mucho antes de que algo se convierta en 'basura'."
        },
        explanation: `Una <a href="/glosary#gestion-residuos-sostenible">gestión de residuos sostenible</a> se basa en la <a href="/glosary#regla-3r">regla de las '3 R'</a>, priorizando las acciones para maximizar su impacto: 1. <a href="/glosary#reducir">Reducir</a> la generación de residuos en origen (la más importante). 2. <a href="/glosary#reutilizar">Reutilizar</a> productos y materiales tanto como sea posible. 3. <a href="/glosary#reciclar">Reciclar</a> aquellos materiales que no pueden ser reducidos o reutilizados. Solo después de estas opciones, se consideran la valorización energética o la disposición final. Este enfoque es fundamental para minimizar el <a href="/glosary#impacto-ambiental-residuos">impacto ambiental de los residuos</a> y avanzar hacia una <a href="/glosary#ecologicalcity">EcologicalCity</a> sin desechos.`
    },

    // Pregunta 11 (Profundización): Economía Circular y Residuos
    {
        id: "q11_profundiza_economia_circular_residuos",
        type: "multiple-choice",
        category: "Residuos_y_Consumo",
        points: 4,
        question: "¿Cómo complementa la 'Economía Circular' la regla de las 3 R para una gestión de residuos aún más avanzada?",
        options: [
            { text: "Se enfoca solo en la incineración de residuos para producir energía.", outcome: "solo_incineracion_falso", isCorrect: false },
            { text: "Promueve la producción ilimitada y el desecho al final de la vida útil.", outcome: "produccion_ilimitada_falso", isCorrect: false },
            { text: "Diseña productos para ser duraderos, reparables y reciclables, manteniendo los recursos en un ciclo cerrado.", outcome: "diseno_ciclo_cerrado_correcto", isCorrect: true },
            { text: "Solo se aplica a la gestión de residuos electrónicos.", outcome: "solo_electronicos_falso", isCorrect: false }
        ],
        branching: {
            next: null,
            outcomes: {
                "diseno_ciclo_cerrado_correcto": "q12_profundiza_consumo_responsable",
                "solo_incineracion_falso": "q12_repaso_etiquetado_productos",
                "produccion_ilimitada_falso": "q12_repaso_etiquetado_productos",
                "solo_electronicos_falso": "q12_repaso_etiquetado_productos"
            }
        },
        feedback: {
            correct: "¡Excelente! La Economía Circular integra el diseño desde el inicio.",
            incorrect: "La Economía Circular va un paso más allá del reciclaje, pensando en todo el ciclo de vida."
        },
        explanation: `La <a href="/glosary#economia-circular">Economía Circular</a> es un modelo que va más allá de las <a href="/glosary#regla-3r">3 R</a> al integrar el concepto de <a href="/glosary#diseno-sostenible">diseño sostenible</a> desde el inicio. Su objetivo es mantener los <a href="/glosary#recursos-en-uso">recursos en uso</a> el mayor tiempo posible, diseñando productos para que sean <a href="/glosary#productos-duraderos">duraderos</a>, <a href="/glosary#reparables">reparables</a>, <a href="/glosary#reutilizables">reutilizables</a> y, finalmente, <a href="/glosary#reciclables">reciclables</a>, cerrando así el <a href="/glosary#ciclo-vida-productos">ciclo de vida de los productos</a>. Esto reduce drásticamente la <a href="/glosary#generacion-residuos">generación de residuos</a> y la <a href="/glosary#extraccion-recursos-virgenes">extracción de recursos vírgenes</a>, fomentando una <a href="/glosary#sostenibilidad-integral">sostenibilidad integral</a> en la <a href="/glosary#ecologicalcity">EcologicalCity</a>.`
    },

    // Pregunta 12 (Repaso): Consumo Responsable
    {
        id: "q12_repaso_etiquetado_productos",
        type: "multiple-choice",
        category: "Residuos_y_Consumo",
        points: 2,
        question: "¿Qué nos indican sellos o etiquetas como 'Comercio Justo' o 'Ecoetiqueta' en un producto?",
        options: [
            { text: "Que el producto es el más barato del mercado.", outcome: "mas_barato_falso", isCorrect: false },
            { text: "Que el producto ha sido fabricado sin considerar aspectos sociales o ambientales.", outcome: "sin_considerar_falso", isCorrect: false },
            { text: "Que el producto cumple con ciertos estándares éticos, sociales o ambientales en su producción.", outcome: "estandares_eticos_correcto", isCorrect: true },
            { text: "Que el producto es de importación y por lo tanto de mayor calidad.", outcome: "importacion_calidad_falso", isCorrect: false }
        ],
        branching: {
            next: "q13_transicion_biodiversidad_recursos"
        },
        feedback: {
            correct: "¡Exacto! Son guías valiosas para tus compras.",
            incorrect: "Las etiquetas sostenibles son herramientas para tomar decisiones informadas."
        },
        explanation: `Los <a href="/glosary#sellos-ecoetiquetas">sellos y ecoetiquetas</a> (como <a href="/glosary#comercio-justo">Comercio Justo</a>, <a href="/glosary#etiqueta-ecologica-ue">Etiqueta Ecológica de la UE</a>, o <a href="/glosary#certificaciones-organicas">certificaciones orgánicas</a>) son indicadores visuales que nos informan que un producto o servicio cumple con ciertos <a href="/glosary#estandares-eticos-sociales-ambientales">estándares éticos, sociales o ambientales</a> a lo largo de su <a href="/glosary#cadena-suministro">cadena de suministro</a> y producción. Permiten al consumidor tomar <a href="/glosary#decisiones-informadas">decisiones informadas</a> y fomentar el <a href="/glosary#consumo-responsable">consumo responsable</a>, lo cual es vital para el desarrollo de una <a href="/glosary#ecologicalcity">EcologicalCity</a>.`
    },

    // Pregunta 13 (Profundización): Consumo Responsable
    {
        id: "q12_profundiza_consumo_responsable",
        type: "multiple-choice",
        category: "Residuos_y_Consumo",
        points: 5,
        question: "¿Cuál de estas afirmaciones describe mejor un enfoque de 'consumo responsable' en la era digital?",
        options: [
            { text: "Comprar los últimos dispositivos electrónicos cada año, independientemente de su durabilidad.", outcome: "ultimos_dispositivos_falso", isCorrect: false },
            { text: "Adquirir bienes y servicios considerando su impacto social y ambiental, priorizando la durabilidad y el apoyo local.", outcome: "impacto_social_ambiental_correcto", isCorrect: true },
            { text: "Centrarse solo en el precio más bajo, sin importar el origen o las condiciones de producción.", outcome: "precio_bajo_falso", isCorrect: false },
            { text: "Ignorar las cadenas de suministro y solo comprar productos de marcas conocidas.", outcome: "ignorar_cadenas_falso", isCorrect: false }
        ],
        branching: {
            next: "q13_transicion_biodiversidad_recursos"
        },
        feedback: {
            correct: "¡Excelente! El consumo responsable es un pilar fundamental de la sostenibilidad.",
            incorrect: "El consumo responsable implica una mirada crítica y consciente sobre lo que compramos y cómo se produce."
        },
        explanation: `El <a href="/glosary#consumo-responsable">consumo responsable</a> es una filosofía que implica tomar decisiones de compra conscientes, considerando el <a href="/glosary#impacto-social-ambiental">impacto social y ambiental</a> de los productos y servicios a lo largo de todo su <a href="/glosary#ciclo-vida">ciclo de vida</a>. Esto incluye priorizar la <a href="/glosary#durabilidad">durabilidad</a>, la <a href="/glosary#reparabilidad">reparabilidad</a>, el <a href="/glosary#comercio-justo">comercio justo</a>, el <a href="/glosary#apoyo-local">apoyo a la economía local</a> y la <a href="/glosary#reduccion-residuos">reducción de residuos</a>. En la <a href="/glosary#era-digital">era digital</a>, también implica ser consciente de la <a href="/glosary#huella-digital">huella digital</a> de nuestras actividades en línea. Es un componente clave para el desarrollo de una <a href="/glosary#ecologicalcity">EcologicalCity</a>.`
    },

    // Pregunta de Transición: Residuos y Consumo -> Biodiversidad y Recursos Naturales
    {
        id: "q13_transicion_biodiversidad_recursos",
        type: "multiple-choice",
        category: "Transicion",
        points: 2,
        question: "Ya hemos visto cómo nuestros hábitos influyen en los residuos. Ahora, pensando en el entorno natural, ¿por qué es vital proteger la 'biodiversidad' para el bienestar de una ciudad sostenible?",
        options: [
            { text: "Solo tiene un valor estético para los turistas.", outcome: "valor_turistico_falso", isCorrect: false },
            { text: "Porque la extinción de especies es un proceso natural e inofensivo.", outcome: "extincion_natural_falso", isCorrect: false },
            { text: "Porque provee servicios ecosistémicos esenciales como aire y agua limpios, polinización y regulación del clima.", outcome: "servicios_ecosistemicos_correcto", isCorrect: true },
            { text: "Solo beneficia a las comunidades rurales, no a las urbanas.", outcome: "solo_rural_falso", isCorrect: false }
        ],
        branching: {
            next: null,
            outcomes: {
                "servicios_ecosistemicos_correcto": "q14_profundiza_capital_natural",
                "valor_turistico_falso": "q14_repaso_amenazas_biodiversidad",
                "extincion_natural_falso": "q14_repaso_amenazas_biodiversidad",
                "solo_rural_falso": "q14_repaso_amenazas_biodiversidad"
            }
        },
        feedback: {
            correct: "¡Excelente! La biodiversidad es nuestro soporte vital.",
            incorrect: "La biodiversidad es mucho más que animales bonitos; es la base de nuestra vida."
        },
        explanation: `La <a href="/glosary#biodiversidad">biodiversidad</a> (la variedad de vida en la Tierra) es vital porque nos provee <a href="/glosary#servicios-ecosistemicos">servicios ecosistémicos</a> esenciales. Estos incluyen la producción de <a href="/glosary#aire-limpio">aire limpio</a> y <a href="/glosary#agua-pura">agua pura</a>, la <a href="/glosary#polinizacion-cultivos">polinización de cultivos</a>, la <a href="/glosary#regulacion-clima">regulación del clima</a>, el <a href="/glosary#control-plagas">control de plagas</a>, y la provisión de <a href="/glosary#alimentos-medicinas">alimentos y medicinas</a>. Su pérdida compromete la <a href="/glosary#resiliencia-ecosistemas">resiliencia de los ecosistemas</a> y la capacidad de las ciudades para ser <a href="/glosary#sostenibles">sostenibles</a> a largo plazo, afectando directamente el <a href="/glosary#bienestar-humano">bienestar humano</a> en una <a href="/glosary#ecologicalcity">EcologicalCity</a>.`
    },

    // Pregunta 14 (Profundización): Capital Natural
    {
        id: "q14_profundiza_capital_natural",
        type: "multiple-choice",
        category: "Biodiversidad_y_Recursos",
        points: 5,
        question: "¿Qué implica el concepto de 'Capital Natural' en la gestión de una ciudad sostenible?",
        options: [
            { text: "La cantidad de dinero que la ciudad tiene para invertir en infraestructura.", outcome: "dinero_infraestructura_falso", isCorrect: false },
            { text: "Los recursos no renovables que una ciudad puede explotar ilimitadamente.", outcome: "recursos_ilimitados_falso", isCorrect: false },
            { text: "El stock mundial de activos naturales (suelo, aire, agua, biodiversidad) que proporcionan beneficios a las personas.", outcome: "stock_activos_naturales_correcto", isCorrect: true },
            { text: "Solo se refiere a las áreas verdes privadas de la ciudad.", outcome: "areas_verdes_privadas_falso", isCorrect: false }
        ],
        branching: {
            next: null,
            outcomes: {
                "stock_activos_naturales_correcto": "q15_profundiza_servicios_ecosistemicos",
                "dinero_infraestructura_falso": "q15_repaso_especies_invasoras",
                "recursos_ilimitados_falso": "q15_repaso_especies_invasoras",
                "areas_verdes_privadas_falso": "q15_repaso_especies_invasoras"
            }
        },
        feedback: {
            correct: "¡Excelente! Has entendido un concepto fundamental para la sostenibilidad.",
            incorrect: "El Capital Natural es la base de nuestra prosperidad y bienestar."
        },
        explanation: `El <a href="/glosary#capital-natural">Capital Natural</a> se refiere al <a href="/glosary#stock-mundial-activos-naturales">stock mundial de activos naturales</a>, incluyendo el <a href="/glosary#suelo">suelo</a>, el <a href="/glosary#aire">aire</a>, el <a href="/glosary#agua">agua</a> y la <a href="/glosary#biodiversidad">biodiversidad</a>. Estos activos proporcionan a las personas una amplia gama de <a href="/glosary#beneficios">beneficios</a>, conocidos como <a href="/glosary#servicios-ecosistemicos">servicios ecosistémicos</a>, que son esenciales para la <a href="/glosary#supervivencia-bienestar-humano">supervivencia y el bienestar humano</a>. La <a href="/glosary#gestion-sostenible-capital-natural">gestión sostenible del Capital Natural</a> es crucial para la <a href="/glosary#resiliencia-urbana">resiliencia urbana</a> y la viabilidad a largo plazo de una <a href="/glosary#ecologicalcity">EcologicalCity</a>.`
    },

    // Pregunta 15 (Repaso): Amenazas a la Biodiversidad
    {
        id: "q15_repaso_amenazas_biodiversidad",
        type: "multiple-choice",
        category: "Biodiversidad_y_Recursos",
        points: 3,
        question: "¿Cuál de estas actividades humanas es una de las principales causas de la pérdida de biodiversidad a nivel global?",
        options: [
            { text: "La reforestación a gran escala.", outcome: "reforestacion_falso", isCorrect: false },
            { text: "La creación de parques nacionales y reservas naturales.", outcome: "parques_naturales_falso", isCorrect: false },
            { text: "La destrucción de hábitats naturales y la expansión urbana descontrolada.", outcome: "destruccion_habitat_urbana_correcto", isCorrect: true },
            { text: "El desarrollo de energías renovables como la solar y la eólica.", outcome: "energias_renovables_falso", isCorrect: false }
        ],
        branching: {
            next: "q16_transicion_alimentacion_salud"
        },
        feedback: {
            correct: "¡Tristemente, sí! Es nuestro mayor desafío.",
            incorrect: "La pérdida de hábitats es el motor principal de la extinción de especies."
        },
        explanation: `La <a href="/glosary#perdida-biodiversidad">pérdida de biodiversidad</a> es una <a href="/glosary#crisis-global">crisis global</a> impulsada principalmente por actividades humanas. La <a href="/glosary#destruccion-habitats">destrucción de hábitats naturales</a> (desforestación, conversión de tierras) y la <a href="/glosary#expansion-urbana-descontrolada">expansión urbana descontrolada</a> fragmentan los <a href="/glosary#ecosistemas">ecosistemas</a>, dejando a las especies sin hogar y sin recursos. Otras causas incluyen la <a href="/glosary#sobreexplotacion-recursos">sobreexplotación de recursos</a>, la <a href="/glosary#contaminacion">contaminación</a>, el <a href="/glosary#cambio-climatico">cambio climático</a> y la introducción de <a href="/glosary#especies-invasoras">especies invasoras</a>. Proteger estos <a href="/glosary#ecosistemas">ecosistemas</a> es fundamental para la <a href="/glosary#sostenibilidad-largo-plazo">sostenibilidad a largo plazo</a> de la <a href="/glosary#ecologicalcity">EcologicalCity</a>.`
    },

    // Pregunta 16 (Profundización): Servicios Ecosistémicos
    {
        id: "q15_profundiza_servicios_ecosistemicos",
        type: "multiple-choice",
        category: "Biodiversidad_y_Recursos",
        points: 5,
        question: "¿Qué beneficio específico para una ciudad proporcionan los 'servicios ecosistémicos de regulación' ofrecidos por los humedales urbanos?",
        options: [
            { text: "Producir grandes cantidades de energía geotérmica.", outcome: "energia_geotermica_falso", isCorrect: false },
            { text: "Aumentar la necesidad de sistemas de purificación de aire artificiales.", outcome: "purificacion_artificial_falso", isCorrect: false },
            { text: "Actuar como filtros naturales de agua, mitigar inundaciones y regular microclimas.", outcome: "filtros_inundaciones_microclimas_correcto", isCorrect: true },
            { text: "Servir exclusivamente como zonas de vertido de residuos.", outcome: "vertedero_residuos_falso", isCorrect: false }
        ],
        branching: {
            next: "q16_transicion_alimentacion_salud"
        },
        feedback: {
            correct: "¡Excelente! Los humedales son joyas ecológicas y funcionales para la ciudad.",
            incorrect: "Los humedales son ecosistemas increíblemente valiosos con múltiples funciones de regulación."
        },
        explanation: `Los <a href="/glosary#humedales-urbanos">humedales urbanos</a> ofrecen cruciales <a href="/glosary#servicios-ecosistemicos-regulacion">servicios ecosistémicos de regulación</a>. Actúan como <a href="/glosary#filtros-naturales-agua">filtros naturales de agua</a>, eliminando contaminantes y mejorando la calidad del agua. También son fundamentales para <a href="/glosary#mitigar-inundaciones">mitigar inundaciones</a> al absorber el exceso de agua de lluvia y <a href="/glosary#regular-microclimas">regular los microclimas</a> urbanos, contribuyendo a la <a href="/glosary#resiliencia-climatica">resiliencia climática</a> de la ciudad. Proteger y restaurar estos <a href="/glosary#ecosistemas-urbanos">ecosistemas urbanos</a> es una inversión inteligente para la <a href="/glosary#sostenibilidad">sostenibilidad</a> y la <a href="/glosary#calidad-vida">calidad de vida</a> en la <a href="/glosary#ecologicalcity">EcologicalCity</a>.`
    },

    // Pregunta de Transición: Biodiversidad y Recursos Naturales -> Alimentación y Salud
    {
        id: "q16_transicion_alimentacion_salud",
        type: "multiple-choice",
        category: "Transicion",
        points: 2,
        question: "Hemos explorado la vital importancia de la naturaleza. Ahora, enfocándonos en lo que comemos y cómo afecta nuestra salud y el planeta, ¿qué acción relacionada con la alimentación contribuye más a la sostenibilidad?",
        options: [
            { text: "Comprar solo productos de temporada, sin importar su origen.", outcome: "temporada_sin_origen_falso", isCorrect: false },
            { text: "Consumir principalmente alimentos ultraprocesados por su conveniencia.", outcome: "ultraprocesados_falso", isCorrect: false },
            { text: "Reducir el consumo de carne, priorizar alimentos de temporada y origen local, y minimizar el desperdicio de comida.", outcome: "reducir_carne_local_desperdicio_correcto", isCorrect: true },
            { text: "Importar alimentos exóticos de continentes lejanos para una dieta variada.", outcome: "importar_exoticos_falso", isCorrect: false }
        ],
        branching: {
            next: null,
            outcomes: {
                "reducir_carne_local_desperdicio_correcto": "q17_profundiza_sistemas_alimentarios_sostenibles",
                "temporada_sin_origen_falso": "q17_repaso_huella_alimentaria",
                "ultraprocesados_falso": "q17_repaso_huella_alimentaria",
                "importar_exoticos_falso": "q17_repaso_huella_alimentaria"
            }
        },
        feedback: {
            correct: "¡Excelente! Cada bocado cuenta para un planeta más sano.",
            incorrect: "Nuestras decisiones alimentarias tienen un impacto enorme en el medio ambiente y nuestra salud."
        },
        explanation: `Una <a href="/glosary#alimentacion-sostenible">alimentación sostenible</a> es crucial para la <a href="/glosary#salud-humana">salud humana</a> y del <a href="/glosary#planeta">planeta</a>. <a href="/glosary#reducir-consumo-carne">Reducir el consumo de carne</a> (especialmente la roja) disminuye la <a href="/glosary#huella-carbono-ganaderia">huella de carbono de la ganadería</a>. <a href="/glosary#priorizar-alimentos-temporada-local">Priorizar alimentos de temporada y origen local</a> reduce la <a href="/glosary#energia-transporte-almacenamiento">energía de transporte y almacenamiento</a>. Y <a href="/glosary#minimizar-desperdicio-comida">minimizar el desperdicio de comida</a> evita la emisión de <a href="/glosary#gases-efecto-invernadero-descomposicion">gases de efecto invernadero por descomposición</a>. Estas acciones contribuyen a la <a href="/glosary#seguridad-alimentaria">seguridad alimentaria</a> y una <a href="/glosary#ecologicalcity">EcologicalCity</a> más saludable.`
    },

    // Pregunta 17 (Profundización): Sistemas Alimentarios Sostenibles
    {
        id: "q17_profundiza_sistemas_alimentarios_sostenibles",
        type: "multiple-choice",
        category: "Alimentacion_y_Salud",
        points: 5,
        question: "¿Qué característica define un 'sistema alimentario sostenible' en una ciudad?",
        options: [
            { text: "Depender exclusivamente de la importación de alimentos de otros países.", outcome: "importacion_exclusiva_falso", isCorrect: false },
            { text: "Maximizar el uso de pesticidas y fertilizantes químicos para alta producción.", outcome: "pesticidas_quimicos_falso", isCorrect: false },
            { text: "Producir alimentos de manera que se preserve el medio ambiente, sea económicamente viable y socialmente equitativo.", outcome: "produccion_viable_equitativa_correcto", isCorrect: true },
            { text: "Fomentar el desperdicio de alimentos para mantener los precios bajos.", outcome: "desperdicio_bajos_falso", isCorrect: false }
        ],
        branching: {
            next: null,
            outcomes: {
                "produccion_viable_equitativa_correcto": "q18_profundiza_salud_ambiental",
                "importacion_exclusiva_falso": "q18_repaso_nutricion_sostenible",
                "pesticidas_quimicos_falso": "q18_repaso_nutricion_sostenible",
                "desperdicio_bajos_falso": "q18_repaso_nutricion_sostenible"
            }
        },
        feedback: {
            correct: "¡Excelente! Los sistemas alimentarios sostenibles son la base de ciudades resilientes.",
            incorrect: "Un sistema alimentario sostenible considera mucho más que solo la cantidad de comida producida."
        },
        explanation: `Un <a href="/glosary#sistema-alimentario-sostenible">sistema alimentario sostenible</a> es aquel que garantiza la <a href="/glosary#seguridad-alimentaria">seguridad alimentaria</a> para todos de manera que no se comprometan las <a href="/glosary#bases-economicas-sociales-ambientales">bases económicas, sociales y ambientales</a> para las futuras generaciones. Se caracteriza por: <a href="/glosary#preservacion-medioambiente">preservar el medio ambiente</a> (reduciendo huella hídrica y de carbono, promoviendo la <a href="/glosary#biodiversidad-agricola">biodiversidad agrícola</a>), ser <a href="/glosary#economicamente-viable">económicamente viable</a> para los productores y consumidores, y <a href="/glosary#socialmente-equitativo">socialmente equitativo</a> (garantizando el <a href="/glosary#acceso-alimentos-saludables">acceso a alimentos saludables</a> y justos). Es un pilar fundamental para la <a href="/glosary#ecologicalcity">EcologicalCity</a>.`
    },

    // Pregunta 18 (Repaso): Nutrición Sostenible
    {
        id: "q18_repaso_nutricion_sostenible",
        type: "multiple-choice",
        category: "Alimentacion_y_Salud",
        points: 3,
        question: "¿Qué impacto tiene una dieta basada principalmente en vegetales y productos de origen local en la huella ecológica de una persona?",
        options: [
            { text: "Aumenta significativamente la huella ecológica por el consumo de agua.", outcome: "aumenta_agua_falso", isCorrect: false },
            { text: "No tiene ningún impacto relevante en comparación con otras acciones.", outcome: "sin_impacto_relevante_falso", isCorrect: false },
            { text: "Reduce la huella de carbono, el uso de agua y el impacto en la tierra, y mejora la salud.", outcome: "reduce_huella_mejora_salud_correcto", isCorrect: true },
            { text: "Requiere un mayor uso de envases plásticos para la conservación.", outcome: "mayor_uso_plasticos_falso", isCorrect: false }
        ],
        branching: {
            next: "q19_transicion_educacion_participacion"
        },
        feedback: {
            correct: "¡Correcto! Es una de las acciones individuales más poderosas.",
            incorrect: "Nuestras dietas son grandes impulsoras del cambio ambiental. ¡Elige sabiamente!"
        },
        explanation: `Adoptar una <a href="/glosary#dieta-basada-vegetales">dieta basada principalmente en vegetales</a> y <a href="/glosary#productos-origen-local">productos de origen local</a> tiene un impacto muy positivo en la <a href="/glosary#huella-ecologica">huella ecológica</a> de una persona. <a href="/glosary#reduce-huella-carbono">Reduce la huella de carbono</a> (especialmente por la menor producción de carne), el <a href="/glosary#uso-agua">uso de agua</a> y el <a href="/glosary#impacto-tierra">impacto en la tierra</a>. Además, una dieta así suele estar asociada con una <a href="/glosary#mejora-salud">mejora de la salud</a> general. Es una acción individual clave para fomentar la <a href="/glosary#sostenibilidad">sostenibilidad</a> y el <a href="/glosary#bienestar">bienestar</a> en la <a href="/glosary#ecologicalcity">EcologicalCity</a>.`
    },

    // Pregunta 19 (Profundización): Salud Ambiental
    {
        id: "q18_profundiza_salud_ambiental",
        type: "multiple-choice",
        category: "Alimentacion_y_Salud",
        points: 4,
        question: "¿Cómo impacta directamente la contaminación del aire en la salud de los habitantes de una ciudad, y qué solución urbana sostenible busca mitigarla?",
        options: [
            { text: "Solo causa irritación ocular leve; se mitiga usando gafas de sol.", outcome: "irritacion_gafas_falso", isCorrect: false },
            { text: "Reduce la capacidad de atención; se mitiga escuchando música relajante.", outcome: "atencion_musica_falso", isCorrect: false },
            { text: "Provoca enfermedades respiratorias y cardiovasculares; se mitiga fomentando el transporte público y las zonas verdes.", outcome: "enfermedades_transporte_zonas_verdes_correcto", isCorrect: true },
            { text: "Solo afecta a los edificios; se mitiga limpiando las fachadas con frecuencia.", outcome: "afecta_edificios_falso", isCorrect: false }
        ],
        branching: {
            next: "q19_transicion_educacion_participacion"
        },
        feedback: {
            correct: "¡Correcto! Una ciudad sana es una ciudad sostenible.",
            incorrect: "La calidad del aire es un factor crítico de la salud pública urbana."
        },
        explanation: `La <a href="/glosary#contaminacion-aire">contaminación del aire</a> en las ciudades tiene un <a href="/glosary#impacto-directo-salud">impacto directo y grave en la salud</a>, provocando <a href="/glosary#enfermedades-respiratorias">enfermedades respiratorias</a> (asma, bronquitis) y <a href="/glosary#cardiovasculares">cardiovasculares</a>. Las soluciones urbanas sostenibles para mitigarla incluyen el <a href="/glosary#fomento-transporte-publico">fomento del transporte público</a>, la creación de más <a href="/glosary#zonas-verdes-urbanas">zonas verdes urbanas</a> (que actúan como filtros naturales), la promoción de la <a href="/glosary#movilidad-activa">movilidad activa</a> (bicicleta, caminar) y la implementación de <a href="/glosary#energias-renovables">energías renovables</a>. Todo esto es esencial para una <a href="/glosary#salud-ambiental-urbana">salud ambiental urbana</a> óptima en la <a href="/glosary#ecologicalcity">EcologicalCity</a>.`
    },

    // Pregunta de Transición: Alimentación y Salud -> Educación y Participación
    {
        id: "q19_transicion_educacion_participacion",
        type: "multiple-choice",
        category: "Transicion",
        points: 2,
        question: "Hemos visto cómo nuestras decisiones afectan nuestra salud y el planeta. Pero, ¿cómo podemos lograr un cambio a gran escala en una EcologicalCity? ¿Qué factor es indispensable para inspirar y capacitar a la comunidad?",
        options: [
            { text: "Imponer estrictas regulaciones sin explicación ni diálogo.", outcome: "regulaciones_sin_dialogo_falso", isCorrect: false },
            { text: "La indiferencia ciudadana ante los problemas ambientales.", outcome: "indiferencia_ciudadana_falso", isCorrect: false },
            { text: "La educación ambiental inclusiva y el fomento de la participación ciudadana activa.", outcome: "educacion_participacion_correcto", isCorrect: true },
            { text: "Depender únicamente de soluciones tecnológicas sin involucrar a las personas.", outcome: "solo_tecnologia_falso", isCorrect: false }
        ],
        branching: {
            next: null,
            outcomes: {
                "educacion_participacion_correcto": "q20_profundiza_ciudadania_activa",
                "regulaciones_sin_dialogo_falso": "q20_repaso_conciencia_ambiental",
                "indiferencia_ciudadana_falso": "q20_repaso_conciencia_ambiental",
                "solo_tecnologia_falso": "q20_repaso_conciencia_ambiental"
            }
        },
        feedback: {
            correct: "¡Absolutamente! La participación informada es el motor del cambio.",
            incorrect: "El cambio real y duradero viene de una ciudadanía empoderada y comprometida."
        },
        explanation: `Para lograr un <a href="/glosary#cambio-gran-escala">cambio a gran escala</a> hacia la <a href="/glosary#sostenibilidad">sostenibilidad</a> en una <a href="/glosary#ecologicalcity">EcologicalCity</a>, la <a href="/glosary#educacion-ambiental-inclusiva">educación ambiental inclusiva</a> y el <a href="/glosary#fomento-participacion-ciudadana-activa">fomento de la participación ciudadana activa</a> son indispensables. No basta con la tecnología o las regulaciones; es crucial <a href="/glosary#inspirar-capacitar-comunidad">inspirar y capacitar a la comunidad</a> para que comprenda los desafíos, proponga soluciones y se involucre en la toma de decisiones. Una <a href="/glosary#ciudadania-activa">ciudadanía activa</a> es la base para la <a href="/glosary#resiliencia">resiliencia</a> y la <a href="/glosary#innovacion-social">innovación social</a>.`
    },

    // Pregunta 20 (Profundización): Ciudadanía Activa y Gobernanza
    {
        id: "q20_profundiza_ciudadania_activa",
        type: "multiple-choice",
        category: "Educacion_y_Participacion",
        points: 5,
        question: "¿Qué papel juega la 'gobernanza colaborativa' entre ciudadanos, gobierno y empresas en la implementación exitosa de proyectos de sostenibilidad urbana?",
        options: [
            { text: "Genera burocracia excesiva y retrasa los proyectos.", outcome: "burocracia_falso", isCorrect: false },
            { text: "Permite que solo una parte imponga sus decisiones sin consenso.", outcome: "imponer_decisiones_falso", isCorrect: false },
            { text: "Facilita el consenso, optimiza recursos y asegura la legitimidad y apropiación de las soluciones por la comunidad.", outcome: "consenso_recursos_legitimidad_correcto", isCorrect: true },
            { text: "Es solo relevante para proyectos muy pequeños y de bajo impacto.", outcome: "proyectos_pequenos_falso", isCorrect: false }
        ],
        branching: {
            next: null,
            outcomes: {
                "consenso_recursos_legitimidad_correcto": "q21_profundiza_tecnologia_sostenibilidad",
                "burocracia_falso": "q21_repaso_comunicacion_ambiental",
                "imponer_decisiones_falso": "q21_repaso_comunicacion_ambiental",
                "proyectos_pequenos_falso": "q21_repaso_comunicacion_ambiental"
            }
        },
        feedback: {
            correct: "¡Impecable! La colaboración es el motor del cambio sostenible.",
            incorrect: "Sin colaboración, los proyectos de sostenibilidad a menudo enfrentan resistencia y carecen de impacto duradero."
        },
        explanation: `La <a href="/glosary#gobernanza-colaborativa">gobernanza colaborativa</a> es un modelo en el que <a href="/glosary#ciudadanos">ciudadanos</a>, <a href="/glosary#gobierno">gobierno</a> y <a href="/glosary#empresas">empresas</a> trabajan juntos en la toma de decisiones y la <a href="/glosary#implementacion-proyectos-sostenibilidad">implementación de proyectos de sostenibilidad</a>. Facilita el <a href="/glosary#consenso">consenso</a>, optimiza el <a href="/glosary#uso-recursos">uso de recursos</a> (financieros, humanos, tecnológicos) y asegura la <a href="/glosary#legitimidad-apropiacion">legitimidad y apropiación</a> de las soluciones por parte de la comunidad. Esta <a href="/glosary#sinergia">sinergia</a> es vital para construir una <a href="/glosary#ecologicalcity">EcologicalCity</a> resiliente e inclusiva, superando los desafíos que una sola entidad no podría resolver.`
    },

    // Pregunta 21 (Repaso): Conciencia Ambiental
    {
        id: "q21_repaso_conciencia_ambiental",
        type: "multiple-choice",
        category: "Educacion_y_Participacion",
        points: 3,
        question: "¿Qué papel juegan las campañas de sensibilización ambiental en el cambio de hábitos de los ciudadanos?",
        options: [
            { text: "Ninguno, la gente no cambia por campañas.", outcome: "ninguno_falso", isCorrect: false },
            { text: "Solo informan, no inspiran a la acción.", outcome: "solo_informan_falso", isCorrect: false },
            { text: "Informan sobre problemas y soluciones, motivan a la reflexión y fomentan la adopción de prácticas sostenibles.", outcome: "informan_motivan_fomentan_correcto", isCorrect: true },
            { text: "Crean pánico y desinterés en el tema ambiental.", outcome: "panico_desinteres_falso", isCorrect: false }
        ],
        branching: {
            next: "q22_transicion_consumo_responsable"
        },
        feedback: {
            correct: "¡Absolutamente! Son herramientas poderosas para movilizar a la sociedad.",
            incorrect: "Las campañas de sensibilización son un primer paso crucial para la acción colectiva."
        },
        explanation: `Las <a href="/glosary#campanas-sensibilizacion-ambiental">campañas de sensibilización ambiental</a> son herramientas clave para educar e inspirar. Su papel es <a href="/glosary#informar-problemas-soluciones">informar a la población sobre los problemas ambientales</a> y las posibles soluciones, <a href="/glosary#motivar-reflexion">motivar a la reflexión</a> sobre el impacto individual y colectivo, y <a href="/glosary#fomentar-adopcion-practicas-sostenibles">fomentar la adopción de prácticas sostenibles</a>. Al aumentar la <a href="/glosary#conciencia-ambiental">conciencia ambiental</a>, contribuyen a la <a href="/glosary#participacion-ciudadana">participación ciudadana</a> y a la creación de una <a href="/glosary#cultura-sostenible">cultura sostenible</a> en la <a href="/glosary#ecologicalcity">EcologicalCity</a>.`
    },

    // Pregunta 22 (Profundización): Tecnología y Sostenibilidad
    {
        id: "q21_profundiza_tecnologia_sostenibilidad",
        type: "multiple-choice",
        category: "Educacion_y_Participacion",
        points: 4,
        question: "¿De qué manera las 'ciudades inteligentes' (Smart Cities) utilizan la tecnología para promover la sostenibilidad?",
        options: [
            { text: "Se enfocan solo en la instalación de pantallas gigantes para publicidad.", outcome: "publicidad_falso", isCorrect: false },
            { text: "Aumentan el consumo de energía con dispositivos tecnológicos innecesarios.", outcome: "consumo_innecesario_falso", isCorrect: false },
            { text: "Implementan sensores para optimizar el tráfico, gestionar residuos, monitorear la calidad del aire y el consumo energético.", outcome: "sensores_optimizacion_correcto", isCorrect: true },
            { text: "Reemplazan completamente la interacción humana por sistemas automatizados.", outcome: "reemplazo_humano_falso", isCorrect: false }
        ],
        branching: {
            next: "q22_transicion_consumo_responsable"
        },
        feedback: {
            correct: "¡Absolutamente! La tecnología, bien usada, es una aliada poderosa.",
            incorrect: "Las Smart Cities buscan soluciones innovadoras para los desafíos urbanos."
        },
        explanation: `Las <a href="/glosary#ciudades-inteligentes">ciudades inteligentes (Smart Cities)</a> aprovechan la <a href="/glosary#tecnologia">tecnología</a> y los <a href="/glosary#datos">datos</a> para mejorar la <a href="/glosary#calidad-vida-urbana">calidad de vida urbana</a> y la <a href="/glosary#sostenibilidad">sostenibilidad</a>. Implementan <a href="/glosary#sensores">sensores</a> y <a href="/glosary#plataformas-conectadas">plataformas conectadas</a> para <a href="/glosary#optimizar-trafico">optimizar el tráfico</a>, gestionar los <a href="/glosary#residuos">residuos</a> de manera eficiente, <a href="/glosary#monitorear-calidad-aire">monitorear la calidad del aire</a> y el <a href="/glosary#consumo-energetico">consumo energético</a>, entre otros. Esto permite una <a href="/glosary#gestion-recursos-eficiente">gestión de recursos más eficiente</a>, una <a href="/glosary#planificacion-urbana-basada-datos">planificación urbana basada en datos</a> y fomenta la <a href="/glosary#innovacion-sostenible">innovación sostenible</a> en la <a href="/glosary#ecologicalcity">EcologicalCity</a>.`
    },

    // --- Pregunta de Transición: Educación y Participación -> Consumo Responsable ---
    {
        id: "q22_transicion_consumo_responsable",
        type: "multiple-choice",
        category: "Transicion",
        points: 2,
        question: "Hemos recorrido la importancia de la educación y la tecnología en nuestra EcologicalCity. Ahora, volviendo a nuestras acciones diarias, ¿qué aspecto de nuestro 'consumo' es fundamental para impulsar un cambio positivo en el planeta?",
        options: [
            { text: "Comprar productos sin pensar en su ciclo de vida.", outcome: "sin_ciclo_vida_falso", isCorrect: false },
            { text: "Aumentar el consumo de bienes desechables para estimular la economía.", outcome: "desechables_economia_falso", isCorrect: false },
            { text: "La elección consciente de productos y servicios considerando su impacto ambiental y social.", outcome: "eleccion_consciente_correcto", isCorrect: true },
            { text: "Solo preocuparse por el precio más bajo, sin importar el origen.", outcome: "precio_origen_falso", isCorrect: false }
        ],
        branching: {
            next: null,
            outcomes: {
                "eleccion_consciente_correcto": "q23_profundiza_economia_circular", // Ramifica a una pregunta de profundización sobre Consumo Responsable
                "sin_ciclo_vida_falso": "q24_repaso_compras_sostenibles", // Ramifica a una pregunta de repaso sobre Compras Sostenibles
                "desechables_economia_falso": "q24_repaso_compras_sostenibles",
                "precio_origen_falso": "q24_repaso_compras_sostenibles"
            }
        },
        feedback: {
            correct: "¡Excelente! Cada compra es un acto con consecuencias.",
            incorrect: "Tu poder como consumidor es inmenso. ¡Úsalo con sabiduría!"
        },
        explanation: `El <a href="/glosary#consumo-responsable">consumo responsable</a> es un pilar fundamental para el <a href="/glosary#desarrollo-sostenible">desarrollo sostenible</a>. Implica la <a href="/glosary#eleccion-consciente">elección consciente</a> de <a href="/glosary#productos-servicios">productos y servicios</a>, considerando su <a href="/glosary#impacto-ambiental">impacto ambiental</a> (uso de recursos, residuos) y <a href="/glosary#impacto-social">social</a> (condiciones laborales, comercio justo) a lo largo de todo su <a href="/glosary#ciclo-vida">ciclo de vida</a>. Es una forma directa de <a href="/glosary#impulsar-cambio-positivo">impulsar un cambio positivo</a> en el planeta y construir una <a href="/glosary#ecologicalcity">EcologicalCity</a>.`
    },

    // --- Pregunta de Profundización: CONSUMO_RESPONSABLE (Economía Circular y Residuos) ---
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
            next: "q26_cierre_rol_comunidad_futuro" // Enlaza a la primera pregunta de cierre
        },
        feedback: {
            correct: "¡Exacto! Incluso en el mundo digital, nuestras acciones tienen un impacto real.",
            incorrect: "Nuestra actividad en línea tiene una huella energética y ambiental que a menudo subestimamos."
        },
        explanation: `La <a href="/glosary#huella-digital">huella digital</a> se refiere al <a href="/glosary#impacto-ambiental-actividades-online">impacto ambiental de nuestras actividades en línea</a>. Aunque no siempre es visible, el almacenamiento de datos, la transmisión de información y el uso de servicios en la nube requieren una enorme cantidad de <a href="/glosary#energia-servidores">energía para servidores</a>, <a href="/glosary#centros-datos">centros de datos</a> y los propios <a href="/glosary#dispositivos">dispositivos</a>. Ser consciente de esta huella digital, optimizar el uso y apoyar servicios con <a href="/glosary#energia-renovable-digital">energía renovable</a> es parte del <a href="/glosary#consumo-responsable">consumo responsable</a> y la <a href="/glosary#sostenibilidad-digital">sostenibilidad digital</a> en una <a href="/glosary#ecologicalcity">EcologicalCity</a>.`
    },

    // --- Pregunta de Cierre: Rol de la Comunidad y Futuro ---
    {
        id: "q26_cierre_rol_comunidad_futuro",
        type: "multiple-choice",
        category: "Cierre",
        points: 5,
        question: "¿Cuál crees que es el rol más importante que cada ciudadano puede desempeñar en la construcción de una EcologicalCity y un futuro sostenible?",
        options: [
            { text: "Esperar a que los líderes mundiales resuelvan todos los problemas sin intervención individual.", outcome: "esperar_lideres_falso", isCorrect: false },
            { text: "Aislarse de los problemas ambientales, ya que son demasiado grandes para una persona.", outcome: "aislarse_falso", isCorrect: false },
            { text: "Participar activamente en la educación ambiental, adoptar hábitos sostenibles y abogar por políticas ecológicas.", outcome: "participacion_activa_correcto", isCorrect: true },
            { text: "Consumir más recursos para estimular la economía y la innovación.", outcome: "estimular_economia_falso", isCorrect: false }
        ],
        branching: {
            next: "q27_cierre_mensaje_final"
        },
        feedback: {
            correct: "¡Exacto! Tu acción y compromiso son la clave.",
            incorrect: "Cada uno de nosotros tiene un papel fundamental en el cambio. ¡No subestimes tu poder!"
        },
        explanation: `La construcción de una <a href="/glosary#ecologicalcity">EcologicalCity</a> y un <a href="/glosary#futuro-sostenible">futuro sostenible</a> depende de la <a href="/glosary#participacion-ciudadana">participación ciudadana activa</a>. Esto incluye la <a href="/glosary#educacion-ambiental">educacion ambiental</a> continua, la adopción de <a href="/glosary#habitos-sostenibles">hábitos sostenibles</a> en el día a día (desde el <a href="/glosary#consumo-responsable">consumo responsable</a> hasta la <a href="/glosary#movilidad-sostenible">movilidad sostenible</a>) y la <a href="/glosary#abogacia-politicas-ecologicas">abogacía por políticas ecológicas</a>. El <a href="/glosary#impacto-colectivo">impacto colectivo</a> de las acciones individuales es inmenso.`
    },

    // --- Pregunta de Cierre: Mensaje Final / Reflexión ---
    {
        id: "q27_cierre_mensaje_final",
        type: "multiple-choice", // Opcional, podría ser solo una pantalla de mensaje si el framework lo permite
        category: "Cierre",
        points: 3,
        question: "¿Qué es lo más importante que esperas llevarte de tu experiencia con EcologicalCity para aplicar en tu vida diaria?",
        options: [
            { text: "La importancia de conocer los detalles técnicos de la energía renovable.", outcome: "detalles_tecnicos_falso", isCorrect: false },
            { text: "Que los problemas ambientales son responsabilidad exclusiva de los científicos y gobiernos.", outcome: "responsabilidad_otros_falso", isCorrect: false },
            { text: "La comprensión de que cada decisión de consumo y estilo de vida tiene un impacto y la capacidad de influir positivamente.", outcome: "impacto_diario_positivo_correcto", isCorrect: true },
            { text: "La necesidad de mudarse a una zona rural para vivir de forma sostenible.", outcome: "mudarse_rural_falso", isCorrect: false }
        ],
        branching: {
            next: null // Final del quiz
        },
        feedback: {
            correct: "¡Excelente! Esa es la esencia de nuestro mensaje.",
            incorrect: "EcologicalCity busca empoderarte para ser parte de la solución en tu propio entorno."
        },
        explanation: `El mensaje central de <a href="/glosary#ecologicalcity">EcologicalCity</a> es empoderar a cada individuo. Lo más importante es comprender que cada <a href="/glosary#decision-consumo">decision de consumo</a> y <a href="/glosary#estilo-vida">estilo de vida</a> tiene un <a href="/glosary#impacto-ambiental-social">impacto ambiental y social</a>, y que poseemos la <a href="/glosary#capacidad-influir-positivamente">capacidad de influir positivamente</a>. No se trata de perfección, sino de <a href="/glosary#mejora-continua">mejora continua</a>, <a href="/glosary#aprendizaje-constante">aprendizaje constante</a> y <a href="/glosary#accion-consciente">acción consciente</a> para contribuir a la <a href="/glosary#sostenibilidad">sostenibilidad</a> en nuestro día a día.`
    },

    // Esta es la última pregunta del quiz que debería llevar a la pantalla de resultados final
    {
        id: "q_cierre_acciones_individuales",
        type: "multiple-choice",
        category: "Cierre", // Asigna una categoría adecuada
        points: 5,
        question: "¿Cuál de estas acciones individuales tiene el mayor impacto colectivo positivo en la sostenibilidad de una ciudad?",
        options: [
            { text: "No participar en iniciativas comunitarias, dejando todo a las autoridades.", outcome: "no_participar", isCorrect: false },
            { text: "Minimizar la separación de residuos, ya que 'no hace mucha diferencia'.", outcome: "no_separar", isCorrect: false },
            { text: "Adoptar y promover hábitos como la separación de residuos, usar transporte público/bicicleta y apoyar negocios locales sostenibles.", outcome: "accion_ciudadana", isCorrect: true },
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
    }
];