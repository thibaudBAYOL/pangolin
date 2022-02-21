import { Component, OnInit } from '@angular/core';
import { OrdredbService } from '../ordredb.service';
import {  Router } from '@angular/router';

import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message="";

  constructor(private service :OrdredbService,private router:Router) { }

  ngOnInit(): void {

  }


  onSubmitlogin(f: NgForm) {
    console.log("onSubmitlogin");
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false

    this.service.getLoginMdpIsTrue(f.value.login,f.value.mdp).subscribe(data=>{
      if(data==true){
        sessionStorage.setItem('login',f.value.login );
        this.router.navigate(['/profil/']);
      }else{
        this.message="Mauvais login ou mot de passe.";
      }
    });

  }
 

  deconnexion(){
    console.log("deconnexion");
    document.getElementById("login").hidden=false;
  }
}
