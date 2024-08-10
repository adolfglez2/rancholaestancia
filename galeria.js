document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('img01');
    const captionText = document.getElementById('caption');
    const closeBtn = document.getElementsByClassName('cerrar')[0];

    document.querySelectorAll('.galeria .imagen').forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const imgSrc = this.getAttribute('data-imagen');
            modal.style.display = 'block';
            modalImg.src = imgSrc;
            captionText.textContent = this.querySelector('img').alt;
        });
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Cierra el modal si el usuario hace clic fuera de la imagen
    window.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
