import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';         //use the service
import {User} from '../../models/user';                      //get a place where you can store the varaibles you get from the http call
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';



@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {


  users:User[];            //getting instance of the Users array

  constructor(private userService:UserService,
    private router:Router
      ){}


  userId: null;
  email:string;
  userPassword:string;              //ministorage password maybe off               //mini storage variables from input      //should have the names to be same as the one in local storage in angular
  firstName:string;                                       //these mini storage maybe out of sync
  lastName:string;
  phoneNumber:string;
  address:string;
  city:string;
  state:string;

  user:User;




  ngOnInit() {
  }


  addUserang(){


    let newUser = { "email": this.email,
      "password": this.userPassword, "firstName":this.firstName, "lastName": this.lastName,
      "phoneNumber": this.phoneNumber, "address": this.address, "city": this.city, "state": this.state};



  //This calling the user service so that newUser can instill variable via pojo      //finally that error is out
  this.userService.addUserang(newUser).subscribe( data => {
      console.log("This ability allows you to add new user into the page");
      console.log(newUser);


})
};









    goBack(){                             //this works
      this.router.navigate(['login']);
  }





 handleSuccessfulResponse(response){
  this.users=response;
}






}






