import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  mydata: any[] = [];
  name: string = ''
  today = new Date();

  constructor() {

  }
  ngOnInit() {
    const x = localStorage.getItem('mydata');
    if (x) {
      this.mydata = JSON.parse(x);
      console.log('First user:', this.mydata);
    }

  }
  todayDate() {
    this.today=new Date()
  }
  }
