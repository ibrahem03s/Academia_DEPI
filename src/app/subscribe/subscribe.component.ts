import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrl: './subscribe.component.css',
})
export class SubscribeComponent {
  constructor(private dataServ: DataService) {}
  close() {
    document.querySelector('.form-layout')?.classList.add('d-none');
  }
  async submit(form: any) {
    if (form.value.password1 === form.value.password2) {
      this.close();
      let user = {
        mail: form.value.email,
        password: form.value.password1,
        name: `${form.value.firstName} ${form.value.lastName}`,
        phone: form.value.phone,
        isLogin: true,
        certificateImage: 'assets/certificate.png',
      };
      let data = await this.dataServ.Data;
      if (data) {
        data.user = user;
      }
      form.reset();
    }
  }
}
