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

  constructor(public borderService: ConditionalBorderService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openAddTenantDialog() {
    this.dialog.open(AddTenantDialogComponent, { disableClose: true });
  }
}
