import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from 'src/app/appServices/auth.service';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  

  form: any;

  constructor(private fb : FormBuilder, private authService : AuthService) { 
    console.log("template driven module loaded.")
  }

  ngOnInit(): void {

    this.form = this.fb.group({

      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(6)]]
    })
  }
  
  
  enteredUname : string = "";
  submitted : boolean = false;
   

  

  onSubmit()
  {
    //console.log(formReceived) 
    if(this.form.valid)
    {
    console.log(this.form.value);
    this.submitted = true;
    const sendEmail = this.form.value.email;
    const sendPassword = this.form.value.password;
    this.authService.signUp(sendEmail, sendPassword).subscribe(
      res => {console.log(res)},
      err => {
        console.log(err)
      }

    )
    }
    
    
  }


}
