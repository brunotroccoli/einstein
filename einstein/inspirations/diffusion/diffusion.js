// ............................................
// ............................................

// ART DIRECTION

// ............................................
// ............................................
var PrimaryColor1 = localStorage.getItem("PrimaryColor1Key");
var PrimaryColor2 = localStorage.getItem("PrimaryColor2Key");
var PrimaryColor3 = localStorage.getItem("PrimaryColor3Key");
var PrimaryColor4 = localStorage.getItem("PrimaryColor4Key");
var PrimaryColor5 = localStorage.getItem("PrimaryColor5Key");

const aiColor = [];
aiColor[0] = PrimaryColor1;
aiColor[1] = PrimaryColor2;
aiColor[2] = PrimaryColor3;
aiColor[3] = PrimaryColor4;
aiColor[4] = PrimaryColor5;
aiColor[5] = "transparent";
var aiSelectPrimaryColor1 = Math.floor(Math.random() * aiColor.length);
var aiSelectPrimaryColor2 = Math.floor(Math.random() * aiColor.length);
var aiSelectPrimaryColor3 = Math.floor(Math.random() * aiColor.length);
var aiSelectPrimaryColor4 = Math.floor(Math.random() * aiColor.length);
var aiSelectPrimaryColor5 = Math.floor(Math.random() * aiColor.length);

// ............................................
// ............................................

// CANVAS

// ............................................
// ............................................
const aiCanvasColor = [];
aiCanvasColor[0] = PrimaryColor1;
aiCanvasColor[1] = PrimaryColor2;
aiCanvasColor[2] = PrimaryColor3;
aiCanvasColor[3] = PrimaryColor4;
aiCanvasColor[4] = PrimaryColor5;
var aiSelectBackgroundColor = Math.floor(Math.random() * aiCanvasColor.length);

var artboard = document.getElementById("artboard");
var ctxArtboard = artboard.getContext('2d');
artboard.width  = 1080;
artboard.height = 1080;
artboard.style.backgroundColor = aiColor[aiSelectBackgroundColor];

var element = document.getElementById("element");
var ctxElement = element.getContext('2d');
var ctxElementX = element.getContext('2d');
element.width  = 1080;
element.height = 1080;

// ............................................
// ............................................

// AI GENERATED ART

// ............................................
// ............................................
RenderGradient();
RenderOverlay();
RefineFx();

// ............................................
// ............................................

// ELEMENT

// ............................................
// ............................................
function RenderElement(){
   var thumbnail = localStorage.getItem('MainElement');
    const previewImage = document.getElementById('preview');

    if (thumbnail) {
        previewImage.setAttribute('src', thumbnail);
    } else {
        previewImage.setAttribute('src', 'einstein/favicon.png');
    }

    elementTarget = new Image();
    elementTarget.src = thumbnail;
    elementTarget.onload = () =>{
        var width = elementTarget.naturalWidth; 
        var height = elementTarget.naturalHeight;

        RefineLight();
        ctxElement.translate(artboard.width/2, artboard.height/2);
        ctxElement.drawImage(elementTarget, -elementTarget.width/2, -elementTarget.height/2, width, height);
        ctxElement.translate(-artboard.width/2,-artboard.height/2);
    }
}

// ............................................
// ............................................

// REFINE

// ............................................
// ............................................
function RefineLight(){
    ctxElement.filter = 'blur(90px)';
    ctxElement.fillStyle = aiColor[aiSelectPrimaryColor3];
    ctxElement.beginPath();
    ctxElement.arc(540, 600, 380, 0, Math.PI*2, true);
    ctxElement.fill()
    ctxElement.filter = 'blur(0px)';
}
function RefineFx(){
    elementFx = new Image();
    elementFx.src = "einstein/inspirations/diffusion/particle001.png";
    elementFx.onload = () =>{
        RenderElement();
        ctxElement.filter = 'opacity(0)';
        ctxElement.drawImage(elementFx, 0, 0, 1080, 1080);
    }
}

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
    gradient.addColorStop(0,  aiColor[aiSelectPrimaryColor1]);
    gradient.addColorStop(1,  aiColor[aiSelectPrimaryColor2]);
    ctxArtboard.fillStyle = gradient;
    ctxArtboard.fillRect(0, 0, 1080, 1080);

    console.log("Gradient Angle 1: ", aiGradientAngle1);
    console.log("Gradient Angle 2: ", aiGradientAngle2);
    console.log("Gradient Angle 3: ", aiGradientAngle3);
    console.log("Gradient Angle 4: ", aiGradientAngle4);

    console.log("Gradient Color 1: ", aiColor[aiSelectPrimaryColor1]);
    console.log("Gradient Color 2: ", aiColor[aiSelectPrimaryColor2]);
}