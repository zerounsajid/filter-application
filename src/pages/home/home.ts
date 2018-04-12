import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DetailsPage } from '../details/details';
import { Firebase } from '@ionic-native/firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/do';﻿
import { FormControl ,FormGroup } from '@angular/forms';
import { OnInit} from '@angular/core';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	private arrData = [];
  	private myInput;
    user : FormGroup;

  constructor(public navCtrl: NavController ,private firebase: Firebase ,private fdb: AngularFireDatabase) {
  	 this.fdb.list("/myItems/").valueChanges();
  	 
  }

 btnAddClicked(){
    this.fdb.list("/myItems/").push(this.myInput);
  }
 
  delete (i){
    this.fdb.list("/myItems/").remove(this.arrData[i].$key);
  }

  OnInit(){
    this.user = new FormGroup ({
        name:new FormControl (''),
        add:new FormControl (''),
        mob:new FormControl (''),
        ins:new FormControl (''),
        type:new FormControl (''),
        fsr:new FormControl (''),
        ssr:new FormControl (''),
        tsr:new FormControl (''),
        fosr:new FormControl (''),
        paid:new FormControl (''),
        bal:new FormControl (''),
        total:new FormControl ('')
    });
  }


}

