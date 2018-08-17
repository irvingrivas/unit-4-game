$(document).ready(function() {

    var sum_min = 19;
    var sum_max = 120;
    var crystal_min = 1;
    var crystal_max = 12;
    var crystal_vals = [0,0,0,0];
    var cum_sum = 0;
    var game_over = false;  

    /* Generates random number given a min and max */
    function genRandRange(min,max) {
        return Math.floor(Math.random() * (max-min+1)) + min;
    }

    /* Checks if elem is in array indecies (1) to (length -1) */
    function isInArray(elem,arr) {
        return (arr.slice(0,arr.length).indexOf(elem) > -1);
    }

    /* Generates distinct values for each crynstal */
    function genRandCrysVals(arr, min, max) {
        arr[0] = genRandRange(min,max);
        for (var i = 1; i < arr.length; ++i) {
            do {
                arr[i] = genRandRange(min,max);
            } while (isInArray(arr[i],arr.slice(0,i-1)))
        }
        return arr;
    }

    function resetVals(arr,min1,max1,min2,max2) {
        arr = genRandCrysVals(arr, min1, max1)
        $("#cum-sum").text("0");
        $("#score-button").css('background-color','gray');
        $("#number-to-guess").text(genRandRange(min2, max2));
        return arr;
    }

    function cum_sum_apply(sum) {
        $("#cum-sum").text(sum);
        if (sum === parseInt($("#number-to-guess").text())) {
            $("#score-button").css('background-color','green');
            alert("You Win!!");
            game_over = true;
        } else if (sum > parseInt($("#number-to-guess").text())) {
            $("#score-button").css('background-color','red');
            alert("You Lose..");
            game_over = true;
        }
    }

    crystal_vals = resetVals(crystal_vals, crystal_min, crystal_max, sum_min, sum_max);

    $("#crystal-0").on("click", function () {
        if (!game_over) {
            cum_sum += crystal_vals[0];
            cum_sum_apply(cum_sum);
        }
    });

    $("#crystal-1").on("click", function (){
        if (!game_over) {
            cum_sum += crystal_vals[1];
            cum_sum_apply(cum_sum);
        }
    });

    $("#crystal-2").on("click", function (){
        if (!game_over) {
            cum_sum += crystal_vals[2];
            cum_sum_apply(cum_sum);
        }
    });

    $("#crystal-3").on("click", function (){
        if (!game_over) {
            cum_sum += crystal_vals[3];
            cum_sum_apply(cum_sum);
        }
    });

    $("#reset-button").on("click", function() {
        crystal_vals = resetVals(crystal_vals, crystal_min, crystal_max, sum_min, sum_max);
        cum_sum = 0;
        game_over = false;
    });

});