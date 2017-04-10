import { HomeAuthPage } from './../home-auth/home-auth';
import { AuthProvider } from './../../../providers/auth';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html'
})
export class SignUpPage {

  error: any;
  form: any;

  constructor(public navCtrl: NavController, private auth: AuthProvider, private loadingCtrl: LoadingController) {
    this.form = {
      email: '',
      password: ''
    }
  }

openLoginPage(){
  this.navCtrl.push(LoginPage);
}

 register() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();

    this.auth.registerUser(this.form).subscribe(registerData => {
      this.auth.loginWithEmail(registerData).subscribe(loginData => {
        setTimeout(() => {
          loading.dismiss();
          this.navCtrl.setRoot(HomeAuthPage);
        }, 1000);
      }, loginError => {
        setTimeout(() => {
          loading.dismiss();
          this.error = loginError;
        }, 1000);
      });
    }, registerError => {
      setTimeout(() => {
        loading.dismiss();
        this.error = registerError;
      }, 1000);
    });
  }



}
