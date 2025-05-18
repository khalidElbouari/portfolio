import { Component } from '@angular/core';
import { cv } from '../../models/cv.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html'
})
export class CvComponent {
  profile = cv.profile;
  education = cv.education;
  experiences = cv.experiences;
  technologySkills = cv.technologySkills;

  info = {
    softSkills: cv.softSkills,
    languages: cv.languages,
    interests: cv.interests
  };
}
