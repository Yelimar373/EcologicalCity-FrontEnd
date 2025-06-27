document.addEventListener('DOMContentLoaded', () => {
    // Datos de ejemplo para el glosario. En un proyecto real, esto podría venir de un JSON.
    const glosaryData = {
        "biodiversidad": {
            term: "Biodiversidad",
            definition: "La biodiversidad, o diversidad biológica, es la variedad de la vida. Incluye la diversidad de especies de plantas, animales, hongos y microorganismos que viven en un espacio determinado, a su variabilidad genética, a los ecosistemas de los cuales forman parte estas especies y a los paisajes o regiones en donde se ubican los ecosistemas."
        },
        "huella-carbono": {
            term: "Huella de Carbono",
            definition: "La huella de carbono es la totalidad de gases de efecto invernadero (GEI) emitidos por efecto directo o indirecto de un individuo, organización, evento o producto. Se mide en unidades de dióxido de carbono equivalente (CO2e)."
        },
        "sostenibilidad": {
            term: "Sostenibilidad",
            definition: "La sostenibilidad se refiere a la satisfacción de las necesidades de la generación presente sin comprometer la capacidad de las generaciones futuras de satisfacer sus propias necesidades. Implica un equilibrio entre el desarrollo económico, el cuidado ambiental y la equidad social."
        },
        "energias-renovables": {
            term: "Energías Renovables",
            definition: "Son fuentes de energía que se reponen naturalmente y no se agotan. Incluyen la energía solar, eólica, hidráulica, geotérmica y de biomasa."
        },
        "ecologia": {
            term: "Ecología",
            definition: "La ecología es la rama de la biología que estudia las interacciones entre los organismos y su entorno, incluyendo otros organismos. Analiza cómo los seres vivos se adaptan a su ambiente y cómo lo modifican."
        }
        // ... Agrega más términos aquí
    };

    const searchInput = document.getElementById('searchInput');
    const glosaryTermsList = document.getElementById('glosaryTermsList');
    const glosaryDefinitionDisplay = document.getElementById('glosaryDefinitionDisplay');
    const alphabetFilter = document.querySelector('.alphabet-filter');

    // Función para renderizar la lista de términos
    function renderTerms(filteredTerms = glosaryData) {
        glosaryTermsList.innerHTML = ''; // Limpiar la lista existente
        const sortedKeys = Object.keys(filteredTerms).sort((a, b) => 
            filteredTerms[a].term.localeCompare(filteredTerms[b].term)
        );

        if (sortedKeys.length === 0) {
            glosaryTermsList.innerHTML = '<li class="no-results">No se encontraron resultados.</li>';
            glosaryDefinitionDisplay.innerHTML = '<h2>No hay términos para mostrar.</h2><p>Intenta ajustar tu búsqueda o filtro.</p>';
            return;
        }

        sortedKeys.forEach(key => {
            const termData = filteredTerms[key];
            const listItem = document.createElement('li');
            listItem.textContent = termData.term;
            listItem.dataset.termId = key;
            glosaryTermsList.appendChild(listItem);
        });

        // Seleccionar el primer término por defecto si hay términos
        if (sortedKeys.length > 0) {
            const firstTermElement = glosaryTermsList.querySelector('li');
            if (firstTermElement) {
                firstTermElement.classList.add('active');
                displayDefinition(firstTermElement.dataset.termId);
            }
        } else {
            glosaryDefinitionDisplay.innerHTML = '<h2>Selecciona un término para ver su definición</h2><p>Utiliza la barra de búsqueda o el filtro alfabético para encontrar lo que necesitas.</p>';
        }
    }

    // Función para mostrar la definición
    function displayDefinition(termId) {
        const term = glosaryData[termId];
        if (term) {
            glosaryDefinitionDisplay.innerHTML = `
                <h2>${term.term}</h2>
                <p>${term.definition}</p>
            `;
        } else {
            glosaryDefinitionDisplay.innerHTML = '<h2>Término no encontrado</h2><p>Por favor, selecciona un término válido de la lista.</p>';
        }
    }

    // Manejar clics en la lista de términos
    glosaryTermsList.addEventListener('click', (event) => {
        const clickedItem = event.target.closest('li');
        if (clickedItem && clickedItem.dataset.termId) {
            // Eliminar 'active' de todos los elementos
            glosaryTermsList.querySelectorAll('li').forEach(item => item.classList.remove('active'));
            // Añadir 'active' al elemento clicado
            clickedItem.classList.add('active');
            displayDefinition(clickedItem.dataset.termId);
        }
    });

    // Manejar la búsqueda
    searchInput.addEventListener('input', (event) => {
        const searchText = event.target.value.toLowerCase();
        const filtered = {};
        for (const key in glosaryData) {
            if (glosaryData[key].term.toLowerCase().includes(searchText) ||
                glosaryData[key].definition.toLowerCase().includes(searchText)) {
                filtered[key] = glosaryData[key];
            }
        }
        renderTerms(filtered);
    });

    // Generar botones de filtro alfabético dinámicamente (opcional, si no los tienes en HTML)
    function generateAlphabetFilter() {
        alphabetFilter.innerHTML = '<button class="filter-btn active" data-filter="all">Todos</button>';
        const letters = new Set();
        for (const key in glosaryData) {
            letters.add(glosaryData[key].term.charAt(0).toUpperCase());
        }
        Array.from(letters).sort().forEach(letter => {
            const button = document.createElement('button');
            button.classList.add('filter-btn');
            button.dataset.filter = letter;
            button.textContent = letter;
            alphabetFilter.appendChild(button);
        });
    }

    // Manejar filtro alfabético
    alphabetFilter.addEventListener('click', (event) => {
        const clickedButton = event.target.closest('.filter-btn');
        if (clickedButton) {
            alphabetFilter.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            clickedButton.classList.add('active');
            const filterLetter = clickedButton.dataset.filter;

            if (filterLetter === 'all') {
                renderTerms(glosaryData);
            } else {
                const filtered = {};
                for (const key in glosaryData) {
                    if (glosaryData[key].term.charAt(0).toUpperCase() === filterLetter) {
                        filtered[key] = glosaryData[key];
                    }
                }
                renderTerms(filtered);
            }
        }
    });

    // Inicializar el glosario al cargar la página
    generateAlphabetFilter(); // Genera los botones de la A a la Z
    renderTerms(); // Muestra todos los términos al inicio
});