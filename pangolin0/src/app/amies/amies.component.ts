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

  constructor(private service: OrdredbService, private router: Router) {
    this.login = sessionStorage.getItem('login');
    if (this.login == "null") router.navigate(['/login/']);
    this.maj();
  }

  ngOnInit(): void {
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
      this.liste_users = data;
    });
    console.log("liste_amies");
    this.service.getAmies(this.login).subscribe(data => {
      this.liste_amies = data;
    });



  }


}
