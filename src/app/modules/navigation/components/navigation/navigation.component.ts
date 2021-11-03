import { Component, OnInit } from '@angular/core';
import {HelperService} from "../../../../shared/services/common/helper/helper.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(
    private helperService: HelperService
  ) { }

  ngOnInit(): void {
  }

  clearStorage() {
    this.helperService.clearLocalStorage();
  }
}
