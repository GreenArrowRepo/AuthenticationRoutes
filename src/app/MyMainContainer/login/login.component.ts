import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/appServices/header.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _headerLoginServ : HeaderService, private router:Router) { 
    console.log("login component loaded.");
  }

  ngOnInit(): void {
  }
  
  onLoggedIn(username : any, psw : any){
  if(psw.value=='123'){
      this._headerLoginServ.loggedInUserService.next(username.value);   
      this.router.navigate(['routing']);
  }
  else{
    alert('please fill correct details.');
  }

  }

}
