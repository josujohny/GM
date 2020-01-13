import { Component, NgZone, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '@app/service/api.service';
import { SignupService } from '@app/service/signup.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted = false;
  signupForm: FormGroup;
  // EmployeeProfile:any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin']

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: SignupService
  ) // private apiService: ApiService
  {
    this.mainForm();
  }

  ngOnInit() { }

  mainForm() {
    this.signupForm = this.fb.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      // address: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  get myForm() {
    return this.signupForm.controls;
  }

  register() {
    this.submitted = true;
    if (!this.signupForm.valid) {
      return false;
    } else {
      this.apiService.createUser(this.signupForm.value).subscribe(
        (res) => {
          console.log('User successfully created!')
          this.ngZone.run(() => this.router.navigate(['login']))
        }, (error) => {
          console.log(error);
        });
    }
  }
}
