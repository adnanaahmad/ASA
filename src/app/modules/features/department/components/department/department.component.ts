import { Component, OnInit } from '@angular/core';
import {ConditionalBorderService} from "../../../../../shared/services/core/debugging/conditional-border.service";
import {MatDialog} from "@angular/material/dialog";
import {AddDepartmentDialogComponent} from "../add-department-dialog/add-department-dialog.component";

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  tableData: Array<any> = [
    {row: '1', department: 'Finance', description: 'this is the finance dept', products: 'FWA', tenant: 'Advise Health', organization: 'Claim Secure', view: '', edit: '', remove: '', active: '' },
    {row: '2', department: 'Finance', description: 'this is the finance dept', products: 'FWA', tenant: 'Advise Health', organization: 'Claim Secure', view: '', edit: '', remove: '', active: '' },
    {row: '3', department: 'Finance', description: 'this is the finance dept', products: 'FWA', tenant: 'Advise Health', organization: 'Claim Secure', view: '', edit: '', remove: '', active: '' },
    {row: '4', department: 'Finance', description: 'this is the finance dept', products: 'FWA', tenant: 'Advise Health', organization: 'Claim Secure', view: '', edit: '', remove: '', active: '' },
    {row: '5', department: 'Finance', description: 'this is the finance dept', products: 'FWA', tenant: 'Advise Health', organization: 'Claim Secure', view: '', edit: '', remove: '', active: '' },
    {row: '6', department: 'Finance', description: 'this is the finance dept', products: 'FWA', tenant: 'Advise Health', organization: 'Claim Secure', view: '', edit: '', remove: '', active: '' },
  ];
  tableColumns: Array<string> = ['row', 'department', 'description', 'products', 'tenant', 'organization', 'view', 'edit', 'remove', 'active'];
  constructor(public borderService: ConditionalBorderService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAddDepartmentDialog() {
    this.dialog.open(AddDepartmentDialogComponent, { disableClose: true, autoFocus: false });
  }
}
