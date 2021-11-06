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

 plant_name= document.getElementById("plant_name").value;
 localStorage.setItem("plant_name",plant_name);

 function addplant(){
    
        plant_name= document.getElementById("plant_name").value;

        firebase.database().ref("/").child(room_name).update({
              purpose:"adding plant name"
        });

        
        window.location="user_plant.html";
 
 }