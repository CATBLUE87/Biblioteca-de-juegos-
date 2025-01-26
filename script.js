// script.js

// Función para manejar la barra de búsqueda
const searchBar = document.querySelector('.search-bar');
const items = document.querySelectorAll('.item-list li');

searchBar.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

// Función para manejar descargas
const downloadButtons = document.querySelectorAll('.download-btn');

downloadButtons.forEach(button => {
    button.addEventListener('click', () => {
        const browser = button.textContent.trim();
        alert(`Descargando instalador para ${browser}...`);
    });
});
