import {Component, Input, OnInit} from '@angular/core';
import {ConditionalBorderService} from "../../services/core/debugging/conditional-border.service";

@Component({
  selector: 'app-organization-user',
  templateUrl: './organization-user.component.html',
  styleUrls: ['./organization-user.component.scss']
})
export class OrganizationUserComponent implements OnInit {
  @Input() title : string = '';
  @Input() class : string = '';
  @Input() style : {} = {};
  constructor(public borderService: ConditionalBorderService) { }

  ngOnInit(): void {
  }

}
