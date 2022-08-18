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
    }
}

@Injectable({
    providedIn :'root'
})
export class AuthService{
   user = new BehaviorSubject<User | null>(null);
   

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
        resData.data.token
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
                resData.data.token
            )
        }))
    }

    logout(){
        this.user.next(null);
        this.router.navigate(['/login'])
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
    private handleAuthentication(email: string, userId: string, token: string) {
        const user = new User(
            email,
            userId,
            token
        );
        this.user.next(user);

}
}