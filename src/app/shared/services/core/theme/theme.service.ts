import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDark = false;
  /**
   * toggleDarkTheme() function applies dynamic theme only on app-navigation component
   * */
  toggleDarkTheme() {
    if (this.isDark) {
      document.body.classList.remove('dark-theme');
      this.isDark = false;
    } else {
      document.body.classList.add('dark-theme');
      this.isDark = true;
    }
  }
}
