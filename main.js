function start(){
    navigator.mediaDevices.getUserMedia();
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/yZXok-uMp/model.json",model_ready);
}
function model_ready() {
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }}