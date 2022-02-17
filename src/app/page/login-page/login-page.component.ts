import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  formLoginGroup!:any

  constructor() { }

  ngOnInit(): void {
    this.formLoginGroup = new FormGroup({
      email: new FormControl(null,[Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(3)])
    })
  }
  submit(){
    if(this.formLoginGroup.invalid){
      return
    }
  }
}
