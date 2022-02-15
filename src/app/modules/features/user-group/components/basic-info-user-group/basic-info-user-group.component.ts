import { Component, OnInit } from '@angular/core';
import {ConditionalBorderService} from "../../../../../shared/services/core/debugging/conditional-border.service";

@Component({
  selector: 'app-basic-info-user-group',
  templateUrl: './basic-info-user-group.component.html',
  styleUrls: ['./basic-info-user-group.component.scss']
})
export class BasicInfoUserGroupComponent implements OnInit {

  constructor(public borderService: ConditionalBorderService) { }

  ngOnInit(): void {
  }

}
