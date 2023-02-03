const firebaseConfig = {
  apiKey: "AIzaSyBJQUK9h_HacqbDI4RIWmbV4q_pdnMjh_o",
  authDomain: "kwitter2-46e5f.firebaseapp.com",
  databaseURL: "https://kwitter2-46e5f-default-rtdb.firebaseio.com",
  projectId: "kwitter2-46e5f",
  storageBucket: "kwitter2-46e5f.appspot.com",
  messagingSenderId: "722447698421",
  appId: "1:722447698421:web:e7dd58ff68b149e39e38bc",
  measurementId: "G-8T6GL4V4QB
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var username = localStorage.getItem("Username")
document.getElementById("welcome").innerHTML = `Welcome ${username}!`

/*function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
*/

function logout() {
      localStorage.removeItem("Username")
      window.location = "index.html"
}
