let images = new Array();
images.push("public/images/four.svg");
images.push("public/images/five.svg");
images.push("public/images/six.svg");
images.push("public/images/one.svg");
images.push("public/images/two.svg");
images.push("public/images/three.svg");


function myImages() {
    let setRandom = Math.floor(Math.random() * images.length);

    document.getElementById("results").src = images[setRandom];
}