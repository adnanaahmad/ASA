import {Component, Input, OnInit} from '@angular/core';
import {ConditionalBorderService} from "../../../../../shared/services/core/debugging/conditional-border.service";

@Component({
  selector: 'app-basic-info-organization',
  templateUrl: './basic-info-organization.component.html',
  styleUrls: ['./basic-info-organization.component.scss']
})
export class BasicInfoOrganizationComponent implements OnInit {
  @Input() title : string = '';
  constructor(public borderService: ConditionalBorderService) { }

  ngOnInit(): void {
  }
}
