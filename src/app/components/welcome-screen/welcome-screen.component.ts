import { LocalStorageService } from './../../services/local-storage.service';
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

  constructor(private router:Router, private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.usernameFormControl = new FormControl(undefined, Validators.required);
  }

  onSubmit(){
    this.localStorageService.setUserNameInLocalStorage(this.usernameFormControl.value)
    this.router.navigate(['search-page']);
  }

}
