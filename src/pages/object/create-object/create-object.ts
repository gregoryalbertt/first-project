import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//Firebase
import { FirebaseListObservable, AngularFire } from 'angularfire2';
import * as firebase from 'firebase'

//Pages
import { HomePage } from './../../home/home';


@Component({
  selector: 'page-create-object',
  templateUrl: 'create-object.html'
})

export class CreateObjectPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire) {
    this.items = af.database.list('/itens');
    this.data = {
      title: '',
      description: '',
      ownerId: firebase.auth().currentUser.uid,
    }
    
    //this.userId = firebase.auth().currentUser.uid;
  }

  items: FirebaseListObservable<any>;
  data: any;
  userId: any;

  dataForm(){
    console.log(this.data);

    this.items.push(this.data);
    this.navCtrl.push(HomePage);
  }




}
