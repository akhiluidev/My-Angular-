import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  message = ''
  ngOnInit() {

  }

  sendData() {
    this.message = 'Sanniboyina Akhil Krishna Kumar (IncomeTax Inspector)'
    
    console.log(this.message)
  }

}


