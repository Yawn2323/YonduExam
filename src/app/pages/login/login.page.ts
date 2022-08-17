import { AlertController, LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  login_form: FormGroup;
  passwordRegEx = '^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{6,}$';
  submitButtonStatus = true;
  formSubmitAttempt = false;

  constructor(private fb: FormBuilder,
    private alertController: AlertController,
    private loadingCtrl: LoadingController,
    private router: Router) {
    this.login_form = this.fb.group({
      email: [null, Validators.email],
      password: [null,[Validators.required,Validators.pattern(this.passwordRegEx)]],
    });
  }

  ngOnInit() {}

  setSubmitButton(flag: boolean) {
    this.submitButtonStatus = flag;
  }

  getSubmitButton() {
    return this.submitButtonStatus;
  }

  async onSubmit(form:FormGroup) {
      const loading = await this.loadingCtrl.create({
        message: 'Login Successfully',
        duration: 3000,
      });

      loading.present();
    }
}
