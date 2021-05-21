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

  
function LogOut()
{
      localStorage.removeItem("Userkey");
      localStorage.removeItem("Room Name");
      window.location = "index.html";
}

username = localStorage.getItem("Userkey");
roomname = localStorage.getItem("Room Name");

function send()
{
  msg = document.getElementById("type_message").value;
  firebase.database().ref("/").child(roomname).push({
      name:username,
      message:msg,
      like:0
  });
  document.getElementById("type_message").value = "";
}

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) 
{
   document.getElementById("output").innerHTML = ""; 
snapshot.forEach(function(childSnapshot) 
{ 
  childKey  = childSnapshot.key; 
  childData = childSnapshot.val();
   if(childKey != "purpose") 
{
  firebase_message_id = childKey;
  message_data = childData;
  //Start code
       console.log(firebase_message_id);
       console.log(message_data);
       name = message_data['name'];
       message = message_data['message'];
       like = message_data['like'];
       console.log(name);
       console.log(message);
       console.log(like);
       name_with_tag = "<h4>" +name+"<img class = 'user_tick' src ='tick.png'>";
       message_with_tag = "<h4 class = 'message_h4'>"+ message +"</h4>";
       like_with_tag = "<button class = 'btn btn-primary' id = "+firebase_message_id+" onclick = 'updateLike(this.id)' value ="+like+" >";
      span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up' >Like: "+ like +"</span></button><hr>";
       row = name_with_tag + message_with_tag +like_with_tag + span_with_tag;
        document.getElementById("output").innerHTML += row;
//End code
} });  }); }
getData();

function updateLike(message_id)
{
  button_id = message_id;
  likes = document.getElementById(message_id).value;
  update_likes = Number(likes) +1;
  console.log(update_likes);
  firebase.database().ref(roomname).child(message_id).update({
    like:update_likes
  });
}