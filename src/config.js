// const config = {
//     apiKey: "AIzaSyDY99SN3T67LKVhd0_Za2AIodO3aIWEiVo",
//     authDomain: "myapp-d9a34.firebaseapp.com",
//     databaseURL: "https://myapp-d9a34-default-rtdb.firebaseio.com/",
//   }
  
//   export default config;
import Firebase from "firebase";
const firebaseConfig  = {
  apiKey: "AIzaSyCfQPlnetxaR-hcuYuULm5c-968Y8vyzxQ",
  authDomain: "register-219b0.firebaseapp.com",
  projectId: "register-219b0",
  storageBucket: "register-219b0.appspot.com",
  messagingSenderId: "381515233794",
  appId: "1:381515233794:web:9237fe4db8ebd5961b851b"
};

// Initialize Firebase
const config = Firebase.initializeApp(firebaseConfig );
export default config;