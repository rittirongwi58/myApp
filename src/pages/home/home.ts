import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BmicalculatePage } from '../bmicalculate/bmicalculate';
import { ResultPage } from '../result/result';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotoBmicalculatePage(){

    this.navCtrl.push(BmicalculatePage);
  }

  gotoResultPage(){

    this.navCtrl.push(ResultPage);
  }

}
