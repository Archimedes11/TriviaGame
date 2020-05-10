$(document).ready(function () {
    var flagOne = false;
    var flagTwo = false;
    var round = 0;
    rightAnswers = 0;
    wrongAnswers = 0;
    unanswered = 0;
    answers = 0;

    var science = new Audio('assets/music/Science.mp3');


    $(".display-4").text("Computer Trivia");
    $("#start").append("<h3>Start</h3>");

    var timer = 30;

    staticQuestionArray = [
        {
            question: "<h4>The generic term for the mechanical, electrical and electronic components of a computer are called what?<h4>",
            choices: ["Freeware", "Software", "Hardware", "Malware"],
            correctAnswer: 2,
            imgSource: "assets/images/Hardware.png",
        },
        {
            question: "<h4>'Linux' is an example of :<h4>",
            choices: ["Operating System", "Application", "Software", "Browser"],
            correctAnswer: 0,
            imgSource: "assets/images/OperatingSystem.jpeg",

        },
        {
            question: "<h4>Which of the following is not a computer language?<h4>",
            choices: ["Python", "C++", "Lotus", "Java"],
            correctAnswer: 2,
            imgSource: "assets/images/Lotus.jpeg",

        },
        {
            question: "<h4>Which web browser was developed by Google?<h4>",
            choices: ["Firefox", "Netscape", "Safari", "Chrome"],
            correctAnswer: 3,
            imgSource: "assets/images/Chrome.jpg",

        },
        {
            question: "<h4>The GUI stand for :<h4>",
            choices: ["General User Interaction", "Graphical User Interface", "Guided User Interface", "General User Interface"],
            correctAnswer: 1,
            imgSource: "assets/images/GUI.jpg",
        },
        {
            question: "<h4>Errors in computer programmes are called :<h4>",
            choices: ["Mistakes", "Follies", "Trash", "Bugs"],
            correctAnswer: 3,
            imgSource: "assets/images/Bugs.jpg",

        },
        {
            question: "<h4>Who is considered as the father of computing?<h4>",
            choices: ["Claude Shannon", "Charles Babbage", "Von Neumann", "Alan Turing"],
            correctAnswer: 1,
            imgSource: "assets/images/Babbage.jpg",

        },
        {
            question: "<h4>Who is the founder of Bluetooth?<h4>",
            choices: ["Ericsson", "IBM", "Apple", "Dell"],
            correctAnswer: 0,
            imgSource: "assets/images/Ericsson.png",

        }

    ]

    var timerId = "#timer";
    function startTimer() {
        clearInterval(timerId);
        timerId = setInterval(decrement, 1000);
        function decrement() {
            timer--;

            $("#timer").html("<h2>" + "Time Remaining: " + timer + "</h2>");
            function stop() {
                clearInterval(timerId);
            }
            if (flagOne === true) {
                stop();
                flagOne = false;
            }
            if (timer === 0) {
                stop();
                flagTwo = true;
            }




        }
    }


    function clearQuestions() {
        $("#question").html("");
        $("#optionOne").html("");
        $("#optionTwo").html("");
        $("#optionThree").html("");
        $("#optionFour").html("");
    }

    function postQuestions() {
        $("#question").html(staticQuestionArray[answers].question)
        $("#optionOne").html(staticQuestionArray[answers].choices[0]);
        $("#optionTwo").html(staticQuestionArray[answers].choices[1]);
        $("#optionThree").html(staticQuestionArray[answers].choices[2]);
        $("#optionFour").html(staticQuestionArray[answers].choices[3]);
    }
    function clearInterem() {
        $("#condition").html("");
        $("#correctAnswer").html("");
        $("#image").html("");
    }



    function gameOne() {
        round++;
        postQuestions();
        startTimer();

        $("#game").on("click", ".buttons", function () {

            if (flagTwo === true) {
                clearQuestions()
                $("#condition").html("<h3>" + "Out of Time!" + "</h3>");
                $("#correctAnswer").html("The corect answer was : " + staticQuestionArray[answers].choices[staticQuestionArray[answers].correctAnswer]);
                $("#image").append("<img src=" + staticQuestionArray[answers].imgSource + "></img>");
                unanswered++;
                answers++;
                flagTwo = false;
                myVarOne = setTimeout(clearInterem, 5000);
                myVarOne = setTimeout(gameTwo, 5001);
            }

            else if (event.toElement.id === "optionThree" && answers === 0) {
                flagOne = true;
                clearQuestions()
                $("#condition").html("<h3>" + "Correct!" + "</h3>");
                $("#image").append("<img src=" + staticQuestionArray[answers].imgSource + "></img>");
                rightAnswers++;
                answers++;
                myVarOne = setTimeout(clearInterem, 5000);
                myVarOne = setTimeout(gameTwo, 5001);

            }

            else if (event.toElement.id != "optionThree" && answers === 0) {
                flagOne = true;
                clearQuestions()
                $("#condition").html("<h3>" + "Incorrect!" + "</h3>");
                $("#correctAnswer").html("The corect answer was : " + staticQuestionArray[answers].choices[staticQuestionArray[answers].correctAnswer]);
                $("#image").append("<img src=" + staticQuestionArray[answers].imgSource + "></img>");
                wrongAnswers++;
                answers++;
                myVarOne = setTimeout(clearInterem, 5000);
                myVarOne = setTimeout(gameTwo, 5001);

            }
        });
    }

    function gameTwo() {

        timer = 30;
        postQuestions();
        startTimer();

        $("#game").on("click", ".buttons", function () {
            
            if (flagTwo === true) {
                clearQuestions()
                $("#condition").html("<h3>" + "Out of Time!" + "</h3>");
                $("#correctAnswer").html("The corect answer was : " + staticQuestionArray[answers].choices[staticQuestionArray[answers].correctAnswer]);
                $("#image").append("<img src=" + staticQuestionArray[answers].imgSource + "></img>");
                unanswered++;
                answers++;
                flagTwo = false;
                myVarOne = setTimeout(clearInterem, 5000);
                myVarOne = setTimeout(gameThree, 5001);
            }

            else if (event.toElement.id === "optionOne" && answers === 1) {
                flagOne = true;
                clearQuestions()
                $("#condition").html("<h3>" + "Correct!" + "</h3>");
                $("#image").html("<img src=" + staticQuestionArray[answers].imgSource + "></img>");
                rightAnswers++;
                answers++;
                myVarTwo = setTimeout(clearInterem, 5000);
                myVarTwo = setTimeout(gameThree, 5001);
            }
            else if (event.toElement.id != "optionOne" && answers === 1) {
                console.log("adam");
                flagOne = true;
                clearQuestions()
                $("#condition").html("<h3>" + "Incorrect!" + "</h3>");
                $("#correctAnswer").html("The corect answer was : " + staticQuestionArray[answers].choices[staticQuestionArray[answers].correctAnswer]);
                $("#image").html("<img src=" + staticQuestionArray[answers].imgSource + "></img>");
                wrongAnswers++;
                answers++;
                myVarTwo = setTimeout(clearInterem, 5000);
                myVarTwo = setTimeout(gameThree, 5001);
            }
        });

    }

    function gameThree() {

        timer = 30;
        postQuestions();
        startTimer();

        $("#game").on("click", ".buttons", function () {

            if (flagTwo === true) {
                clearQuestions()
                $("#condition").html("<h3>" + "Out of Time!" + "</h3>");
                $("#correctAnswer").html("The corect answer was : " + staticQuestionArray[answers].choices[staticQuestionArray[answers].correctAnswer]);
                $("#image").append("<img src=" + staticQuestionArray[answers].imgSource + "></img>");
                unanswered++;
                answers++;
                flagTwo = false;
                myVarOne = setTimeout(clearInterem, 5000);
                myVarOne = setTimeout(gameFour, 5001);
            }
            else if (event.toElement.id === "optionThree" && answers === 2) {
                flagOne = true;
                clearQuestions()
                $("#condition").html("<h3>" + "Correct!" + "</h3>");
                $("#image").html("<img src=" + staticQuestionArray[answers].imgSource + "></img>");
                rightAnswers++;
                answers++;
                myVarThree = setTimeout(clearInterem, 5000);
                myVarThree = setTimeout(gameFour, 5001);


            }
            else if (event.toElement.id != "optionThree" && answers === 2) {
                flagOne = true;
                clearQuestions()
                $("#condition").html("<h3>" + "Incorrect!" + "</h3>");
                $("#correctAnswer").html("The corect answer was : " + staticQuestionArray[answers].choices[staticQuestionArray[answers].correctAnswer]);
                $("#image").html("<img src=" + staticQuestionArray[answers].imgSource + "></img>");
                wrongAnswers++;
                answers++;
                myVarThree = setTimeout(clearInterem, 5000);
                myVarThree = setTimeout(gameFour, 5001);
            }
        });

    }

    function gameFour() {

        timer = 30;
        postQuestions();
        startTimer();

        $("#game").on("click", ".buttons", function () {

            if (flagTwo === true) {
                clearQuestions()
                $("#condition").html("<h3>" + "Out of Time!" + "</h3>");
                $("#correctAnswer").html("The corect answer was : " + staticQuestionArray[answers].choices[staticQuestionArray[answers].correctAnswer]);
                $("#image").append("<img src=" + staticQuestionArray[answers].imgSource + "></img>");
                unanswered++;
                answers++;
                flagTwo = false;
                myVarOne = setTimeout(clearInterem, 5000);
                myVarOne = setTimeout(gameFive, 5001);
            }

            else if (event.toElement.id === "optionFour" && answers === 3) {
                flagOne = true;
                clearQuestions()
                $("#condition").html("<h3>" + "Correct!" + "</h3>");
                $("#image").html("<img src=" + staticQuestionArray[answers].imgSource + "></img>");
                rightAnswers++;
                answers++;
                myVarFour = setTimeout(clearInterem, 5000);
                myVarFour = setTimeout(gameFive, 5001);


            }
            else if (event.toElement.id != "optionFour" && answers === 3) {
                flagOne = true;
                clearQuestions()
                $("#condition").html("<h3>" + "Incorrect!" + "</h3>");
                $("#correctAnswer").html("The corect answer was : " + staticQuestionArray[answers].choices[staticQuestionArray[answers].correctAnswer]);
                $("#image").html("<img src=" + staticQuestionArray[answers].imgSource + "></img>");
                wrongAnswers++;
                answers++;
                myVarFour = setTimeout(clearInterem, 5000);
                myVarFour = setTimeout(gameFive, 5001);
            }
        });

    }

    function gameFive() {

        timer = 30;
        postQuestions();
        startTimer();

        $("#game").on("click", ".buttons", function () {
            if (flagTwo === true) {
                clearQuestions()
                $("#condition").html("<h3>" + "Out of Time!" + "</h3>");
                $("#correctAnswer").html("The corect answer was : " + staticQuestionArray[answers].choices[staticQuestionArray[answers].correctAnswer]);
                $("#image").append("<img src=" + staticQuestionArray[answers].imgSource + "></img>");
                unanswered++;
                answers++;
                flagTwo = false;
                myVarOne = setTimeout(clearInterem, 5000);
                myVarOne = setTimeout(gameSix, 5001);
            }
            else if (event.toElement.id === "optionTwo" && answers === 4) {
                flagOne = true;
                clearQuestions()
                $("#condition").html("<h3>" + "Correct!" + "</h3>");
                $("#image").html("<img src=" + staticQuestionArray[answers].imgSource + "></img>");
                rightAnswers++;
                answers++;
                myVarFive = setTimeout(clearInterem, 5000);
                myVarFive = setTimeout(gameSix, 5001);
            }
            else if (event.toElement.id != "optionTwo" && answers === 4) {
                flagOne = true;
                clearQuestions()
                $("#condition").html("<h3>" + "Incorrect!" + "</h3>");
                $("#correctAnswer").html("The corect answer was : " + staticQuestionArray[answers].choices[staticQuestionArray[answers].correctAnswer]);
                $("#image").html("<img src=" + staticQuestionArray[answers].imgSource + "></img>");
                wrongAnswers++;
                answers++;
                myVarFive = setTimeout(clearInterem, 5000);
                myVarFive = setTimeout(gameSix, 5001);
            }
        });

    }

    function gameSix() {

        timer = 30;
        postQuestions();
        startTimer();

        $("#game").on("click", ".buttons", function () {

            if (flagTwo === true) {
                clearQuestions()
                $("#condition").html("<h3>" + "Out of Time!" + "</h3>");
                $("#correctAnswer").html("The corect answer was : " + staticQuestionArray[answers].choices[staticQuestionArray[answers].correctAnswer]);
                $("#image").append("<img src=" + staticQuestionArray[answers].imgSource + "></img>");
                unanswered++;
                answers++;
                flagTwo = false;
                myVarOne = setTimeout(clearInterem, 5000);
                myVarOne = setTimeout(gameSeven, 5001);
            }

            else if (event.toElement.id === "optionFour" && answers === 5) {
                flagOne = true;
                clearQuestions()
                $("#condition").html("<h3>" + "Correct!" + "</h3>");
                $("#image").html("<img src=" + staticQuestionArray[answers].imgSource + "></img>");
                rightAnswers++;
                answers++;
                myVarSix = setTimeout(clearInterem, 5000);
                myVarSix = setTimeout(gameSeven, 5001);


            }
            else if (event.toElement.id != "optionFour" && answers === 5) {
                flagOne = true;
                clearQuestions()
                $("#condition").html("<h3>" + "Incorrect!" + "</h3>");
                $("#correctAnswer").html("The corect answer was : " + staticQuestionArray[answers].choices[staticQuestionArray[answers].correctAnswer]);
                $("#image").html("<img src=" + staticQuestionArray[answers].imgSource + "></img>");
                wrongAnswers++;
                answers++;
                myVarSix = setTimeout(clearInterem, 5000);
                myVarSix = setTimeout(gameSeven, 5001);
            }
        });

    }

    function gameSeven() {

        timer = 30;
        postQuestions();
        startTimer();

        $("#game").on("click", ".buttons", function () {

            if (flagTwo === true) {
                clearQuestions()
                $("#condition").html("<h3>" + "Out of Time!" + "</h3>");
                $("#correctAnswer").html("The corect answer was : " + staticQuestionArray[answers].choices[staticQuestionArray[answers].correctAnswer]);
                $("#image").append("<img src=" + staticQuestionArray[answers].imgSource + "></img>");
                unanswered++;
                answers++;
                flagTwo = false;
                myVarOne = setTimeout(clearInterem, 5000);
                myVarOne = setTimeout(gameEight, 5001);
            }
            else if (event.toElement.id === "optionTwo" && answers === 6) {
                flagOne = true;
                clearQuestions()
                $("#condition").html("<h3>" + "Correct!" + "</h3>");
                $("#image").html("<img src=" + staticQuestionArray[answers].imgSource + "></img>");
                rightAnswers++;
                answers++;
                myVarSeven = setTimeout(clearInterem, 5000);
                myVarSeven = setTimeout(gameEight, 5001);


            }
            else if (event.toElement.id != "optionTwo" && answers === 6) {
                flagOne = true;
                clearQuestions()
                $("#condition").html("<h3>" + "Incorrect!" + "</h3>");
                $("#correctAnswer").html("The corect answer was : " + staticQuestionArray[answers].choices[staticQuestionArray[answers].correctAnswer]);
                $("#image").html("<img src=" + staticQuestionArray[answers].imgSource + "></img>");
                wrongAnswers++;
                answers++;
                myVarSeven = setTimeout(clearInterem, 5000);
                myVarSeven = setTimeout(gameEight, 5001);
            }
        });
    }

    function gameEight() {

        timer = 30;
        postQuestions();
        startTimer();

        $("#game").on("click", ".buttons", function () {

            if (flagTwo === true) {
                clearQuestions()
                $("#condition").html("<h3>" + "Out of Time!" + "</h3>");
                $("#correctAnswer").html("The corect answer was : " + staticQuestionArray[answers].choices[staticQuestionArray[answers].correctAnswer]);
                $("#image").append("<img src=" + staticQuestionArray[answers].imgSource + "></img>");
                unanswered++;
                answers++;
                flagTwo = false;
                myVarOne = setTimeout(clearInterem, 5000);
                // myVarOne = setTimeout(reset, 5001);
            }

            else if (event.toElement.id === "optionOne" && answers === 7) {
                flagOne = true;
                clearQuestions()
                $("#condition").html("<h3>" + "Correct!" + "</h3>");
                $("#image").html("<img src=" + staticQuestionArray[answers].imgSource + "></img>");
                rightAnswers++;
                answers++;
                myVarEight = setTimeout(clearInterem, 5000);
                //myVarEight = setTimeout(reset, 5001);


            }
            else if (event.toElement.id != "optionOne" && answers === 7) {
                console.log("adam");
                flagOne = true;
                clearQuestions()
                $("#condition").html("<h3>" + "Incorrect!" + "</h3>");
                $("#correctAnswer").html("The corect answer was : " + staticQuestionArray[answers].choices[staticQuestionArray[answers].correctAnswer]);
                $("#image").html("<img src=" + staticQuestionArray[answers].imgSource + "></img>");
                wrongAnswers++;
                answers++;
                myVarEight = setTimeout(clearInterem, 5000);
                // myVarEight = setTimeout(reset, 5001);
            }
        });
    }

    $("#start").one("click", function () {
        $("#start").html("");
        science.play();
        gameOne();

    });
});