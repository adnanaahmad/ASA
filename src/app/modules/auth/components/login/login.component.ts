import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ThemeService} from "../../../../shared/services/core/theme/theme.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  hide: boolean = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private styleManager: ThemeService,
  ) {
  }
  /**
   * In this lifecycle hook, we have initialized loginForm with the required fields.
   */
  ngOnInit(): void {
    this.styleManager.resetTheme();
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  signIn(): void {
    this.router.navigate(['home/organization']);
  }
}
