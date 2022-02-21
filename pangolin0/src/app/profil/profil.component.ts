import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrdredbService } from '../ordredb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  role: String
  message_role: String = "";
  message_mdp: String = "";
  login: String = null;
  constructor(private service: OrdredbService, private router: Router) {
    this.login = sessionStorage.getItem('login');
    if (this.login == "null") {
      this.router.navigate(['/login']);

    } else {
      this.maj();
    }
  }

  ngOnInit(): void {
  }

  maj() {
    this.service.getOneUser(this.login).subscribe(data => {
      if (data.length == 1) {
        this.role = data[0].role;
      }
    }, err => {
      console.log(err);
    });
  }

  onSubmitprofil_role(f: NgForm) {
    console.log("onSubmitprofil_role");
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
    if (f.valid) {

      this.service.patchRole(this.login, f.value.role).subscribe(data => {
        console.log(data);
        this.message_role = "rôle mise à jour.";
        this.maj();
      }, err => {
        console.log(err);
      });


    }
  }

  onSubmitprofil_mdp(f: NgForm) {
    console.log("onSubmitprofil_mdp");
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
    if (f.valid) {
      this.service.patchMdp(this.login, f.value.mdp).subscribe(data => {
        console.log(data);
        this.message_mdp = "mdp mise à jour.";
      }, err => {
        console.log(err);
      });
    }
  }


}
