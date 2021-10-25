import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Md5} from "md5-typescript";
import {AuthService} from "src/app/modules/auth/services/auth.service";
import {FileEnums, UIStrings} from "src/app/utils/consts";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailInput: any;
  passwordInput: any;
  loginType: any = 'Local';
  wrong_credentials: boolean = false;
  twoFactorAuth: boolean = true;
  username: any;

  //Login organization logo, by default it would be alivia logo
  logoSrc: string = FileEnums.MediaPath + FileEnums.AliviaLogoImg;
  //Alternate text for login logo, by default it would be alivia logo
  logoAltText: string = UIStrings.Alivia;
  //Login page branding class that would changes according the organization
  logoBrandingClass: string  = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }
  ngOnInit(): void {
  }

  login() {
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.set('username', this.emailInput);
    urlSearchParams.set('password', Md5.init(this.passwordInput));
    urlSearchParams.set('authtype', this.loginType);
    urlSearchParams.set('hidden_password', btoa(this.passwordInput));
  }

}
