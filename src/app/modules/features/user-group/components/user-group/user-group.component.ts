import { Component, OnInit } from '@angular/core';
import {ConditionalBorderService} from "../../../../../shared/services/core/debugging/conditional-border.service";
import {MatDialog} from "@angular/material/dialog";
import {AddUserGroupDialogComponent} from "../add-user-group-dialog/add-user-group-dialog.component";

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.scss']
})
export class UserGroupComponent implements OnInit {

  constructor(public borderService: ConditionalBorderService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openAddUserGroupDialog() {
    this.dialog.open(AddUserGroupDialogComponent);
  }
}
