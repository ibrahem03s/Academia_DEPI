import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // Used In Buttons That Has No Action
  scrollToHeader(): void {
    window.scrollTo(0, 0);
  }
  @HostListener('window:scroll') onscroll() {
    let smallCards = document.querySelectorAll(' .small-card');
    // Height Of The Screen
    let screenHeight = window.innerHeight;
    // If The Latest Element Is Visible Stop The Loop (Performance)
    if (!smallCards[smallCards.length - 1].classList.contains('visible')) {
      smallCards.forEach((smallCard) => {
        // The Top Of Each Element Position
        let smallCardPosition = smallCard.getBoundingClientRect().top;
        let startPointSmall = smallCardPosition - screenHeight;
        // If start Point Is = 0 ==> The Element Is Reached To The Screen Bottom
        if (startPointSmall <= 0) {
          smallCard.classList.add('visible');
        }
      });
    }
  }
}
