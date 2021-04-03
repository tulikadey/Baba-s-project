
var name_araay=["delgate1","delgate2","delgate3","delgate4","delgate5","delgate6","delgate7","delgate8","delgate9","delgate10","delgate11","delgate12","delgate13","delgate14","delgate15","delgate16","delgate17","delgate18","delgate19","delgate20","delgate21","delgate22","delgate23","delgate24","delgate25","delgate26","delgate27","delgate28","delgate29","delgate30","delgate31","delgate32","delgate33","delgate34","delgate35","delgate36","delgate37","delgate38","delgate39","delgate40"];
var password_araay=["Password300","Password301","Password302","Password303","Password304","Password305","Password306","Password307","Password308","Password309","Password310","Password311","Password312","Password313","Password314","Password315","Password316","Password317","Password318","Password319","Password320","Password321","Password322","Password323","Password324","Password325","Password326","Password327","Password328","Password329","Password330","Password331","Password332","Password333","Password334","Password335","Password336","Password337","Password338","Password339"];


function login(){
    var n1=document.getElementById("user_name").value;
    var n2=document.getElementById("n2").value;
    for(i=0;i<30;i++){
if(n1==name_araay[i] && n2==password_araay[i]){
    window.location="home.html"; 
}
    }
    var user_name=document.getElementById("Email").value;
    localStorage.setItem("user_name",user_name);
}
  
    function quiz(){
        window.location="test.html";  
    }
    function logout(){
        window.location="index.html";
    }
    function home(){
        window.location="home.html";
    }
    function booth(){
        window.location="booth.html";
    
    }
    function abstract(){
        window.location="abstarct.html";
    
    }
    function agenda(){
        window.location="agenda.html";
    }
    var firebaseConfig = {
        apiKey: "AIzaSyA3K_AeRQ0x3KshY6_za5D1QKRfP-N9LJo",
        authDomain: "baba-a-project.firebaseapp.com",
        databaseURL: "https://baba-a-project-default-rtdb.firebaseio.com",
        projectId: "baba-a-project",
        storageBucket: "baba-a-project.appspot.com",
        messagingSenderId: "1016331047369",
        appId: "1:1016331047369:web:32180361c290edfada5818",
        measurementId: "G-KYGGQ0XZDC"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      
      
      
      
        function getData() { 
          firebase.database().ref("/").on('value', function(snapshot) { 
            document.getElementById("output").innerHTML = ""; 
            snapshot.forEach(function(childSnapshot) { 
              childKey  = childSnapshot.key; 
              childData = childSnapshot.val(); 
              if(childKey != "purpose") {
            firebase_message_id = childKey;
            message_data = childData;
            //Start code
            document.getElementById("output").innerHTML += "<div  class='messagebox'>"+message_data['message']+"</div>"
      //End code
        }}); }); }
      getData();
      
      
      
      
       
      function send(){
        var message= document.getElementById("message").value;
        firebase.database().ref("/").push({
            
              message:message,
            
        });
           document.getElementById("message").value=" ";
      }
     
  
          

















  