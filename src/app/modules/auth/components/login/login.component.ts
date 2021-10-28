import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Md5} from "md5-typescript";
import {AuthService} from "src/app/modules/auth/services/auth.service";
import {HelperService} from "src/app/shared/services/common/helper/helper.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FWAUserInfo, LoginFormData, UserGroup} from "src/app/shared/models/auth.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  wrongCredentials: boolean = false;
  loginForm!: FormGroup;
  username!: string;
  userEncryptedInfo!: string;

  constructor(
    public helperService: HelperService,
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) {
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
          this.getPrincipalData();
          this.openAbosulteInsight();
        }
      }, (error) => {
        if (error && error.status === 401 || error.status === 400) {
          this.wrongCredentials = true;
        }
      })
    }
  }

  /**
   * This function is used to open the FWA finder in the new tab.
   */
  openAbosulteInsight() {
    this.authService.getFwaUserInfo()
      .subscribe((data: FWAUserInfo) => {
          if (data) {
            this.userEncryptedInfo = data.token;
            window.open(this.helperService.constants.apiRoutes.aiWebNewWindowURL + this.userEncryptedInfo);
          }
        },
        (error) => {
          this.userEncryptedInfo = error.error.text;
        });
  }

  /**
   * This function is used to get the principal
   */
  getPrincipalData() {
    this.authService.principalData().subscribe((data) => {
      let loggedUser = data.userAuthentication.details.principal.user;
      this.username = data.name;
      this.getLocale();
      this.getConfiguration();
      this.constructUserData(loggedUser);
    }, (error) => {
      console.error(error);
    })
  }

  /**
   * This function is used to construct the user data that we get
   * after hitting principal api call.
   * @param loggedUser
   */
  constructUserData(loggedUser: any) {
    let user: any = {};
    user.roles = [];
    loggedUser.userGroups.forEach(function (value: UserGroup) {
      user.roles.push(value.name);
    });
    user.firstName = loggedUser.firstName;
    user.lastName = loggedUser.lastName;
    user.userId = loggedUser.userId;
    user.userName = this.username;
    user.userEmail = loggedUser.userEmail;
    localStorage.setItem(this.helperService.constants.localStorageKeys.userInfo, JSON.stringify(user));
  }

  /**
   * This function is used to get the access list of the user.
   */
  getUserSecurityInfo() {
    this.authService.userSecurityInfo().subscribe((data) => {
      localStorage.setItem(this.helperService.constants.localStorageKeys.userSecurityInfo, JSON.stringify(data));
    }, (error) => {
      console.error(error);
    })
  }

  /**
   * This function is used to return the cmt configurations and access rights.
   */
  getConfiguration() {
    this.authService.cmtConfigs().subscribe((data) => {
      localStorage.setItem(this.helperService.constants.localStorageKeys.cmt_configurations, JSON.stringify(data.ai_workflow_options));
    }, (error) => {
      console.error(error);
    });
  }

  /**
   * This functions hits the api call that returns all the locale settings and configurations.
   */
  getLocale() {
    this.authService.localeSetting().subscribe((data) => {
      if (data && data.ai_workflow_locale_setting_locale) {
        let localeSettings: any = {};
        localeSettings.decimalPoints = data.ai_workflow_locale_setting_decimal_points;
        localeSettings.currencySign = data.ai_workflow_locale_setting_currency_sign;
        localeSettings.locale = data.ai_workflow_locale_setting_locale;
        localeSettings.dateFormat = data.ai_workflow_locale_setting_date_format;
        localeSettings.caseAlias = data.ai_workflow_locale_setting_case_alias;
        localeSettings.stateProvince = data.ai_workflow_locale_setting_state_label;
        localeSettings.zipPostalCode = data.ai_workflow_locale_setting_zip_code_label;
        localeSettings.fullDateFormat = data.ai_workflow_locale_setting_date_format_full;
        localeSettings.entityTypes = data.ai_workflow_locale_setting_entity_types;
        localeSettings.cmtPageSize = data.ai_workflow_application_page_zize;
        localeSettings.subscriberIdColumnValue = data.ai_workflow_locale_setting_subscriber_id_column;
        this.helperService.constants.AppProperties.localSettings = localeSettings;
        localStorage.setItem(this.helperService.constants.localStorageKeys.localeSettings, JSON.stringify(localeSettings))
      }
      this.getUserSecurityInfo();
    }, (error) => {
      console.error(error);
    })
  }
}
