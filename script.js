// Seleccionamos el botón de hamburguesa y el contenedor de los enlaces
const botonMenu = document.querySelector('.menu-movil');
const enlacesNav = document.querySelector('.nav-links');

// Escuchamos el clic en el botón para activar o desactivar el menú
botonMenu.addEventListener('click', () => {
    enlacesNav.classList.toggle('activo');
});
// ==========================================
// CONTROL DE VENTANAS EMERGENTES (MODALES)
// ==========================================

// Seleccionamos todos los botones que abren modales
const botonesAbrir = document.querySelectorAll('.btn-abrir');
// Seleccionamos todos los botones para cerrar (las X)
const botonesCerrar = document.querySelectorAll('.btn-cerrar');
// Seleccionamos todos los fondos de los modales
const modales = document.querySelectorAll('.modal-overlay');

// Al hacer clic en un botón "Leer más..."
botonesAbrir.forEach(boton => {
    boton.addEventListener('click', (e) => {
        e.preventDefault(); // Evita que la página salte al inicio
        const idModal = boton.getAttribute('data-modal');
        const modalTarget = document.getElementById(idModal);
        if (modalTarget) {
            modalTarget.classList.add('mostrar'); // Muestra el cuadro
        }
    });
});

// Al hacer clic en la "X"
botonesCerrar.forEach(boton => {
    boton.addEventListener('click', () => {
        const modalActivo = boton.closest('.modal-overlay');
        if (modalActivo) {
            modalActivo.classList.remove('mostrar'); // Oculta el cuadro
        }
    });
});

// Al hacer clic fuera del cuadro (en el fondo oscuro) también se cierra
modales.forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('mostrar'); // Oculta el cuadro
        }
    });
});