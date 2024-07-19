import { Component } from '@angular/core';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrl: './roadmap.component.css'
})
export class RoadmapComponent {
  experiences = [
    { title: 'Web Application for Mail Management', details: 'Developed a web application to manage mails.', date: 'Jan 2022 - Mar 2022', position: 'left' },
    { title: 'Bug Fixing for VB.NET Application', details: 'Analyzed and resolved bugs for a VB.NET desktop application.', date: 'Apr 2022 - Jun 2022', position: 'right' },
    { title: 'Bug Fixing for VB.NET Application', details: 'Analyzed and resolved bugs for a VB.NET desktop application.', date: 'Apr 2022 - Jun 2022', position: 'right' },
    // Add more experience entries here
  ];

  education = [
    { title: 'Licence in Computer Engineering and Digital Governance', details: 'École Supérieure de Technologie (EST).', date: '2024', position: 'left' },
    { title: 'BTS in Information Systems Development', details: 'École Supérieure de Technologie (EST).', date: '2023', position: 'right' },
    { title: 'BTS in Information Systems Development', details: 'École Supérieure de Technologie (EST).', date: '2023', position: 'right' },
    // Add more education entries here
  ];

  currentSection: string = 'experience'; // Default to experience

  showSection(section: string) {
    this.currentSection = section;
  }

}
