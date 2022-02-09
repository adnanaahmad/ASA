import {Component, Injector, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Alivia Security App';

  constructor(
    protected injector: Injector
  ) {
  }

  ngOnInit() {
    document.body.classList.add('mat-app-background');
    const translate = this.injector.get(TranslateService);
    const browserLang = translate.getBrowserLang();
    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = translate.getBrowserCultureLang();
        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          translate.use('zh-cmn-Hans');
        }
      } else {
        translate.use(translate.getBrowserLang());
      }
    }
  }
}
