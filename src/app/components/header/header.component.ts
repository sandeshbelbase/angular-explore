import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // title = 'Task Ticketing';

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}
  toggleTask() {
    alert('hello NEpal');
    console.log('hello');
  }
  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '400px',
    });
  }
}
