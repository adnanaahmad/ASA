import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

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
  constructor() { }
  ngOnInit(): void {
  }
}
