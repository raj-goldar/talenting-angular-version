import { Component } from '@angular/core';
import { Router }  from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Talenting-Angular-Version2';

  hideName:boolean =false;
  constructor(public router: Router){
    console.log(router.url);
  }
  
}
