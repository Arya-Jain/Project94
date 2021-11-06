const firebaseConfig = {
  apiKey: "AIzaSyC-ijIya2bRRAgmVCzykJkcsHqKODgeKhI",
  authDomain: "project-97-90cfd.firebaseapp.com",
  databaseURL: "https://project-97-90cfd-default-rtdb.firebaseio.com",
  projectId: "project-97-90cfd",
  storageBucket: "project-97-90cfd.appspot.com",
  messagingSenderId: "61484326570",
  appId: "1:61484326570:web:05706f7091b99d69463ad3",
  measurementId: "G-BQXT94TEXJ"
};

  firebase.initializeApp(firebaseConfig);

  
  user_name= localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML= "Welcome <b style='color:green;'>" + user_name+"</b>!";
  document.getElementById("p").innerHTML="Hello <b>"+user_name+"</b> ! Do you know how many trees get cut everyday in order to make house or for humans benefit we  are forgotten about our mother nature we ned to protect our planet So ,  "+user_name+" will you help us in our goal to save our planet If yes click on continue if no then Thank you for visting our website"
 
function logout(){
 
    localStorage.removeItem("user_name") ;
    window.location.replace("index.html") ; 
  
}

function move(){
  window.location="plant_room.html";

}

function notIntrested(){
  window.location="index.html";
}
 