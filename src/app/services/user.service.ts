import { Injectable } from '@angular/core';
import { Auth, User, onAuthStateChanged } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(public authService: Auth) { }
  
}
