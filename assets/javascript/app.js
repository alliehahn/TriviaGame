var questions= [
    {question: "Who is engaged to Pam in season 1?",
    choices: ["Jim", "Roy", "Michael", "She is not engaged in season 1"],
    answer: 1
    },
    {question: "What does Dunder Mifflin sell?",
    choices: ["cars", "caskets", "paper", "mufflers"],
    answer: 2},

    {question: "Who does Michael sing 'You sexy Thing' to at the Dundies?",
    choices: ["Ryan", "Pam", "Jan", "Jim"],
    answer: 0}
];

var images = ["lost.gif", "../assets/images/won.gif"]

$(document).ready(function() {    
    start();
});

var questionOrder=0
var countdowntimer;

function start() {
        countdowntimer=null;
            var q = questions[questionOrder].question;
            $("#question").html(q);
            var options = questions[questionOrder].choices;
            var answer = questions[questionOrder].answer;
            var wrong = 1;
            for (var x = 0; x < options.length; x++) {
                if (x==answer) {
                    $("#right").html(options[answer])
                }
                else {
                    $("#wrong"+wrong).html(options[x])
                    wrong++; 
                }
            }
    
            var timeleft = 11;
            countdowntimer = setInterval(function(){
                timeleft--;
                $("#timer").text("seconds left:"+timeleft);
                if(timeleft <= 0) {
                    clearInterval(countdowntimer);
                    $("#timer").text(" ")
                }
            }, 1000);
}
var correct=0;
var remaining=10;


$("#right").click(function () {
    $("#question").html("<img src='assets/images/won.gif' />")
    correct++;
    score()
});

$(".wrongClick").click(function () {
    $("#question").html("<img src='assets/images/lost.gif' />")
    $("#winOrLoss").html("lost!");
    score()
});


$("#next").click(function () {
    questionOrder++
    start()
});

function score () {
    remaining--;
    $("#correct").text(" " + correct);
    $("#remaining"). text(" " + remaining);
    clearInterval(countdowntimer);
    $("#timer").html(" ");
    $("#next").html("Next>>")
    $("#right").text("");
    $(".wrongClick").text("");
}
