import { Component, OnInit } from '@angular/core';
import {ConditionalBorderService} from "../../../../../shared/services/core/debugging/conditional-border.service";
import {MatDialog} from "@angular/material/dialog";
import {AddUserDialogComponent} from "../add-user-dialog/add-user-dialog.component";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(public borderService: ConditionalBorderService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openAddUserDialog(modalType: string) {
   let dialog = this.dialog.open(AddUserDialogComponent);
   dialog.componentInstance.userType = modalType;
  }
}
