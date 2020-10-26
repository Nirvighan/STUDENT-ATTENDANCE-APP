import firebase from 'firebase';
require('@firebase/firestore')


 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCEuy0E7SEGqXuKdPPK7Ag50xMIowZ5Ky4",
    authDomain: "student-attendance-app-635fc.firebaseapp.com",
    databaseURL: "https://student-attendance-app-635fc.firebaseio.com",
    projectId: "student-attendance-app-635fc",
    storageBucket: "student-attendance-app-635fc.appspot.com",
    messagingSenderId: "800244085680",
    appId: "1:800244085680:web:794a397fb989f4083f1c75"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
