import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  sentences: string[] = [
    "I'm a software developer",
   /* "Transforming ideas into reality",
    "Empowering businesses with technology"*/
  ];
  currentSentenceIndex: number = 0;  // Index to track current sentence
  typingText: string = "";  // Text to be typed
  displayText: string = "";  // For displaying the text gradually
  private destroy$: Subject<void> = new Subject<void>();  // Subject to unsubscribe from observables
  private typingIntervalId: any;  // Interval ID for sentence switching
  private animateTypingIntervalId: any;  // Interval ID for typing animation

  constructor() { }

  ngOnInit(): void {
    this.updateTypingText();  // Call initially to start the first sentence
    this.setupTypingInterval();  // Setup interval to change sentences periodically
    document.addEventListener('visibilitychange', this.handleVisibilityChange);  // Add event listener for visibility change
  }

  ngOnDestroy(): void {
    this.destroy$.next();  // Unsubscribe from observables
    this.destroy$.complete();
    clearInterval(this.typingIntervalId);  // Clear the typing interval
    clearInterval(this.animateTypingIntervalId);  // Clear the animation interval
    document.removeEventListener('visibilitychange', this.handleVisibilityChange);  // Remove event listener
  }

  setupTypingInterval(): void {
    if (this.typingIntervalId) {
      clearInterval(this.typingIntervalId);  // Clear any existing interval
    }

    this.typingIntervalId = interval(6000)
      .pipe(takeUntil(this.destroy$))  // Unsubscribe when component is destroyed
      .subscribe(() => {
        this.updateTypingText();  // Update text to be typed
      });
  }

  updateTypingText(): void {
    const sentence = this.sentences[this.currentSentenceIndex];
    this.typingText = sentence;  // Set the current sentence to be typed
    this.currentSentenceIndex = (this.currentSentenceIndex + 1) % this.sentences.length;  // Move to the next sentence index
    this.animateTyping();  // Start typing animation
  }

  animateTyping(): void {
    let index = 0;
    this.displayText = "";  // Clear previous text

    if (this.animateTypingIntervalId) {
      clearInterval(this.animateTypingIntervalId);  // Clear any existing animation interval
    }

    this.animateTypingIntervalId = setInterval(() => {
      if (index < this.typingText.length) {
        this.displayText += this.typingText.charAt(index);  // Add next character to displayText
        index++;
      } else {
        clearInterval(this.animateTypingIntervalId);  // Clear interval when typing is complete
      }
    }, 100);  // Adjust typing speed as needed (milliseconds)
  }

  handleVisibilityChange = (): void => {
    if (document.hidden) {
      clearInterval(this.typingIntervalId);  // Clear typing interval when page is hidden
      clearInterval(this.animateTypingIntervalId);  // Clear animation interval when page is hidden
    } else {
      this.setupTypingInterval();  // Restart typing interval when page becomes visible
      this.updateTypingText();  // Ensure text is updated when page becomes visible
    }
  }
}
