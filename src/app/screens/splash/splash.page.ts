import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewDidEnter } from "@ionic/angular";
import { of } from "rxjs";
import { delay } from "rxjs/operators";

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements ViewDidEnter {

  constructor(private router: Router) { }

  ionViewDidEnter(): void {

    of('ionViewDidEnter').pipe(
      delay(2500),
    ).subscribe(() => this.router.navigate(['/app/tabs/home']));

  }


}
