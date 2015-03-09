$(document).ready(function () {


    var $applicationForm = $("#applyForm");

    $applicationForm.find(".personal-data-processing-consent").mouseover(function(){
        $applicationForm.find(".pdpa-consent-popup-fulltext").show();
    });

    $applicationForm.find(".personal-data-processing-consent").mouseout(function(){
        $applicationForm.find(".pdpa-consent-popup-fulltext").hide();
    });
	

});



$(document).ready(function(){
$(function() {  
    var pull        = $('#nav_toggle');  
        menu        = $('#nav_dropdown');  
        menuHeight  = menu.height(); 


  
    $(pull).on('click', function(e) {  
        e.preventDefault();  
        menu.slideToggle();  
    });  
});  

$(window).resize(function(){  
    var w = $(window).width();  
    if(w > 320 && menu.is(':hidden')) {  
        menu.removeAttr('style');  
    }  
});   

});


