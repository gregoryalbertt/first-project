import { CreateObjectPage } from './../pages/object/create-object/create-object';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//Pages
import { HomePage } from './../pages/home/home';
import { ForgotPasswordPage } from './../pages/auth/forgot-password/forgot-password';
import { SignUpPage } from './../pages/auth/sign-up/sign-up';
import { LoginPage } from './../pages/auth/login/login';
import { HomeAuthPage } from './../pages/auth/home-auth/home-auth';
import { ViewObjectPage } from './../pages/object/view-object/view-object';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';

//Providers
import { AuthProvider } from './../providers/auth';
import { DataProvider } from './../providers/data';


// AF2 Settings
export const firebaseConfig = {
    apiKey: "AIzaSyAYZWx4JkwEjIj_0tPSO-Q9KiprzGRjxSY",
    authDomain: "first-project-ce653.firebaseapp.com",
    databaseURL: "https://first-project-ce653.firebaseio.com",
    storageBucket: "first-project-ce653.appspot.com",
    messagingSenderId: "823900032608"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HomeAuthPage,
    LoginPage,
    SignUpPage,
    ForgotPasswordPage,
    ViewObjectPage,
    CreateObjectPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HomeAuthPage,
    LoginPage,
    SignUpPage,
    ForgotPasswordPage,
    CreateObjectPage,
    ViewObjectPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    AuthProvider
  ]
})
export class AppModule {}

