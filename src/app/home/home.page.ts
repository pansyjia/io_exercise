import { Component } from '@angular/core';
import { Router } from '@angular/router';
import{NavController} from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

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
    //look into storage, additional flag, complete set up or not
    this.storage.get("data").then((data) => {
      return new Promise ((resolve, reject) => {
        if (data != null) resolve();
        else reject();
      });
    });
  }

  goToAbout() {
    this.router.navigateByUrl('/about');
  }

  goToConfirm() {
    this.navCtrl.navigateBack('/confirm');
  }

  // bdayOrNot (bdayMonth, bdayDate){
  
  // }
  
}
