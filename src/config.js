import * as firebase from 'firebase'
var config = {
   apiKey: "AIzaSyACN3PFHLLPBJrKF0GaQQWUmtqAhHUOytE",
   authDomain: "photowall-b5ea7.firebaseapp.com",
   databaseURL: "https://photowall-b5ea7.firebaseio.com",
   projectId: "photowall-b5ea7",
   storageBucket: "photowall-b5ea7.appspot.com",
   messagingSenderId: "124850045081"
 };


firebase.initializeApp(config)
const database  = firebase.database()

export  {database}
