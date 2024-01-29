
//AÑADE TUS ENLACES DE FIREBASE

// Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyCPYQNk--qynWsM_5kyBuquckIX71DCmg0",
      authDomain: "amog-us-1eb85.firebaseapp.com",
      databaseURL: "https://amog-us-1eb85-default-rtdb.firebaseio.com",
      projectId: "amog-us-1eb85",
      storageBucket: "amog-us-1eb85.appspot.com",
      messagingSenderId: "544580328847",
      appId: "1:544580328847:web:59c63596958aa2b4857ffa"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
document.getElementById("user_name").innerHTML = "hola "+user_name+" !";
function add_Room(){
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({ purpose: "adding room name"});
localStorage.setItem("room_name",room_name);
window.location.replace("kwitter_page.html");
}

function getRoom() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room_name - "+ Room_names);
                  row = "<div class= 'room_name' id=" +Room_names+ " onclick= 'redirectToRoomName(this.id)' >#"+Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;

                  //Final del código
            });
      });
}
getRoom();
function redirectToRoomName(Room_names){
      console.log (Room_names);
      localStorage.setItem("room_name" , Room_names);
      window.location = "kwitter_page.html";
}