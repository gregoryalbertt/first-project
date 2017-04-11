import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//Firebase
//import { FirebaseListObservable, AngularFire } from 'angularfire2';
import * as firebase from 'firebase'

@Component({
  selector: 'page-view-object',
  templateUrl: 'view-object.html'
})
export class ViewObjectPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.get('item');
    this.itemId = this.navParams.get('itemId');
    this.ownerId = this.item.ownerId;
    this.userId = firebase.auth().currentUser.uid;
    this.isAuthor = (this.userId==this.ownerId);

  }

  item: any;
  itemId: any;
  userId: any;
  ownerId: any;
  isAuthor: boolean = false;

  ionViewDidLoad() {
    console.log(this.ownerId);
    console.log(this.userId);
    console.log(this.isAuthor);
  }

  editObject(){

  }

  matchObject(){
    
  }

  

}
