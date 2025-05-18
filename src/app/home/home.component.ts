import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  sentences: string[] = [
    "I'm a software developer",
    "Transforming ideas into reality",
    "I speak JSON fluently"
  ];

  constructor(private route: ActivatedRoute) { }  // <-- injecter ActivatedRoute



  currentSentenceIndex: number = 0;  // Index to track current sentence
  typingText: string = "";  // Text to be typed
  displayText: string = "";  // For displaying the text gradually
  private destroy$: Subject<void> = new Subject<void>();  // Subject to unsubscribe from observables
  private typingIntervalId: any;  // Interval ID for sentence switching
  private animateTypingIntervalId: any;  // Interval ID for typing animation
  private isAnimating: boolean = false;  // Flag to track animation state


  ngOnInit(): void {
    this.updateTypingText();
    this.setupTypingInterval();
    document.addEventListener('visibilitychange', this.handleVisibilityChange);

    // Gestion du fragment pour scroll automatique
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const el = document.getElementById(fragment);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();  // Unsubscribe from observables
    this.destroy$.complete();
    this.clearAllIntervals();  // Clear all intervals
    document.removeEventListener('visibilitychange', this.handleVisibilityChange);  // Remove event listener
  }

  // Helper method to clear all intervals
  private clearAllIntervals(): void {
    if (this.typingIntervalId) {
      clearInterval(this.typingIntervalId);
      this.typingIntervalId = null;
    }
    if (this.animateTypingIntervalId) {
      clearInterval(this.animateTypingIntervalId);
      this.animateTypingIntervalId = null;
    }
    this.isAnimating = false;
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
    // Only start a new animation if one isn't already running
    if (!this.isAnimating) {
      const sentence = this.sentences[this.currentSentenceIndex];
      this.typingText = sentence;  // Set the current sentence to be typed
      this.currentSentenceIndex = (this.currentSentenceIndex + 1) % this.sentences.length;  // Move to the next sentence index
      this.animateTyping();  // Start typing animation
    }
  }

  animateTyping(): void {
    let index = 0;
    this.displayText = "";  // Clear previous text
    this.isAnimating = true;  // Set animation flag

    if (this.animateTypingIntervalId) {
      clearInterval(this.animateTypingIntervalId);  // Clear any existing animation interval
    }

    this.animateTypingIntervalId = setInterval(() => {
      if (index < this.typingText.length) {
        this.displayText += this.typingText.charAt(index);  // Add next character to displayText
        index++;
      } else {
        clearInterval(this.animateTypingIntervalId);  // Clear interval when typing is complete
        this.animateTypingIntervalId = null;
        this.isAnimating = false;  // Reset animation flag
      }
    }, 100);  // Adjust typing speed as needed (milliseconds)
  }

  handleVisibilityChange = (): void => {
    if (document.hidden) {
      this.clearAllIntervals();  // Clear all intervals when page is hidden
    } else {
      // When page is visible again, only start fresh
      this.setupTypingInterval();  // Set up the sentence cycling interval
      if (!this.isAnimating) {     // Only start animation if one isn't already running
        this.updateTypingText();   // Start a fresh animation
      }
    }
  }
}
