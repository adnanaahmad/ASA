import {Component, Input, OnInit} from '@angular/core';
import {ConditionalBorderService} from "../../services/core/debugging/conditional-border.service";

@Component({
  selector: 'app-tenant-user',
  templateUrl: './tenant-user.component.html',
  styleUrls: ['./tenant-user.component.scss']
})
export class TenantUserComponent implements OnInit {
  @Input() title : string = '';
  constructor(public borderService: ConditionalBorderService) { }

  ngOnInit(): void {
  }

}
