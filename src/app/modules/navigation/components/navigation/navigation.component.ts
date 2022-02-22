import {
  ChangeDetectorRef,
  OnDestroy,
  Component,
  OnInit,
} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ThemeService} from "../../../../shared/services/core/theme/theme.service";
import {ConditionalBorderService} from "../../../../shared/services/core/debugging/conditional-border.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnDestroy, OnInit {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher,
              private styleManager: ThemeService,
              public borderService: ConditionalBorderService) {
    this.mobileQuery = media.matchMedia('(max-width: 1024px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.styleManager.resetTheme();

  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
