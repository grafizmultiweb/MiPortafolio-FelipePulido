document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu-items');
  
    toggle.addEventListener('click', function () {
      menu.classList.toggle('show');
      toggle.classList.toggle('active');
      toggle.classList.toggle('open');
      menu.classList.toggle('menu-open');
    });
  
    document.querySelectorAll('.menu-dropdown > a').forEach(item => {
      item.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          const parent = this.parentElement;
          parent.classList.toggle('active');
        }
      });
    });
  });

  
/* ======================== INTRO-INICIO ======================== */


/* =====================================================
   GRAFIZ NEBULA X — JAVASCRIPT EXCLUSIVO
   ===================================================== */

(function grafizNebulaX__iniciar() {

    "use strict";

    const grafizNebulaX__escena =
        document.querySelector(".grafizNebulaX__escena");

    if (!grafizNebulaX__escena) {
        return;
    }

    const grafizNebulaX__imagen =
        grafizNebulaX__escena.querySelector(
            ".grafizNebulaX__imagenPrincipal"
        );

    if (!grafizNebulaX__imagen) {
        return;
    }

    /*
     * Movimiento sutil según la posición del cursor.
     * No reemplaza la animación CSS: añade una pequeña
     * sensación de profundidad cuando el usuario mueve
     * el ratón sobre la sección.
     */

    let grafizNebulaX__activo = false;

    grafizNebulaX__escena.addEventListener(
        "pointermove",
        function (grafizNebulaX__evento) {

            if (
                grafizNebulaX__evento.pointerType === "touch" ||
                window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches
            ) {
                return;
            }

            const grafizNebulaX__rectangulo =
                grafizNebulaX__escena.getBoundingClientRect();

            const grafizNebulaX__posicionX =
                (
                    grafizNebulaX__evento.clientX -
                    grafizNebulaX__rectangulo.left
                ) / grafizNebulaX__rectangulo.width;

            const grafizNebulaX__posicionY =
                (
                    grafizNebulaX__evento.clientY -
                    grafizNebulaX__rectangulo.top
                ) / grafizNebulaX__rectangulo.height;

            const grafizNebulaX__movimientoX =
                (grafizNebulaX__posicionX - 0.5) * 10;

            const grafizNebulaX__movimientoY =
                (grafizNebulaX__posicionY - 0.5) * 8;

            /*
             * La animación principal sigue funcionando
             * y este efecto aporta un movimiento adicional
             * mediante variables CSS.
             */

            grafizNebulaX__imagen.style.setProperty(
                "--grafizNebulaX__cursorX",
                grafizNebulaX__movimientoX + "px"
            );

            grafizNebulaX__imagen.style.setProperty(
                "--grafizNebulaX__cursorY",
                grafizNebulaX__movimientoY + "px"
            );

            if (!grafizNebulaX__activo) {
                grafizNebulaX__activo = true;
            }

        },
        { passive: true }
    );

    grafizNebulaX__escena.addEventListener(
        "pointerleave",
        function () {

            grafizNebulaX__imagen.style.setProperty(
                "--grafizNebulaX__cursorX",
                "0px"
            );

            grafizNebulaX__imagen.style.setProperty(
                "--grafizNebulaX__cursorY",
                "0px"
            );

            grafizNebulaX__activo = false;

        }
    );

})();


/* =========================================
   SISTEMA NEXO - VOLVER AL INICIO
   ========================================= */

const nexoRegreso = document.getElementById("nexoRegreso");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        nexoRegreso.classList.add("nexo-visible");

    } else {

        nexoRegreso.classList.remove("nexo-visible");

    }

});
nexoRegreso.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});



/* =========================================
   PRELOADER
========================================= */


(function () {

    "use strict";

    function gmxUltraHidePreloader() {

        const gmxUltraPreloader =
            document.getElementById("gmx-ultra-preloader");


        if (!gmxUltraPreloader) {
            return;
        }
        setTimeout(function () {

            gmxUltraPreloader.classList.add(
                "gmx-ultra-preloader--hidden"
            );
            setTimeout(function () {

                gmxUltraPreloader.style.display = "none";

            }, 900);


        }, 700);

    }
    window.addEventListener(
        "load",
        gmxUltraHidePreloader
    );
})();

animateStars();

// Movimiento constante de imágenes con JS
const images = document.querySelectorAll(".image-box img");

images.forEach((img, i) => {
  let direction = 1;
  let position = 0;

  setInterval(() => {
    position += direction * 0.3;

    if (position > 10 || position < -10) {
      direction *= -1;
    }

    img.style.transform = `translateY(${position}px) scale(1.02)`;
  }, 40);
});

// Parallax scroll para las capas
document.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Escalar capas de fondo para efecto parallax
  document.querySelector('.layer-moon').style.transform = `translate(-50%, -50%) scale(${1 + scrollY * 0.0001})`;
  document.querySelector('.layer-mountain1').style.transform = `translate(-50%, -50%) scale(${1 + scrollY * 0.0003})`;
  document.querySelector('.layer-mountain2').style.transform = `translate(-50%, -50%) scale(${1 + scrollY * 0.0005})`;
  document.querySelector('.layer-foreground').style.transform = `translate(-50%, -50%) scale(${1 + scrollY * 0.0007})`;
  document.querySelector('.stars').style.transform = `translateY(${scrollY * 0.1}px)`;

  // Fade-in al aparecer en pantalla
  document.querySelectorAll('.fade-in').forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});

// Movimiento dinámico de planet-wrapper con el mouse
document.addEventListener('mousemove', (e) => {
  const { innerWidth, innerHeight } = window;
  const offsetX = (e.clientX / innerWidth - 0.5) * 50;
  const offsetY = (e.clientY / innerHeight - 0.5) * 50;

  document.querySelectorAll('.planet-wrapper').forEach((wrapper, index) => {
    const multiplier = (index + 1) * 0.1;
    wrapper.style.transform = `translate(${offsetX * multiplier}px, ${offsetY * multiplier}px)`;
  });
});

////////////////  CONTENIDO  ///////////////////

function accionMenuInteractivo(elemento) {
  document.querySelectorAll('.opcion-modular-unica').forEach(op => {
    op.classList.remove('activo-resaltado-creativo', 'animacion-ultra-fantastica');
    void op.offsetWidth; // Reiniciar animación
  });

  elemento.classList.add('activo-resaltado-creativo', 'animacion-ultra-fantastica');

  console.log("Clic en: ", elemento.querySelector(".texto-descriptivo-modular").innerText);
}


////////////////  SOBRE MI   ///////////////////

console.log("Animación de imagen activada por CSS.");

////////////////  conocimientos   ///////////////////

const conocimientosTrack = document.querySelector('.conocimientos-track');

function pausarConocimientos() {
  conocimientosTrack.style.animationPlayState = 'paused';
}

function reanudarConocimientos() {
  conocimientosTrack.style.animationPlayState = 'running';
}



///////////////// Sobremi ///////////

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const btn = card.querySelector('.card__btn');

    // Al hacer click en el botón, alterna la clase expanded
    btn.addEventListener('click', () => toggleCard(card, btn));

    // Permitir abrir/cerrar con Enter o Space cuando la tarjeta tiene foco
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleCard(card, btn);
      }
    });
  });

  function toggleCard(card, btn) {
    const isExpanded = card.classList.toggle('expanded');
    btn.setAttribute('aria-expanded', String(isExpanded));
    // Cambiar texto del botón (opcional)
    btn.textContent = isExpanded ? 'Ver menos' : 'Ver más';
  }
});


/////////////// CARRUSEL - POST ///////////

const track = document.querySelector('.uxv-carousel-track');
const slides = document.querySelectorAll('.uxv-carousel-track img');
const prevBtn = document.querySelector('.uxv-prev');
const nextBtn = document.querySelector('.uxv-next');

let index = 0;
let autoSlide;

function updateSlide() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % slides.length;
  updateSlide();
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  updateSlide();
}

nextBtn.addEventListener('click', () => {
  nextSlide();
  resetAutoSlide();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetAutoSlide();
});

function startAutoSlide() {
  autoSlide = setInterval(nextSlide, 5000);
}

function resetAutoSlide() {
  clearInterval(autoSlide);
  startAutoSlide();
}

startAutoSlide();