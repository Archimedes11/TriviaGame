$(document).ready(function () {
    var flagOne = true;
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
            question: "Q2",
            choices: 100,
            correctAnswer: 10,
            counterDmg: 8,

        },
        {
            question: "Q3",
            choices: 150,
            correctAnswer: 6,
            counterDmg: 10,

        },
        {
            question: "Q4",
            choices: 140,
            correctAnswer: 8,
            counterDmg: 13,

        }
    ]



    $("#start").on("click", function () {

        $("#start").html("");
        $("#question").html(staticQuestionArray[0].question)
        $("#optionOne").html(staticQuestionArray[0].choices[0]);
        $("#optionTwo").html(staticQuestionArray[0].choices[1]);
        $("#optionThree").html(staticQuestionArray[0].choices[2]);
        $("#optionFour").html(staticQuestionArray[0].choices[3]);

        console.log(event.path);
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
                if (timer === 0) {
                    stop();
                    $(".end").toggle();
                }
            }
        }
        startTimer();

        $(".buttons").on("click", function () {
            console.log(event.toElement.id);
            if (event.toElement.id === "optionThree")
                console.log("adam");
                $("#image").append("<img src=assets/images/Hardware.png></img>");






        })

    });

});