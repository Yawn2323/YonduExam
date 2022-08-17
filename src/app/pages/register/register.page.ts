import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  submitButtonStatus = true;
  formSubmitAttempt = false;
  mobileNumberRegEx = '^[+0]{0,2}(91)?[0-9]{10}$';

  constructor(private fb: FormBuilder, private loadingCtrl: LoadingController) {
    this.registerForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      birthDate: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      mobileNumber: [
        null,
        [Validators.required, Validators.pattern(this.mobileNumberRegEx)],
      ],
    });
  }

  ngOnInit() {}

  setSubmitButton(flag: boolean) {
    this.submitButtonStatus = flag;
  }

  getSubmitButton() {
    return this.submitButtonStatus;
  }

  async onSubmit(form: FormGroup) {
    const loading = await this.loadingCtrl.create({
      message: 'Register Successfully',
      duration: 3000,
    });

    loading.present();
  }
}
