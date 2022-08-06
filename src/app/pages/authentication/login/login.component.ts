import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private formBuilder: FormBuilder) { }

  loginForm: FormGroup = this.formBuilder.group({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(25)]),
    remember: new FormControl(false),
  });

  ngOnInit(): void {
  }

  get email () { return this.loginForm.get('email'); }

  get password () { return this.loginForm.get('password'); }

  login () {
    console.log(this.loginForm.value);
    alert("Bingo !!!");
  }

}
