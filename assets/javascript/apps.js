$(document).ready(function () {
    $(".display-4").text("Computer Trivia");
    $("#start").append("<h3>Start</h3>");

    $("#start").on("click", function () {

        $("#start").html("");

        $("#optionOne").append("<h3>Q1</h3>");
        $("#optionTwo").append("<h3>Q2</h3>");
        $("#optionThree").append("<h3>Q3</h3>");
        $("#optionFour").append("<h3>Q4</h3>");



    });











});