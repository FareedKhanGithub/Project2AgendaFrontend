import { Component, OnInit } from '@angular/core';
//import { UserService } from 'src/app/services/user.service';        //this mapping was wrong originally here

import { UserService } from '../../services/user.service';
import {User} from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})


export class WelcomeComponent implements OnInit {

  constructor(private userService:UserService,
    private router:Router
  ) { }

  welcomeUser = sessionStorage.getItem("fullName");


  userid: number;

  user:User;


  ngOnInit() {
    this.userid = +sessionStorage.getItem("userId");         //+ convert to string into interger
      this.userService.findnumtwo(this.userid).subscribe( data =>   {                                //uses new findnumtwo
              //is getUsers()
      this.user = data;                       //this will shows the entire information


  });
}






deleteUserang(userid){
  this.userService.deleteUserang(userid)
    .subscribe( data => {                              //triggers the call
      console.log("data did not show because it was deleted");
      this.userService.logout();
      this.router.navigate(['login']);
    })

  };

  updateusernav(){
    this.router.navigate(['update/:id']);
}


}