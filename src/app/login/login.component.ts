import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Instance variables - Bydefaukt public in TypeScript
  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean=false;
  constructor(private formBuilder: FormBuilder,
    private router: Router) { }

  onSubmit(){
    this.submitted = true;
    //if validation failed, it should return 
    //to valid again
    if(this.loginForm.invalid){
      return;
    }
    let username=this.loginForm.controls.email.value;
    if(this.loginForm.controls.email.value == "nikita@gmail.com" && 
    this.loginForm.controls.password.value == "123456"){
      localStorage.setItem("username",username);
      this.router.navigate(['list-user']);
    }
    else{
      this.invalidLogin = true;
    }
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

}
