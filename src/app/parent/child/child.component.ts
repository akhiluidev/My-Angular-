import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges  {

  @Input() data: string = '';
constructor() {
  console.log('Child Loaded');
}
ngOnChanges(changes: SimpleChanges): void {
  console.log('Child data:', this.data);
}
  ngOnInit(){

  }


}
