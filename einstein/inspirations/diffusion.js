// ............................................
// ............................................

// ART DIRECTION

// ............................................
// ............................................

const PrimaryColor = [];
PrimaryColor[0] = "#000000";
PrimaryColor[1] = "#662D91";
PrimaryColor[2] = "#FF33A3";
PrimaryColor[3] = "#03FF6E";
PrimaryColor[4] = "#F3F6F7";
var aiSelectPrimaryColor1 = Math.floor(Math.random() * PrimaryColor.length);
var aiSelectPrimaryColor2 = Math.floor(Math.random() * PrimaryColor.length);

// ............................................
// ............................................

// CANVAS

// ............................................
// ............................................
var artboard = document.getElementById("artboard");
var ctxArtboard = artboard.getContext('2d');
artboard.width  = 1080;
artboard.height = 1080;
artboard.style.backgroundColor = '#00bbee';

var element = document.getElementById("element");
var ctxElement = element.getContext('2d');
element.width  = 1080;
element.height = 1080;

// ............................................
// ............................................

// AI GENERATED ART

// ............................................
// ............................................
RenderGradient();
RenderOverlay();
RenderElement();

// ............................................
// ............................................

// ELEMENT

// ............................................
// ............................................
function RenderElement(){
    const thumbnail = localStorage.getItem('thumbnail');
    const previewImage = document.getElementById('preview');

    if (thumbnail) {
        previewImage.setAttribute('src', thumbnail);
    } else {
        previewImage.setAttribute('src', 'default.jpg');
    }

    elementTarget = new Image();
    elementTarget.src = thumbnail;
    elementTarget.onload = () =>{
        var width = elementTarget.naturalWidth; 
        var height = elementTarget.naturalHeight;
        ctxElement.translate(artboard.width/2, artboard.height/2);
        ctxElement.drawImage(elementTarget, -elementTarget.width/2, -elementTarget.height/2, width, height);
        ctxElement.translate(-artboard.width/2,-artboard.height/2);
    }
}

// ............................................
// ............................................

// DRAWS

// ............................................
// ............................................
/* <?php

$ai_Draw1PosX = rand(2, 1080);
$ai_Draw1PosY = rand(2, 1080);
$ai_Draw2PosX = rand(2, 1080);
$ai_Draw2PosY = rand(2, 1080);

?>

    function RenderDraws(){
    ctxElement.fillStyle = "<?php echo $ai_SelectColor1 ?>"; //red
    ctxElement.beginPath();
    ctxElement.arc(<?php echo $ai_Draw1PosX ?>, <?php echo $ai_Draw1PosY ?>, 250, 0, Math.PI*2,true);
    ctxElement.fill();

    ctxElement.fillStyle = "<?php echo $ai_SelectColor2 ?>"; //blue
    ctxElement.beginPath();
    ctxElement.arc(<?php echo $ai_Draw2PosX ?>, <?php echo $ai_Draw2PosY ?>, 180, 0, Math.PI*2,true);
    ctxElement.fill();
} */

// ............................................
// ............................................

// OVERLAY IMAGE

// ............................................
// ............................................
/* values

"normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"

*/
const GlobalAlpha = [];
GlobalAlpha[0] = "0.1";
GlobalAlpha[1] = "0.2";
GlobalAlpha[2] = "0.3";
GlobalAlpha[3] = "0.4";
GlobalAlpha[4] = "0.5";
const aiSelectGlobalAlpha = Math.floor(Math.random() * GlobalAlpha.length);

const BlendMode = [];
BlendMode[0] = "normal";
BlendMode[1] = "multiply";
BlendMode[2] = "screen";
const aiSelectBlend = Math.floor(Math.random() * BlendMode.length);

function RenderOverlay(){
    imageOverlay = new Image();
    imageOverlay.crossOrigin = 'anonymous';
    imageOverlay.src = 'https://picsum.photos/1200/1200';
    imageOverlay.onload = function (e)
    {
        ctxArtboard.save();
        ctxArtboard.globalAlpha = 0.3;
        ctxArtboard.globalCompositeOperation = aiSelectBlend, BlendMode[aiSelectBlend];
        ctxArtboard.drawImage(imageOverlay, 0, 0, 1200, 1200 * imageOverlay.height / imageOverlay.width);
        ctxArtboard.restore();
    }
}
console.log("Global alpha: ", aiSelectGlobalAlpha, GlobalAlpha[aiSelectGlobalAlpha]);
console.log("Blend mode: ", aiSelectBlend, BlendMode[aiSelectBlend]);

// ............................................
// ............................................

// GRADIENT BACKGROUND

// ............................................
// ............................................
function RenderGradient(){
    const aiGradientAngle1 = Math.floor(Math.random() * 1080);
    const aiGradientAngle2 = Math.floor(Math.random() * 1080);
    const aiGradientAngle3 = Math.floor(Math.random() * 1080);
    const aiGradientAngle4 = Math.floor(Math.random() * 1080);

    var gradient = ctxArtboard.createLinearGradient(aiGradientAngle1, aiGradientAngle2, aiGradientAngle3, aiGradientAngle4);
    gradient.addColorStop(0,  PrimaryColor[aiSelectPrimaryColor1]);
    gradient.addColorStop(1,  PrimaryColor[aiSelectPrimaryColor2]);
    ctxArtboard.fillStyle = gradient;
    ctxArtboard.fillRect(0, 0, 1080, 1080);

    console.log("Gradient Angle 1: ", aiGradientAngle1);
    console.log("Gradient Angle 2: ", aiGradientAngle2);
    console.log("Gradient Angle 3: ", aiGradientAngle3);
    console.log("Gradient Angle 4: ", aiGradientAngle4);

    console.log("Gradient Color 1: ", PrimaryColor[aiSelectPrimaryColor1]);
    console.log("Gradient Color 2: ", PrimaryColor[aiSelectPrimaryColor2]);
}