import { Injectable } from '@angular/core';
//import * as firebase from 'firebase/app';
//import '@firebase/auth';
//const firebase = require("firebase");
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  registerUser(email, pwd) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, pwd)
        .then((res) => {
          console.log(res);
          resolve(res);
        }).catch((error) => {
          console.log(error);
          reject();
        });
    });
  }

  loginUser(email, pwd) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, pwd)
        .then((res) => {
          console.log(res);

          if (res.user) {
            res.user.getIdToken().then((token) => {
              console.log(token);
              return true;
            });
          }
          
          resolve(res);
        }).catch((error) => {
          console.log(error);
          reject();
        });
    });
  }

  logoutUser() {
    return new Promise((resolve, reject) => {
      if (firebase.auth().currentUser) {
        firebase.auth().signOut()
          .then((res) => {
            console.log('LOG Out');
            resolve(res);
          }).catch((error) => {
            console.log(error);
            reject();
          });
      }
    });
  }

  userDetails() {
    return firebase.auth().currentUser;
  }

}
