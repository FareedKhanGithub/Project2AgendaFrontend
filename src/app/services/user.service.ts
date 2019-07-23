import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  serverUrl = "http://localhost:8090/"

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<User[]>(this.serverUrl + "users");
  }

  register(user:User){
    return this.http.post( this.serverUrl + 'users', user );
  }

  login(email:string,password:string){
    let user = { "email": email, "password": password};
    return this.http.post(this.serverUrl + "users/login", user);
  }

  delete(id:number){
    return this.http.delete( this.serverUrl + "users/"+ id);
  }






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ids = +sessionStorage.getItem("userId");       //how does it know what this is
  //id:number
  updateUserang(ids ,user){               //would be sending both the user id and user
    console.log(ids);     //ids
    console.log(user);
    return this.http.put( this.serverUrl + "users/update/" + ids, user);
  }




  addUserang(user){                                 //will link up to registertwo    //done                   //this is where the adduser would
    return this.http.post( this.serverUrl + "users/adduser", user);             //this idea is different to your implementation
  }




  deleteUserang(id:number) {           //doneish                                 //this should only show up for one person
    console.log("You have deleted something using angular")                 //this should be here in main page
    return this.http.delete(this.serverUrl + "users/welcome/" + id );

  }




findnumtwo(id:number){                                             //this works
    //return this.http.get<User>( this.serverUrl + "users/"+ id);
    return this.http.get<User>( this.serverUrl + "users/welcome/"+ id);

  }



//////////////////////////////////////////////////////////////////////////////////////////



  findOne(id:number){
    return this.http.get<User>( this.serverUrl + "users/"+ id);                            //be wary that this was originally here
  }













  resendPass(email:string){
    return this.http.get<User>( this.serverUrl + "users/"+ email);
  }

    isUserLoggedIn(){
     let user = sessionStorage.getItem('loggedInUser');
     return !(user ===null)
   }

   logout(){
     sessionStorage.removeItem('loggedInUser');
     sessionStorage.removeItem('userId');
     sessionStorage.removeItem('fullName');
     sessionStorage.removeItem('user');
     sessionStorage.removeItem('agenda');
     sessionStorage.removeItem('agendaId');
     sessionStorage.removeItem('agendaType');
   }
}
