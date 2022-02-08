import { Component, OnInit } from '@angular/core';
import {ConditionalBorderService} from "../../../../../shared/services/core/debugging/conditional-border.service";

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  constructor(public borderService: ConditionalBorderService) { }

  ngOnInit(): void {
  }

}
