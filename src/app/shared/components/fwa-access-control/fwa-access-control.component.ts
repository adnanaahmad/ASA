import { Component, OnInit } from '@angular/core';
import {ConditionalBorderService} from "../../services/core/debugging/conditional-border.service";

@Component({
  selector: 'app-fwa-access-control',
  templateUrl: './fwa-access-control.component.html',
  styleUrls: ['./fwa-access-control.component.scss']
})
export class FwaAccessControlComponent implements OnInit {
  ELEMENT_DATA: Array<any> = [
    {module: 'All Rights', all: '', create: '', read: '', edit: '', remove: ''},
    {module: 'Get Started', all: '', create: '', read: '', edit: '', remove: ''},
    {module: 'Data Repository', all: '', create: '', read: '', edit: '', remove: ''},
    {module: 'Manage Connection', all: '', create: '', read: '', edit: '', remove: ''},
    {module: 'Manage Data Model', all: '', create: '', read: '', edit: '', remove: ''},
    {module: 'Manage Data Sources', all: '', create: '', read: '', edit: '', remove: ''},
    {module: 'Data Cleansing', all: '', create: '', read: '', edit: '', remove: ''},
    {module: 'Query Builder', all: '', create: '', read: '', edit: '', remove: ''},
    {module: 'Rule Library', all: '', create: '', read: '', edit: '', remove: ''},
    {module: 'Uploaded Files', all: '', create: '', read: '', edit: '', remove: ''},
    {module: 'Analysis', all: '', create: '', read: '', edit: '', remove: ''},
    {module: 'Ranking', all: '', create: '', read: '', edit: '', remove: ''},
    {module: 'Modeling', all: '', create: '', read: '', edit: '', remove: ''},
    {module: 'Script Developer', all: '', create: '', read: '', edit: '', remove: ''},
    {module: 'Charting', all: '', create: '', read: '', edit: '', remove: ''},
    {module: 'Analysis Library', all: '', create: '', read: '', edit: '', remove: ''},
    {module: 'Dashboard', all: '', create: '', read: '', edit: '', remove: ''},
    {module: 'Dashboard ', all: '', create: '', read: '', edit: '', remove: ''},
    {module: 'Application Audit', all: '', create: '', read: '', edit: '', remove: ''},
    {module: 'Audit Logs', all: '', create: '', read: '', edit: '', remove: ''},
    {module: 'Task Scheduling', all: '', create: '', read: '', edit: '', remove: ''},
    {module: 'Scheduler', all: '', create: '', read: '', edit: '', remove: ''},
    {module: 'Workflow', all: '', create: '', read: '', edit: '', remove: ''},
    {module: 'Workflow ', all: '', create: '', read: '', edit: '', remove: ''},
];
  displayedColumns: string[] = ['module', 'all', 'create', 'read', 'edit', 'remove'];
  dataSource = this.ELEMENT_DATA;
  constructor(public borderService: ConditionalBorderService,) { }

  ngOnInit(): void {
  }
}
