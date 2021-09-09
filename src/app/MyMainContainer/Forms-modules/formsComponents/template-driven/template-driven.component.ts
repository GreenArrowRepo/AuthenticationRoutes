import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  

  form: any;

  constructor(private fb : FormBuilder) { 
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
    console.log(this.form.value);
    this.submitted = true;
    
    
  }


}
