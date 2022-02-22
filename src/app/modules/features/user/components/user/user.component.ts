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
  tableData: Array<any> = [
    {row: '1', name: 'lewis', userName: 'lewis123', userGroup: 'Group 5', department: 'Finance', tenant: 'Advice Health', privileges: 'Organization Level Admin', view: '', edit: '', remove: '', active: '' },
    {row: '2', name: 'lewis', userName: 'lewis123', userGroup: 'Group 5', department: 'Finance', tenant: 'Advice Health', privileges: 'Organization Level Admin', view: '', edit: '', remove: '', active: '' },
    {row: '3', name: 'lewis', userName: 'lewis123', userGroup: 'Group 5', department: 'Finance', tenant: 'Advice Health', privileges: 'Organization Level Admin', view: '', edit: '', remove: '', active: '' },
    {row: '4', name: 'lewis', userName: 'lewis123', userGroup: 'Group 5', department: 'Finance', tenant: 'Advice Health', privileges: 'Organization Level Admin', view: '', edit: '', remove: '', active: '' },
    {row: '5', name: 'lewis', userName: 'lewis123', userGroup: 'Group 5', department: 'Finance', tenant: 'Advice Health', privileges: 'Organization Level Admin', view: '', edit: '', remove: '', active: '' },
  ];
  tableColumns: Array<string> = ['row','name', 'userName', 'userGroup', 'department', 'tenant', 'privileges', 'view', 'edit', 'remove', 'active'];
  constructor(public borderService: ConditionalBorderService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openAddUserDialog(modalType: string) {
   let dialog = this.dialog.open(AddUserDialogComponent, { disableClose: true, autoFocus: false });
   dialog.componentInstance.userType = modalType;
  }
}
