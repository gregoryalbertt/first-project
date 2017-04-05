import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

import { HomePage } from '../pages/home/home';
import { HomeAuthPage } from './../pages/auth/home-auth/home-auth';

import { AuthProvider } from './../providers/auth';
import { DataProvider } from './../providers/data';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
@ViewChild(Nav) nav: Nav;
  isAppInitialized: boolean = false;
  user: any;
  rootPage: any = HomeAuthPage;
  
  constructor(
    private platform: Platform,
    protected data: DataProvider,
    protected auth: AuthProvider,
    private statusBar: StatusBar) {
    this.user = {
      image: ''
    };
  }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.auth.getUserData().subscribe(data => {
        if (!this.isAppInitialized) {
          this.nav.setRoot(HomePage);
          this.isAppInitialized = true;
        }
        this.user = data;
        this.data.list('pets').subscribe(data => {
          console.log(data);
        });
      }, err => {
        this.nav.setRoot(HomeAuthPage);
      });
      this.statusBar.styleDefault();
    });
  }
}
