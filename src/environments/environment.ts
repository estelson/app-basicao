// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from "firebase/app";

export const environment = {
  production: false
};

const firebaseConfig = {
  apiKey: "AIzaSyB_08jw5dVgEHfToEWYkR6swtfqJzoV8BQ",
  authDomain: "ejlappbasicao.firebaseapp.com",
  projectId: "ejlappbasicao",
  storageBucket: "ejlappbasicao.appspot.com",
  messagingSenderId: "253214186691",
  appId: "1:253214186691:web:959c124bf99139c740d676"
}

const app = initializeApp(firebaseConfig);



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
