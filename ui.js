// Reload 
function Imagine(){ window.location.reload(); }
ImagineMotion();
function ImagineMotion(){
    setTimeout(function(){ $(".imagine-motion").fadeOut(300); }, 1000);
}

// Menu
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

// Keyboard functions
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
    
    // open Machine Learning panel when press arrow down
    if(e.keyCode == 40) {
        MachineLearning();
    }
    
        // open Machine Learning panel when press arrow down
    if(e.keyCode == 38) {
        CloseMachineLearning();
    }
    
});

// Render image to png
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
        localStorage.setItem('MainElement', reader.result);
    });
});

// Remove Storage image on browser
function Clear(){
    localStorage.removeItem("MainElement");
    window.location.reload();
}

// Show name of file in upload element
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
            let names = form.querySelectorAll('.file-name')
            for (let name of names) {
                name.innerText = 'No file selected'
            }
        })
    }
});

// Show storage main colors
ShowMainColors();
function ShowMainColors(){
    var PrimaryColor1 = localStorage.getItem("PrimaryColor1Key");
    var PrimaryColor2 = localStorage.getItem("PrimaryColor2Key");
    var PrimaryColor3 = localStorage.getItem("PrimaryColor3Key");
    var PrimaryColor4 = localStorage.getItem("PrimaryColor4Key");
    var PrimaryColor5 = localStorage.getItem("PrimaryColor5Key");
    document.getElementById("addPrimaryColor1").value = PrimaryColor1;
    document.getElementById("addPrimaryColor2").value = PrimaryColor2;
    document.getElementById("addPrimaryColor3").value = PrimaryColor3;
    document.getElementById("addPrimaryColor4").value = PrimaryColor4;
    document.getElementById("addPrimaryColor5").value = PrimaryColor5;
}

// Storage variables with color HEX on browser
function StorageColors(){
    window.location.reload();

    let storagePrimaryColor1 = document.getElementById("addPrimaryColor1").value;
    let storagePrimaryColor2 = document.getElementById("addPrimaryColor2").value;
    let storagePrimaryColor3 = document.getElementById("addPrimaryColor3").value;
    let storagePrimaryColor4 = document.getElementById("addPrimaryColor4").value;
    let storagePrimaryColor5 = document.getElementById("addPrimaryColor5").value;

    var PrimaryColor1 = storagePrimaryColor1;
    var PrimaryColor2 = storagePrimaryColor2;
    var PrimaryColor3 = storagePrimaryColor3;
    var PrimaryColor4 = storagePrimaryColor4;
    var PrimaryColor5 = storagePrimaryColor5;

    localStorage.setItem("PrimaryColor1Key", PrimaryColor1);
    localStorage.setItem("PrimaryColor2Key", PrimaryColor2);
    localStorage.setItem("PrimaryColor3Key", PrimaryColor3);
    localStorage.setItem("PrimaryColor4Key", PrimaryColor4);
    localStorage.setItem("PrimaryColor5Key", PrimaryColor5);
}