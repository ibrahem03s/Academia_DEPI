import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.required,
      Validators.pattern(/^[0-9]{3,5}[a-zA-Z]{3,5}$/),
    ]),
  });

  submitLoginForm(Nform: FormGroup) {
    console.log(Nform.value);
  }
}
