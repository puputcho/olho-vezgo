rightEyeX = 0 ,leftEyeY = 0,leftEyeX = 0, rightEyeY = 0;
function preload(){
    img = loadImage('Olhijnhp.png')
}
function setup() {
 canvas = createCanvas(300,300);
 canvas.center();   
 webcam = createCapture(VIDEO);
 webcam.size(300,300);
 webcam.hide() ;
 posenet = ml5.poseNet(webcam, modelLoad);
 posenet.on('pose', gotPoses);
}
function draw() {
    image(webcam, 0,0, 300,300);
    image(img, rightEyeX, rightEyeY, 30,30);
    image(img, leftEyeX, leftEyeY, 30,30);
}
function tirarFoto() {
    save('filtrinho genial.png')
}
 function modelLoad() {
    console.log('Modelo Carregado :)');
 }
 function gotPoses(results) {
    if (results.lenght > 0) {
        console.log(results);
        console.log('leftEyeX = ' + results[0].pose.leftEye.x);
        console.log('leftEyey = ' + results[0].pose.leftEye.y);
        console.log('rightEyeX = ' + results[0].pose.rightEye.x);
        console.log('rightEyey = ' + results[0].pose.rightEye.y);
        rightEyeX = results[0].pose.rightEye.x;
        rightEyey = results[0].pose.rightEye.y;
        leftEyeX = results[0].pose.leftEye.x;
        leftEyey = results[0].pose.leftEye.y;

    }
 }