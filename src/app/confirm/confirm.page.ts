import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{NavController} from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.page.html',
  styleUrls: ['./confirm.page.scss'],
})
export class ConfirmPage implements OnInit {

  public name: string="";
  public bdayMonth: string="";
  public bdayDate: string="";
  public cakeType: string = "";
  public frosting: string = "";

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

  goToHome() {
    console.log(this.bdayMonth);
    console.log(this.bdayDate);
    console.log(this.name);
    console.log(this.cakeType);
    console.log(this.frosting);
    this.saveInfo();
    this.router.navigateByUrl('/home');
  }

  goToCake() {
    this.navCtrl.navigateBack('/cake');
  }

  saveInfo(){
    let data = {"name": this.name,
                "bdayMonth": this.bdayMonth,
                "bdayDate": this.bdayDate};
    this.storage.set("data", data);
  }
  

}

//define complete before going to home page
