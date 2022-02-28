import {
  ChangeDetectorRef,
  OnDestroy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ThemeService} from "../../../../shared/services/core/theme/theme.service";
import {ConditionalBorderService} from "../../../../shared/services/core/debugging/conditional-border.service";
import {MatSidenav} from "@angular/material/sidenav";
import {NavigationService} from "../../services/navigation.service";
import {Subscription} from "rxjs";
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnDestroy, OnInit {
  @ViewChild('snav') sideNavComponent!: MatSidenav
  events: string[] = [];
  mobileQuery: MediaQueryList;
  subscription!: Subscription;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher,
              private styleManager: ThemeService,
              public borderService: ConditionalBorderService,
              private navigationService: NavigationService) {
    this.mobileQuery = media.matchMedia('(max-width: 1024px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.styleManager.resetTheme();
    this.subscription = this.navigationService.sideNavToggleObservable.subscribe((res) => {
      if (res !== -1 && this.sideNavComponent) {
        this.sideNavComponent.toggle().then();
      }
    });
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.subscription.unsubscribe();
  }
}
