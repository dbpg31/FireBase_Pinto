 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
 import {getAuth } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js"
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyCd9ruRGWZAEek6rb7F4fiMJxza6SM1wCQ",
   authDomain: "fir-app-2fd0c.firebaseapp.com",
   projectId: "fir-app-2fd0c",
   storageBucket: "fir-app-2fd0c.appspot.com",
   messagingSenderId: "496691783102",
   appId: "1:496691783102:web:d868b1eb544d54ea3f45ef"
 };

 // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)



