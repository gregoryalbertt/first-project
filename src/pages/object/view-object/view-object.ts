import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ViewObject page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-view-object',
  templateUrl: 'view-object.html'
})
export class ViewObjectPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.get('item');
    this.itemId = this.navParams.get('itemId');
  }

  item: any;
  itemId: any;

  ionViewDidLoad() {
    console.log(this.item);
  }

  

}
