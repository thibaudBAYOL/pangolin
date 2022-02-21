import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrdredbService } from '../ordredb.service';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  message = "";


  constructor(private service :OrdredbService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmitInscription(f: NgForm) {
    console.log("onSubmitInscription");
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false

    
    if(f.valid){
      this.service.getOneUser(f.value.login).subscribe(data=>{
        console.log("getOneUser");
        console.log(data);
        if(data.length==0){
          this.service.postUser(f.value.login,f.value.mdp,f.value.role).subscribe(data=>{
            console.log("postUser");
            sessionStorage.setItem('login',f.value.login );
            this.router.navigate(['/profil/']);
          },
          error => {
            console.log(error);
          });
        }else{
          this.message="Ce login est déja utilisé.";
        }
      },
      error => {
        console.log(error);
      });


    }

  }




}
