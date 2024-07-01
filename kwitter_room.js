var firebaseConfig = {
      apiKey: "AIzaSyCXiARqq81vsOil_p-UcBqgQyX4KQ8kito",
      authDomain: "kwitter-b0b6e.firebaseapp.com",
      databaseURL: "https://kwitter-b0b6e-default-rtdb.firebaseio.com",
      projectId: "kwitter-b0b6e",
      storageBucket: "kwitter-b0b6e.appspot.com",
      messagingSenderId: "252449786369",
      appId: "1:252449786369:web:50945cad57da0c84610e00"
    };
    
  firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
