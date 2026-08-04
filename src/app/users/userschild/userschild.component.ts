import { Component, Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-userschild',
  templateUrl: './userschild.component.html',
  styleUrls: ['./userschild.component.css']
})
export class UserschildComponent {

  @Output() sendMessage = new EventEmitter<string>()
ngOnInit(){

}

  sendData() {
    this.sendMessage.emit("Hello Parent, I'm Child");
  }
}
