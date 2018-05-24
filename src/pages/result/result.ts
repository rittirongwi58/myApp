import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {
    
    Height: number;
    Weight: number;
    bmi: number;
    bmiDetail: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.Height = this.navParams.get('height');
    this.Weight = this.navParams.get('Weight');

    this.bmi = this.Weight / ((this.Height/100)*(this.Height/100));
    
    this.bmiDetailCal(this.bmi);
  }
     bmiDetailCal(bmi){
       if (bmi >= 40) {
         this.bmiDetail = "อ้วนมาก";
       }
       else if(bmi >= 28.5){
         this.bmiDetail = "คุณเป็นโรคอ้วนขั้น 1";         
       }
       else if(bmi >= 23.5){
         this.bmiDetail = "น้ำหนักเกินมาตราฐาน";
       }
       else if(bmi >= 18.5){
        this.bmiDetail = "น้ำหนักปกติ";
       }
       else{
        this.bmiDetail = "น้ำหนักน้อยเกินไป";
     } 
  }

}
