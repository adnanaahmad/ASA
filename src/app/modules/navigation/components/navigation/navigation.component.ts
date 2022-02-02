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
  sideNavItems: any = 
  [
    {
      name: 'Alivia Program Integrity Suite',
      icon: 'window',
      route: 'integrity-suite'
    },
    {
      name: 'Organization',
      icon: 'home',
      route: 'organization'
    },
    {
      name: 'Tenants',
      icon: 'business',
      route: 'tenant'
    },
    {
      name: 'Departments',
      icon: 'apartment',
      route: 'department'
    },
    {
      name: 'User Groups',
      icon: 'group',
      route: 'user-group'
    },
    {
      name: 'Users',
      icon: 'person_outline',
      route: 'user'
    },
    {
      name: 'Security Policies',
      icon: 'lock',
      route: 'security-policy'
    },
    {
      name: 'Alivia Services',
      icon: 'view_in_ar',
      route: 'alivia-services'
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
