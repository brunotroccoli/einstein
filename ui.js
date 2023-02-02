// imagine
function Imagine(){ window.location.reload(); }
ImagineMotion();
function ImagineMotion(){
    setTimeout(function(){ $(".imagine-motion").fadeOut(300); }, 1000);
}

// tools
function MachineLearning(){
    $(".machine-learning").animate({ top: '0px'}, 400); 
    $(".machine-learning-content").delay(500).fadeIn();
}
function CloseMachineLearning(){ 
    $(".machine-learning").animate({ top: '-3000px'}, 400); 
    $(".machine-learning-content").hide();
}
function Help(){
    alert("Em breve");
}
function Donate(){
    window.location.href = "Dashboard";
}

// keyboard functions
$('html').keyup(function(e){
    // remove object when press delete
    if(e.keyCode == 46) {
        canvas.remove(canvas.getActiveObject());
    }

    // deselect object when press esc
    if(e.keyCode == 27) {
        CloseMachineLearning();
    }

    // imagine other art when press arrow right
    if(e.keyCode == 39) {
        Imagine();
    }
});

// render image to png
function Render() {
    var artboardCanvas = document.getElementById('artboard');
    var elementCanvas = document.getElementById('element');

    var bottleContext = artboardCanvas.getContext('2d');
    bottleContext.drawImage(elementCanvas, 0, 0);

    var dataURL = artboardCanvas.toDataURL("image/png");
    var link = document.createElement('a');
    link.download = "EinsteinExport.png";
    link.href = artboardCanvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    link.click();
}