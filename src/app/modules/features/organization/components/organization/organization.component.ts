import { Component, OnInit } from '@angular/core';
import {ConditionalBorderService} from "../../../../../shared/services/core/debugging/conditional-border.service";
import {MatDialog} from '@angular/material/dialog';
import {AddOrganizationDialogComponent} from "../add-organization-dialog/add-organization-dialog.component";

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {
  hide: boolean = true;
  tableData: Array<any> = [
    {row: '1', organization: 'Claim Secure', organizationEmail: 'cs@gmail.com', registrationId: '2468', products: 'FWA', tenants: '2', users: '50', adminUser: 'George', adminEmail: 'george@hotmail.com', view: '', edit: '', remove: '', active: '' },
    {row: '2', organization: 'Claim Secure', organizationEmail: 'cs@gmail.com', registrationId: '2468', products: 'FWA', tenants: '2', users: '50', adminUser: 'George', adminEmail: 'george@hotmail.com', view: '', edit: '', remove: '', active: '' },
    {row: '3', organization: 'Claim Secure', organizationEmail: 'cs@gmail.com', registrationId: '2468', products: 'FWA', tenants: '2', users: '50', adminUser: 'George', adminEmail: 'george@hotmail.com', view: '', edit: '', remove: '', active: '' },
    {row: '4', organization: 'Claim Secure', organizationEmail: 'cs@gmail.com', registrationId: '2468', products: 'FWA', tenants: '2', users: '50', adminUser: 'George', adminEmail: 'george@hotmail.com', view: '', edit: '', remove: '', active: '' },
    {row: '5', organization: 'Claim Secure', organizationEmail: 'cs@gmail.com', registrationId: '2468', products: 'FWA', tenants: '2', users: '50', adminUser: 'George', adminEmail: 'george@hotmail.com', view: '', edit: '', remove: '', active: '' },
    {row: '6', organization: 'Claim Secure', organizationEmail: 'cs@gmail.com', registrationId: '2468', products: 'FWA', tenants: '2', users: '50', adminUser: 'George', adminEmail: 'george@hotmail.com', view: '', edit: '', remove: '', active: '' },
    {row: '7', organization: 'Claim Secure', organizationEmail: 'cs@gmail.com', registrationId: '2468', products: 'FWA', tenants: '2', users: '50', adminUser: 'George', adminEmail: 'george@hotmail.com', view: '', edit: '', remove: '', active: '' },
  ];
  tableColumns: Array<string> = ['row', 'organization', 'organizationEmail', 'registrationId', 'products', 'tenants', 'users', 'adminUser', 'adminEmail', 'view', 'edit', 'remove', 'active'];
  constructor(public borderService: ConditionalBorderService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAddOrganizationDialog() {
    this.dialog.open(AddOrganizationDialogComponent, { disableClose: true, autoFocus: false });
  }
}
