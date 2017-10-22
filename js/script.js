$(document).ready(function() {
    var x = "x";
    var o = "o";
    var turns = 0;

// spots stored in variables
    var spot1 = $("#spot1");
    var spot2 = $("#spot2");
    var spot3 = $("#spot3");
    var spot4 = $("#spot4");
    var spot5 = $("#spot5");
    var spot6 = $("#spot6");
    var spot7 = $("#spot7");
    var spot8 = $("#spot8");
    var spot9 = $("#spot9");

// function for resetting the board
    function remove() {
        $("#board li").text("");
        $("#board li").removeClass("disable");
        $("#board li").removeClass("o");
        $("#board li").removeClass("x");
        turns = 0;
    }

// Board click
    $("#board li").on("click", function() {
        console.log(turns);

        //if(turns % 2 === 0) {
        $(this).text(x);
        $(this).addClass('disable x');
        //}
        xWins();

        //if(turns % 2 !== 0) {
        compCheck();
        //}
        oWins();
        turns ++;
        draw();
    });


    //Checking for Wins

    function xWins() {
        if(spot1.hasClass(x) && spot2.hasClass(x) && spot3.hasClass(x) ||
            spot1.hasClass(x) && spot4.hasClass(x) && spot7.hasClass(x) ||
            spot1.hasClass(x) && spot5.hasClass(x) && spot9.hasClass(x) ||
            spot2.hasClass(x) && spot5.hasClass(x) && spot8.hasClass(x) ||
            spot3.hasClass(x) && spot5.hasClass(x) && spot7.hasClass(x) ||
            spot3.hasClass(x) && spot6.hasClass(x) && spot9.hasClass(x) ||
            spot4.hasClass(x) && spot5.hasClass(x) && spot6.hasClass(x) ||
            spot7.hasClass(x) && spot8.hasClass(x) && spot9.hasClass(x)
        )	{
            alert("Winner is X");
            remove();
        }
    }

    function oWins() {
        if(spot1.hasClass(o) && spot2.hasClass(o) && spot3.hasClass(o) ||
            spot1.hasClass(o) && spot4.hasClass(o) && spot7.hasClass(o) ||
            spot1.hasClass(o) && spot5.hasClass(o) && spot9.hasClass(o) ||
            spot2.hasClass(o) && spot5.hasClass(o) && spot8.hasClass(o) ||
            spot3.hasClass(o) && spot5.hasClass(o) && spot7.hasClass(o) ||
            spot3.hasClass(o) && spot6.hasClass(o) && spot9.hasClass(o) ||
            spot4.hasClass(o) && spot5.hasClass(o) && spot6.hasClass(o) ||
            spot7.hasClass(o) && spot8.hasClass(o) && spot9.hasClass(o)
        )	{
            alert("Winner is O");
            remove();
        }
    }

    //Checks for tie
    function draw() {
        while(turns == 9) {
            alert("It's a tie !");
            remove();
        }
    };

    //Reset button function
    $("#reset").on("click", function() {
        remove();
    });


// Computer AI MOVES

    function compCheck() {
        console.log('AI call');
        if (spot1.text() == "" && ((spot3.text() == "x" && spot2 == "x") || (spot9 == "x" && spot5 == "x") || (spot7 == "x" && spot4 == "x"))) {
            spot1.text(o);
            spot1.addClass('disable o');
            turns++;
        } else {
            if (spot1.text() == "" && ((spot1.text() == "x" && spot3.text() == "x") || (spot8.text() == "x" && spot5.text() == "x"))) {
                spot2.text(o);
                spot2.addClass('disable o');
                turns++;
            }
            else{
                if (spot3.text() == "" && ((spot1.text() == "x" && spot2.text() == "x") || (spot7.text() == "x" && spot5.text() == "x") || (spot9.text() == "x" && spot6.text() == "x"))) {
                    spot3.text(o);
                    spot3.addClass('disable o');
                    turns++;
                }
                else{
                    if (spot9.text() == "" && ((spot7.text() == "x" && spot8.text() == "x") || (spot1.text() == "x" && spot5.text() == "x") || (spot3.text() == "x" && spot6.text() == "x"))) {
                        spot9.text(o);
                        spot9.addClass('disable o');
                        turns++;
                    }
                    else{
                        if (spot7.text() == "" && ((spot9.text() == "x" && spot8.text() == "x") || (spot3.text() == "x" && spot2.text() == "x") || (spot1.text() == "x" && spot4.text() == "x"))) {
                            spot7.text(o);
                            spot7.addClass('disable o');
                            turns++;
                        }
                        else{
                            if (spot8.text() == "" && ((spot9.text() == "x" && spot7 == "x") || (spot2.text() == "x" && spot5.text() == "x"))) {
                                spot8.text(o);
                                spot8.addClass('disable o');
                                turns++;
                            }
                            else{
                                if (spot4.text() == "" && ((spot6.text() == "x" && spot5.text() == "x") || (spot1.text() == "x" && spot7.text() == "x"))) {
                                    spot4.text(o);
                                    spot4.addClass('disable o');
                                    turns++;
                                }
                                else{
                                    if (spot6.text() == "" && ((spot3.text() == "x" && spot9.text() == "x") || (spot5.text() == "x" && spot4.text() == "x"))) {
                                        spot4.text(o);
                                        spot4.addClass('disable o');
                                        turns++;
                                    }
                                    else{
                                        if (spot5.text() == "" && ((spot3.text() == "x" && spot7.text() == "x") || (spot9.text() == "x" && spot1.text() == "x") || (spot6.text() == "x" && spot4.text() == "x") || (spot8.text() == "x" && spot2.text() == "x"))) {
                                            spot4.text(o);
                                            spot4.addClass('disable o');
                                            turns++;
                                        }
                                        else{ // if no spot to block then play these spots....
                                            if (spot5.text() == "") {
                                                spot5.text(o);
                                                spot5.addClass('disable o');
                                                turns++;

                                            }
                                            else{
                                                if (spot1.text() == "") {
                                                    spot1.text(o);
                                                    spot1.addClass('disable o');
                                                    turns++;

                                                }
                                                else{
                                                    if (spot9.text() == "") {
                                                        spot9.text(o);
                                                        spot9.addClass('disable o');
                                                        turns++;

                                                    }
                                                    else {
                                                        if (spot8.text() == "") {
                                                            spot8.text(o);
                                                            spot8.addClass('disable o');
                                                            turns++;

                                                        }
                                                        else{
                                                            if (spot4.text() == "") {
                                                                spot4.text(o);
                                                                spot4.addClass('disable o');
                                                                turns++;

                                                            }
                                                        }
                                                    }
                                                }


                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
});