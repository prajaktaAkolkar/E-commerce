import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { BehaviorSubject, catchError ,Subject,tap,throwError } from "rxjs";
import { User } from "src/app/model/user.model";

export interface AuthResponseData{
    success: boolean;
    message: string;
    data: {
      email: string,
      first_name?: string,
      last_name?: string,
      password?: string,
      id: string,
      token: string,
      userName?: string,
      expiresIn : string
    }
}

@Injectable({
    providedIn :'root'
})
export class AuthService{
   user = new BehaviorSubject<any | null>(User);
   private tokenExpirationTimer :any;

  constructor(private http : HttpClient , private router : Router) {}
    signUp(first_name :string, last_name :string,email:string,password:string){
     return this.http.post<AuthResponseData>('http://95.111.202.157/mangoproject/public/api/signup',{
        first_name : first_name,
        last_name : last_name,
        email :email,
        password :password,
        returnSecureToken :true
     }).pipe(catchError(this.handleError),
     tap(resData=>{
       this.handleAuthentication(
        resData.data.email,
        resData.data.id,
        resData.data.token,
        +resData.data.expiresIn
       );
     }))
    }
  

    login(email_login:string,password_login:string){
        return this.http.post<AuthResponseData>('http://95.111.202.157/mangoproject/public/api/login',{
            email :email_login,
            password :password_login
        }).pipe(catchError(this.handleError), 
        tap(resData =>{
            console.log(resData);
            this.handleAuthentication(
                resData.data.email,
                resData.data.id,
                resData.data.token,
                +resData.data.expiresIn
            )
        }))
    }

    logout(){
        this.user.next(null);
        this.router.navigate(['/login']);
        localStorage.removeItem('userData');
        if(this.tokenExpirationTimer){
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
    }

    autoLogin(){
            let loginUserData :any = localStorage.getItem('userData')
        const userData : {
            email : string,
            id : string,
            token :string,
            _tokenExpirationDate : string
        } = JSON.parse(loginUserData);
        console.log(loginUserData);
        if(!userData){
            return;
        }

        const loadedUser = new User(userData.email,userData.id,userData.token,
            new Date(userData._tokenExpirationDate));
            if(loadedUser.token){
                this.user.next(loadedUser);
                this.autoLogout(2000);
            }
    }

    autoLogout(expirationDuration : number){
  this.tokenExpirationTimer =  setTimeout(()=>{
      this.logout();
    },2000)
    }

    private handleError(errorRes: HttpErrorResponse) {
        let errorMessage = 'An unknown error ouccured!';
        if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'This email exists already!';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'This email does not exist.'
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'This password is not correct.'
                break;
        }
        return throwError(errorMessage);
    }
    private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
        const expirationDate  = new Date(new Date().getTime()+ expiresIn *1000)
        const user = new User(
            email,
            userId,
            token,
            expirationDate
        );
        this.user.next(user);
        localStorage.setItem('userData', JSON.stringify(user))

}
}