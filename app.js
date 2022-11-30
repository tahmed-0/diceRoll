let images = new Array();
images.push("public/images/four.svg");
images.push("public/images/five.svg");
images.push("public/images/six.svg");
images.push("public/images/one.svg");
images.push("public/images/two.svg");
images.push("public/images/three.svg");

let keepResults = [];
let assignNum = 0;
let score = document.createElement("score");

function myImages() {
    let setRandom = Math.floor(Math.random() * images.length);

    document.getElementById("results").src = images[setRandom];
    console.log(images[setRandom]);

    //assigning each image to corresponding values
    switch (setRandom) {
        case 0:
            assignNum = 4;
            keepResults.push(assignNum);
            break;
        case 1:
            assignNum = 5;
            keepResults.push(assignNum);
            break;

        case 2:
            assignNum = 6;
            keepResults.push(assignNum);
            break;

        case 3:
            assignNum = 1;
            keepResults.push(assignNum);
            break;

        case 4:
            assignNum = 2;
            keepResults.push(assignNum);
            break;

        case 5:
            assignNum = 3;
            keepResults.push(assignNum);
            break;

    }


    //shows the results of all the rice rolls
    for (let i = 0; i < keepResults.length; i++) {
        document.getElementById("score").innerHTML = keepResults;
    }


};







