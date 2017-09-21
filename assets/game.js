// On Page Load
// Start Button In the Middle

$(document).ready(function() {
    var startButton =
        $("<img src = 'assets/images/start.png' alt = 'I Solemly Swear I'm Up To No Good'>").addClass('startImg');
    $("#questions").html(startButton)

    // When the start button is clicked, the game will start!
    startButton.on("click", function() {
        console.log("You clicked this");
        startGame();
    });

    // global variables 
    var counter = 30;
    var intervalId;
    var fiveSeconds = 5;
    var userGuess;
    var rightAnswer;
    var wrongAnswer;
    var questNum = 0;
    var wins = 0;
    var losses = 0;

    var questionArray = [{
            question: "How does Harry manage to breathe underwater during the second task of the Triwizard Tournament?",
            answerArray: ["He transfigures into a shark", "He kisses a mermaid", "He eats gillyweed", "He performs a bubble head charm"],
            correctAnswer: "He eats gillyweed"
        },
        {
            question: "What is the name of Fred and George's joke shop?",
            answerArray: ["Weasley Joke Emporium", "Weasleys’ Wizard Wheezes", "Fred and George’s Wonder Emporium", "Zonko’s Joke Shop"],
            correctAnswer: "Weasleys’ Wizard Wheezes"

        },
        {
            question: "Which of these is NOT one of the Unforgivable Curses?",
            answerArray: ["Sectumsempra", "Cruciatus Curse", "Imperius Curse", "Avada Kedavra"],
            correctAnswer: "Sectumsempra"
        },
        {
            question: "Which Hogwarts founder did the Sorting Hat originally belong to?",
            answerArray: ["Helga Hufflepuff", "Godric Gryffindor", "Rowena Ravenclaw", "Salazar Slytherin"],
            correctAnswer: "Godric Gryffindor"
        },
        {
            question: "Harry, Ron, and Hermione help save the Sorcerer's Stone from being stolen. How old was its cocreator, Nicholas Flamel, at the time of his death?",
            answerArray: [347, 56, 665, 411],
            correctAnswer: 665
        },
        {
            question: "Ever the eccentric, Dumbledore has a scar above his left knee that is a perfect map of what?",
            answerArray: ["Maurauder's Map", "Westeros", "Azkaban", "The London Underground"],
            correctAnswer: "The London Underground"
        },
        {
            question: "Which of the Hogwarts founders created the Chamber of Secrets? ",
            answerArray: ["Helga Hufflepuff", "Godric Gryffindor", "Rowena Ravenclaw", "Salazar Slytherin"],
            correctAnswer: "Salazar Slytherin"
        },
        {
            question: "What is the Hogwarts motto?",
            answerArray: ["It does not do to dwell on dreams and forget to live.", "The last enemy to be destroyed is death.", "Don't tickle a sleeping dragon.", "For where your treasure is, there will your heart be also."],
            correctAnswer: "Don't tickle a sleeping dragon."
        }, {
            question: "What is the number of Harry's vault at Gringotts?",
            answerArray: [394, 489, 687, 777],
            correctAnswer: 687
        },
        {
            question: "Who is Gregorovitch?",
            answerArray: ["A wand maker", "An American Tennis Player", "The person who locked up Olivander", "A quidditch player"],
            correctAnswer: "A wand maker"
        }
    ];

    // global functions, because yolo

    // this function will make our cool buttons for answers
    function answers() {
        for (var i = 0; i < questionArray[questNum].answerArray.length; i++) {
            var answerBtn = $("<button>");
            answerBtn.addClass("answer-button answer answer-button-color");
            answerBtn.attr("data-value", questionArray[questNum].answerArray[i]);
            answerBtn.text(questionArray[questNum].answerArray[i]);
            $("#answers").append(answerBtn);
        }
    }

    // this function will make our wrong answer text page appear and also manipulate our five second counter
    function wrongAnswer() {
        function secondCountDown() {
            intervalId = setInterval(fiveSecs, 1000);
        }

        function fiveSecs() {
            //  Decrease number by one.
            fiveSeconds--;
            //  Show the number in the #status id.
            $("#status").html("<p>" + fiveSeconds + "</p>");
            //  Once number hits zero...
            if (fiveSeconds === 0) {
                reset();
            }
        }
        var wrongAnswer =
            "<h1> 10 Points from...wait - do you even go here? </h1>" +
            "<p>The correct answer was: " + questionArray[questNum].correctAnswer + " </p>";
        $("#questions").html(wrongAnswer);
        $("#answers").empty();
        secondCountDown();
    }

    // this function will make our right answer text page appear and also manipulate our five second counter
    function rightAnswer() {
        function secondCountDown() {
            intervalId = setInterval(fiveSecs, 1000);
        }

        function fiveSecs() {
            //  Decrease number by one.
            fiveSeconds--;
            //  Show the number in the #status id.
            $("#status").html("<p>" + fiveSeconds + "</p>");
            //  Once number hits zero...
            if (fiveSeconds === 0) {
                reset();
            }
        }
        var rightAnswer =
            "<h1> Wow Muggle, you actually got the RIGHT answer!</h1>";
        $("#questions").html(rightAnswer);
        $("#answers").empty();
        secondCountDown();

    }


    // this function will reset the game to start over AND count to see what question number we are on to end the game
    function reset() {
        clearInterval(intervalId);
        counter = 30;
        fiveSeconds = 5;
        questNum++;
        if (questNum === 10) {
            stopGame();
        } else {
            startGame();
        }
    }

    // this is our stop game function that brings up end page with wins and losses counter, we will need when we reach the end of our questions
    function stopGame() {
        $("#gifs").empty();
        if (questNum === 10) {
            clearInterval(intervalId);
            var bye =
                "<h1>It's all over.</h1>" +
                "<p> You got " + wins + " right and " + losses + " wrong! </p>"
            $("#questions").html(bye);
            $("#answers").empty();
            $('#gifs').prepend('<img id="theImg" src="assets/images/ronny.gif" />');
            var html = "<p class='redo'> Mischief Managed? </p";
            $("#gifs").append(html);
        };
        $("p.redo").on("click", function() {})
    }
    // Could not get the restartGame button to work =( so I pseudo coded it below sort of

    //             if (questNum === 0){ 
    //                 function restartGame(){
    //     var questNum = 0;
    //     var counter = 30;
    //     var intervalId;
    //     var fiveSeconds = 5;
    //     var userGuess;
    //     var rightAnswer;
    //     var wrongAnswer;
    //     var questNum = 0;
    //     var wins = 0;
    //     var losses = 0;
    //   }
    // restartGame();}})

    //                 startGame();}


    // this is our start game function that tracks wins and losses and puts up pages for right and wrong answers
    function startGame() {
        countDown();
        answers();
        $("#questions").html(questionArray[questNum].question);
        $("button").on("click", function() {
            if (($(this).data('value')) !== questionArray[questNum].correctAnswer) {
                losses++;
                stop();
                wrongAnswer();
                $('#gifs').prepend('<img id="theImg" src="assets/images/profess.gif"/>');
                // console.log(wins);
            } else if ($(this).data('value') === questionArray[questNum].correctAnswer) {
                stop();
                wins++;
                rightAnswer();
                $('#gifs').prepend('<img id="theImg" src="assets/images/hermione.gif" />');
                // console.log(losses);
            }
        })
    };



    // COUNTDOWN function
    function countDown() {
        intervalId = setInterval(decrement, 1000);
        $("#gifs").empty();
    }
    // STOP function
    function stop() {
        //  Clears our intervalId
        //  We just pass the name of the interval
        //  to the clearInterval function.
        clearInterval(intervalId);
    }

    // DECREMENT function that also counts and manipulates what happens when user doesn't answer in time
    function decrement() {
        counter--;
        $("#status").html("<p>" + counter + "</p>");
        if (counter === 0) {
            stop();
            losses++;

            function secondCountDown() {
                intervalId = setInterval(fiveSecs, 1000);
            }
            // our wrong/right answer timer
            function fiveSecs() {
                //  Decrease number by one.
                fiveSeconds--;
                //  Show the number in the #status id.
                $("#status").html("<p>" + fiveSeconds + "</p>");
                //  Once number hits zero...
                if (fiveSeconds === 0) {
                    reset();
                }
            }
            // our redefined wrongAnswer variable for when user doesn't answer in time
            var wrongAnswer =
                "<h1> DID YOU FALL ASLEEP???? HELLOOOO?? </h1>" +
                "<p>The correct answer was: " + questionArray[questNum].correctAnswer + " </p>";
            $("#questions").html(wrongAnswer);
            $("#answers").empty();
            $('#gifs').prepend('<img id="theImg" src="assets/images/giphy.gif" />');
            secondCountDown();

        }
    }


})