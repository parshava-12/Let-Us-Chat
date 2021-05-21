function AddUser()
{
    username = document.getElementById("username").value;
    localStorage.setItem("Userkey" , username);
    window.location = "kwitter_room.html";
}