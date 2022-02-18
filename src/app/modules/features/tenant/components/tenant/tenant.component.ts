import { Component, OnInit } from '@angular/core';
import {ConditionalBorderService} from "../../../../../shared/services/core/debugging/conditional-border.service";
import {MatDialog} from "@angular/material/dialog";
import {AddTenantDialogComponent} from "../add-tenant-dialog/add-tenant-dialog.component";

@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.scss']
})
export class TenantComponent implements OnInit {
  tableData: Array<any> = [
    {row: '1', tenant: 'Advise Health', tenantId: '23456' , organization: 'Claim Secure', registrationId: '2468', products: 'FWA', users: '50', adminUser: 'George', adminEmail: 'george@hotmail.com', view: '', edit: '', remove: '', active: '' },
    {row: '2', tenant: 'Advise Health', tenantId: '23456' , organization: 'Claim Secure', registrationId: '2468', products: 'FWA', users: '50', adminUser: 'George', adminEmail: 'george@hotmail.com', view: '', edit: '', remove: '', active: '' },
    {row: '3', tenant: 'Advise Health', tenantId: '23456' , organization: 'Claim Secure', registrationId: '2468', products: 'FWA', users: '50', adminUser: 'George', adminEmail: 'george@hotmail.com', view: '', edit: '', remove: '', active: '' },
    {row: '4', tenant: 'Advise Health', tenantId: '23456' , organization: 'Claim Secure', registrationId: '2468', products: 'FWA', users: '50', adminUser: 'George', adminEmail: 'george@hotmail.com', view: '', edit: '', remove: '', active: '' },
    {row: '5', tenant: 'Advise Health', tenantId: '23456' , organization: 'Claim Secure', registrationId: '2468', products: 'FWA', users: '50', adminUser: 'George', adminEmail: 'george@hotmail.com', view: '', edit: '', remove: '', active: '' },
    {row: '6', tenant: 'Advise Health', tenantId: '23456' , organization: 'Claim Secure', registrationId: '2468', products: 'FWA', users: '50', adminUser: 'George', adminEmail: 'george@hotmail.com', view: '', edit: '', remove: '', active: '' },
    {row: '7', tenant: 'Advise Health', tenantId: '23456' , organization: 'Claim Secure', registrationId: '2468', products: 'FWA', users: '50', adminUser: 'George', adminEmail: 'george@hotmail.com', view: '', edit: '', remove: '', active: '' },

  ];
  tableColumns: Array<string> = ['row', 'tenant', 'tenantId', 'organization', 'registrationId', 'products', 'users', 'adminUser', 'adminEmail', 'view', 'edit', 'remove', 'active'];
  constructor(public borderService: ConditionalBorderService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openAddTenantDialog() {
    this.dialog.open(AddTenantDialogComponent, { disableClose: true });
  }
}
