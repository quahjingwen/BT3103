import Firebase from 'firebase';

let config = {
  apiKey: "AIzaSyC5tpD6N9zJT3V-xHHqAdrBwKuEfE25GKo",
    authDomain: "bt3103-f9af7.firebaseapp.com",
    databaseURL: "https://bt3103-f9af7.firebaseio.com",
    projectId: "bt3103-f9af7",
    storageBucket: "bt3103-f9af7.appspot.com",
    messagingSenderId: "1059333989137"
};

let app = Firebase.initializeApp(config);

let db = app.database();
//let seRef = db.ref("se_df/data/0");
let modsInfo = db.ref("mods_info/data");

export {db, modsInfo}
