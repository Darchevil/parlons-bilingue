import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  name: FormControl = new FormControl('');
  email: FormControl = new FormControl('');
  subject: FormControl = new FormControl('');
  message: FormControl = new FormControl('');
}
