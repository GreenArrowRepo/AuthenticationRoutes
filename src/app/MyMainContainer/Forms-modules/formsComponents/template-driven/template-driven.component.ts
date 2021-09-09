import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  @ViewChild('myForm') myFormViewChild!: NgForm | undefined;

  constructor() { 
    console.log("template driven module loaded.")
  }

  ngOnInit(): void {
  }
  defaultCourse : string = "HTML";
  defaultGender : string = "Male";
  enteredUname : string = "";
  submitted : boolean = false;
  radioButton : any = [
    {id: '1', gender : 'Male'},
    {id: '2', gender : 'Female'},
  ] 

  formData : any = [
    {username : ''},
    {emailid : ''},
    {course : ''},
    {gender : ''}

  ]

  onSubmit()
  {
    //console.log(formReceived) 
    console.log(this.myFormViewChild);
    this.submitted = true;

    this.formData.username = this.myFormViewChild?.value.userdetail.nameUname;
    this.formData.emailid = this.myFormViewChild?.value.userdetail.NameEmail;
    this.formData.course = this.myFormViewChild?.value.nameCourses;
    this.formData.gender = this.myFormViewChild?.value.flexRadioDefault;

    this.myFormViewChild?.reset();
  }


  setUserDetails()
  {
    this.myFormViewChild?.setValue(
      {
        userdetail : 
        {
          nameUname : 'Learningmate',
          NameEmail : "himanshu.maisuriya@learningmate.com"
        },
        namePsw : "",
        nameCourses:   "Angular",
        flexRadioDefault:  "Male"
      }

    )
  }

  patchUserDetails()
  {
    this.myFormViewChild?.form.patchValue (
      {
        userdetail : 
        {
          nameUname : 'Patched',
        },
      }
    )
  }


}
