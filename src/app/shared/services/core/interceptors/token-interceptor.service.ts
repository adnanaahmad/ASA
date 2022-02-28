import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {HelperService} from "src/app/shared/services/common/helper/helper.service";

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  constructor(
    private helperService: HelperService
  ) {
  }

  /**
   * this function is used when any of the authenticated api is called because through this
   * fucntion we attach the token with api call in the headers
   * @params req
   * @params next
   */

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (req && !req.url.includes('grant_type')) {
      let tokens: any = (this.helperService.getCookie(this.helperService.constants.localStorageKeys.tokens));
      tokens = tokens ? JSON.parse(tokens) : null;
      if (tokens) {
        req = req.clone({
          setHeaders: {
            'Authorization': `Bearer ${tokens.access_token}`,
          }
        });
      }
    }
    return next.handle(req);
  }
}
