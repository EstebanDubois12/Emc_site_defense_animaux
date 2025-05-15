// Lightbox avec descriptions
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxDesc = document.getElementById('lightbox-description');
const descriptions = [
  "Sauvetage en urgence : nos bénévoles et les pompiers unissent leurs forces pour libérer des animaux piégés par une inondation dévastatrice.",
  "Mobilisation pacifique : des défenseurs des droits des animaux protestent devant un abattoir pour exiger une fin aux souffrances inutiles.",
  "Sensibilisation dès le plus jeune âge : un atelier interactif en école primaire pour éveiller les consciences à la protection animale.",
  "Action écoresponsable : 675 kg de plastique retirés d'une plage en une journée grâce à la mobilisation de nos bénévoles.",
  "Ensemble pour la vie sauvage : une campagne choc pour dénoncer la chasse, l'élevage intensif et le braconnage.",
  "Nouvelle vie : l'émotion d'une bénévole qui offre enfin un foyer aimant à un chien rescapé de la maltraitance."
];

document.querySelectorAll('.gallery-item').forEach((item, index) => {
  item.addEventListener('click', () => {
    const imgSrc = item.querySelector('img').src;
    lightboxImg.src = imgSrc;
    lightboxDesc.textContent = descriptions[index];
    lightbox.classList.add('active');
  });
});

// Fermeture de la lightbox (clic sur fond ou croix)
document.querySelectorAll('.close, #lightbox').forEach(el => {
  el.addEventListener('click', (e) => {
    if (e.target === el) {
      lightbox.classList.remove('active');
    }
  });
});

// Empêcher la fermeture quand on clique sur le contenu
document.querySelector('.lightbox-content').addEventListener('click', (e) => {
  e.stopPropagation();
});

// Menu mobile toggle
const toggleMenu = document.getElementById('toggle-menu');
const navLinks = document.getElementById('nav-links');

toggleMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Fermer le menu quand on clique sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

    
    // Testimonial slider
const slider = document.getElementById('testimonial-slider');
let scrollAmount = 0;

function autoScroll() {
  scrollAmount += 1; // vitesse, ajuste si besoin
  if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
    scrollAmount = 0; // reset au début
  }
  slider.scrollLeft = scrollAmount;
  requestAnimationFrame(autoScroll);
}

autoScroll();

    // Back to top button
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('active');
      } else {
        backToTopBtn.classList.remove('active');
      }
    });
    
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Shrink header on scroll
    window.addEventListener('scroll', () => {
      const nav = document.querySelector('nav');
      if (window.scrollY > 100) {
        nav.style.height = '60px';
      } else {
        nav.style.height = 'var(--nav-height)';
      }
    });