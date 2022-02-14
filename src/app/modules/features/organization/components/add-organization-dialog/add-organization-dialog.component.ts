import { Component, OnInit } from '@angular/core';
import {ConditionalBorderService} from "../../../../../shared/services/core/debugging/conditional-border.service";

@Component({
  selector: 'app-add-organization-dialog',
  templateUrl: './add-organization-dialog.component.html',
  styleUrls: ['./add-organization-dialog.component.scss']
})
export class AddOrganizationDialogComponent implements OnInit {

  constructor(public borderService: ConditionalBorderService) { }

  ngOnInit(): void {
  }

}
