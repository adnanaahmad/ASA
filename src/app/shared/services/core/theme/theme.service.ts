import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDark = false;
  toggleDarkTheme() {
    let app = document.getElementsByTagName("app-navigation")[0];
    if (this.isDark) {
      app.classList.remove('dark-theme');
      this.isDark = false;
    } else {
      app.classList.add('dark-theme');
      this.isDark = true;
    }
  }
}
