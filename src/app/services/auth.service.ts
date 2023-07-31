
import { Auth, signInWithPopup, GoogleAuthProvider, User, signOut } from '@angular/fire/auth';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User | null = null;
  constructor(private auth: Auth) { 
    this.auth.onAuthStateChanged((user) => {
      if(user){
        this.user = user;
      }
      else{
        this.user = null;
      }
    });
  }

  loginWithGoogle() {
    let a = new GoogleAuthProvider();
    return signInWithPopup(this.auth, a);
  }

  logout() {
    return signOut(this.auth);
  }
}
