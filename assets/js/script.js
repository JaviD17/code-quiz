var quiz = {
    "question-1": {
        "question": "Which command lets you see what's in a directory?",
        "answer-1": "A. pwd",
        "answer-2": "B. cd ..",
        "answer-3": "C. ls",
        "answer-4": "D. clear"
    },
    "question-2": {
        "question": "Commonly used data types DO NOT include",
        "answer-1": "A. strings",
        "answer-2": "B. booleans",
        "answer-3": "C. alerts",
        "answer-4": "D. integers"
    },
    "question-3": {
        "question": "Which commands retrieves updated files from github?",
        "answer-1": "A. git clone",
        "answer-2": "B. git add .",
        "answer-3": "C. git push origin main",
        "answer-4": "D. git pull origin main"
    },
    "question-4": {
        "question": "Which command makes a new directory?",
        "answer-1": "A. mkdir",
        "answer-2": "B. touch",
        "answer-3": "C. ls",
        "answer-4": "D. git branch"
    },
    "question-5": {
        "question": "Which command moves you into a new a branch?",
        "answer-1": "A. git push",
        "answer-2": "B. git branch",
        "answer-3": "C. clear",
        "answer-4": "D. git merge"
    },
    "question-6": {
        "question": "Which command deletes a file?",
        "answer-1": "A. touch",
        "answer-2": "B. clear",
        "answer-3": "C. ls",
        "answer-4": "D. rm"
    },
    "question-7": {
        "question": "Which command clears the terminal?",
        "answer-1": "A. clear",
        "answer-2": "B. pwd",
        "answer-3": "C. ls",
        "answer-4": "D. cd"
    },
    "question-8": {
        "question": "Which line of code declares a variable in javascript?",
        "answer-1": "A. var = ",
        "answer-2": "B. <function name>()",
        "answer-3": "C. alert()",
        "answer-4": "D. .add()"
    },
    "question-9": {
        "question": "How do you call a function named findNum?",
        "answer-1": "A. findNum",
        "answer-2": "B. findNum()",
        "answer-3": "C. ()",
        "answer-4": "D. var findNum"
    },
    "question-10": {
        "question": "Which line of code executes a console log?",
        "answer-1": "A. console.log()",
        "answer-2": "B. console(log)",
        "answer-3": "C. log()",
        "answer-4": "D. console()"
    }
};

var num = 1;

var getAnswer1 = function() {
    var displayAnswers1 = quiz["question-" + num]["answer-1"];
    return displayAnswers1;
};
var getAnswer2 = function() {
    var displayAnswers2 = quiz["question-" + num]["answer-2"];
    return displayAnswers2;
};
var getAnswer3 = function() {
    var displayAnswers3 = quiz["question-" + num]["answer-3"];
    return displayAnswers3;
};
var getAnswer4 = function() {
    var displayAnswers4 = quiz["question-" + num]["answer-4"];
    return displayAnswers4;
};

var getQuiz = function() {
    var dispQuiz = quiz["question-" + num]["question"];
    return dispQuiz;
};

var displayAnswers = function () {

    var displayAnswers1 = getAnswer1();
    var displayAnswers2 = getAnswer2();
    var displayAnswers3 = getAnswer3();
    var displayAnswers4 = getAnswer4();

    $(".answer1").append("<button>" + displayAnswers1 + "</button>");
    $(".answer2").append("<button>" + displayAnswers2 + "</button>");
    $(".answer3").append("<button>" + displayAnswers3 + "</button>");
    $(".answer4").append("<button>" + displayAnswers4 + "</button>");
}

var displayQuiz = function () {
    console.log(num);
    var dispQuiz = getQuiz();
    $("#card-body").append("<p.card-text>" + dispQuiz + "</p.card-text>");
    $("p.card-text").replaceWith(dispQuiz);
    displayAnswers();
};

// start quiz
$("#btn").on("click", function () {
    // start timer
    $("#btn").remove();
    $("p.card-text").remove();
    displayQuiz();
});

// click answer
$(".answer-body").click(function() {
    num++;
    $("button").remove();
    displayQuiz();
});

console.log(Object.keys(quiz).length);