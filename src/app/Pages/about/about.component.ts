import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../Services/Login/login.service';
import { Observable } from 'rxjs';
import { UserInfo } from '../../Interface/UserInfo/user-info';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  _fb = inject(FormBuilder)
  _loginService = inject(LoginService)

  userData?: Observable<UserInfo>

  loginData = this._fb.group({
    username: ["", Validators.required],
    password: ["", Validators.required]
  });

  submit() {
    console.log(this.loginData.valid)

    this.userData = this._loginService.login(
      this.loginData.controls.username.value!,
      this.loginData.controls.password.value!
    )
  }
}
