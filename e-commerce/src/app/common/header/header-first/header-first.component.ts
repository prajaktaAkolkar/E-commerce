import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-header-first',
  templateUrl: './header-first.component.html',
  styleUrls: ['./header-first.component.css']
})
export class HeaderFirstComponent implements OnInit , OnDestroy {
  isAuthenticated =false;
 //private userSub : Subscription ;
 private userSub: Subscription = new Subscription;

  constructor(private authService :AuthService) { }

  ngOnInit(): void {
  this.userSub = this.authService.user.subscribe(user=>{
    console.log(user);
    
    //  this.isAuthenticated = !user ? false : true;
    this.isAuthenticated = !!user;
    console.log(this.isAuthenticated);
    console.log(!user ,'------------------' ,!!user)
  })
  }
  
  onLogout(){
    this.authService.logout();
    
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}
