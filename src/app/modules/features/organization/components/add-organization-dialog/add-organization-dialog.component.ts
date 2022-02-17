import { Component, OnInit } from '@angular/core';
import {ConditionalBorderService} from "../../../../../shared/services/core/debugging/conditional-border.service";

@Component({
  selector: 'app-add-organization-dialog',
  templateUrl: './add-organization-dialog.component.html',
  styleUrls: ['./add-organization-dialog.component.scss']
})
export class AddOrganizationDialogComponent implements OnInit {
  tabIndex: number = 0;
  constructor(public borderService: ConditionalBorderService) { }

  ngOnInit(): void {
  }
  nextButton() {
    if (this.tabIndex === 3) return;
    this.tabIndex++;
  }
  backButton() {
    if (this.tabIndex === 0) return;
    this.tabIndex--;
  }
}
