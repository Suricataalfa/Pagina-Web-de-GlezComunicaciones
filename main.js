// Este archivo contiene el código JavaScript que añade interactividad a la página web.
// Puedes incluir funciones para manejar eventos y manipular el DOM aquí.

document.addEventListener('DOMContentLoaded', () => {
    // Código para inicializar la interactividad de la página
    console.log('La página ha sido cargada y está lista para la interactividad.');

    // Ejemplo de manejo de eventos
    const button = document.getElementById('mi-boton');
    if (button) {
        button.addEventListener('click', () => {
            alert('¡Botón clickeado!');
        });
    }

    // Selecciona todos los botones de imagen
    const botones = document.querySelectorAll('.img-btn');
    // Información de cada artículo (puedes agregar más campos si lo necesitas)
    const articulos = [
        {
            titulo: 'Tecno Spark 10 Pro',
            imagen: 'imagenes/tecnospark10pro.jpg',
            texto: 'Información relevante sobre el artículo 1.',
            extra: 'Este teléfono cuenta con 8GB RAM, 128GB almacenamiento y cámara de 50MP.'
        },
        {
            titulo: 'Título 2',
            imagen: 'assets/foto2.jpg',
            texto: 'Información relevante sobre el artículo 2.',
            extra: 'Detalles adicionales del artículo 2.'
        },
        {
            titulo: 'Título 3',
            imagen: 'assets/foto3.jpg',
            texto: 'Información relevante sobre el artículo 3.',
            extra: 'Detalles adicionales del artículo 3.'
        },
        {
            titulo: 'Título 4',
            imagen: 'imagenes/foto4.jpg',
            texto: 'Información relevante sobre el artículo 4.',
            extra: 'Detalles adicionales del artículo 4.'
        },
        {
            titulo: 'Título 5',
            imagen: 'imagenes/foto5.jpg',
            texto: 'Información relevante sobre el artículo 5.',
            extra: 'Detalles adicionales del artículo 5.'
        }
    ];

    // Asigna evento a cada botón
    botones.forEach((btn, idx) => {
        btn.addEventListener('click', function() {
            mostrarInfoExtra(articulos[idx]);
        });
    });

    // Mostrar/ocultar barra lateral
    document.getElementById('toggle-sidebar').addEventListener('click', function() {
        const sidebar = document.getElementById('sidebar');
        const body = document.body;
        if (sidebar.classList.contains('oculta')) {
            sidebar.classList.remove('oculta');
            body.classList.remove('menu-cerrado');
        } else {
            sidebar.classList.add('oculta');
            body.classList.add('menu-cerrado');
        }
    });
});

// Muestra la sección de información extra con más datos
function mostrarInfoExtra(articulo) {
    document.getElementById('info-titulo').textContent = articulo.titulo;
    document.getElementById('info-img').src = articulo.imagen;
    document.getElementById('info-img').alt = articulo.titulo;
    document.getElementById('info-texto').innerHTML = `
        <strong>${articulo.texto}</strong><br><br>
        <span>${articulo.extra}</span>
    `;
    document.getElementById('info-extra').style.display = 'block';
}

// Oculta la sección de información extra
function cerrarInfoExtra() {
    document.getElementById('info-extra').style.display = 'none';
}

// Muestra/oculta la información adicional al pulsar el botón "Más..."
function mostrarMasInfo(boton) {
    const info = boton.nextElementSibling;
    if (info.style.display === "none") {
        info.style.display = "block";
        boton.textContent = "Menos...";
    } else {
        info.style.display = "none";
        boton.textContent = "Más...";
    }
}