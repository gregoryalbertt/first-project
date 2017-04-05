import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SignUpPage } from './../sign-up/sign-up';
import { LoginPage } from './../login/login';

@Component({
  selector: 'page-home-auth',
  templateUrl: 'home-auth.html'
})
export class HomeAuthPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {


  }

  ngOnInit(){

  }

  loginUserWithFacebook(){
    // gonna be implement after email-login is ready
    // for now nothing happens when you select it
  }

  openSignUpPage(){
    this.navCtrl.push(SignUpPage);
  }

  openLoginPage(){
    this.navCtrl.push(LoginPage)
  }

  openTermsOfService(){
    // remember to implement later
  }

}
