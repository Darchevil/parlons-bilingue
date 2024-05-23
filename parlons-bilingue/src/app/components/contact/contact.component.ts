import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl(''),
  });

  public async submitForm(): Promise<void> {
    //TODO: Ajouter le compte d'Eddy pour qu'il reçoivent les mails
    emailjs.init('m4cTexIXMuP3QnW9c');
    let response = await emailjs.send('service_hiua469', 'template_1zgwaw5', {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      subject: this.contactForm.value.subject,
      message: this.contactForm.value.message,
    });
    alert('Votre demande est bien envoyée');
    console.log('name :', this.contactForm.value.name);
  }
}
