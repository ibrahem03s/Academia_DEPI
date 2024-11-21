import { Component, HostListener } from '@angular/core';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  // scrollThreshold: number = 1000;
  // hasBeenCalled: any = false;
  // onScrollThresholdReached() {
  //   function counter(element: any, inc: any, time: any, end: any) {
  //     var i = 0;
  //     element.innerText = 0;
  //     let hasBeenCalled = false;
  //     var interval = setInterval(() => {
  //       i += inc;
  //       if (i >= end) clearInterval(interval);
  //       element.innerText = i;
  //     }, time);
  //   }
  //   var ele = document.querySelector('#n-one');
  //   var ele2 = document.querySelector('#n-two');
  //   var ele3 = document.querySelector('#n-three');
  //   var ele4 = document.querySelector('#n-four');
  //   console.log('Scroll position reached!');
  //   counter(ele, 200, 60, 8000);
  //   counter(ele2, 20, 60, 810);
  //   counter(ele3, 50, 60, 2000);
  //   counter(ele4, 1, 120, 20);
  // }
  // // Listen to the window's scroll event
  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll() {
  //   const scrollPosition =
  //     document.documentElement.scrollTop || document.body.scrollTop || 0;
  //   if (scrollPosition >= this.scrollThreshold && this.hasBeenCalled == false) {
  //     this.onScrollThresholdReached();
  //     this.hasBeenCalled = true;
  //   }
  // }
}
