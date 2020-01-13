import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutComponent implements OnInit {
  submitted = false;
  checkoutForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.mainForm();
  }

  ngOnInit() {
  }

  mainForm() {
    this.checkoutForm = this.fb.group({
      fName: ['', [Validators.required]],
      lName: ['', [Validators.required]],
      Address: ['', [Validators.required]],
      Street: ['', [Validators.required]],
      City: ['', [Validators.required]],
      Zip: ['', [Validators.required]],
      State: ['', [Validators.required]],
      // email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      // address: ['', [Validators.required]],
      Mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  get myForm() {
    return this.checkoutForm.controls;
  }

  checkout(){

    this.submitted = true;
    // window.alert('Success')
    if (this.checkoutForm.invalid) {
      return;
      }
      
      // display form values on success
      else{
      window.alert('Thankyou for purchasing');
      }
  }

 
// onSubmit(){
// this.submitted = true;

// // stop here if form is invalid
// if (this.checkoutForm.invalid) {
// return;
// }

// // display form values on success
// else{
// alert('Thankyou for purchasing');
// }
} 
 



