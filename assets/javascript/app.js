var questions= [
    {
        question: "Who is engaged to Pam in season 1?",
        choices: ["Jim", "Roy", "Michael", "She is not engaged in season 1"],
        answer: 1
    },
    {
        question: "What does Dunder Mifflin sell?",
        choices: ["cars", "caskets", "paper", "mufflers"],
        answer: 2
    },

    {
        question: "Who does Michael sing 'You sexy Thing' to at the Dundies?",
        choices: ["Ryan", "Pam", "Jan", "Jim"],
        answer: 0
    },

    {
        question: " In Season 2, episode 5 ('Halloween'), what is the name of the person who was fired?",
        choices: ["Devon", "Ryan", "Creed", "Julia"],
        answer: 0
    },
    {
        question: "Who started the fire?",
        choices: ["Ryan", "Michael", "Meredith", "David Wallace"],
        answer: 0
    },
    {
        question: "What is the name of Creed's website?",
        choices: ["www.creedthoughts.gov.www/creedthoughts", "www.Creed.com", "creed4u.org/creed", "creedthought.com"],
        answer: 0
    },
    {
        question: "What is the exclusive club that Pam, Oscar, and Toby establish?",
        choices: ["The Tripod", "Dunders Against Mufflers", "POT Book club", "Finer Things Club"],
        answer: 3
    },
    {
        question: "Where did Michael get his 'World's Best Boss' mug?",
        choices: ["From Dwight", "WalMart", "Spencer's", "He stole it"],
        answer: 2
    }, 
    {
        question: "Who is the Assistant to the Regional Manager?",
        choices: ["Michael", "Dwight", "Pam", "Ryan"],
        answer: 1
    },
    {
        question: "Dwight owns and runs a farm in his spare time. What does this farm primarily produce?",
        choices: ["beets", "strawberries", "dairy products", "corn"],
        answer: 0
    }
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
            $("#optionList").show();
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
                $("#timer").text(timeleft);
                if(timeleft <= 0) {
                    clearInterval(countdowntimer);
                    $("#timer").html("0")
                    $("#question").html("<img class='pictureSize' src='assets/images/timeOut.gif' />")
                    score()
                }
            }, 1000);
}
var correct=0;
var remaining=10;


$("#right").click(function () {
    $("#question").html("<img class='pictureSize' src='assets/images/won.gif' />")
    correct++;
    score()
});

$(".wrongClick").click(function () {
    $("#question").html("<img class='pictureSize' src='assets/images/lost.gif' />")
    $("#winOrLoss").html("lost!");
    score()
});


$("#next").click(function () {
    clearInterval(countdowntimer);
    questionOrder++
    $("#timer").html("11");
    start()
});

function score () {
    remaining--;
    $("#correct").text(" " + correct);
    $("#remaining"). text(" " + remaining);
    clearInterval(countdowntimer);
    $("#right").text("");
    $(".wrongClick").text("");
    $("#optionList").hide();
    if (questionOrder !== questions.length) {
        $("#next").html("Next>>")
    }
}



