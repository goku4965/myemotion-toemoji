prediction_1=""
prediction_2=""

Webcam.set({
width:350,
height:350,
image_format:'png',
png_quality:90,
})

camera=document.getElementById("camera");
webcam.attach("camera");

function take_snapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="captured image"  src="'+data_uri+'"/>';
})}

console.log('ml5 version:',ml5.version);
classifier=ml5.image_classifier('https://teachablemachine.withgoogle.com/models/N7AQ9wFy8/model.json',modelready);

function modelLoaded(){
    console.log('Model Loaded');
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data1="First Predidtion is"+prediction_1;
    speak_data2="Second Predidtion is"+prediction_2;
    var utterthis=new SpeechSynthesisUtterance(speak_data1+speak_data2)
    synth.speak(utterthis);
}

function check(){
    img= documet.getElementById('Captured image');
    classifier.classify(img,gotResult);
}

function gotResult(){
    if(errror){
        console.error(error);
    } else{
        console.log(results);
        documet.getElementById("result_emotion_name").innerHTML=results[0].label;
        documet.getElementById("result_emotion_name2").innerHTML=results[1].label;
        prediction_1=results[0].label;
        prediction_2=results[1].label;
        speak();
    }
}