const firebaseConfig = {
    apiKey: "AIzaSyD0OV0Nzc0RvZtAfmqrJ2GFi_qOvPGIsPk",
    authDomain: "kwitterhomework-b238d.firebaseapp.com",
    databaseURL: "https://kwitterhomework-b238d-default-rtdb.firebaseio.com",
    projectId: "kwitterhomework-b238d",
    storageBucket: "kwitterhomework-b238d.appspot.com",
    messagingSenderId: "239194977092",
    appId: "1:239194977092:web:0d4487dc8baaa5d7929d11"
  };
  
  const app = initializeApp(firebaseConfig);

  function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });

    localStorage.database.setItem("room_name", room_name);

    window.location = "index.html";
}

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "index.html";
}

function logout() {
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.location = "index.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 console.log("Room Name -" + Room_names);
 row = "<div class='room_name' id='Room_names+' onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
 document.getElementById("output").innerHTML += row;
 });});}
getData();