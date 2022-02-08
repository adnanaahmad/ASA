import { Component, OnInit } from '@angular/core';
import {ConditionalBorderService} from "../../../../../shared/services/core/debugging/conditional-border.service";

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.scss']
})
export class PoliciesComponent implements OnInit {

  constructor(public borderService: ConditionalBorderService) { }

  ngOnInit(): void {
  }

}
