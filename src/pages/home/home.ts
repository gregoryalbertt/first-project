import { Component } from '@angular/core';

import { NavController, AlertController, ActionSheetController } from 'ionic-angular';

import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, af: AngularFire, public alertCtrl: AlertController, public actionSheetCtrl: ActionSheetController) {
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


removeItem(itemID: string){
  this.itens.remove(itemID);

}

updateItem(itemID, itemTitle){
  let prompt = this.alertCtrl.create({
    title: 'Item Name',
    message: "Update the name for this item",
    inputs: [
      {
        name: 'title',
        placeholder: 'Title',
        value: itemTitle
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
          this.itens.update(itemID, {
            title: data.title
          });
        }
      }
    ]
  });
  prompt.present();
}

showOptions(itemId, itemTitle) {
  let actionSheet = this.actionSheetCtrl.create({
    title: 'What do you want to do?',
    buttons: [
      {
        text: 'Delete Item',
        role: 'destructive',
        handler: () => {
          this.removeItem(itemId);
        }
      },{
        text: 'Update title',
        handler: () => {
          this.updateItem(itemId, itemTitle);
        }
      },{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  actionSheet.present();
}

}


