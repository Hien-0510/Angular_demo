import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Auth, User, onAuthStateChanged } from '@angular/fire/auth';
import { userName } from '../models/userName.model';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: BehaviorSubject<userName | null>;
  constructor(private authService: Auth) { 
    onAuthStateChanged(this.authService,(user)=>{
      if(user){
        this.user.next({
          id: user.uid,
          name: user.displayName,
          email: user.email,
          imgUrl: user.photoURL
        } as userName)
      }
      else{
        this.user.next(null);
      }
    });
  }
}
