import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.page.html',
  styleUrls: ['./home-detail.page.scss'],
})
export class HomeDetailPage implements OnInit {

  public routeData: string;
  constructor(public activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.routeData = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
