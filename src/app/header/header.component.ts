import { Component } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showChat = false;

  constructor(private translationService: TranslationService) {}

  toggleChat() {
    this.showChat = !this.showChat;
  }

  translatePage(targetLang: string) {
    // ta méthode de traduction ici
  }
}
