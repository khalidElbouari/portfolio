import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';

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
        'Interactivité et Engagement : Une expérience interactive et engageante, permettant aux utilisateurs d\'interagir avec les contenus et de découvrir les services et les produits de manière immersive.',
      images: [
        { src: "assets/myprojects/labocontrol-Aceuil.png", description: "Accueil" },
        { src: "assets/myprojects/labocontrol-materiel.png", description: "Matériel" },
        { src: "assets/myprojects/labocontrol-services.png", description: "Services" }
      ],
      debut: '2/04/2024',
      fin: '23/06/2024',
      technologies: ['Angular', 'Spring Boot', 'Bootstrap']
    },
    {
      title: 'Gestion de Toutune Enligne',
      description: 'Cette plateforme en ligne facilite la collaboration en intégrant les services bancaires pour une gestion efficace des transactions. Elle permet aux utilisateurs de collaborer en ligne tout en bénéficiant d\'une gestion sécurisée et simplifiée des aspects financiers.',
      images: [
        { src: "assets/myprojects/dart/img.png", description: "Accueil" },
        { src: "assets/myprojects/dart/img_1.png", description: "Matériel" },
        { src: "assets/myprojects/dart/img_2.png", description: "Services" },
        { src: "assets/myprojects/dart/img_3.png", description: "Page 4" },
        { src: "assets/myprojects/dart/img_4.png", description: "Page 5" },
        { src: "assets/myprojects/dart/img_5.png", description: "Page 6" },
        { src: "assets/myprojects/dart/img_6.png", description: "Page 7" },
        { src: "assets/myprojects/dart/img_7.png", description: "Page 8" },
        { src: "assets/myprojects/dart/img_8.png", description: "Page 9" },
        { src: "assets/myprojects/dart/img_9.png", description: "Page 10" },
        { src: "assets/myprojects/dart/img_10.png", description: "Page 11" },
        { src: "assets/myprojects/dart/img_11.png", description: "Page 12" },
        { src: "assets/myprojects/dart/img_12.png", description: "Page 13" },
        { src: "assets/myprojects/dart/img_13.png", description: "Page 14" },
        { src: "assets/myprojects/dart/img_14.png", description: "Page 15" },
        { src: "assets/myprojects/dart/img_15.png", description: "Page 16" },
        { src: "assets/myprojects/dart/img_16.png", description: "Page 17" },
        { src: "assets/myprojects/dart/img_17.png", description: "Page 18" },
        { src: "assets/myprojects/dart/img_18.png", description: "Page 18" },
        { src: "assets/myprojects/dart/img_19.png", description: "Page 18" },
        { src: "assets/myprojects/dart/img_20.png", description: "Page 18" },
        { src: "assets/myprojects/dart/img_21.png", description: "Page 18" },
        { src: "assets/myprojects/dart/img_22.png", description: "Page 18" }
      ],
      debut: '15/01/2024',
      fin: '15/04/2024',
      technologies: ['Thymeleaf', 'AJAX', 'Bootstrap', 'Spring Boot']
    },
    {
      title: 'School Management System',
      description: 'Le "School Management System" est une plateforme complète pour la gestion des cahiers de texte. Elle permet aux enseignants d\'ajouter, consulter, modifier et supprimer des séances de cours. Les inspecteurs et directeurs peuvent également accéder et inspecter les cahiers de texte. L\'application est conçue pour être fiable, facile à utiliser, et performante, avec une sécurité robuste pour protéger les données. Les fonctionnalités incluent la planification des séances, la gestion des matières, et un système de consultation intuitif.',
      images: [
        { src: "assets/myprojects/pfe-BTS/img.png", description: "Accueil" },
        { src: "assets/myprojects/pfe-BTS/img_1.png", description: "Matériel" },
        { src: "assets/myprojects/pfe-BTS/img_2.png", description: "Services" },
        { src: "assets/myprojects/pfe-BTS/img_3.png", description: "Services" },
        { src: "assets/myprojects/pfe-BTS/img_4.png", description: "Services" },
        { src: "assets/myprojects/pfe-BTS/img_5.png", description: "Services" }
      ],
      debut: '1/01/2022',
      fin: '30/06/2023',
      technologies: ['JSP', 'JEE', 'Bootstrap', 'MySQL', 'pdfMake']
    }
  ];
  currentPage = 0;
  itemsPerPage = 2;
  currentProject: any = null;
  currentImageIndex = 0;

  ngOnInit() {
    this.updateItemsPerPage(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateItemsPerPage(event.target.innerWidth);
  }

  updateItemsPerPage(width: number) {
    if (width < 768) { // Adjust this breakpoint as needed
      this.itemsPerPage = 1;
    } else {
      this.itemsPerPage = 2;
    }
  }

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
      document.body.classList.add('modal-open');
    }
  }

  closeModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
      modal.classList.remove('show');
      document.body.classList.remove('modal-open');
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
