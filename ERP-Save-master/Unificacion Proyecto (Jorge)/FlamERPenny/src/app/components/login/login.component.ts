import { Component, OnInit, inject } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import { getPreviousOrParentTNode } from '@angular/core/src/render3/state';
import { getRootComponents } from '@angular/core/src/render3/discovery_utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']  /*Prueba*/
})
export class LoginComponent implements OnInit {

  public user_name:any;
  public user_password:any;


  constructor(public firebase:AuthService) { }

  login(){
   
    console.log(this.user_name);
    console.log(this.user_password);

    this.firebase.LoginUser(this.user_name.toString(),this.user_password.toString());
   
  }

  ngOnInit() {
  }

}
