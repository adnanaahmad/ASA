import { ChangeDetectorRef, OnDestroy, Component } from '@angular/core';
import {HelperService} from "../../../../shared/services/common/helper/helper.service";
import {
  BreakpointObserver,
  BreakpointState
} from '@angular/cdk/layout';
import {MediaMatcher} from '@angular/cdk/layout';
import {} from '@angular/core';
import {ThemeService} from "../../../../shared/services/core/theme/theme.service";
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnDestroy {
  events: string[] = [];
  isDark = false;
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
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private styleManager: ThemeService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.isDark = this.styleManager.isDark;
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  toggleDarkTheme(event: any) {
    event.stopPropagation();
    this.styleManager.toggleDarkTheme();
    this.isDark = !this.isDark;
  }
}
