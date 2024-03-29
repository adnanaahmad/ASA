import { Component, OnInit } from '@angular/core';
import {ConditionalBorderService} from "../../../../../shared/services/core/debugging/conditional-border.service";

@Component({
  selector: 'app-basic-info-department',
  templateUrl: './basic-info-department.component.html',
  styleUrls: ['./basic-info-department.component.scss']
})
export class BasicInfoDepartmentComponent implements OnInit {

  constructor(public borderService: ConditionalBorderService) { }

  ngOnInit(): void {
  }

}
