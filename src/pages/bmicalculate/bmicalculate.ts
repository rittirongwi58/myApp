import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ResultPage } from '../result/result';

@IonicPage()
@Component({
  selector: 'page-bmicalculate',
  templateUrl: 'bmicalculate.html',
})
export class BmicalculatePage {
  
    Height: number;
    Weight: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToResult(){    
    this.navCtrl.push(ResultPage, {
      
      Height: this.Height,
      Weight: this.Weight

    });
  }

}
