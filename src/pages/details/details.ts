import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import {FormControl, Validators,FormGroup} from '@angular/forms';

export interface Config {
	details: string;
}

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
   searchQuery: string = '';
     items: string[];
     user:FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams ,public http:HttpClient ) {
  	this.initializeItems();
  }

  ionViewDidLoad() {
  }

   initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota',
      'sajid',
      'khan',
      'saddam',
      'santosh'
    ];
  }
   getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
