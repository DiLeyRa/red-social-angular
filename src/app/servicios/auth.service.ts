import { Injectable } from '@angular/core';
//importar las dependencias
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  registerUser(email:string, password:string){
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then( userData => resolve(userData),
      err => reject(err));
    });
  }

  loginEmail(email:string, password:string){
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then( userData => resolve(userData),
      err => reject(err));
    });
  }

  logOut(){
    return this.afAuth.auth.signOut();
  }
}
