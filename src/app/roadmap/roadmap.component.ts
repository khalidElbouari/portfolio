import { Component } from '@angular/core';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.css']
})
export class RoadmapComponent {
  experiences = [
    { title: 'Web Application for Mail Management', details: 'Developed a web application to manage mails.', enterprise: 'Ibn tofail', date: 'Kénitra : 04-07-2022 to 29-07-2022' },
    { title: 'Bug Fixing for VB.NET Application', details: 'Analysis and resolution of bugs in the VB.NET desktop application for Copref.\n' + 'Development of the website for payment management', enterprise: 'Copref', date: 'Kénitra : 15-05-2023 to 15-06-2023' },
    { title: 'Developer', details: 'Development of a web application for the integrated marketing of services and products.', enterprise: 'LaboControl', date: 'Fes : 01-04-2024 to 24-06-2024' },
    // Add more experience entries here
  ];

  education = [
    { title: 'Bachelor\'s Degree in Computer Engineering and Digital Governance', details: 'Higher School of Technology (EST).', date: '2024' },
    { title: 'BTS in Information Systems Development', details: 'Advanced Technician Certificate (BTS)', date: '2023' },
    { title: 'High School Diploma in Physics', details: 'Almasira alkhadra High School', date: '2021' },
    // Add more education entries here
  ];

  currentSection: string = 'experience'; // Default to experience

  showSection(section: string) {
    this.currentSection = section;
  }
}
