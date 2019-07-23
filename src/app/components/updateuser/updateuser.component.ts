import { Component, OnInit } from '@angular/core';

import {UserService} from '../../services/user.service';         //use the service
import {User} from '../../models/user';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';










@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {


    users:User[];            //getting instance of the Users array in html




  constructor(private userService:UserService,
    private router:Router
      ){}

    email:string;
    userPassword:string;                           //mini storage varaibles from input      //should have the names to be same as the one in local storage in angular
    firstName:string;
    lastName:string;
    phoneNumber:string;
    address:string;
    city:string;
    state:string;


    user:User;



    ngOnInit() {

      this.userid = +sessionStorage.getItem("userId");

  }



userid: number;


//56 hardcored wrked

updateUserang(){
  console.log(this.userid);                    //local storage or session storage
let updateUser = {"userId" : this.userid, "email": this.email,
  "password": this.userPassword, "firstName":this.firstName, "lastName": this.lastName,
  "phoneNumber": this.phoneNumber, "address": this.address, "city": this.city, "state": this.state};





this.userService.updateUserang(this.userid,updateUser).subscribe( data => {
  console.log("This ability allows you to update new user into the page");
  console.log(updateUser);


})
};


goBack(){
  this.router.navigate(['welcome']);
}









handleSuccessfulResponse(response){
this.users=response;
}




}
