import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
})
export class ChatbotComponent {
  userMessage = '';
  botReply = '';

  constructor(private http: HttpClient) {}

  sendMessage() {
    const payload = { message: this.userMessage };

    this.http.post<any>('https://khalid-bot-api.vercel.app/api/chat', payload)
      .subscribe({
        next: (response) => this.botReply = response.reply,
        error: () => this.botReply = "❌ Une erreur s’est produite. Réessaie plus tard.",
      });

    this.userMessage = '';
  }
}
