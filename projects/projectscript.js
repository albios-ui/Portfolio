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
            type:"Développement Web : TIME MANAGER ",
            title:"Développement d'une Application Web de Gestion de Tâches ",
            category: 'Développement Web',
            year: '2022',
            team: 'Groupe /3 Semaines',
            roles: [
                "Développement d'une API de gestion de tâches, axée sur les opérations CRUD, en utilisant Elixir et Phoenix",
                "Conception du Front-end d'une application Monopage (SPA) avec Vue.js pour une interface utilisateur interactive",
                "Mise en place et structuration d'une base de données avec PostgreSQL pour le stockage de données ",
            ],
            technologies: "VueJS, Elixir, Phoenix, PostgreSQL, GitHub",
            method: 'Agile Scrum',
            abilities:"Persévérance, Autonomie, Adaptabilité",
            screenshots: ['../assets/images/projects/maxresdefault.jpg'],
            source :'https://github.com/albios-ui/Time-Manager',
            ppt: '',

            

        },
        {
            id: '2',
            type:"Transformation digitale : Gotham ",
            title:"Gestion du projet en Transformation Digitale de gestion des déchets – Gotham City",
            category: 'Transformation Digitale',
            year: '2023',
            team: 'Solo / 3 Mois',
            roles: [
                "Implémentation d'une solution de transformation digitale pour rénover le système de gestion des déchets",
                "Modernisation des opérations via l’introduction de technologies avancées (GPS, applications mobiles, poubelles intelligentes)",
                "Développement et déploiement d'outils pour le suivi en temps réel et la communication efficace entre les employés",
                "Facilitation de la transition pour le personnel et les citoyens en anticipant la résistance au changement",
                "Évaluation continue de l'impact des changements sur la propreté de la ville et la satisfaction des citoyens",
                "Utilisation de la méthode agile pour une bonne gestion du projet de la transformation digitale"
            ],
            technologies: "Trello",
            method: 'Agile Scrum',
            abilities:"Gestion de projet, adaptation technologique, innovation en services publics, gestion de la résistance au changement",

            screenshots: ['../assets/images/projects/gotham4.jpg', '../assets/images/projects/gotham1.png', '../assets/images/projects/gotham2.png','../assets/images/projects/gotham3.jpg'],
            source :'https://github.com/albios-ui/Gotham',
            ppt: '../assets/ressources/SWAG.pdf',

            
        },
        {
            id: '3',
            type:"Développement mobile : PICTSMANAGER ",
            title:"Développement d’une application mobile de gestion d’images",
            category: "Développement Mobile",
            year: "2023",
            team: 'Groupe / 2 Mois',
            roles: [
                "•	Développement d'une application mobile et le serveur associé pour la gestion d'images, avec compression adaptative et gestion des droits d'accès.",
                "•	Implémentation d'un moteur de recherche interne et optimisation de la base de données pour réactivité et scalabilité.",
              
            ],
            technologies: "Flutter, Python (Django), GitHub, PostgreSQL",
            method:"Agile Scrum",
            abilities:"Développement Full-Stack, Gestion de Base de Données.",
            screenshots: ['../assets/images/projects/pict1.png','../assets/images/projects/pict2.png','../assets/images/projects/pict3.png','../assets/images/projects/pict4.png',],
            source :'https://github.com/albios-ui/PICTS-MANAGER',
            ppt: '../assets/ressources/project-T-DEV800.pdf',


            
        },
        {
            id: '4',
            type:"Transformation digitale : Dossier Médical Partagé (DMP)",
            title:"Implémentation du Dossier Médical Partagé : Vers une Santé Numérique Intégrée",
            category: "Transformation Digitale",
            year: "2023",
            team: 'Groupe / 3 Mois',
            roles: [
                "Pilotage d'une initiative de transformation digitale du secteur de la santé pour centraliser et partager les données médicales, améliorant le diagnostic et la surveillance épidémiologiqu",
                "Analyse et résolution des obstacles à l'adoption du DMP, en se concentrant sur les résistances au changement des différents acteurs du secteur de la santé",
                "Conception et mise en œuvre d'un Proof of Concept pour le DMP, respectant les normes de sécurité, d'accessibilité et les contraintes légale",

            ],
            technologies: "FIGMA, Notion",
            method: 'Agile Scrum',
            abilities:"Gestion de projet de santé numérique, Stratégies pour surmonter la résistance au changement",
            screenshots: ['../assets/images/projects/dmp1.png', '../assets/images/projects/dmp2.png','../assets/images/projects/dmp3.png','../assets/images/projects/dmp4.png','../assets/images/projects/dmp5.png'],
            source :'https://github.com/albios-ui/Dossier-M-dical-Partag-DMP-',
            ppt: '../assets/ressources/PrésentationDMP.pdf',


            
        },        {
            id: '5',
            type:"Transformation Digitale : GREENTECH ",
            title:"Innovation technologiques des Cultures de Vignes - Réponse à l'Appel d'Offre du syndicat des Vignerons Indépendants de France",
            category: "Transformation Digitale",
            year: "2023",
            team: 'Groupe / 4 Mois',
            tache:"Chef de Projet",
            roles: [
                "Analyse et Préparation : Analyse détaillée des besoins exposés dans l'appel d'offre et élaboration d'une réponse sur mesure mettant en avant notre solution innovante pour améliorer l'efficacité et la productivité viticole",
                "Gestion de Projet : Coordination des équipes multidisciplinaires pour la rédaction de la proposition commerciale, planification détaillée, et mise en œuvre de la solution technologique (IA, IoT, Big Data, Cloud)",
                "Présentation et Communication : Développement et soutenance de la proposition devant le représentant des vignerons indépendants, assurant une communication claire et une compréhension mutuelle des attentes et solutions proposées",
                "Suivi Technique et Qualité : Supervision des phases de conception, développement et tests, assurant le respect des spécifications techniques et la satisfaction des exigences client",
                "Formation et Support : Organisation des sessions de formation pour les vignerons, garantissant une transition en douceur vers la nouvelle infrastructure et son utilisation efficace",
                "Impact : Amélioration notable de l'efficacité et de la productivité des exploitations viticoles grâce à une solution intégrée, répondant directement aux défis posés par le changement climatique et les maladies des vignes "
            ],
            technologies: "Github, Notion, MsProject",
            method: 'Agile Scrum',
            screenshots: ['../assets/images/projects/greentech1.jpg','../assets/images/projects/greentech2.jpeg','../assets/images/projects/greentech3.jpg','../assets/images/projects/greentech4.jpg','../assets/images/projects/greentech5.png'],
            source :'https://github.com/albios-ui/R-ponse-D-appel-D-offre-GREENTECH',
            ppt: '../assets/ressources/Synthèse Du projet Greentech.pdf',


            
        },        {
            id: '6',
            type:"Transformation Digitale : FINTECH",
            title:"Modernisation de l'Assurance à responsabilité Civile de l’organisme public Transport for London (TFL) - Réponse à l'Appel d'Offre de la TFL",
            category: "Transformation Digitale",
            year: "2023",
            team: 'Groupe / 4 Mois',
            tache:"Chef de Projet",
            
            roles: [
                "Analyse et Préparation :Évaluation approfondie des exigences spécifiées dans l'appel d'offre de TFL et développement d'une proposition de valeur adaptée, soulignant une approche innovante pour rehausser les services d'assurance responsabilité civile ",

                "Coordination des équipes multidisciplinaires pour la rédaction de la proposition commerciale, planification détaillée, et mise en œuvre de la solution technologique (IA, IoT, Big Data, Cloud)",
                "Présentation détaillée et défense de notre proposition auprès de Transport for London, garantissant la transparence et l'alignement sur les attentes et les solutions proposées",
                "Conception et exécution de programmes de formation pour les équipes de TFL, assurant une adoption fluide des nouvelles technologies et méthodologies",
                "Renforcement significatif de la gestion des risques et de la couverture d'assurance chez TFL, amélioration de la sécurité des passagers et optimisation des coûts opérationnels",
               
            ],
            technologies: "Github, Notion, MsProject",
            method: 'Agile Scrum',
            screenshots: ['../assets/images/projects/tfl1.jpg'],
            source :'https://github.com/albios-ui/R-ponse-D-appel-D-offre-FINTECH',
            ppt: '../assets/ressources/Proposition commerciale FINTECH.pdf',


            
        },        {
            id: '7',
            type:"IA : Traitement du Langage Naturel (NLP) ",
            title:"Optimisation d’itinéraires de voyages - Natural Language Processing for Travel Itineraries( NLTK)",
            category: "IA",
            year: "2024",
            team: 'Groupe / 3 Mois',
            roles: [
                "Implémentation de méthodes NLP l'interprétation précise de commandes de voyage en langage naturel",
                "Utilisation de l'algorithme de Dijkstra pour optimiser les itinéraires de voyage",
                "Conception d'une interface utilisateur interactive avec PyQt pour une meilleure expérience utilisateur",
                "Intégration de reconnaissance vocale pour l'accessibilité et la facilité d'usage",
            ],
            technologies: "Python, PyQT, NLTK, Djikstra, Notion",
            method: 'Agile Scrum',
            screenshots: ['../assets/images/projects/ia1.png', '../assets/images/projects/ia2.png'],
            source :'https://github.com/albios-ui/Traitement-Du-Langage-Naturel-NLP-',
            ppt: '../assets/ressources/Présentation projet ia.pdf',


            
        },        {
            id: '8',
            type:"Transformation Digitale : KIABI",
            title:"Stratégie Numérique pour l'Amélioration de l'Expérience Client chez Kiabi",
            category: "Ttransformation Digitale",
            year: "2024",
            team: 'Groupe / 4 Mois',
            roles: [
                "Analyse approfondie des données clients de Kiabi et identification des tendances de marché pour guider la stratégie digitale",
                "Développement d'une stratégie globale pour améliorer la valeur ajoutée de Kiabi via le digital",
                "Proposition de solutions personnalisées : système d'abonnement simplifié et expérience d'achat innovante avec réalité augmentée",
                "Recommandation d'intégration de tablettes en magasin pour optimiser les processus de commande et de récupération des produits",
                
            ],
            technologies: "Confluence, MsProject",
            method: 'Agile Scrum',
            
            screenshots: ['../assets/images/projects/kiabi1.png','../assets/images/projects/kiabi2.jpg','../assets/images/projects/kiabi3.jpg',],
            source :'https://github.com/albios-ui/Transformation-Digitale-KIABI',
            ppt: '../assets/ressources/DIT 901-PAR20-Présentation 1.pdf',


            
        },        {
            id: '9',
            type:"Projet de Fin d’études – DineInVR ",
            title:"DineIn VR - Révolution Culinaire via Réalité Augmentée pour Projet de Fin d'Études (Ressources non disponbile)",
            category: "Management de projet ",
            year: "Mars 2023 ( en cours )",
            team: 'Groupe / 18 Mois',
            context :"Chef de projet dans le cadre d'un projet de fin d'études commencé en mars 2023 avec une équipe de 10 étudiants spécialisés en Cloud, IA, VR, Développement, Sécurité et Bases de Données. Objectif : développer DineIn VR, une application mobile qui enrichit l'expérience culinaire grâce à la réalité augmentée et l'intelligence artificielle",
            roles: [
                "Conception et rédaction d'un cahier des charges détaillé, en alignement avec les besoins des utilisateurs finaux et les objectifs commerciaux",
                "Planification et suivi des tâches à l'aide de Notion et MS Project, garantissant le respect des délais à travers des diagrammes de Gantt et PERT",
                "Pilotage des phases de tests et de validation pour assurer la qualité et la performance de l'application, en mettant l'accent sur l'expérience utilisateur",
                "Facilitation de la communication entre les équipes techniques et les parties prenantes pour garantir une vision commune et un déploiement réussi du projet ",
                
            ],
            technologies: "Notion",
            method: 'Agile Scrum',
            abilities:"Gestion de projet, Leadership, Communication, Résolution de Problèmes, Adaptabilités",
            screenshots: ['../assets/images/projects/menu.png','../assets/images/projects/vr1.jpg','../assets/images/projects/vr2.png',],
            source :'https://github.com/albios-ui/Projet-De-Fin-D-tudes-DineInVR',


            
        },        {
            id: '10',
            type:"Étude de faisabilité  - Infrastructure Réseau",
            title:"Mise en place d’une infrastructure réseau sans fil pour le département d’Informatique de l’UMMTO",
            category: "Étude de faisabilité ",
            year: "2021",
            team: 'Solo / 3 Mois',
            roles: [
                "Élaboration d’un cahier des charges ",
                "Déploiement d’un système de gestion de fichier ‘Pydio’ ainsi que sa configuration",
                "Étude et configuration du serveur ",
                "Étude et configuration du post client ",
                "Mise en place de méthodes d’authentification « Pfsense »",
                "Méthodes de chiffrement du réseau sans fil",
            ],
            
            abilities:"Autonomie, Persévérance",
            screenshots: ['../assets/images/projects/réseau.png'],
            source :'https://github.com/albios-ui/Infrastructure-R-seau',
            ppt: '../assets/ressources/Projet PSR 2021.pdf',


            
        },        {
            id: '11',
            type:"E-Commerce",
            title:"Smartech - Apllication Web de vente de vêtements en ligne",
            category: "Développement Web",
            year: "2020",
            team: 'Solo / 3 Mois',
            roles: [
                "Développement Backend et Frontend de l'application",
                "Conception de la base de données",
             
            ],
            technologies: "HTML,CSS,JS,PHP",
            screenshots: ['../assets/images/projects/ummto1.png','../assets/images/projects/ummto2.png','../assets/images/projects/ummto3.png','../assets/images/projects/ummto4.png'],
            source :'https://github.com/albios-ui/Smartech',
            ppt: '../assets/ressources/Mémoire L3 (version finale).pdf',


            
        },
        {
            
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
            
            <h3><strong>Titre du projet :</strong><span> ${project.title}</span></h3>
            <p><strong>Catégorie du projet : </strong> ${project.category}</p>
            <p><strong>Année : </strong> ${project.year}</p>
            <p><strong>Projet en : </strong> ${project.team}</p>
            ${project.tache ? `<p><strong>Rôle: </strong> ${project.tache}</p>` : ''}
            <h3><strong>Responsabilité et Réalisations : </strong></h3>
            <ul>${project.roles.map(role => `<li>${role}</li>`).join('')}</ul>
            <p><strong>Technologies utilisées : </strong> ${project.technologies}</p>
            <p><strong>Méthode de gestion du projet : </strong> ${project.method}</p>
            <p><strong>Compétences acquises : </strong> ${project.abilities}</p>


            <div class="project-links">
                <a href="${project.source}" class="project-button project-code">
                  <i class="fas fa-code"></i> Ressources du projet
                </a>
              </div>
        `;
        // Gestion des captures d'écran
        slideContainer.innerHTML = project.screenshots.map(screenshot => `
        <img src="${screenshot}" class="screenshot">
        `).join('');

 // Nouveau : Ajout de la logique pour afficher le fichier PowerPoint (PDF)
 const pptContainer = document.querySelector('.ppt-container');
    if (project.ppt && project.ppt.trim() !== '') {
        pptContainer.innerHTML = `<embed src="${project.ppt}" type="application/pdf" width="100%" height="500px" allow="auto"/>`;
        pptContainer.style.display = 'block'; // Assurez-vous que le conteneur est visible si le ppt est défini
    } else {
        pptContainer.style.display = 'none'; // Cache le conteneur du ppt s'il n'est pas défini
}
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
  



  /* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });


/* SCROLL ABOUT */
srtop.reveal('.about', { delay: 200 });



/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });


$('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
});
