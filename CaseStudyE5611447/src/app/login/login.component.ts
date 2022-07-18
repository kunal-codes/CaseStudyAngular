import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string = "admin@gmail.com";
  userpassword : string = "admin@123";
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  constructor(
    private formBuilder: FormBuilder, private router: Router
  ) { }

  empLoginForm = this.formBuilder.group({
    email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
    password: [null, Validators.required]
  });

  ngOnInit() {

  }

  login() {
    if (!this.empLoginForm.valid) {
      return;
    }

    if(this.empLoginForm.value.email! === this.username &&
      this.empLoginForm.value.password! === this.userpassword){
    localStorage.setItem('SessionUser', "Admin");
    this.router.navigate(['/home']);
    alert("Login Successful!!");

    }
    else{
      alert("Invalid credentials!!");
    }
  }

}
