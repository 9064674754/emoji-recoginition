Webcam.set({
  width:350,
  height:300,
  image_format:'png',
  png_quality:100
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
  Webcam.snap(function(data_uri){
      document.getElementById("result").innerHTML='<img id="captured_img" src="'+data_uri+'"/>';
  })
}
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/HMdn4lgyK/model.json',modelLoaded);

function modelLoaded(){
  console.log("model Loaded");
}
function check()
  {
    
    img = document.getElementById("captured_img");
    classifier.classify(img, gotResult);
  }


function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("potatopc").innerHTML = " ⠀ Prediction : "+results[0].label +" ⠀ ";
   
  }
}
