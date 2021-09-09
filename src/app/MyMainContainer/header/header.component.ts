import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/appServices/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _headerServ : HeaderService, private router:Router) { 
    //for contact details
    this._headerServ.headerContactDetailsFromService.subscribe(res => {

      this.headerContanctDetails = res
    })

    //for goback links
    this._headerServ.goBackLinkFromService.subscribe(res => {

      this.goBackLink = res
    })

    //for headerLogin block
    this._headerServ.headerLoginbackService.subscribe(res => {

      this.headerLoginBack = res
    })

    //for headerLogin block
    this._headerServ.loggedInUserService.subscribe(res => {

      this.loggedInUser = res
    })
  }

  ngOnInit(): void {
  }

  //main nav
headerNav : boolean = true;

// login back contact details

goBackLink : boolean = true;
headerLoginBack: boolean = false;
headerContanctDetails : boolean = true;
loggedInUser : string = '';



onLogOut(){
this._headerServ.loggedInUserService.next('');
this.router.navigate(['login']);
}


}
