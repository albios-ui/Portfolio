let slideIndex = 0;
const slides = document.querySelectorAll(".carousel-slide img");
const totalSlides = slides.length;

document.getElementById('nextBtn').addEventListener('click', () => {
    moveSlide(1);
});
document.getElementById('prevBtn').addEventListener('click', () => {
    moveSlide(-1);
});

function moveSlide(step) {
    slideIndex = (slideIndex + step + totalSlides) % totalSlides;
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - slideIndex)}%)`;
    });
}


  
  
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('project'); // Obtient l'id du projet depuis l'URL

    const projects = [
        {
            id: '1',
            title:'Mon Titre',
            category: 'Web Development',
            year: '2022',
            team: 'Solo',
            roles: [
                'Conception de l’interface utilisateur',
                'Développement du front-end',
                'Intégration avec le back-endxxxxxxxxxxxxxxxxxxxccccccccccccccccccccccccccccccccccccccccccccccccccccccccccxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
            ],
            technologies: 'HTML, CSS, JavaScript, React',
            method: 'Agile',
            screenshots: ['../assets/images/screenshots.png', '../assets/images/screenshots.png'],
            source :'https://www.matchendirect.fr',

        },
        {
            id: '2',
            title:'Mon Titre',
            category: 'Backend Development',
            year: '2021',
            team: 'Group',
            roles: [
                'Conception de la base de données',
                'Développement des API',
                'Sécurisation du serveur'
            ],
            technologies: 'Node.js, Express, MongoDB',
            method: 'Waterfall',
            screenshots: ['screenshot1.jpg', 'screenshot2.jpg'],
            source :'https://www.matchendirect.fr',
        },
        {
            id: '3',
            title:'Mon Titre',
            category: 'Fullstack Development',
            year: '2020',
            team: 'Solo',
            roles: [
                'Gestion de projet',
                'Développement front-end et back-end',
                'Déploiement de l’application'
            ],
            technologies: 'Vue.js, Laravel, MySQL',
            method: 'Scrum',
            screenshots: ['screenshot1.jpg', 'screenshot2.jpg'],
            source :'https://www.matchendirect.fr',

            
        }
    ];


    const project = projects.find(p => p.id === projectId);
    const slideContainer = document.querySelector('.carousel-slide');
    const indicatorsContainer = document.querySelector('.carousel-indicators'); // Assurez-vous d'avoir un conteneur avec cette classe dans votre HTML
    let currentIndex = 0;
    
    function updateCarousel() {
        slideContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateIndicators();  
    }
// Met à jour les indicateurs de pagination pour l'image courante
    function updateIndicators() {
        document.querySelectorAll('.indicator-dot').forEach((dot, index) => {
            dot.style.opacity = index === currentIndex ? '1' : '0.5';
        });
    }
        // Génère les indicateurs de pagination
        function generateIndicators() {
            indicatorsContainer.innerHTML = '';
            project.screenshots.forEach((_, index) => {
                let dot = document.createElement('div');
                dot.className = 'indicator-dot';
                dot.addEventListener('click', () => {
                    currentIndex = index;
                    updateCarousel();
                });
                indicatorsContainer.appendChild(dot);
            });
        }
        function initCarousel() {
    if (project) {
        const detailsContainer = document.querySelector('.project-details .details-text ');

        detailsContainer.innerHTML = `
            
            <h3>Titre du projet : ${project.title}</strong></h3>
            <p><strong>Catégorie du projet : </strong> ${project.category}</p>
            <p><strong>Année : </strong> ${project.year}</p>
            <p><strong>Projet en : </strong> ${project.team}</p>
            <h3>Responsabilité et Rôles : </h3>
            <ul>${project.roles.map(role => `<li>${role}</li>`).join('')}</ul>
            <p><strong>Technologies utilisées : </strong> ${project.technologies}</p>
            <p><strong>Méthode de gestion du projet : </strong> ${project.method}</p>

            <div class="project-links">
                <a href="${project.source}" class="project-button project-code">
                  <i class="fas fa-code"></i> Project Code
                </a>

              </div>
        `;
        // Gestion des captures d'écran
        slideContainer.innerHTML = project.screenshots.map(screenshot => `
        <img src="${screenshot}" class="screenshot" style="width: 100%;">
        `).join('');



      // Gestion des boutons de carrousel
      document.querySelector('.prev').addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : project.screenshots.length - 1;
        updateCarousel();
      });
      
      document.querySelector('.next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % project.screenshots.length;
        updateCarousel();
      });
        // Génère les indicateurs de pagination
        generateIndicators();
        // Met à jour les indicateurs à l'état initial
        updateIndicators();
     
    }

    }
    initCarousel();
});

document.addEventListener('DOMContentLoaded', () => {
    // ... Votre code existant ...

    
  
    // Afficher l'image en grand dans la modal
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    const slides = document.querySelectorAll(".carousel-slide img");
  
    slides.forEach(img => {
      img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }
    });
  
    // Fermer la modal
    const close = document.getElementsByClassName("close")[0];
    close.onclick = function() { 
      modal.style.display = "none";
    }
  });
  


  srtop.reveal('.work .box', { interval: 200 });

  /* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });