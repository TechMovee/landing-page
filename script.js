var botaoPlay = document.getElementById("ButtonPlayStore");
var botaoApp = document.getElementById("ButtonAppStore");
var botaoMenu = document.getElementById("buttonAdm");
var botaoTrocarBackground = document.getElementById("changeBackgroundButton");

botaoPlay.addEventListener("click", function () {
    window.open("https://play.google.com", "_blank");
});

botaoApp.addEventListener("click", function () {
    window.open("https://apple.com/app-store/", "_blank");
});

botaoMenu.addEventListener("click", function () {
    window.location.replace("telaLoginCadeado1.html");
});

// botaoTrocarBackground.addEventListener("click", function () {
    
//     var currentURL = window.location.href;
//     console.log("The current URL is: " + currentURL);
 
//     const fileName = window.location.href.split("/").pop();
//     if (fileName === "index.html"){ 
//        window.location.replace("indexEscuro.html");
//     }else{
//       window.location.replace("index.html");
//     }
   
// });




