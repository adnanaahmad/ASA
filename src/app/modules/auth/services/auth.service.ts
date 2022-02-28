import {Injectable} from '@angular/core';
import {
  CMTConfig,
  FWAUserInfo,
  LocaleSetting,
  LoginResponse,
  PrincipalData,
  SecurityInfo
} from "src/app/shared/models/auth.model";
import {HttpHeaders} from "@angular/common/http";
import {HelperService} from "src/app/shared/services/common/helper/helper.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  method!: { post: string; get: string; delete: string; put: string };
  apiRoutes!: any;
  authTokenHeader = new HttpHeaders({
    'Authorization': 'Basic YWktd2ViOnNlY3JldA==',
    'Content-Type': 'application/x-www-form-urlencoded'
  });
  constructor(
    private helperService: HelperService
  ) {
    this.apiRoutes = this.helperService.constants.apiRoutes;
    this.method = this.helperService.constants.apiMethod;
  }

  /**
   * This function will hit the token getting api and returns response in the
   * LoginResponse data type.
   * @param data
   */
  loginUser(data: string): Observable<LoginResponse> {
    return <Observable<LoginResponse>> this.helperService.requestCall(this.method.post, this.apiRoutes.getToken,
      data, this.authTokenHeader);
  }

  /**
   * This function is used to return refresh token and to refresh token we will have to use the
   * refresh_token that we get in the response of loginUser api call.
   * @param token
   */
  refreshToken(token:string): Observable<LoginResponse> {
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.set('refresh_token', token);
    return <Observable<LoginResponse>> this.helperService.requestCall(this.method.post, this.apiRoutes.refreshToken,
      urlSearchParams.toString(), this.authTokenHeader);
  }

  /**
   * This function is used to return principal data by hitting principal data url.
   */
  principalData(): Observable<PrincipalData> {
    return <Observable<PrincipalData>> this.helperService.requestCall(this.method.get, this.apiRoutes.principalDataURL);
  }

  /**
   * This function is used to get the security information of the user that which modules he can access.
   */
  userSecurityInfo(): Observable<SecurityInfo> {
    return <Observable<SecurityInfo>> this.helperService.requestCall(this.method.get, this.apiRoutes.userSecurityInfoURL);
  }

  /**
   * This function is used to get cmt configurations.
   */
  cmtConfigs(): Observable<CMTConfig> {
    return <Observable<CMTConfig>> this.helperService.requestCall(this.method.get, this.apiRoutes.cmtConfigurationsURL);
  }

  /**
   * This function is used to return locale settings.
   */
  localeSetting(): Observable<LocaleSetting>{
    return <Observable<LocaleSetting>> this.helperService.requestCall(this.method.get, this.apiRoutes.localeSettingsURL);
  }

  /**
   * This function is used to get user info
   */
  getFwaUserInfo(): Observable<FWAUserInfo> {
    return <Observable<FWAUserInfo>> this.helperService.requestCall(this.method.get, this.apiRoutes.userInfoURL);
  }
}
