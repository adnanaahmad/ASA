import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  constructor() { }

  /**
   * all the apiRoutes are declared here.
   */

  static apiRoutes = {
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

  };
}
