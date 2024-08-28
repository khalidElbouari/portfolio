import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, timer } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private apiUrl = 'https://libretranslate.com/translate';
  private requestQueue: Observable<any> = of(null);
  private requestRateLimit = 100; // Maximum requests per hour
  private requestInterval = 3600000 / this.requestRateLimit; // Interval between allowed requests

  constructor(private http: HttpClient) { }

  translate(text: string, targetLang: string, sourceLang: string = 'en'): Observable<any> {
    const body = {
      q: text,
      source: sourceLang,
      target: targetLang,
      format: 'text'
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return timer(this.requestInterval).pipe(
      switchMap(() => this.http.post<any>(this.apiUrl, JSON.stringify(body), { headers: headers })),
      catchError(error => {
        console.error('Translation error:', error);
        return of({ translatedText: 'Translation failed' });
      })
    );

  }
}
