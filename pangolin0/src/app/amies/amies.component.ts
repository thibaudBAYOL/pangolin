import { Component, OnInit } from '@angular/core';
import { OrdredbService } from '../ordredb.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-amies',
  templateUrl: './amies.component.html',
  styleUrls: ['./amies.component.css']
})
export class AmiesComponent implements OnInit {
  login = null;

  liste_users = [];
  liste_amies = [];
  liste_pas_amie = [];
  message="";

  constructor(private service: OrdredbService, private router: Router) {
    this.login = sessionStorage.getItem('login');
                                // add
    if (this.login == "null" || this.login == null) router.navigate(['/login/']);
    this.maj();
  }

  ngOnInit(): void {
  }


//id = inscription_amie
onSubmitInscription_amie(f: NgForm){
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
          
          this.service.postAmies(this.login, f.value.login).subscribe(data => {
            console.log("");
            this.message="";
            this.maj();
          })
         
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


  onSubmitAmie(f: NgForm) {
    console.log("onSubmitAmie");
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false

    this.service.postAmies(this.login, f.value.amie).subscribe(data => {
      console.log("amie ajouter");
      this.maj();
    })
  }

  supAmie(f: NgForm) {
    console.log("supAmie");
    this.service.deleteAmies(this.login, f.value.amie).subscribe(data => {
      console.log("amie en moin");
      this.maj();
    })

  }

  maj() {
    console.log("liste_users");
    this.service.getAllUsers().subscribe(data => {
      // add
      this.liste_users = data.filter((u)=>(u.login!=this.login));
      // add
      if (this.liste_amies.length > 0) {
        this.pasEncoreAmie();
      }
    });
    console.log("liste_amies");
    this.service.getAmies(this.login).subscribe(data => {
      this.liste_amies = data;
      // add
      if (this.liste_users.length > 0) {
        this.pasEncoreAmie();
      }
    });

  }
  // add
  pasEncoreAmie() {

    this.liste_pas_amie = this.liste_users.filter((user) => !this.liste_amies.includes(user.login));
    console.log(this.liste_users);
    console.log(this.liste_amies);
    console.log(this.liste_pas_amie);

  }

}
