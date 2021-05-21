
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyChzGvtYCWInHYy_B_ScWVTANGwM0UYnTA",
      authDomain: "kwitter-447a8.firebaseapp.com",
      databaseURL:"https://kwitter-447a8-default-rtdb.firebaseio.com",
      projectId: "kwitter-447a8",
      storageBucket: "kwitter-447a8.appspot.com",
      messagingSenderId: "796183655260",
      appId: "1:796183655260:web:9ea06a8b57a724f98a8799"
      
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);



username = localStorage.getItem("Userkey");

document.getElementById("username").innerHTML = "Welcome  " +  username + "!!";

function AddRoom()
{
roomname = document.getElementById("room_name").value;
firebase.database().ref("/").child(roomname).update(
      { purpose : "learning to add rooms in database" });
      localStorage.setItem("Room Name" , roomname);
      window.location = "kwitter_group.html";
}

function LogOut()
{
      localStorage.removeItem("Userkey");
      localStorage.removeItem("Room Name");
      window.location = "index.html";
}
function getData()
 { firebase.database().ref("/").on('value', function(snapshot) { 
     document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) {
          childKey = childSnapshot.key; Room_names = childKey; console.log("Room Name - " + Room_names); 
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
           document.getElementById("output").innerHTML += row; }); }); } 
           
           getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room name",name);
window.location = "kwitter_group.html";
}

