import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Plateforme web pour la commercialisation intégrée de services et de produits',
      description: 'Découverte des Services et des Produits : Une interface conviviale et intuitive permettant aux utilisateurs de trouver et explorer facilement les services et produits de l\'entreprise. Des fonctionnalités de recherche et de filtrage efficaces sont intégrées.\n' +
        '\n' +
        'Localisation de l\'Entreprise : Accès aux informations de localisation de l\'entreprise, y compris les adresses des succursales et des bureaux. L\'intégration de cartes interactives facilite cette fonctionnalité.\n' +
        '\n' +
        'Interactivité et Engagement : Une expérience interactive et engageante, permettant aux utilisateurs d\'interagir avec les contenus et de découvrir les services et les produits de manière immersive.  ',
      images: [
        { src: "/assets/myprojects/labocontrol-Aceuil.png", description: "Accueil" },
        { src: "/assets/myprojects/labocontrol-materiel.png", description: "Matériel" },
        { src: "/assets/myprojects/labocontrol-services.png", description: "Services" }
      ],
      debut: '15/07/2023',
      fin: '15/07/2023',
      technologies: ['Angular', 'TypeScript', 'Bootstrap']
    },
    {
      title: 'School management system',
      description: 'A brief description of Project 2.',
      images: [
        { src: "/assets/myprojects/pfe-BTS/img.png", description: "Accueil" },
        { src: "/assets/myprojects/pfe-BTS/img_1.png", description: "Matériel" },
        { src: "/assets/myprojects/pfe-BTS/img_2.png", description: "Services" },
        { src: "/assets/myprojects/pfe-BTS/img_3.png", description: "Services" },
        { src: "/assets/myprojects/pfe-BTS/img_4.png", description: "Services" },
        { src: "/assets/myprojects/pfe-BTS/img_5.png", description: "Services" },
      ],
      debut: '15/07/2023',
      fin: '15/07/2023',
      technologies: ['Angular', 'TypeScript', 'Bootstrap']
    },
    {
      title: 'Project 3',
      description: 'A brief description of Project 2.',
      images: [
        { src: "/assets/myprojects/labocontrol-Aceuil.png", description: "Accueil" },
        { src: "/assets/myprojects/labocontrol-materiel.png", description: "Matériel" },
        { src: "/assets/myprojects/labocontrol-services.png", description: "Services" }
      ],
      debut: '15/07/2023',
      fin: '15/07/2023',
      technologies: ['Angular', 'TypeScript', 'Bootstrap']

    },
    {
      title: 'Project 4',
      description: 'A brief description of Project 2.',
      images: [
        { src: "/assets/myprojects/labocontrol-Aceuil.png", description: "Accueil" },
        { src: "/assets/myprojects/labocontrol-materiel.png", description: "Matériel" },
        { src: "/assets/myprojects/labocontrol-services.png", description: "Services" }
      ],
      debut: '15/07/2023',
      fin: '15/07/2023',
      technologies: ['Angular', 'TypeScript', 'Bootstrap']
    },
    {
      title: 'Project 5',
      description: 'A brief description of Project 2.',
      images: [
        { src: "/assets/myprojects/labocontrol-Aceuil.png", description: "Accueil" },
        { src: "/assets/myprojects/labocontrol-materiel.png", description: "Matériel" },
        { src: "/assets/myprojects/labocontrol-services.png", description: "Services" }
      ],
      debut: '15/07/2023',
      fin: '15/07/2023',
      technologies: ['Angular', 'TypeScript', 'Bootstrap']
    },

  ];
  currentPage = 0;
  itemsPerPage = 2;
  currentProject: any = null;
  currentImageIndex = 0;

  get paginatedProjects() {
    const start = this.currentPage * this.itemsPerPage;
    return this.projects.slice(start, start + this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage < Math.ceil(this.projects.length / this.itemsPerPage) - 1) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  showProjectDetails(project: any) {
    this.currentProject = project;
    this.currentImageIndex = 0; // Reset to first image
    const modal = document.getElementById('projectModal');
    if (modal) {
      modal.classList.add('show');
    }
  }

  closeModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
      modal.classList.remove('show');
    }
  }

  prevImage() {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    } else {
      this.currentImageIndex = this.currentProject.images.length - 1;
    }
  }

  nextImage() {
    if (this.currentImageIndex < this.currentProject.images.length - 1) {
      this.currentImageIndex++;
    } else {
      this.currentImageIndex = 0;
    }
  }
}
