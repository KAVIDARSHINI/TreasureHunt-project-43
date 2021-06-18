const accessCode1 = "GILLS";
const accessCode2 = "FINS";
const accessCode3 = "EIGHT";
const accessCode4 = "DOVE";

function clues() {
    push();
    fill("black")
    textSize(15);
    stroke("blue")
    text("L G S I L", 100,50);
    pop();
    textSize(15.5);
    fill("blue")
    text("Hint: Most fish use _____ to breathe underwater.", 100,70)
// add code for displaying rest of the names and the hints.
    fill("black")
    textSize(15.5);
    stroke("blue");
    text("I F S N", 600,400);
    fill("blue");
    text("Hint: What helps fish to balance and swim?",550,425);

    fill("black");
    textSize(15.5);
    text("I E H T G", 100,250);
    fill("YELLOW");
    text("Hint: How many legs does an octopus have?", 100 , 270);

    fill("black");
    textSize(15.5);
    stroke("blue")
    text("O E D V", 700,20);
    fill("blue");
    text("Hint: Which bird is a symbol for peace?", 700 , 40);

}