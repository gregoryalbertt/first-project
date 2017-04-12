import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//Firebase
import { FirebaseListObservable, AngularFire } from 'angularfire2';
import * as firebase from 'firebase'

//Pages
import { EditObjectPage } from './../edit-object/edit-object';
//import { HomePage } from './../../home/home';


@Component({
  selector: 'page-view-object',
  templateUrl: 'view-object.html'
})
export class ViewObjectPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  af: AngularFire) {
    this.items = af.database.list('/items');
    this.item = this.navParams.get('item');
    this.itemId = this.navParams.get('itemId');
    this.ownerId = this.item.ownerId;
    this.userId = firebase.auth().currentUser.uid;
    this.isAuthor = (this.userId==this.ownerId);

  }

  items: FirebaseListObservable<any>;
  item: any;
  itemId: string;
  userId: any;
  ownerId: any;
  isAuthor: boolean = false;

  ionViewDidLoad() {
    console.log(this.itemId);
  }

  editObject(){

    this.navCtrl.push(EditObjectPage, {
      item: this.item,
      itemId: this.itemId
    });

  }

  matchObject(){

  }

  deleteItem( ){
  this.items.remove(this.itemId);
  this.navCtrl.pop();


}

  

}
