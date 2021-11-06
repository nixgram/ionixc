import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public nav: NavController) {}

  onRowClick(index: number) {
    this.nav.navigateForward(`/app/tabs/home/${index}`);
  }
}
