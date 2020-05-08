$(document).ready(function () {
    var flagOne = false;
    var flagTwo = true;
    rightAnswers = 0;
    wrongAnswers = 0;
    answers = 0;
    $(".display-4").text("Computer Trivia");
    $("#start").append("<h3>Start</h3>");

    var timer = 30;

    staticQuestionArray = [
        {
            question: "<h4>The generic term for the mechanical, electrical and electronic components of a computer are called what?<h4>",
            choices: ["Freeware", "Software", "Hardware", "Malware"],
            correctAnswer: 3,
            imgSource: "assets/images/Hardware.png",
        },
        {
            question: "<h4>'Linux' is an example of :<h4>",
            choices: ["Operating System", "Application", "Software", "Browser"],
            correctAnswer: 0,
            imgSource: "assets/images/OperatingSystem.jpeg",

        },
        {
            question: "<h4>The generic term for the mechanical, electrical and electronic components of a computer are called what?<h4>",
            choices: ["Freeware", "Software", "Hardware", "Malware"],
            correctAnswer: 3,
            imgSource: "assets/images/Hardware.png",

        },
        {
            question: "<h4>The generic term for the mechanical, electrical and electronic components of a computer are called what?<h4>",
            choices: ["Freeware", "Software", "Hardware", "Malware"],
            correctAnswer: 3,
            imgSource: "assets/images/Hardware.png",

        }
    ]

    var timerId = "#timer";
    function startTimer() {
        clearInterval(timerId);
        timerId = setInterval(decrement, 1000);
        function decrement() {
            timer--;
            console.log("timer in the function : " + timer);
            $("#timer").html("<h2>" + "Time Remaining: " + timer + "</h2>");
            function stop() {
                clearInterval(timerId);
            }
            if (timer === 0 || flagOne === true) {
                stop();
                return timer;

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
        postQuestions();
        startTimer(timer);

        console.log(timer);
        $("#game").on("click", ".buttons", function () {

            if (event.toElement.id === "optionThree") {
                flagOne = true;
                clearQuestions()
                $("#condition").html("<h3>" + "Correct!" + "</h3>");
                $("#image").append("<img src=" + staticQuestionArray[0].imgSource + "></img>");
                rightAnswers++;
                answers = rightAnswers + wrongAnswers;
                myVar = setTimeout(clearInterem, 5000);
                //myVarTwo = setTimeout(gameTwo, 5001);

            }

            if (event.toElement.id != "optionThree") {
                flagOne = true;
                clearQuestions()
                $("#condition").html("<h3>" + "Incorrect!" + "</h3>");
                $("#correctAnswer").html("The corect answer was : " + staticQuestionArray[0].choices[2]);
                $("#image").append("<img src=" + staticQuestionArray[0].imgSource + "></img>");
                wrongAnswers++;
                answers = rightAnswers + wrongAnswers;
                myVar = setTimeout(clearInterem, 5000);
                //myVarTwo = setTimeout(gameTwo, 5001);

            }

        });

    }


    function gameTwo() {
        console.log("game two");

        timer = 30;
        postQuestions();
        startTimer();

        $("#game").on("click", ".buttons", function () {
            // console.log(event.toElement.id);
            // console.log("answers = " + answers);
            if (event.toElement.id === "optionOne") {
                flagOne = true;
                clearQuestions()
                $("#condition").html("<h3>" + "Correct!" + "</h3>");
                $("#image").html("<img src=" + staticQuestionArray[1].imgSource + "></img>");
                rightAnswers++;
                answers = rightAnswers + wrongAnswers;


            }
            if (event.toElement.id != "optionOne") {
                console.log("adam");
                flagOne = true;
                clearQuestions()
                $("#condition").html("<h3>" + "Incorrect!" + "</h3>");
                $("#correctAnswer").html("The corect answer was : " + staticQuestionArray[1].choices[0]);
                $("#image").html("<img src=" + staticQuestionArray[1].imgSource + "></img>");
                wrongAnswers++;
                answers = rightAnswers + wrongAnswers;
            }
        });

    }

    $("#start").one("click", function () {

        $("#start").html("");
        gameOne();
        console.log("adam");
        console.log("flagOne : " + flagOne)
        if (flagOne === true) {
            console.log("adam");
            gameTwo();
        }





    });



});