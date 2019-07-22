define(['qvangular'], function (qvangular) {
	'use strict';

	qvangular.directive("selection", [function() {
	    return {
	        link: function (scope, element, attrs) {
	        	element.bind("click", onClick);
                function onClick(event) {
					var method = element.attr("selection"),
						dimNo = parseInt(element.attr("data-element"), 10),
						elementId = element.attr("id")
					scope.$event = dimNo;//event;
					scope.$eventId = '#'+elementId;									
                    scope.$apply(method);                   
	        	}
	    	}
	    }
	}]);
});