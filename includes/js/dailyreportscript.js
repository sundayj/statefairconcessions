//jQuery
//Allows dropdown functionality.
$(document).ready(function () {
    $("button.drop").click(function () {
        $(this).next("div.dropdown").toggle("swing");
    });
//    $(".registerbutton").click(function () {
//       $(".locatepriv").toggle("swing");
//    });

});

//AngularJS
(function () {

    var app = angular.module("dailyReport", [])
    //Calculates register totals.
    app.controller("registerController", ["$scope", function ($scope) {
        ////initialized models
        $scope.end_grandTotal = 0;
        $scope.beg_grandTotal = 25431;
        $scope.overrings = 0;
        /////////utility function
        $scope.calculate = function () {

            var endTotal = $scope.end_grandTotal.toFixed(2);
            var begTotal = $scope.beg_grandTotal.toFixed(2);
            var overRings = $scope.overrings.toFixed(2);

            $scope.daily_regSales = (endTotal - begTotal).toFixed(2);
            $scope.daily_GrossSales = ($scope.daily_regSales - overRings).toFixed(2);
        }

        $scope.calculate();
    }])

})();



//jQuery
//Adds location totals and privilege totals.
$(document).ready(function () {

    //When button with class="registerbutton" is clicked, gets register totals with class="location-", stores them inside an array, finds the sum, then returns them as a location gross under their respective location privilege fields.
    $('.registerbutton').click(function () {
        //Get location total.
        var sumLocation_68 = 0;
        $('.location-68').each(function () {

            if ($(this).val() != "") {
                sumLocation_68 += parseFloat($(this).val());
            }
        });
        //Put location total under its respective location privilege field as location gross.
        $(".loctotinput-68").val((sumLocation_68).toFixed(2));
        // Multiplies location gross by sales tax and returns as net of taxes.
        $(".nettax-68").val((sumLocation_68 * 1.07).toFixed(2));
        // Multiplies net of taxes by the privilege percent, and then returns as location's privilige due.
        $(".privdue-68").val(((sumLocation_68 * 1.07) * .12).toFixed(2));



        //Get location total.
        var sumLocation_74 = 0;
        $('.location-74').each(function () {

            if ($(this).val() != "") {
                sumLocation_74 += parseFloat($(this).val());
            }
        });
        //Put location total under its respective location privilege field as location gross.
        $(".loctotinput-74").val((sumLocation_74).toFixed(2));
        // Multiplies location gross by sales tax and returns as net of taxes.
        $(".nettax-74").val((sumLocation_74 * 1.07).toFixed(2));
        // Multiplies net of taxes by the privilege percent, and then returns as location's privilige due.
        $(".privdue-74").val(((sumLocation_74 * 1.07) * .12).toFixed(2));

        //Gets location totals, adds them, and returns as Location Totals.
        var sumAllLocations = 0;
        $(".locationgross").each(function () {

            if ($(this).val() != "") {
                sumAllLocations += parseFloat($(this).val());
            }
        });
        //Returns the sum as Location Totals.
        $(".allLocationTotal").val((sumAllLocations).toFixed(2));

        //Gets all location privileges, adds them, then returns them as Total Pivileges due.
        var sumAllPrivileges = 0;
        $(".privgross").each(function () {

            if ($(this).val() != "") {
                sumAllPrivileges += parseFloat($(this).val());
            }
        });
        //Returns the sum as Privilege Totals.
        $(".allprivdue").val((sumAllPrivileges).toFixed(2));
    });

});

/* Open Privileges */
function openPrivs() {
    document.getElementById("privover").style.height = "100%";
}

/* Close Privileges*/
function closePrivs() {
    document.getElementById("privover").style.height = "0%";
}

