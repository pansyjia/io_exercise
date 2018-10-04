import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{NavController} from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-cake',
  templateUrl: './cake.page.html',
  styleUrls: ['./cake.page.scss'],
})


export class CakePage implements OnInit {

  public name: string="";
  public bdayMonth: string;
  public bdayDate: string;
  public cakeType: string;
  public frosting: string;

  constructor(public router: Router, public navCtrl: NavController, public storage: Storage) {
    this.storage.get("data").then((data) => {
      this.name = data["name"];
      this.bdayMonth = data["bdayMonth"];
      this.bdayDate = data["bdayDate"];
      this.cakeType = data["cakeType"];
      this.frosting = data["frosting"];
    }); 
  }

  ngOnInit() {
  }

  goToAbout() {
    this.navCtrl.navigateBack('/about');
  }

  goToConfirm() {
    console.log(this.bdayMonth);
    console.log(this.bdayDate);
    console.log(this.name);
    console.log(this.cakeType);
    console.log(this.frosting);
    this.saveData();
    this.navCtrl.navigateForward('/confirm');
  }



  saveData(){
    let data = {"name": this.name,
                "bdayMonth": this.bdayMonth,
                "bdayDate": this.bdayDate,
                "cakeType": this.cakeType,
                "frosting": this.frosting};
    this.storage.set("data", data);
  }



}





