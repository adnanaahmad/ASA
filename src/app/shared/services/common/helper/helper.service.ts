import {Injectable} from '@angular/core';
import {Translation} from "src/app/shared/models/translate.model";
import {TranslateService} from "@ngx-translate/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {ConstantService} from "../constants/constant.service";
import {throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  translated!: Translation;
  constants: typeof ConstantService;

  constructor(
    public translate: TranslateService,
    private http: HttpClient,
  ) {
    /**
     * Following get function of Translation Service retrieves all the strings from the language.json file
     * according to the language.
     */
    this.translate.get(['STRINGS', 'BUTTONS', 'STATUS']).subscribe((values) => {
      this.translated = values;
    });

    /**
     * Following this.constants contains all the elements stated in the constant service.
     */
    this.constants = ConstantService;
  }

  /**
   * this function returns the appIcons from constantService.
   */
  get appIcons() {
    return this.constants.appIcons;
  }

  /**
   * This generic function will be used to set any value in the local storage of the application.
   * @param key
   * @param value
   */
  addLocalStorageItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  /**
   * This generic function is used to remove any item from local storage using its key.
   * @param key
   */
  removeLocalStorageItem(key: string) {
    localStorage.removeItem(key);
  }

  /**
   * This generic function is used to get any thing using its key.
   * @param key
   */
  getLocalStorageItem(key: string) {
    return localStorage.getItem(key);
  }

  /**
   * This generic function is ued to clear all the local storage.
   */
  clearLocalStorage() {
    localStorage.clear();
  }

  /**
   * This generic function is used to get values from the cookies using its name/key.
   * @param name
   */
  getCookie(name: string) {
    let ca: Array<string> = document.cookie.split(';');
    let caLen: number = ca.length;
    let cookieName = `${name}=`;
    let c: string;
    for (let i: number = 0; i < caLen; i += 1) {
      c = ca[i].replace(/^\s+/g, '');
      if (c.indexOf(cookieName) == 0) {
        return c.substring(cookieName.length, c.length);
      }
    }
    return '';
  }

  /**
   * This generic function is used to delete specific cookies using its name/key.
   * @param name
   */
  deleteCookie(name: string) {
    this.setCookie(name, '', -1);
  }

  /**
   * This generic function is used to set anything in the cookie that will remain in the cookie storage until the
   * expiry days limit doesn't meet. These cookie value will be accessed in all the apps that are containing path as
   * stated below.
   * @param name
   * @param value
   * @param expireDays
   * @param path
   */
  setCookie(name: string, value: string, expireDays: number, path: string = '') {
    let d: Date = new Date();
    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    let expires: string = `expires=${d.toUTCString()}`;
    let cpath: string = path ? `; path=${path}` : '';
    document.cookie = `${name}=${value}; ${expires}${cpath}`;
  }

  /**
   * This generic function is used to clear all the cookie storage.
   */
  clearCookieStorage() {
    document.cookie.split(';').forEach(function (c) {
      document.cookie = c.trim().split('=')[0] + '=;' + 'expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    });
  }

  /**
   * This generic function is used for making api calls and when we have to call any api
   * we give the api method, api router and if we have to send data we insert that also and call the api.
   * @params method
   * @params api
   * @params data
   */

  requestCall(method: string, api: string, data?: any, headers?: HttpHeaders) {
    let response;
    switch (method) {
      case this.constants.apiMethod.post:
        response = this.http.post(api, data, {headers: headers}).pipe(catchError(err => this.handleError(err, this)));
        break;
      case this.constants.apiMethod.get:
        response = this.http.get(api, {headers: headers}).pipe(catchError(err => this.handleError(err, this)));
        break;
      case this.constants.apiMethod.put:
        response = this.http.put(api, data, {headers: headers}).pipe(catchError(err => this.handleError(err, this)));
        break;
      case this.constants.apiMethod.delete:
        response = this.http.delete(api, {headers: headers}).pipe(catchError(err => this.handleError(err, this)));
        break;
      default:
        break;
    }
    return response;
  }

  /**
   * This generic function is used to handle the error that we get when we call any api.
   * @params error
   */
  handleError(error: HttpErrorResponse, self = this) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      // console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      // console.error(
      //   `Backend returned code ${error.status}, ` +
      //   `body was: ${error.message}`);
    }
    // return an observable with a user-facing error message
    return throwError({error: error.message, status: error.status});
  };

  /**
   * This function returns the data in the encrypted format with the given key.
   * @param data
   * @param key
   */
  encrypt(data: string): string {
    return CryptoJS.AES.encrypt(data, this.constants.AppProperties.encryptionKey).toString();
  }

  /**
   * This function returns the data in the decrypted format and it can only return the same
   * value as it was before encryption if we will be using the proper key.
   * @param data
   * @param key
   */
  decrypt(data: string): string {
    return CryptoJS.AES.decrypt(data, this.constants.AppProperties.encryptionKey).toString(CryptoJS.enc.Utf8);
  }

}
