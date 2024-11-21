import { Component, HostListener } from '@angular/core';
import { DataService } from '../data.service';
// Interfaces For Objects From Json File
interface Iteam {
  imgUrl: string;
  name: string;
  job: string;
}

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
})
export class TeamComponent {
  // Call Service
  constructor(private dataServ: DataService) {}
  // Get Data On Initialize The App
  ngOnInit() {
    this.getData();
  }
  team: Iteam[] = [];
  load = false;
  async getData() {
    let data = await this.dataServ.Data;
    if (data) {
      this.team = data.team.persons;
      this.load = true;
    } else {
      console.log('No Data In Storage');
    }
  }

  @HostListener('window:scroll') onScroll() {
    if (this.load) {
      // Height Of The Screen

      let onScreenHeight = window.innerHeight;
      // Persons
      let personDivs = document.querySelectorAll('.person');
      // If All Divs Moved Up Do Not Go To Loop (performance)
      if (!personDivs[personDivs.length - 1].classList.contains('move-up')) {
        personDivs.forEach((personDiv) => {
          // The Top Of Each Element Position
          let personDivPosition = personDiv?.getBoundingClientRect().top ?? 0;
          let startMoveUpPoint = personDivPosition - onScreenHeight;
          // If start Point Is = 0 ==> The Element Is Reached To The Screen Bottom

          if (startMoveUpPoint <= 0) {
            personDiv.classList.add('move-up');
          }
        });
      }
    }
  }
}
