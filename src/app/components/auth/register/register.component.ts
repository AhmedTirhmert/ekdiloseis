import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  AppName = 'ekdiloseis';
  showLoading = false
  registerFrom = new FormGroup({
    email: new FormControl(''),
    fullName: new FormControl(''),
    password: new FormControl(''),
    passwordConfirmation: new FormControl(''),
  })
  constructor(private registerService: RegisterService) { }
  ngOnInit(): void {
    this.onFormChange()
  }
  onFormChange() {
    //Email Validation
    this.registerFrom.get('email')?.valueChanges.subscribe(val => {
      if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}$/.test(`${val}`)) {
        this.registerFrom.get('email')?.setErrors({ valid: 'invalid Email' })
      } else {
        this.registerFrom.get('email')?.setErrors(null)
      }
    })
    //Password Validation
    this.registerFrom.get('password')?.valueChanges.subscribe(val => {
      if (!/^(?=.*[0-9])(?=.*[a-z0-9])(?=.*[A-Z0-9])([a-zA-Z0-9])(?=.*?[#?!@$%^&_*-]).{6,}$/.test(`${val}`)) {
        this.registerFrom.get('password')?.setErrors({ valid: "Password must be at least 6 characters with 1 special characters and contain at least one Number" })
      } else {
        this.registerFrom.get('password')?.setErrors(null)
      }
    })
    //passwordConfirmation Validation
    this.registerFrom.get('passwordConfirmation')?.valueChanges.subscribe(val => {
      let password = this.registerFrom.get('password')?.value
      if (password !== val) {
        this.registerFrom.get('passwordConfirmation')?.setErrors({ valid: `Passwords don't match! 🤨 ` })
      } else {
        this.registerFrom.get('passwordConfirmation')?.setErrors(null)
      }
    })
  }
  submitForm() {
    this.showLoading = true
    this.registerService.Register(this.registerFrom.value).subscribe(
      response => {
        this.showLoading = false
        console.log(response)
      },
      error => {
        this.showLoading = false
        console.log(error.error.message)
      }
    )
  }
}
