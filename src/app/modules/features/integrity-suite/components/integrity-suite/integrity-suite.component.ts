import { Component, OnInit } from '@angular/core';
import {ConditionalBorderService} from "../../../../../shared/services/core/debugging/conditional-border.service";

@Component({
  selector: 'app-integrity-suite',
  templateUrl: './integrity-suite.component.html',
  styleUrls: ['./integrity-suite.component.scss']
})
export class IntegritySuiteComponent implements OnInit {

  constructor(public borderService: ConditionalBorderService) { }

  ngOnInit(): void {
  }
}
