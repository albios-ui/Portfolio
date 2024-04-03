$(document).ready(function () {
   
        // Initialisation du bouton "Tous" comme actif
        $('.filter-btn[data-filter="all"]').addClass('active');
    

    
        // Gestion des clics sur les boutons de filtrage
        $('.filter-btn').click(function () {
            // Retirer la classe 'active' de tous les boutons et l'ajouter au bouton cliqué
            $('.filter-btn').removeClass('active');
            $(this).addClass('active');
    
            // Récupérer la valeur du filtre et filtrer les projets
            const filterValue = $(this).attr('data-filter');
            filterProjects(filterValue);
        });
    
  
    
        // Ajoutez ici le reste de vos interactions de page comme avant
        // Par exemple, pour la barre de navigation, les animations, etc.
    
        // Exemple : Gestion du clic sur le menu pour mobile
        $('#menu').click(function () {
            $(this).toggleClass('fa-times');
            $('.navbar').toggleClass('nav-toggle');
        });
    
        // Exemple : Scroll smooth pour les ancres
        $('a[href*="#"]').on('click', function (e) {
            e.preventDefault();
    
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top,
            }, 500, 'linear');
        });
    
        // Votre code JavaScript supplémentaire ici...
    

    
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    // <!-- emailjs to mail contact form data -->
    $("#contact-form").submit(function (event) {
        emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");

        emailjs.sendForm('contact_service', 'template_contact', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });
    // <!-- emailjs to mail contact form data -->

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Jigar Sable";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/images/favhand.png");
        }
    });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["Chef de projet AMOA", "Architecte solution SI", "Business Analayst", "Consultant en transformation digitale"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->

async function fetchData(type = "skills") {
    let response
    type === "skills" ?
        response = await fetch("skills.json")
        :
        response = await fetch("./projects/projects.json")
    const data = await response.json();
    return data;
}

 function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
} 

function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    let projectHTML = "";
    projects.slice(0, 10).filter(project => project.category != "android").forEach(project => {
        projectHTML += `
        <div class="box tilt">
      <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="project" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>`
    });
    projectsContainer.innerHTML = projectHTML;

    // <!-- tilt js effect starts -->
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
    });
    // <!-- tilt js effect ends -->

    /* ===== SCROLL REVEAL ANIMATION ===== */
     const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    }); 

    /* SCROLL PROJECTS */
    srtop.reveal('.work .box', { interval: 200 });

}

fetchData().then(data => {
    showSkills(data);
});

fetchData("projects").then(data => {
    showProjects(data);
});

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// <!-- tilt js effect ends -->


// pre loader start
// function loader() {
//     document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeOut() {
//     setInterval(loader, 500);
// }
// window.onload = fadeOut;
// pre loader end

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

// Start of Tawk.to Live Chat
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();
// End of Tawk.to Live Chat


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

/* srtop.reveal('.about .content h3', { delay: 200 });

/* srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });  */


/* SCROLL SKILLS */
 srtop.reveal('.skills .container', { interval: 200 });

/* SCROLL EDUCATION */
/* srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
 srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
 srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 }); 

/* SCROLL CONTACT */
ScrollReveal().reveal('.contact .container', { 
    duration: 1000,
    distance: '50px',
    easing: 'ease-in-out',
    origin: 'bottom',
    interval: 100
    
  });
  

// Partie qui permet de gérer le filtre de mes compétences et la pagination 


document.addEventListener('DOMContentLoaded', () => {
    const skills = [
        { name: 'Adobe XD', category: 'design', imageUrl: 'https://img.icons8.com/color/48/000000/adobe-xd.png' },
        { name: 'Adobe XD', category: 'design', imageUrl: 'https://img.icons8.com/color/48/000000/adobe-xd.png' },
        { name: 'Adobe XD', category: 'design', imageUrl: 'https://img.icons8.com/color/48/000000/adobe-xd.png' },
        { name: 'Adobe XD', category: 'design', imageUrl: 'https://img.icons8.com/color/48/000000/adobe-xd.png' },
        { name: 'Adobe XD', category: 'design', imageUrl: 'https://img.icons8.com/color/48/000000/adobe-xd.png' },
        { name: 'Adobe XD', category: 'design', imageUrl: 'https://img.icons8.com/color/48/000000/adobe-xd.png' },
        { name: 'Adobe XD', category: 'design', imageUrl: 'https://img.icons8.com/color/48/000000/adobe-xd.png' },
        { name: 'Adobe XD', category: 'design', imageUrl: 'https://img.icons8.com/color/48/000000/adobe-xd.png' },
        { name: 'Adobe XD', category: 'design', imageUrl: 'https://img.icons8.com/color/48/000000/adobe-xd.png' },
        { name: 'Adobe XD', category: 'design', imageUrl: 'https://img.icons8.com/color/48/000000/adobe-xd.png' },
        { name: 'Adobe XD', category: 'design', imageUrl: 'https://img.icons8.com/color/48/000000/adobe-xd.png' },
        { name: 'Adobe XD', category: 'design', imageUrl: 'https://img.icons8.com/color/48/000000/adobe-xd.png' },
        { name: 'Adobe XD', category: 'design', imageUrl: 'https://img.icons8.com/color/48/000000/adobe-xd.png' },
        { name: 'Adobe XD', category: 'design', imageUrl: 'https://img.icons8.com/color/48/000000/adobe-xd.png' },
        { name: 'Adobe XD', category: 'design', imageUrl: 'https://img.icons8.com/color/48/000000/adobe-xd.png' },
        { name: 'Adobe XD', category: 'design', imageUrl: 'https://img.icons8.com/color/48/000000/adobe-xd.png' },
        { name: 'Adobe XD', category: 'design', imageUrl: 'https://img.icons8.com/color/48/000000/adobe-xd.png' },
        { name: 'Adobe XD', category: 'design', imageUrl: 'https://img.icons8.com/color/48/000000/adobe-xd.png' },
        { name: 'Adobe XD', category: 'design', imageUrl: 'https://img.icons8.com/color/48/000000/adobe-xd.png' },
        { name: 'Adobe XD', category: 'design', imageUrl: 'https://img.icons8.com/color/48/000000/adobe-xd.png' },
        { name: 'Adobe XD', category: 'design', imageUrl: 'https://img.icons8.com/color/48/000000/adobe-xd.png' },
        { name: 'Adobe XD', category: 'design', imageUrl: 'https://img.icons8.com/color/48/000000/adobe-xd.png' },
        { name: 'Adobe XD', category: 'design', imageUrl: 'https://img.icons8.com/color/48/000000/adobe-xd.png' },
        { name: 'Adobe XD', category: 'design', imageUrl: 'https://img.icons8.com/color/48/000000/adobe-xd.png' },
        { name: 'Adobe XD', category: 'design', imageUrl: 'https://img.icons8.com/color/48/000000/adobe-xd.png' },
        { name: 'Adobe XD', category: 'design', imageUrl: 'https://img.icons8.com/color/48/000000/adobe-xd.png' },
        { name: 'Adobe XD', category: 'design', imageUrl: 'https://img.icons8.com/color/48/000000/adobe-xd.png' },
        { name: 'Adobe XD', category: 'design', imageUrl: 'https://img.icons8.com/color/48/000000/adobe-xd.png' },
        { name: 'Adobe XD', category: 'design', imageUrl: 'https://img.icons8.com/color/48/000000/adobe-xd.png' },
        { name: 'Adobe XD', category: 'design', imageUrl: 'https://img.icons8.com/color/48/000000/adobe-xd.png' },
        // Ajoutez d'autres objets de compétences ici...
    ];

    let filteredSkills = [...skills];
    const skillsPerPage = 12;
    let currentPage = 1;

    const skillsContainer = document.getElementById('skillsContainer');
    const paginationContainer = document.querySelector('.pagination');
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');
    const filterButtons = document.querySelectorAll('.filter-btn');

    function displaySkills() {
        const start = (currentPage - 1) * skillsPerPage;
        const end = start + skillsPerPage;
        const visibleSkills = filteredSkills.slice(start, end);

        skillsContainer.innerHTML = '';
        visibleSkills.forEach(skill => {
            const skillElement = document.createElement('div');
            skillElement.className = 'bar';
            skillElement.innerHTML = `
                <div class="info">
                    <img src="${skill.imageUrl}" alt="${skill.name}"/>
                    <span>${skill.name}</span>
                </div>
            `;
            skillsContainer.appendChild(skillElement);
        });

        updatePaginationButtons();
    }

    function setupPagination() {
        document.querySelectorAll('.pagination .page-btn').forEach(btn => btn.remove()); // Clear existing buttons

        const pageCount = Math.ceil(filteredSkills.length / skillsPerPage);
        for (let i = 1; i <= pageCount; i++) {
            const pageButton = document.createElement('button');
            pageButton.className = 'page-btn';
            pageButton.textContent = i;
            pageButton.setAttribute('data-page', i);
            pageButton.addEventListener('click', () => {
                currentPage = i;
                displaySkills();
            });
            paginationContainer.insertBefore(pageButton, nextButton);
        }
    }

    function updatePaginationButtons() {
        document.querySelectorAll('.pagination .page-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        const activeButton = document.querySelector(`.pagination .page-btn[data-page="${currentPage}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
    }

    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displaySkills();
        }
    });

    nextButton.addEventListener('click', () => {
        const pageCount = Math.ceil(filteredSkills.length / skillsPerPage);
        if (currentPage < pageCount) {
            currentPage++;
            displaySkills();
        }
    });

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active')); // Remove 'active' from all filter buttons
            this.classList.add('active'); // Set 'active' class on clicked filter button

            const filter = this.getAttribute('data-filter');
            filteredSkills = filter === 'all' ? [...skills] : skills.filter(skill => skill.category === filter);
            
            currentPage = 1;
            displaySkills();
            setupPagination(); // Setup the pagination buttons again as the number of pages may have changed
            updatePaginationButtons();
        });
    });

    // Initial calls
    displaySkills();
    setupPagination(); // Setup pagination initially
    updatePaginationButtons(); // Met à jour les boutons pour marquer le bouton "1" comme actif
});

/* document.addEventListener('DOMContentLoaded', () => {
    const projects = [
      { name: 'Project One', date: '2022-10', description: 'Brief description of the first project.', tools: 'HTML, CSS, JavaScript', imageUrl: 'https://via.placeholder.com/20x150', codeLink: '#', liveLink: '#' },
      { name: 'Project Two', date: '2022-11', description: 'Brief description of the second project.', tools: 'Python, Django', imageUrl: 'https://via.placeholder.com/120', codeLink: '#', liveLink: '#' },
      { name: 'Project Three', date: '2022-12', description: 'Brief description of the third project.', tools: 'React, Node', imageUrl: 'https://via.placeholder.com/150', codeLink: '#', liveLink: '#' },
      { name: 'Project Four', date: '2023-01', description: 'Brief description of the fourth project.', tools: 'Vue, Vuex', imageUrl: 'https://via.placeholder.com/150', codeLink: '#', liveLink: '#' },
      { name: 'Project Five', date: '2023-02', description: 'Brief description of the fifth project.', tools: 'Angular, TypeScript', imageUrl: 'https://via.placeholder.com/150', codeLink: '#', liveLink: '#' }
    ].sort((a, b) => b.date.localeCompare(a.date)); // Tri par date décroissante
  
    const projectsContainer = document.querySelector('.project-container');
    const filterButtons = document.querySelectorAll('.filter-btn');
  
    function renderProjects(filter = '') {
      projectsContainer.innerHTML = ''; // Effacer les projets existants avant de rerendre
      projects
        .filter(project => filter === 'all' || project.tools.includes(filter))
        .forEach(project => {
          const projectCard = document.createElement('div');
          projectCard.className = 'project-card';
          projectCard.innerHTML = `
            <img src="${project.imageUrl}" alt="${project.name}">
            <div class="project-info">
              <h3>${project.name}</h3>
              <span>${project.date}</span>
              <p>${project.description}</p>
              <p>Tools: ${project.tools}</p>
              <div class="project-links">
                <a href="${project.codeLink}" class="project-button project-code">
                  <i class="fas fa-code"></i> Project Code
                </a>
                <a href="${project.liveLink}" class="project-button live-project">
                  <i class="fas fa-external-link-alt"></i> Live Project
                </a>
              </div>
            </div>
          `;
          projectsContainer.appendChild(projectCard);
        });
    }
  
    // Initialement, afficher tous les projets
    renderProjects();
  
    // Ajout de l'écouteur d'événements pour les boutons de filtrage
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
          filterButtons.forEach(btn => btn.classList.remove('active')); // retire 'active' de tous les boutons
          button.classList.add('active'); // ajoute 'active' au bouton cliqué
          const filter = button.getAttribute('data-filter');
          renderProjects(filter);
        });
      });

      

    

  }); */
  
  document.addEventListener('DOMContentLoaded', () => {
    
    const projects = [
      { id: '1', name: 'Project One', date: '2022-10', description: 'Brief description of the first project.', role: 'Developer', type:'Web', imageUrl: 'https://via.placeholder.com/200x150', codeLink: '#', liveLink: '#' },
      { id: '2', name: 'Project Two', date: '2022-11', description: 'Brief description of the second project.', role: 'Lead Developer', type: 'Backend', imageUrl: 'https://via.placeholder.com/200x150', codeLink: '#', liveLink: '#' },
      { id: '3', name: 'Project Three', date: '2022-12', description: 'Brief description of the third project.', role: 'Project Manager', type: 'Fullstack', imageUrl: 'https://via.placeholder.com/200x150', codeLink: '#', liveLink: '#' },
      { id: '4', name: 'Project Four', date: '2023-01', description: 'Brief description of the fourth project.', role: 'UI/UX Designer', type: '', imageUrl: 'https://via.placeholder.com/200x150', codeLink: '#', liveLink: '#' },
      { id: '5', name: 'Project Five', date: '2023-02', description: 'Brief description of the fifth project.', role: 'Frontend Developer', type: 'Angula', imageUrl: 'https://via.placeholder.com/200x150', codeLink: '#', liveLink: '#' }
      // Ajoutez plus de projets ici selon vos besoins
    ];
  
    const projectsContainer = document.querySelector('.project-container');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
 
  
    function renderProjects(filter = '') {
      projectsContainer.innerHTML = ''; // Efface les projets existants avant de rerendre
      projects
    
      const filteredProjects = projects.filter(project => filter === 'all' || project.type === filter);
    
      filteredProjects.forEach(project => {
          const projectCard = document.createElement('div');
          projectCard.className = 'project-card';
          projectCard.innerHTML = `
            <img src="${project.imageUrl}" alt="${project.name}" style="width:100%; height:auto; border-radius: 5px;">
            <div class="project-info">
              <h3>${project.name}</h3>
              <span>${project.date}</span>
              <p>${project.description}</p>
              <p>Role: ${project.role}</p>
              <p>Type: ${project.type}</p>
              <div class="project-links">
                <a href="${project.codeLink}" class="project-button project-code">
                  <i class="fas fa-code"></i> Project Code
                </a>
                <a href="projects/Myprojects.html?project=${project.id}" class="project-button live-project">
                  <i class="fas fa-external-link-alt"></i> View Project
                </a>
              </div>
            </div>
          `;
          projectsContainer.appendChild(projectCard);
        });
    }
    
  
    // Initialement, afficher tous les projets
    renderProjects('all');
  
    // Ajout de l'écouteur d'événements pour les boutons de filtrage
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active')); // Retire 'active' de tous les boutons
        button.classList.add('active'); // Ajoute 'active' au bouton cliqué
        const filter = button.getAttribute('data-filter');
        renderProjects(filter);
      });
    }); 

    
  });
  









// Fin de la partie filtrage et pagination des compétences 