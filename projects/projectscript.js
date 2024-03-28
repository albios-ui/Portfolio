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
            type: 'Web Development',
            year: '2022',
            team: 'Solo',
            roles: [
                'Conception de l’interface utilisateur',
                'Développement du front-end',
                'Intégration avec le back-endxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
            ],
            technologies: 'HTML, CSS, JavaScript, React',
            method: 'Agile',
            screenshots: ['../assets/images/screenshots.png', '../assets/images/screenshots.png'],

        },
        {
            id: '2',
            type: 'Backend Development',
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

        },
        {
            id: '3',
            type: 'Fullstack Development',
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
            <h3>Titre du projet</h3>
            <p><strong>Type du projet:</strong> ${project.type}</p>
            <p><strong>Année:</strong> ${project.year}</p>
            <p><strong>Projet en:</strong> ${project.team}</p>
            <h3>Responsabilité et Rôles</h3>
            <ul>${project.roles.map(role => `<li>${role}</li>`).join('')}</ul>
            <p><strong>Technologies utilisées:</strong> ${project.technologies}</p>
            <p><strong>Méthode de gestion du projet:</strong> ${project.method}</p>
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
  