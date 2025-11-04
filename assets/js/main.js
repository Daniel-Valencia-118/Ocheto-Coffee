// Efecto de header al hacer scroll
window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

// Smooth scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Configuración del banner rotatorio
document.addEventListener('DOMContentLoaded', function () {
    const banners = document.querySelectorAll('.banner-slide');
    let currentBanner = 0;

    // Configurar las imágenes de fondo de los banners
    document.getElementById('banner1').style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('assets/img/27.jpg')";
    document.getElementById('banner2').style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('img/45.jpg')";
    document.getElementById('banner3').style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('img/1.jpg')";

    // Función para cambiar de banner
    function changeBanner() {
        banners[currentBanner].classList.remove('active');
        currentBanner = (currentBanner + 1) % banners.length;
        banners[currentBanner].classList.add('active');
    }

    // Cambiar banner cada 10 segundos
    setInterval(changeBanner, 5000);
});