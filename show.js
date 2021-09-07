function show_hide(){
document.getElementById("image").style.display="inline";
const audio = new Audio();
audio.src = "bonk.mp3"
audio.play();
}

function show_hide2(){
    document.getElementById("image2").style.display="inline";
}

function showPage() {
    document.getElementById("loader").style.display="none";
    document.getElementById("myDiv").style.display="block";
}

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}