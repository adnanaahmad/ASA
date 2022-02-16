import {Component, Input, OnInit} from '@angular/core';
import {ConditionalBorderService} from "../../../../../shared/services/core/debugging/conditional-border.service";

@Component({
  selector: 'app-basic-info-tenant',
  templateUrl: './basic-info-tenant.component.html',
  styleUrls: ['./basic-info-tenant.component.scss']
})
export class BasicInfoTenantComponent implements OnInit {
  @Input() title : string = '';
  constructor(public borderService: ConditionalBorderService) { }

  ngOnInit(): void {
  }
}
