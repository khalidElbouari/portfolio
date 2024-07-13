import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Project 1',
      description: 'A brief description of Project 1.',
      image: "/assets/myprojects/labocontrol-Aceuil.png"
    },
    {
      title: 'Project 2',
      description: 'A brief description of Project 2.',
      image: "/assets/myprojects/labocontrol-materiel.png"
    },
    {
      title: 'Project 3',
      description: 'A brief description of Project 2.',
      image: "/assets/myprojects/labocontrol-services.png"
    },
    {
      title: 'Project 4',
      description: 'A brief description of Project 2.',
      image: "/assets/myprojects/labocontrol-services.png"
    },
    {
      title: 'Project 5',
      description: 'A brief description of Project 2.',
      image: "/assets/myprojects/labocontrol-services.png"
    },
    {
      title: 'Project 6',
      description: 'A brief description of Project 2.',
      image: "/assets/myprojects/labocontrol-services.png"
    },
    {
      title: 'Project 7',
      description: 'A brief description of Project 2.',
      image: "/assets/myprojects/labocontrol-services.png"
    },

  ];
  currentPage = 0;
  itemsPerPage = 2;

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
    // Your logic to show project details in a modal
    alert(`Project Details:\nTitle: ${project.title}\nDescription: ${project.description}`);
  }
}
