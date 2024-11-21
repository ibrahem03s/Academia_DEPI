import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

interface iTitle {
  page: string;
  title: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  // Call Service
  constructor(private dataServ: DataService, private router: Router) {}
  ngOnInit() {
    this.getData();
  }
  user = {
    mail: '',
    password: '',
    name: '',
    phone: '',
    isLogin: '',
    certificateImage: '',
  };
  titles: iTitle[] = [];
  routers: string[] = [];
  title: any = '';
  menuOpen = false;
  menuToggle = 'd-none';
  async getData() {
    let data = await this.dataServ.Data;
    if (data) {
      this.titles = data.header.titles;
      this.routers = data.header.routers;
      this.user = data.user;
      this.menuOpen = false;
      this.menuToggle = 'd-none';
      let currentRouter = this.router.url.split('/')[1];
      if (currentRouter && this.routers.includes(currentRouter)) {
        this.setTitle(this.routers.indexOf(currentRouter));
      }
    } else {
      console.log('No Data In Storage');
    }
  }

  setTitle(index: number) {
    this.title = this.titles[index];
  }
  // Toggle Menu
  showMenu() {
    if (this.menuOpen) {
      this.menuOpen = false;
      this.menuToggle = 'd-none';
    } else {
      this.menuOpen = true;
      this.menuToggle = '';
    }
  }
  openCertificate() {
    this.getData();
    let certificate = document.querySelector('.overlay');
    certificate?.classList.remove('d-none');
  }
  closeCertificate() {
    let certificate = document.querySelector('.overlay');
    certificate?.classList.add('d-none');
  }
}
