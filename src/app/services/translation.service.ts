import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private apiUrl = 'https://libretranslate.com/translate';
  private apiKey = ''; // Add your API key here if required

  constructor(private http: HttpClient) { }

  translate(text: string, targetLang: string, sourceLang: string = 'auto'): Observable<string> {
    // Skip empty text
    if (!text || !text.trim()) {
      return new Observable(observer => {
        observer.next('');
        observer.complete();
      });
    }

    const body = {
      q: text,
      source: sourceLang,
      target: targetLang,
      format: 'text',
      api_key: this.apiKey
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(this.apiUrl, body, { headers })
      .pipe(
        map(response => response.translatedText),
        catchError(error => {
          console.error('Translation error:', error);
          return throwError(() => new Error('Translation failed: ' + (error.message || error)));
        })
      );
  }
}
