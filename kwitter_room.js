const firebaseConfig = {
      apiKey: "AIzaSyD0NcBApDDYzf7g84qelaGV0ZfVd08wqIk",
      authDomain: "app-kwitter.firebaseapp.com",
      databaseURL: "https://app-kwitter-default-rtdb.firebaseio.com",
      projectId: "app-kwitter",
      storageBucket: "app-kwitter.appspot.com",
      messagingSenderId: "491403752577",
      appId: "1:491403752577:web:bd2e01ebf8fe7f154b0980"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
    
    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "¡Hola " + user_name + "!";

    function addRoom()
    {
          room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
          });

          localStorage.setItem("room_name", room_name);

          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
     console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names +"<div><hr>";
     document.getElementById("output").innerHTML += row;
      //Final del código
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "index.html";
}