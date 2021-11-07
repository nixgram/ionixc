import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private navController: NavController,
              private menuController: MenuController) {
  }

  async onProfileClick() {
    await this.menuController.close();
    await this.navController.navigateForward('/profile');
  }
}
