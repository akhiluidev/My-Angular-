import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomeDialogComponent } from '../home-dialog/home-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  password: any;
  visible: boolean = false;

  constructor(public dialog: MatDialog) { }

  openDialog() {
    if (this.dialog.openDialogs.length === 0) {
      this.dialog.open(HomeDialogComponent, {
        height: '400px',
        width: '900px',
      });
    }
  }



  oneyeClick() {
    // this.show =!this.show
    if (this.password == 'password') {
      this.password = 'text'
      this.visible = true;
    } else {
      this.password = 'password'
      this.visible = false
    }

  }
}

