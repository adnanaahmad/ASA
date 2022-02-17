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

  constructor(public borderService: ConditionalBorderService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAddDepartmentDialog() {
    this.dialog.open(AddDepartmentDialogComponent, { disableClose: true });
  }
}
