import { Component } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private translationService: TranslationService) {}

  translatePage(targetLang: string) {
    const elementsToTranslate = document.querySelectorAll('[data-translate]');

    elementsToTranslate.forEach(element => {
      const htmlElement = element as HTMLElement;
      const text = htmlElement.innerText;

      this.translationService.translate(text, targetLang).subscribe(
        (response: any) => {
          htmlElement.innerText = response.translatedText;
        },
        (error) => {
          console.error('Error translating text:', error);
        }
      );
    });
  }
}
