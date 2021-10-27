import {Injectable} from '@angular/core';
import {LoginResponse} from "src/app/shared/models/auth.model";
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
    return <Observable<LoginResponse>> this.helperService.requestCall(this.method.post, this.apiRoutes.login,
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
}
