function greet() {
    window.alert("Hello everyone");

}

function greet2() {
    window.alert("Test");

}
function init() {
    // Task 1
    document.getElementById("premier").src = "car1.png";

    //Taak 2

    document.getElementById("container").getElementsByTagName("img")[0].src = "flower1.png";
    document.getElementById("container").getElementsByTagName("img")[1].src = "flower2.png";
    document.getElementById("container").getElementsByTagName("img")[2].src = "flower1.png";
    document.getElementById("container").getElementsByTagName("img")[3].src = "flower2.png";
    document.getElementById("container").getElementsByTagName("img")[4].src = "flower1.png";

    //Task 3

    document.getElementById("second").getElementsByTagName("img")[0].src = "flower2.png";
    document.getElementById("second").getElementsByTagName("img")[1].src = "flower1.png";
    document.getElementById("second").getElementsByTagName("img")[2].src = "flower2.png";
    document.getElementById("second").getElementsByTagName("img")[3].src = "flower1.png";
    document.getElementById("second").getElementsByTagName("img")[4].src = "flower2.png";
    document.getElementById("second").getElementsByTagName("img")[5].src = "flower1.png";

    //Task 4
    document.getElementById("third").getElementsByTagName("img")[0].src = "flower2.png";

    //Task 5


    let spans =  document.getElementById("rainbow").getElementsByTagName("span");
        let color = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];

    for (var i = spans.length - 1; i >= 0; i--) {
        spans[i].style.color = color[i];
    }

    // Task 6

    var changeSrc = function(event) {
        if (event.target.src) {
            let filename = event.target.src.replace(/^.*[\\\/]/, '');
            if (filename === "flower1.png") {
                event.target.src = "flower2.png";
            }
            else {
                event.target.src = "flower1.png";
            }
        }
    }

    document.getElementById("event").addEventListener("mouseover", changeSrc);

}