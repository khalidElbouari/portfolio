import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-technology-skills',
  templateUrl: './technology-skills.component.html',
  styleUrls: ['./technology-skills.component.css']
})
export class TechnologySkillsComponent {
  @Input() skills!: {
    skill: string;
    details: string[];
  }[];
}
