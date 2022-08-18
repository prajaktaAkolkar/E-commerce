import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { exhaustMap, Observable,take } from "rxjs";
import { AuthService } from "./auth.service";
import { User } from "src/app/model/user.model";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{
    
    constructor(private authService : AuthService){}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
       return this.authService.user.pipe(
        take(1),exhaustMap((user)=>{
            let data :any = user;
            if(!user){
                return next.handle(req);
            }
            const modifiedReq = req.clone({
               // params : new HttpParams().set('auth',data.token)
               setHeaders: {
                Authorization: 'Bearer ' + data.token,
              },
            })
            console.log(modifiedReq)
            return next.handle(modifiedReq);  
         }) );
    }

}