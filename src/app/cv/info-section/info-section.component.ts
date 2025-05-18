import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.css']
})
export class InfoSectionComponent {
  @Input() info!: {
    softSkills: string[],
    languages: { language: string; level: string; certification: string; experience: string }[],
    interests: string[]
  };
}
