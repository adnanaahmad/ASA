import { Component, OnInit } from '@angular/core';
import {ConditionalBorderService} from "../../services/core/debugging/conditional-border.service";

@Component({
  selector: 'app-hierarchy',
  templateUrl: './hierarchy.component.html',
  styleUrls: ['./hierarchy.component.scss']
})
export class HierarchyComponent implements OnInit {
  hierarchy = ['Tenants', 'Departments', 'User Groups', 'User'];
  constructor(public borderService: ConditionalBorderService) { }

  ngOnInit(): void {
  }

}
