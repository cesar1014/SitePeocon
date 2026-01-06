function navigateTo(pageId) {
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active');
    });

    const target = document.getElementById(pageId);
    if (target) {
        target.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(checkReveal, 100);
    }
    toggleMobileMenu(false);
}

function scrollToSection(sectionId) {
    const homeSection = document.getElementById('home');
    if (!homeSection.classList.contains('active')) {
        navigateTo('home');
        setTimeout(() => {
            const el = document.getElementById(sectionId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    } else {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
}

const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

function toggleMobileMenu(show) {
    if (show === undefined) {
        menu.classList.toggle('hidden');
        menu.classList.toggle('flex');
    } else if (show) {
        menu.classList.remove('hidden');
        menu.classList.add('flex');
    } else {
        menu.classList.add('hidden');
        menu.classList.remove('flex');
    }
}

if (btn) btn.addEventListener('click', () => toggleMobileMenu());

// Logic for Reveal on Scroll
function checkReveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Logic for Technology Accordion
function toggleTechDetail(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector('.ph-caret-down');

    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        content.classList.add('block');
        icon.style.transform = 'rotate(180deg)';

        content.animate([
            { opacity: 0, transform: 'translateY(-10px)' },
            { opacity: 1, transform: 'translateY(0)' }
        ], {
            duration: 300,
            easing: 'ease-out'
        });

    } else {
        content.classList.add('hidden');
        content.classList.remove('block');
        icon.style.transform = 'rotate(0deg)';
    }
}

// Lógica do Modal do Mapa
function openMapModal() {
    const modal = document.getElementById('map-modal');
    const content = document.getElementById('map-content');

    modal.classList.remove('hidden');
    modal.classList.add('flex');

    // Pequeno delay para a animação CSS funcionar
    setTimeout(() => {
        content.classList.remove('scale-95', 'opacity-0');
        content.classList.add('scale-100', 'opacity-100');
    }, 10);
}

function closeMapModal() {
    const modal = document.getElementById('map-modal');
    const content = document.getElementById('map-content');

    content.classList.remove('scale-100', 'opacity-100');
    content.classList.add('scale-95', 'opacity-0');

    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }, 300); // Espera a animação terminar
}

// Fecha o modal com a tecla ESC
document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        closeMapModal();
    }
});

window.addEventListener("scroll", checkReveal);
window.addEventListener("load", checkReveal);
checkReveal();