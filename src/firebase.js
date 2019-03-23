import Firebase from 'firebase';

let config = {
  apiKey: "AIzaSyC56EkPMTQvbL3pFZGyVe3rRv3WHS97AoQ",
  authDomain: "bt3103-e32c6.firebaseapp.com",
  databaseURL: "https://bt3103-e32c6.firebaseio.com",
  projectId: "bt3103-e32c6",
  storageBucket: "bt3103-e32c6.appspot.com",
  messagingSenderId: "870564371427"
};

let app = Firebase.initializeApp(config);

let db = app.database();
let seRef = db.ref("se_df/data/0");

export {db, seRef}
