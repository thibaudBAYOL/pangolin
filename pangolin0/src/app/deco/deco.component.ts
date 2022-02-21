import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-deco',
  templateUrl: './deco.component.html',
  styleUrls: ['./deco.component.css']
})
export class DecoComponent implements OnInit {
  
  constructor(private router:Router) {
    
   }

  ngOnInit(): void {
    this.deconnexion();
  }


  deconnexion(){
    sessionStorage.setItem('login',null);
    console.log("deconnexion");
  }


}
