var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("text_box").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run(event) {

    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);


    document.getElementById("text_box").innerHTML = Content;
    if(Content =="take my selfie")
    {
        console.log("taking selfie ---");
        speak();
    }
}

function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Taking your selfie in 5 seconds";
    
    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);//uttherThis is just a varible
    Webcam.attach(camera);

    setTimeout(function(){
        take_snapshot();
        save();
    }, 5000);
}

Webcam.set({
width:360,
height:250,
image_format : 'png',
png_quality:90
});
camera = document.getElementById("camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie" src="'+data_uri+'">';
    })
}

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie").src ;
    link.href = image;
    link.click();
}
