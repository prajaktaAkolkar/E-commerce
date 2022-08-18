import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService ,AuthResponseData} from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
isLoginMode = true;
isLoading = false;
loginInfo :any;
signUpInfo :any;
error:string = '';

onSwitchMode(){
  this.isLoginMode = !this.isLoginMode;
}
  constructor(private fb : FormBuilder, private authService:AuthService, private router : Router) { }

  ngOnInit(): void {
   this.loginInfo = this.fb.group({
      email  :['',Validators.required],
      password :['',Validators.required]
    })

    this.signUpInfo = this.fb.group({
      firstName  :['',Validators.required],
      lastName :['',Validators.required],
      email : ['',Validators.required],
      password : ['',Validators.required]
    })
    // this.loginInfo = new FormGroup({
		//   'loginInfo' : new FormGroup({
		// 	'email' : new FormControl(null, [Validators.required, Validators.email]),
		// 	'password': new FormControl(null, [Validators.required])
		//   })

		// });
  }

  // loginUser(){
  //   console.log(this.loginInfo.value);
  //   this.loginInfo.reset();
  // }

  // singUpUser(){
  //   console.log(this.signUpInfo.value);
  //   this.signUpInfo.reset();
    
  // }
  onSubmit(){
    if(!this.signUpInfo.valid && !this.loginInfo.valid){
      return;
    }
   
    const first_name =this.signUpInfo.value.firstName;
    const last_name = this.signUpInfo.value.lastName;
    const email = this.signUpInfo.value.email;
     const password = this.signUpInfo.value.password;

    const email_login = this.loginInfo.value.email;
    const password_login = this.loginInfo.value.password;
  
    let authObs : Observable<AuthResponseData>

   this.isLoading =true
    if(this.isLoginMode){
    authObs =  this.authService.login(email_login,password_login);
    console.log("login mode")
    console.log(this.loginInfo.value)
    this.loginInfo.reset();
    }
    else{
      console.log(this.signUpInfo.value);
      
    authObs = this.authService.signUp(first_name,last_name,email,password);
      this.signUpInfo.reset();
    }

    authObs.subscribe(resData=>{
      console.log(resData);
      this.isLoading = false;
      if(this.isLoginMode) {
        this.router.navigate(['']);
      }
      else{
        alert("You have register successfull. Please login!")
      }
    },errorMessage=>{
        console.log(errorMessage);
        this.error =errorMessage
        this.isLoading = false;
    });

  }

}
