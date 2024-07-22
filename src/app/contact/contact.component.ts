import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    emailjs.init('EX2fvPQbVYxL6RDkt');
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const templateParams = {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        message: this.contactForm.value.message
      };

      console.log('Sending email with params:', templateParams); // Debugging

      emailjs.send('service_ck6llxy', 'template_aj1v40x', templateParams)
        .then((response: EmailJSResponseStatus) => {
          console.log('Email sent successfully:', response); // Debugging
          this.successMessage = 'Your message has been sent successfully!';
          this.contactForm.reset();
        }, (error) => {
          console.error('Error sending email:', error); // Debugging
          this.errorMessage = 'There was an error sending your message. Please try again later.';
        });
    }
  }
}
