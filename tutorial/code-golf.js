var names = ["Hole in one!", "Eagle", "Birdie", "Par"]

function golfScore(par, strokes){
    var score;

    if (strokes === 1){
        score = "Hole in one!";
    } else if (strokes <= (par-2)){
        score = "Eagle."
    } else if (strokes === (par-1)){
        score = "Birdie."
    } else if (strokes === par){
        score = "Par."
    } else if (strokes === (par+1)){
        score = "Bogey."
    } else if (strokes === (par+2)){
        score = "Double Bogey."
    } else {
        score = "Go Home...";
    }
    return score;
}

console.log("Hole in one? - " + golfScore(5,1));
console.log("Eagle? - " + golfScore(5, 2));
console.log("Eagle? - " + golfScore(5, 3));
console.log("Birdie? - " + golfScore(5, 4));
console.log("Par? - " + golfScore(5,5));
console.log("Bogey? - " + golfScore(5,6));
console.log("Double Bogey? - " + golfScore(5,7));
console.log("What now? - " + golfScore(5,8));


