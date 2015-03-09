$(document).ready(function () {


    var $applicationForm = $("#applyForm");

    $applicationForm.find(".personal-data-processing-consent").mouseover(function(){
        $applicationForm.find(".pdpa-consent-popup-fulltext").show();
    });

    $applicationForm.find(".personal-data-processing-consent").mouseout(function(){
        $applicationForm.find(".pdpa-consent-popup-fulltext").hide();
    });

});
