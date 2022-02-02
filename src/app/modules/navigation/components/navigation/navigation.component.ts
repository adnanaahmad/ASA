import { Component, OnInit } from '@angular/core';
import {HelperService} from "../../../../shared/services/common/helper/helper.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  events: string[] = [];
  opened: boolean = false;

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
  sideNavItems: any = 
  [
    {
      name: 'Alivia Program Integrity Suite',
      icon: 'window'
    },
    {
      name: 'Organization',
      icon: 'home'
    },
    {
      name: 'Tenants',
      icon: 'business'
    },
    {
      name: 'Departments',
      icon: 'apartment'
    },
    {
      name: 'User Groups',
      icon: 'group'
    },
    {
      name: 'Users',
      icon: 'person_outline'
    },
    {
      name: 'Security Policies',
      icon: 'lock'
    },
    {
      name: 'Alivia Services',
      icon: 'view_in_ar'
    }
  ];
  constructor(
    private helperService: HelperService
  ) { }

  ngOnInit(): void {
  }

  clearStorage() {
    this.helperService.clearLocalStorage();
  }
}
