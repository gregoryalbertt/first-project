import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';

import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, af: AngularFire, public alertCtrl: AlertController) {
    this.itens = af.database.list('/itens');
    
  }

  itens: FirebaseListObservable<any>;

  addItem(){
    let prompt = this.alertCtrl.create({
      title: 'Item name',
      message: 'Enter Item description',
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
      },
      ],
      buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {
          this.itens.push({
            title: data.title
          });
        }
      }
    ]
  });
  prompt.present();
}

}
