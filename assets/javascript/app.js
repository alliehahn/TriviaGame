var questions= [
    {question: "Who is engaged to Pam in season 1?",
    choices: ["Jim", "Roy", "Michael", "She is not engaged in season 1"],
    answer: 1
    },
    {question: "What does Dunder Mifflin sell?",
    choices: ["cars", "caskets", "paper", "mufflers"],
    answer: 2}
];

for ( var i = 0; i < questions.length; i++ ) {
    var question = questions[i].question;
    $("#question").html(question);
    var options = questions[i].choices;
    $("#options").html(options);
}