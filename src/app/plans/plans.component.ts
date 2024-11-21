import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css',
})
export class PlansComponent {
  openPage() {
    document.querySelector('.form-layout')?.classList.remove('d-none');
  }
  @HostListener('window:scroll') onScroll() {
    let plansDivs = document.querySelectorAll('.plan');
    let onScreenHeight = window.innerHeight;
    if (!plansDivs[3].classList.contains('go-up')) {
      plansDivs.forEach((plan) => {
        let plansDivPosition = plan?.getBoundingClientRect().top ?? 0;
        let startPoint = plansDivPosition - onScreenHeight;
        if (startPoint <= 0) {
          plan.classList.add('go-up');
        }
      });
    }
  }
}
