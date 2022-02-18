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
  tableData: Array<any> = [
    {row: '1', userGroup: 'Group 5', description: 'this is the finance dept', products: 'FWA', department: 'Finance', dataMasking: 'Enabled', defaultLandingPage: 'Ranking', view: '', edit: '', remove: '', active: '' },
    {row: '2', userGroup: 'Group 5', description: 'this is the finance dept', products: 'FWA', department: 'Finance', dataMasking: 'Enabled', defaultLandingPage: 'Ranking', view: '', edit: '', remove: '', active: '' },
    {row: '3', userGroup: 'Group 5', description: 'this is the finance dept', products: 'FWA', department: 'Finance', dataMasking: 'Enabled', defaultLandingPage: 'Ranking', view: '', edit: '', remove: '', active: '' },
    {row: '4', userGroup: 'Group 5', description: 'this is the finance dept', products: 'FWA', department: 'Finance', dataMasking: 'Enabled', defaultLandingPage: 'Ranking', view: '', edit: '', remove: '', active: '' },
    {row: '5', userGroup: 'Group 5', description: 'this is the finance dept', products: 'FWA', department: 'Finance', dataMasking: 'Enabled', defaultLandingPage: 'Ranking', view: '', edit: '', remove: '', active: '' },
    {row: '6', userGroup: 'Group 5', description: 'this is the finance dept', products: 'FWA', department: 'Finance', dataMasking: 'Enabled', defaultLandingPage: 'Ranking', view: '', edit: '', remove: '', active: '' },
  ];
  tableColumns: Array<string> = ['row', 'userGroup', 'description', 'products', 'department', 'dataMasking', 'defaultLandingPage', 'view', 'edit', 'remove', 'active'];
  constructor(public borderService: ConditionalBorderService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openAddUserGroupDialog() {
    this.dialog.open(AddUserGroupDialogComponent, { disableClose: true });
  }
}
