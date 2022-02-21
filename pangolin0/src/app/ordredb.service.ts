import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class OrdredbService {

  constructor(private http: HttpClient) { }

  //"http://localhost:8080/users";

  getLoginMdpIsTrue(login:String,mdp:String): Observable<any> {
    return this.http.get(baseUrl+"/users/"+login+"/"+mdp);
  }

  getAllUsers(): Observable<any> {
    return this.http.get(baseUrl+"/users");
  }

  getOneUser(login:String): Observable<any> {
    //users/:login
    return this.http.get(baseUrl+"/users/"+login);
  }
  

  postUser(login0:String,mdp0:String,role0:String): Observable<any>{
    const data = {
      login : login0,
      mdp : mdp0,
      role : role0
    };
    return this.http.post(baseUrl+"/users",data);
  }


  patchRole(login:String,role:String): Observable<any> {
    return this.http.patch(baseUrl+"/new_role/"+login+"/"+role,null);
  }

  patchMdp(login:String,mdp:String): Observable<any> {
    return this.http.patch(baseUrl+"/new_mdp/"+login+"/"+mdp,null);
  }
  
  //amie

  postAmies(login0:String,amie:String): Observable<any>{
    const data = {
      amie1 : login0,
      amie2 : amie
    };
    return this.http.post(baseUrl+"/amies",data);
  }

  deleteAmies(login0:String,amie:String): Observable<any>{
    return this.http.delete( baseUrl+"/amies/"+login0+"/"+amie);
  }
  
  getAmies(login:String): Observable<any> {
    return this.http.get(baseUrl+"/amies/"+login);
  }


}
