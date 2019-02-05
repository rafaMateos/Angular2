import { Injectable } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { resolve } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( public afAuth: AngularFireAuth) {

   }

   logout(){

    return this.afAuth.auth.signOut();
   }


   LoginUser(email: string, pass: string){

    return new Promise((resolve , reject)=>{

      this.afAuth.auth.signInWithEmailAndPassword(email , pass)
      .then(userData => resolve(userData),
      err => reject(err))

    } );

   }

   Create(email: string, pass: string){

    return new Promise((resolve , reject)=>{

      this.afAuth.auth.createUserWithEmailAndPassword(email , pass)
      .then(userData => resolve(userData),
      err => reject(err))

    });
   
   
}



}
