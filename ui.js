// imagine
function Imagine(){ window.location.reload(); }
function Clear(){
    localStorage.clear();
    window.location.reload();
}
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
function Support(){
    window.location.href = "support.html";
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

// Store image on browser after upload
const input = document.getElementById('thumbnail');

input.addEventListener('change', (event) => {
    const image = event.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(image);

    reader.addEventListener('load', () => {
        localStorage.setItem('thumbnail', reader.result);
    });
});

// show name of file in upload element
document.addEventListener('DOMContentLoaded', () => {
    // 1. Display file name when select file
    let fileInputs = document.querySelectorAll('.file.has-name')
    for (let fileInput of fileInputs) {
        let input = fileInput.querySelector('.file-input')
        let name = fileInput.querySelector('.file-name')
        input.addEventListener('change', () => {
            let files = input.files
            if (files.length === 0) {
                name.innerText = 'No file selected'
            } else {
                name.innerText = files[0].name
            }
        })
    }

    // 2. Remove file name when form reset
    let forms = document.getElementsByTagName('form')
    for (let form of forms) {
        form.addEventListener('reset', () => {
            console.log('a')
            let names = form.querySelectorAll('.file-name')
            for (let name of names) {
                name.innerText = 'No file selected'
            }
        })
    }
});