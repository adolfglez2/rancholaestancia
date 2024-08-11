document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('img01');
    const captionText = document.getElementById('caption');
    const closeBtn = document.getElementsByClassName('cerrar')[0];
    const prevBtn = document.getElementsByClassName('prev')[0];
    const nextBtn = document.getElementsByClassName('next')[0];

    let imagenes = [];
    let imagenIndex = 0;

    document.querySelectorAll('.galeria .imagen').forEach((item, index) => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            imagenes = Array.from(document.querySelectorAll('.galeria .imagen')).map(img => img.getAttribute('data-imagen'));
            imagenIndex = index;
            mostrarImagen(imagenes[imagenIndex]);
        });
    });

    function mostrarImagen(src) {
        modal.style.display = 'block';
        modalImg.src = src;
        captionText.textContent = document.querySelector(`.galeria .imagen[data-imagen="${src}"] img`).alt;
    }

    function cambiarImagen(n) {
        var objeto= {nombre:"pedro",edad:20};
console.log(objeto);
        imagenIndex = (imagenIndex + n + imagenes.length) % imagenes.length;
        mostrarImagen(imagenes[imagenIndex]);
    }

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    prevBtn.addEventListener('click', function () {
        cambiarImagen(-1);
    });

    nextBtn.addEventListener('click', function () {
        cambiarImagen(1);
    });

    window.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
