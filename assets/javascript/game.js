$(document).ready(function() {

    /* Generates random number given a min and max */
    function genRandRange(min,max) {
        return Math.floor(Math.random() * (max-min+1)) + min;
    }

    /* Generates distinct values for each crystal */
    function genRandCrysVals(arr, min, max) {
        arr[0] = genRandRange(min,max);
        for (var i = 1; i < arr.length; ++i) {
            do {
                arr[i] = genRandRange(min,max);
            } while (!$.inArray(arr[i],arr))
        }
        return arr;
    }

    function resetVals(arr,min1,max1,min2,max2) {
        arr = genRandCrysVals(arr, min1, max1)
        $("#cum-sum").text("0");
        $("#number-to-guess").text(genRandRange(min2, max2));
        return arr;
    }

    function cum_sum_apply(sum) {
        $("#cum-sum").text(sum);
        if (sum === parseInt($("#number-to-guess").text())) {
            alert("You Win!!");
        } else if (sum > parseInt($("#number-to-guess").text())) {
            alert("You Lose..");
        }
    }

    var sum_min = 19;
    var sum_max = 120;
    var crystal_min = 1;
    var crystal_max = 12;
    var crystal_vals = [1,2,3,4];
    var cum_sum = 0;

    crystal_vals = resetVals(crystal_vals, crystal_min, crystal_max, sum_min, sum_max);

    $("#crystal-1").on("click", function (){
        cum_sum += crystal_vals[0];
        cum_sum_apply(cum_sum);
    });

    $("#crystal-2").on("click", function (){
        cum_sum += crystal_vals[1];
        cum_sum_apply(cum_sum);
    });

    $("#crystal-3").on("click", function (){
        cum_sum += crystal_vals[2];
        cum_sum_apply(cum_sum);
    });

    $("#crystal-4").on("click", function (){
        cum_sum += crystal_vals[3];
        cum_sum_apply(cum_sum);
    });

    $("#reset-button").on("click", function() {
        crystal_vals = resetVals(crystal_vals, crystal_min, crystal_max, sum_min, sum_max);
        cum_sum = 0;
    });

});

