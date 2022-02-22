import {Component, OnInit} from '@angular/core';
import {ThemeService} from "../../../../shared/services/core/theme/theme.service";
import {ConditionalBorderService} from "../../../../shared/services/core/debugging/conditional-border.service";
import {NavigationService} from "../../services/navigation.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  isDark: boolean = false;
  isOpen:boolean = false;
  constructor(private styleManager: ThemeService,
              public borderService: ConditionalBorderService,
              private navigationService: NavigationService) { }

  ngOnInit(): void {
  }
  toggleDarkTheme(event: any) {
    event.stopPropagation();
    this.styleManager.toggleDarkTheme();
    this.isDark = !this.isDark;
  }
  toggleBorder(event: any) {
    event.stopPropagation();
    this.borderService.toggleBorder();
  }
  toggleSideNav(){
    this.isOpen = !this.isOpen;
    this.navigationService.toggleSideNav(this.isOpen);
  }
}
