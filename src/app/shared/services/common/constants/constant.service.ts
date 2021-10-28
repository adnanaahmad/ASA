import { Injectable } from '@angular/core';
import {LoginTypes} from "src/app/shared/models/auth.model";
import {environment} from "src/environments/environment";
import * as fas from "@fortawesome/free-solid-svg-icons";


@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  constructor() { }

  /**
   * all the apiRoutes are declared here.
   */

  static apiRoutes = {
    getToken: `${environment.ai_web_server}/oauth/token?grant_type=password`,
    refreshToken: `${environment.ai_web_server}/oauth/token?grant_type=refresh_token`,
    principalDataURL: `${environment.ai_cmt_server}/case/principal`,
    userSecurityInfoURL: `${environment.ai_cmt_server}/case/getusersecurityinfo`,
    cmtConfigurationsURL: `${environment.ai_cmt_server}/case/getCaseList?instanceID=alivia&moduleName=cmt_configuration`,
    localeSettingsURL: `${environment.ai_cmt_server}/case/getCaseList?instanceID=alivia&moduleName=locale_setting`,
    userInfoURL: `${environment.ai_web_server}/rest/userInfo`,
    aiWebNewWindowURL: `${environment.ai_web_server}/Login.jsp?embedMode=newWindow&session='`
  };

  /**
   * all the api methods are declared here.
   */
  static apiMethod = {
    get: 'get',
    post: 'post',
    put: 'put',
    delete: 'delete'
  };

  /**
   * all the storage keys are declared here.
   */
  static localStorageKeys = {
    tokens: 'tokens',
    userSecurityInfo: 'userSecurityInfo',
    userInfo: 'userInfo',
    localeSettings: 'localeSettings',
    cmt_configurations: 'cmt_configurations',
    defaultActivitiesExist: 'defaultActivitiesExist',
  };

  /**
   * Contain all the string enumerations related to the files
   */
  static fileEnums = {
  mediaPath: 'assets/media/',
  aliviaLogoImg: 'logo.alivia.png'
  };

  /**
   * This contains all the icons used in the project.
   */
  static appIcons = {
    faUser: fas.faUser,
    faLock: fas.faLock
  };

  /**
   * This contains the login types with its type and value that we have to send to the
   * backend.
   */
  static loginTypes: Array<LoginTypes> = [
    {
      loginType: 'Local',
      value: 'Local'
    },
    {
      loginType: 'Active Directory',
      value: 'AD'
    }
  ]

  /**
   *  This contains the App Properties.
   */
  static AppProperties = {
    notificationPollingTime: 5*60*1000,
    localSettings: JSON.parse(<string>localStorage.getItem('localeSettings'))
  }
}
