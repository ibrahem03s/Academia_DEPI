import { Component, HostListener } from '@angular/core';
import { withI18nSupport } from '@angular/platform-browser';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrl: './all-courses.component.css',
})
export class AllCoursesComponent {
  openPage() {
    document.querySelector('.form-layout')?.classList.remove('d-none');
  }
  scrollToHeader(): void {
    window.scrollTo(0, 0);
  }

  toggleLike(index: number): void {
    let Likes = document.querySelectorAll('.like');
    Likes.forEach((like, i) => {
      if (i == index) {
        if (like.classList.contains('fa-regular')) {
          like.classList.remove('fa-regular');
          like.classList.add('fa-solid');
          like.classList.add('text-info');
        } else if (like.classList.contains('fa-solid')) {
          like.classList.remove('fa-solid');
          like.classList.add('fa-regular');
          like.classList.remove('text-info');
        }
      }
    });
  }

  @HostListener('window:scroll') onscroll() {
    // first scroll
    let cards = document.querySelectorAll('.course-card');
    let screenHeight = window.innerHeight;
    if (!cards[cards.length - 1].classList.contains('visible')) {
      cards.forEach((card) => {
        let cardPosition = card.getBoundingClientRect().top;
        let startPoint = cardPosition - screenHeight;
        if (startPoint <= 0) {
          card.classList.add('visible');
        }
      });
    }

    // second scroll
    let smallCards = document.querySelectorAll(' .small-card');
    if (!smallCards[smallCards.length - 1].classList.contains('visible')) {
      smallCards.forEach((smallCard) => {
        let smallCardPosition = smallCard.getBoundingClientRect().top;
        let startPointSmall = smallCardPosition - screenHeight;
        if (startPointSmall <= 0) {
          smallCard.classList.add('visible');
        }
      });
    }
  }

  // ____________

  // isVisible1 = false;
  // isVisible2 = false;
  // isVisible3 = false;

  // @HostListener('window:scroll', [])
  // onScroll(): void {
  //   const scrollPosition = window.pageYOffset + window.innerHeight;
  //   const elementPosition = document.documentElement.scrollHeight - 3000;

  //   if (scrollPosition >= elementPosition) {
  //     this.showDivsInRotation();
  //   }
  // }

  // showDivsInRotation(): void {
  //   setTimeout(() => (this.isVisible1 = true), 0);
  //   setTimeout(() => (this.isVisible2 = true), 500);
  //   setTimeout(() => (this.isVisible3 = true), 1000);
  // }

  // isVisible11 = false;
  // isVisible22 = false;
  // isVisible33 = false;
  // isVisible4 = false;
  // isVisible5 = false;
  // isVisible6 = false;

  // @HostListener('window:scroll', [])
  // onScroll2(): void {
  //   const scrollPosition = window.pageYOffset + window.innerHeight;
  //   const elementPosition = document.documentElement.scrollHeight - 2500; // Adjust for scroll triggering

  //   if (scrollPosition >= elementPosition) {
  //     this.showDivsInRotation2();
  //   }
  // }

  // showDivsInRotation2(): void {
  //   setTimeout(() => (this.isVisible11 = true), 0);
  //   setTimeout(() => (this.isVisible22 = true), 500); // Appear after 0.5 second
  //   setTimeout(() => (this.isVisible33 = true), 1000); // Appear after 1 second
  //   setTimeout(() => (this.isVisible4 = true), 1500); // Appear after 1.5 seconds
  //   setTimeout(() => (this.isVisible5 = true), 2000); // Appear after 2 seconds
  //   setTimeout(() => (this.isVisible6 = true), 2500); // Appear after 2.5 seconds
  // }

  // text: string = '';
  // ________________
}
