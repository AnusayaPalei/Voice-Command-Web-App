x=0;
y=0;
draw_circle="";
draw_rectangle="";

var SpeechRecognition= window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML="System is Listening Please Speak";
    recognition.start();
}
recognition.onresult= function(event){
    console.log(event);
    content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("status").innerHTML="Speech has Been Recognised as: "+ content;
    if(content=="circle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Drawing Circle!"
        draw_circle="set"
    }
    if(content=="rectangle"){
        x=Math.floor(Math.random()*800);
        y=Math.floor(Math.random()*500);
        document.getElementById("status").innerHTML="Drawing Rectangle!"
        draw_rectangle="set";
    }
}

function setup(){
    canvas=createCanvas(900,600);
}

function draw(){
    if(draw_circle=="set"){
        radius=Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML="Circle is Drawn";
        draw_circle="";
    }
    if(draw_rectangle=="set"){
        rect(x,y,80,40);
        document.getElementById("status").innerHTML="Rectangle is Drawn";
        draw_rectangle="";
    }
}
