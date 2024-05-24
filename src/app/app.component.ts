import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'reactive-form-practice';

  signupForm!: FormGroup;
  forbiddenUsernames = ['Test'];
  forbiddenEmails = ['test@test.com'];
  
  constructor(public formBuilder: FormBuilder){
    
  }

  ngOnInit(): void {
    
    this.signupForm = this.formBuilder.group({
      projectName: new FormControl('', [Validators.required, this.forbidenNames.bind(this)]),
      email: new FormControl('', [Validators.required, Validators.email, this.forbidenEmails.bind(this)]),
      projectStatus: new FormControl('')
    })


  }

  get getControl(){
    return this.signupForm.controls;
  }

  onSubmit(){
    console.log(this.signupForm.value);
  }


  forbidenNames(control: FormControl):{[s: string]: boolean} {
    if(this.forbiddenUsernames.indexOf(control.value) !== -1){
      return {'nameIsForbidden': true};
    }

    return {'nameIsForbidden': false};
    
  }

  forbidenEmails(control: FormControl): {[s: string]: boolean} {
    
    if(this.forbiddenEmails.indexOf(control.value) !== -1){
      return {'emailIsForbidden': true};
    }

    return {'emailIsForbidden': false};
    
  }

}
