
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyCUybcxxmxrMUht9b0kU_8-yiXsDqbyCbM",
  authDomain: "project-93-71de9.firebaseapp.com",
  projectId: "project-93-71de9",
  storageBucket: "project-93-71de9.appspot.com",
  messagingSenderId: "836508662828",
  appId: "1:836508662828:web:d64c91b58296e639d96589"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 user_name = localStorage.getItem("user_name");


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
