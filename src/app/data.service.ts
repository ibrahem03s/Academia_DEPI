import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  Data = this.getData();

  async getData() {
    try {
      let data = await fetch('assets/online-courses.json');
      let jsonData = await data.json();
      return jsonData;
    } catch (e) {
      console.log('Error');
    }
  }
}
