import {Component, OnInit} from '@angular/core';
import {ConstantService} from "../../../../shared/services/common/constants/constant.service";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  sideNavItems!: Array<any>;
  constructor(private constant: ConstantService) { }
  ngOnInit(): void {
    this.sideNavItems = this.constant.sideNavigationList;
  }
}
