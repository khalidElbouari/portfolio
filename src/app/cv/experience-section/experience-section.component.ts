import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.css']
})
export class ExperienceSectionComponent {
  @Input() experiences!: Array<{
    type: string;
    organisation: string;
    title: string;
    technologies: string[];
    year: number;
    duration: string;
  }>;
}
