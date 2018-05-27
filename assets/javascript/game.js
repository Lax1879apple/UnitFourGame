var computerRandomNum;
var crystalOneRandomNum;
var crystalTwoRandomNum;
var crystalThreeRandomNum;
var crystalFourRandomNum;

var score;
var win;
var losses;

$(document).ready(function (){
    computerRandomNum = Math.floor((Math.random()*100) + 19);
    
    crystalOneRandomNum = Math.floor(Math.random() * 12);
    crystalTwoRandomNum = Math.floor(Math.random() * 12);
    crystalThreeRandomNum = Math.floor(Math.random() * 12);
    crystalFourRandomNum = Math.floor(Math.random() * 12);

    score = 0;
    win = 0; 
    losses = 0;

    //display computerRandomNum on page 
    $("#randomNumber").text(computerRandomNum);

    //display score on page 
    $("#display").text(score);
    $("#win1").text(win);
    $("#loss1").text(losses);


// crystal-1
$(".img1").click(function(){
    //execute code for cryst
    score = score + crystalOneRandomNum;
    $("#display").text(score );
    if (score == computerRandomNum) {
        win = win + 1;  //win
        $("#win1").text(win);
        reset()        //reseting computerGuess & Crystals randome numbers.
    
        
        
    }
    else if (score > computerRandomNum){  //loss
        losses = losses + 1
        $("#loss1").text(losses);
        reset();
       
    }

    
}); 

// crystal-2
$(".img2").click(function(){
    //execute code for crystal two
    score = score + crystalTwoRandomNum;
    $("#display").text(score);
    if (score == computerRandomNum) {
        win = win + 1;
        $("#win1").text(win)
        reset();
        
        // win
    }
    else if (score > computerRandomNum){
        losses = losses + 1
        $("#loss1").text(losses)
        reset();
       // loss
    }
}); 

// crystal-3
$(".img3").click(function(){
    //execute code for crystal three
    score = score + crystalThreeRandomNum;  
    $("#display").text(score);
    if (score == computerRandomNum) {
        win = win + 1;
        $("#win1").text(win)
        reset();
        
        // win
    }
    else if (score > computerRandomNum){
        losses = losses + 1
        $("#loss1").text(losses)
        reset();
       // loss
    }
        
}); 

// crystal-4
$(".img4").click(function(){
    //execute code for crystal four
    score = score + crystalFourRandomNum;
    $("#display").text(score);
    if (score == computerRandomNum) {
        win = win + 1;
        $("#win1").text(win)
        reset();
        // win
    }
    else if (score > computerRandomNum){
        losses = losses + 1
        $("#loss1").text(losses)
       // loss
       reset();
    }

}); 

});

function reset(){
    computerRandomNum = Math.floor((Math.random()*100) + 19);
    
    crystalOneRandomNum = Math.floor(Math.random() * 12);
    crystalTwoRandomNum = Math.floor(Math.random() * 12);
    crystalThreeRandomNum = Math.floor(Math.random() * 12);
    crystalFourRandomNum = Math.floor(Math.random() * 12);
    
    score = 0;

    //display computerRandomNum on page 
    $("#randomNumber").text(computerRandomNum);

    //display score on page 
    $("#display").text(score);
}
