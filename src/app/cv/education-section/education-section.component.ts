import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-education-section',
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.css']
})
export class EducationSectionComponent {
  @Input() education!: Array<{ diploma: string; organisation: string; year: number }>;
}
