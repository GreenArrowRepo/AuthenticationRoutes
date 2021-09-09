import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {

  constructor() { 
    console.log("Reactive forms module loaded.")
  }

  myReactiveForm: any = [];
  notAllowed : any = ['himanshu','userone']

  enteredUname : string = "";
  
  radioButton : any = [
    {id: '1', gender : 'Male'},
    {id: '2', gender : 'Female'},
  ] 


  ngOnInit(): void {
    this.myReactiveForm = new FormGroup(
      {
        userDetails : new FormGroup({

        'uname' : new FormControl(null, [Validators.required, this.NotAllowedUNames.bind(this)]),
        'email' : new FormControl(null, [Validators.required, Validators.email]),
      }),
      
        'course' : new FormControl('HTML'),
        'gender' : new FormControl('Female'),
        'skills' : new FormArray ([
            new FormControl(null)

    ])
      }
    )
  }

  onSubmit()
  {
    console.log(this.myReactiveForm) 
    
  }

  onAddSkill(){

    (<FormArray>this.myReactiveForm.get('skills')).push(new FormControl(null))
  }

  NotAllowedUNames(control:FormControl)
  {
    if(this.notAllowed.indexOf(control.value)!==-1)
    {
      return{'nameisnotallowed':true}
    }
    else
    return null
  }

  /*
  NotAllowedEmails(control:FormControl) :  Promise<ValidationErrors | null> | Observable<ValidationErrors | null>
  {
    const myResponse = new Promise<any>((resolve,reject) => {
        setTimeout(()=>{

          if(control.value==='abc@gmail.com')
          {
            resolve({'thisEmailNotAllowed': true})

          }
          else
          {
            resolve(null)
          }
        },3000);
    })
    return myResponse;
  }*/

}
