rightEyeX = 0 ,leftEyeY = 0,leftEyeX = 0, rightEyeY = 0, rightShoulderY = 0,rightShoulderX = 0;
function preload(){
    img = loadImage('Olhijnhp.png');
    img2 = loadImage('Amogus_Template (1).webp');
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
    image(img2, rightShoulderX,rightShoulderY, 50,50)
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
        rightEyeX = results[0].pose.rightEye.x - 15;
        rightEyeY = results[0].pose.rightEye.y - 15;
        leftEyeX = results[0].pose.leftEye.x - 15;
        leftEyeY = results[0].pose.leftEye.y - 15;
        rightShoulderX = results[0].pose.rightShoulder.x - 15;
        rightShoulderY = results[0].pose.rightShoulder.y - 15;

    }
 }