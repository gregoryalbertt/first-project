import { Component } from '@angular/core';
import { NavController, AlertController, ActionSheetController, NavParams } from 'ionic-angular';

// Firebase
import {AngularFire, FirebaseListObservable} from 'angularfire2';

//Providers
import { HomeAuthPage } from './../auth/home-auth/home-auth';
import { AuthProvider } from './../../providers/auth';

//Pages
import { CreateObjectPage } from './../object/create-object/create-object';
import { ViewObjectPage } from './../object/view-object/view-object';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, af: AngularFire, public alertCtrl: AlertController, 
  public actionSheetCtrl: ActionSheetController, public auth: AuthProvider, public navPrms: NavParams) {
    this.items = af.database.list('/items');
    
  }

  items: FirebaseListObservable<any>;

  data: any;
/*
  addItem(){
    let prompt = this.alertCtrl.create({
      title: 'Item name',
      message: 'Enter Item name',
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
      },
      {

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
*/

addItem(){
  this.navCtrl.push(CreateObjectPage);
}


removeItem(itemID: string){
  this.items.remove(itemID);

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
          this.items.update(itemID, {
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

showItem(itemId, item){

   let data = {
     item,
     itemId
   }

   this.navCtrl.push(ViewObjectPage, data);
}

logOut(){

  this.auth.logout();
  this.navCtrl.setRoot(HomeAuthPage);
  //this.navCtrl.popAll();

}

}


