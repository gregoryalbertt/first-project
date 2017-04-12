import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//Firebase
import { FirebaseListObservable, AngularFire } from 'angularfire2';

//Pages
import { HomePage } from './../../home/home';

@Component({
  selector: 'page-edit-object',
  templateUrl: 'edit-object.html'
})
export class EditObjectPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public af: AngularFire) {
    this.items = af.database.list('/itens');
    this.item = navParams.get('item');
    this.itemId = navParams.get('itemId');
    this.data = {
      title: this.item.title,
      description: this.item.description,
    }

  }

  items: FirebaseListObservable<any>;
  item: any;
  itemId: any;
  data: any;

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditObjectPage');
    console.log(this.item);
    console.log(this.itemId);
  }

  editForm(){
    this.items.update(this.itemId,{
      title: this.data.title,
      description: this.data.description
    })
    //this.navCtrl.popAll();
    this.navCtrl.setRoot(HomePage);
  }



}
