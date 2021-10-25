import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Md5} from "md5-typescript";
import {AuthService} from "src/app/modules/auth/services/auth.service";
import {HelperService} from "src/app/services/common/helper/helper.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
    public helperService: HelperService
  ) {
  }
  ngOnInit(): void {
  }

  login() {
    let urlSearchParams = new URLSearchParams();
  }

}
