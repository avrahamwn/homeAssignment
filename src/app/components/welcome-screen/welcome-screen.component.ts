import { Component, OnInit, ɵɵInheritDefinitionFeature } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss']
})
export class WelcomeScreenComponent implements OnInit {
usernameFormControl: FormControl;

  constructor(private router:Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.usernameFormControl = new FormControl(undefined, Validators.required);
  }

  onSubmit(){
    console.log(this.usernameFormControl.value);
    this.router.navigate(['search-page']);
  }

}
