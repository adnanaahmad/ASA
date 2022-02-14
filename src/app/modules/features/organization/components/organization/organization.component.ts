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
  constructor(public borderService: ConditionalBorderService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAddOrganizationDialog() {
    this.dialog.open(AddOrganizationDialogComponent);
  }
}
