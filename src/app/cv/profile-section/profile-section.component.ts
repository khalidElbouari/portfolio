import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-profile-section',
  templateUrl: './profile-section.component.html',
  styleUrl: './profile-section.component.css'
})
export class ProfileSectionComponent {
  @Input() profile!: typeof import('../../models/cv.model').cv.profile;
}
