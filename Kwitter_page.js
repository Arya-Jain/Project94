const firebaseConfig = {
    apiKey: "AIzaSyCuQN9cONclBtbtEr4MMcjl3KawpaEieug",
    authDomain: "kwitter-project-63e9e.firebaseapp.com",
    databaseURL: "https://kwitter-project-63e9e-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-63e9e",
    storageBucket: "kwitter-project-63e9e.appspot.com",
    messagingSenderId: "176951744426",
    appId: "1:176951744426:web:c4c2ce8372a66970db7dd3",
    measurementId: "G-W5N7PCPC26"
  };

  firebase.initializeApp(firebaseConfig);

  user_name= localStorage.getItem("user_name") ;
    room_name= localStorage.getItem("room_name") ;

function send(){
     msg = document.getElementById("msg").value;

     firebase.database().ref(room_name).push({
           name:user_name,
           message:msg,
           like:0
     });

     document.getElementById("msg").value="";
}



function logout(){
    
        localStorage.removeItem("user_name") ;
        localStorage.removeItem("room_name") ;
        window.location.replace("index.html") ;   
      
}