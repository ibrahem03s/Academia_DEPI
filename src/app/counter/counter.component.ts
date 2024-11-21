import { Component, HostListener } from '@angular/core';
import { DataService } from '../data.service';
import { Data } from '@angular/router';
interface Inumbers {
  icon: string;
  value: number;
  text: string;
}
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  constructor(private dataServ: DataService) {}
  // Get Data From Json On Initialize
  ngOnInit() {
    this.getData();
  }
  numbers: Inumbers[] = [];
  load = false;

  async getData() {
    let data = await this.dataServ.Data;
    if (data) {
      this.numbers = data.team.numbers;
      this.load = true;
    }
  }
  countBol = true;
  moveUpClass = '';
  @HostListener('window:scroll') onScroll() {
    if (this.load) {
      // Height Of The Screen

      let onScreenHeight = window.innerHeight;
      // Numbers Count
      let numbersDiv = document.getElementById('scrolled');
      // The Top Of Element Position
      let numbersDivPosition = numbersDiv?.getBoundingClientRect().top ?? 0;
      let startCounterPoint = numbersDivPosition - onScreenHeight;
      // (If start Point Is = 0 ==> The Element Is Reached To The Screen Bottom ) && the Counter Is Not Work Before

      if (startCounterPoint <= 0 && this.countBol) {
        this.countBol = false;
        this.counter(this.numbers[0], 13.3, 20);
        this.counter(this.numbers[1], 25, 4);
        this.counter(this.numbers[2], 20, 10);
        this.counter(this.numbers[3], 13.8, 4);
        this.moveUpClass = 'move-up';
      }
    }
  }

  counter(el: any, time: number, count: number) {
    let initial = 0;
    let max = el.value;
    let interval = setInterval(() => {
      el.value = initial;
      initial += count;
      if (initial > max) {
        clearInterval(interval);
      }
    }, time);
  }
}
