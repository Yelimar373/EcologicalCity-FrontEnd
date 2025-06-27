const express = require('express');
const path = require('path');
const { title } = require('process');
const app = express();

// Puerto donde escuchará el servidor
const PORT = process.env.PORT || 3000;

// --- Configuración del Motor de Plantillas (EJS) ---
// Establecer EJS como motor de vistas
app.set('view engine', 'ejs');
// Definir la carpeta donde Express buscará los archivos de plantilla
app.set('views', path.join(__dirname, 'views'));

// --- Servir Archivos Estáticos  ---
// Middleware para servir archivos estáticos desde la carpeta 'public'
// Cuando el navegador solicite un archivo como /css/style.css, Express lo buscará en public/css/style.css
app.use(express.static(path.join(__dirname, 'public')));

// --- Definición de Rutas (Endpoints) para páginas ---

// Ruta para la página de Inicio (/)
// Esto sirve el index.html cuando se accede a la raíz
app.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, 'public', 'pages','index.html'));
    res.render('index');
});

// Ruta para la página "Acerca de" (/about)
// Esto logra la URL amigable: http://localhost:3000/about
app.get('/news', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pages', 'news.html'));
});

// 9. Ruta para la página "Contacto" (/contact)
// Esto logra la URL amigable: http://localhost:3000/contact
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// --- Manejo de Errores  ---

// Middleware para manejar rutas no encontradas (404 Not Found)
app.use((req, res, next) => {
    res.status(404).send('<h1>Página no encontrada (404)</h1><p>Lo sentimos, la página que buscas no existe.</p>');
});

app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en http://localhost:${PORT}`);
    console.log(`Acceso desde la red local: http://[TU_IP_LOCAL]:${PORT}`);
    console.log('Presiona Ctrl+C para detener el servidor.');
});