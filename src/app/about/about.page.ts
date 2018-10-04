import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{NavController} from '@ionic/angular';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})


export class AboutPage implements OnInit {

  public name: string="";
  public bdayMonth: string="";
  public bdayDate: string="";

  constructor(public router: Router, public navCtrl: NavController, public storage: Storage) {
    this.storage.get("data").then((data) => {
      this.name = data["name"];
      this.bdayMonth = data["bdayMonth"];
      this.bdayDate = data["bdayDate"];
    });
   }

  ngOnInit() {
  }

  goToWelcome() {
    this.navCtrl.navigateBack('/welcome');
  }

  goToCake() {
    console.log(this.bdayMonth);
    console.log(this.bdayDate);
    console.log(this.name);
    this.saveData();
    this.navCtrl.navigateForward('/cake');
  }


  saveData() {
    let data = { "name": this.name,
                "bdayMonth": this.bdayMonth,
                "bdayDate": this.bdayDate};
    this.storage.set("data", data);
  }

  //  goTo(name) {
  //   name = name || 'No Data Entered';

  //   this.navCtrl.push(ConfirmPage, {
  //     data: name
  //   });
  }




