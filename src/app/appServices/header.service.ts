import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  
  constructor(private httpVar : HttpClient) { 
    
  }

  headerContactDetailsFromService = new BehaviorSubject(false);
  goBackLinkFromService = new BehaviorSubject(false);
  headerLoginbackService = new BehaviorSubject(true);
  loggedInUserService = new BehaviorSubject('');


  }
  


  

  