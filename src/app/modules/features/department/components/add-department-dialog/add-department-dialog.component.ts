import { Component, OnInit } from '@angular/core';
import {ConditionalBorderService} from "../../../../../shared/services/core/debugging/conditional-border.service";

@Component({
  selector: 'app-add-department-dialog',
  templateUrl: './add-department-dialog.component.html',
  styleUrls: ['./add-department-dialog.component.scss']
})
export class AddDepartmentDialogComponent implements OnInit {
  tabIndex: number = 0;
  constructor(public borderService: ConditionalBorderService) { }

  ngOnInit(): void {
  }

  nextButton() {
    if (this.tabIndex === 1) return;
    this.tabIndex++;
  }
  backButton() {
    if (this.tabIndex === 0) return;
    this.tabIndex--;
  }
}
