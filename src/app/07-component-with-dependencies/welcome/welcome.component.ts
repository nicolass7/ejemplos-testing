import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{
  public welcome!:string;
  constructor(private userService: UserService){}
  ngOnInit():void{
    this.welcome = this.userService.isLoggedIn ? 'welcome, '+this.userService.user.name :  'Please log in.';
  }
 

}
