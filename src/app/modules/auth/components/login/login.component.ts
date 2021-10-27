import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Md5} from "md5-typescript";
import {AuthService} from "src/app/modules/auth/services/auth.service";
import {HelperService} from "src/app/shared/services/common/helper/helper.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginFormData} from "src/app/shared/models/auth.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  wrongCredentials: boolean = false;

  constructor(
    public helperService: HelperService,
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) {
  }

  /**
   * In this lifecycle hook, we have initialized loginForm with the required fields.
   */
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      authtype: [this.helperService.constants.loginTypes[0].value, Validators.required]
    })
  }

  /**
   * This function is used to return the form control of the loginForm and this will contain
   * all the information about the form fields whether required field is entered or not and if not
   * then we can check using this function and can add our custom implementation accordingly.
   */
  get loginFormValidations() {
    return this.loginForm.controls;
  }

  /**
   * This function will receive the values that will have the LoginFormData Type and
   * valid boolean value that tells that whether all the required fields have been entered
   * or not. This will convert the credentials attributed into urlSearchParams and will
   * pass this data to authService's loginUser function and that function returns LoginResponse
   * type data. That will used throughout the project to make authenticated API calls.
   * @param value
   * @param valid
   */
  login({value, valid}: { value: LoginFormData; valid: boolean; }) {
    if (!valid) {
      return;
    } else {
      let urlSearchParams = new URLSearchParams();
      urlSearchParams.set('username', value.username);
      urlSearchParams.set('password', Md5.init(value.password));
      urlSearchParams.set('authtype', value.authtype);
      urlSearchParams.set('hidden_password', btoa(value.password));
      this.authService.loginUser(urlSearchParams.toString()).subscribe((res) => {
        if (res && res.access_token) {
          this.helperService.addLocalStorageItem(this.helperService.constants.localStorageKeys.tokens, JSON.stringify(res));
        }
      }, (error) => {
        if (error && error.status === 401 || error.status === 400) {
          this.wrongCredentials = true;
        }
      })
    }
  }

}
