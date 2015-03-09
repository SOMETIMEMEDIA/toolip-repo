(function($){

$(document).ready(function () {

    var markableJoboffers = $("[class*='joboffer-']");
    if (markableJoboffers.length < 1) return;
    if (!document.cookie || document.cookie == '') return;

    var visitedJobOffers = retrieveFromCookie("VISITED");
    var appliedForJobOffers = retrieveFromCookie("APPLIED");

    if(isEmpty(visitedJobOffers) && isEmpty(appliedForJobOffers)) return;

    markVisitedAndAppliedFor(markableJoboffers, visitedJobOffers, appliedForJobOffers);
});



function markVisitedAndAppliedFor(markableJoboffers, visitedJobOffers, appliedForJobOffers) {
    markableJoboffers.each(function () {
	var $markableJobOfferContainer = $(this);
        var classNames = $markableJobOfferContainer.attr('class').split(/\s+/);
        for (var i in classNames) {
            var className = classNames[i];
            if (className == '') continue;
            if (className.length < 10) continue;
            if (className.substring(0, 9) == 'joboffer-') {
                var id = className.substring(9);

                if(id in visitedJobOffers){
                    $markableJobOfferContainer.addClass('mark-as-viewed');
                    addTimeMarkToContent($markableJobOfferContainer.find('.joboffer-visited-message .when'), visitedJobOffers[id]);
                    addTimeMarkToTitle($markableJobOfferContainer.find('.joboffer-visited-icon'), visitedJobOffers[id]);

                }
                if(id in appliedForJobOffers){
                    $markableJobOfferContainer.addClass('mark-as-applied');
                    addTimeMarkToContent($markableJobOfferContainer.find('.joboffer-applied-message .when'), appliedForJobOffers[id]);
                    addTimeMarkToTitle($markableJobOfferContainer.find('.joboffer-applied-icon'), appliedForJobOffers[id]);
                }
            }
        }
    });
}

function addTimeMarkToContent($box, time){
        if(typeof moment !== 'function') return;

	$box.html(moment(time).calendar());
	$box.attr('title', moment(time).format('D MMMM YYYY, HH:mm'));
}

function addTimeMarkToTitle($box, time){
        if(typeof moment !== 'function') return;

	console.log('marking time : ' + time);

        $box.attr('title', $box.attr('title') + " " + moment(time).format('D MMMM YYYY, HH:mm'));
}


function isEmpty(object_){
    for(var prop in object_) {
    	if (object_.hasOwnProperty(prop)) return false;
    }

    return true;
}

function retrieveFromCookie(name) {
    var asString = getCookieValue(name);

    if(!asString) return new Array();

    return $.parseJSON(asString.replace(/\\/g, ""));
}

function getCookieValue(name) {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = jQuery.trim(cookies[i]);
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) == (name + '=')) {
            var value = decodeURIComponent(cookie.substring(name.length + 1));
            if(value.substring(0,1) == '"'){
                value = value.substring(1);
            }

            if(value.substring(value.length -1, value.length) == '"'){
                value = value.substring(0, value.length - 1);
            }

            return value;
        }
    }
}



})(jQuery);
