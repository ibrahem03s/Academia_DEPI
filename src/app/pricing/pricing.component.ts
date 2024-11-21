import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css',
})
export class PricingComponent {
  @HostListener('window:scroll') onScroll() {
    let onScreenHeight = window.innerHeight;
    let FAQsDiv = document.querySelector('.FAQs');
    if (!FAQsDiv?.classList.contains('go-up')) {
      let FAQsPosition = FAQsDiv?.getBoundingClientRect().top ?? 0;
      let startMovePoint = FAQsPosition - onScreenHeight;
      if (startMovePoint <= 0) {
        FAQsDiv?.classList.add('go-up');
      }
    }
  }
}
