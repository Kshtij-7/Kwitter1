const firebaseConfig = {
  apiKey: "AIzaSyCydHsiIj9THEvsEeaJ6d1XmzgtkgUvIdI",
  authDomain: "kwitter-72e6d.firebaseapp.com",
  databaseURL: "https://kwitter-72e6d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kwitter-72e6d",
  storageBucket: "kwitter-72e6d.appspot.com",
  messagingSenderId: "37474281507",
  appId: "1:37474281507:web:801ecf18006e4006366996",
  measurementId: "G-5HN1LTNTK5"
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