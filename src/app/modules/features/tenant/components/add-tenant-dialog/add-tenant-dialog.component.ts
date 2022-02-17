import { Component, OnInit } from '@angular/core';
import {ConditionalBorderService} from "../../../../../shared/services/core/debugging/conditional-border.service";

@Component({
  selector: 'app-add-tenant-dialog',
  templateUrl: './add-tenant-dialog.component.html',
  styleUrls: ['./add-tenant-dialog.component.scss']
})
export class AddTenantDialogComponent implements OnInit {
  tabIndex: number = 0;
  constructor(public borderService: ConditionalBorderService) { }

  ngOnInit(): void {
  }

  nextButton() {
    if (this.tabIndex === 2) return;
    this.tabIndex++;
  }
  backButton() {
    if (this.tabIndex === 0) return;
    this.tabIndex--;
  }
}
