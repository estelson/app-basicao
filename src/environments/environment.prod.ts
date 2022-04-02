import { initializeApp } from "firebase/app";

export const environment = {
  production: true
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