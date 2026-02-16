function initializeGallery() {
    console.log("Gallery loaded");
    const galleryImages = document.querySelectorAll('.gallery img');
    for (let i = 0; i < galleryImages.length; i++) {
        galleryImages[i].setAttribute('tabindex', '0');
        console.log("Tabindex added to image " + (i + 1));
    }
}

function upDate(previewPic) {
    console.log("upDate triggered");
    console.log(previewPic.alt);
    document.getElementById("image").textContent = previewPic.alt;
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    console.log("undo triggered");
    document.getElementById("image").textContent = "Hover over or focus on an image below to display here.";
    document.getElementById("image").style.backgroundImage = "url('')";
}