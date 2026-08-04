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
employes =[ { id: 101, name: 'akhil krishna', salary: 75000, doj: new Date('2023-01-15'), department: 'developer' },
    { id: 102, name: 'sai kumar', salary: 62000, doj: new Date('2022-08-10'), department: 'tester' },
    { id: 103, name: 'priya reddy', salary: 98000, doj: new Date('2021-11-05'), department: 'team lead' }]
  constructor() {

  }


  
  ngOnInit() {
  //   const x = localStorage.getItem('mydata');
  //   if (x) {
  //     this.mydata = JSON.parse(x);
  //     console.log('First user:', this.mydata);
  //   }

  // }
  // todayDate() {
  //   this.today=new Date()
  // }
  }
}
