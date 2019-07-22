define( [	
		"jquery",
		"qlik",
		"./lib/js/property",
		"./lib/js/initialProps",
		"text!./score-card-template.html",
		"text!./lib/css/score-card.css",
		"text!./lib/css/spectre.min.css",
		"./lib/js/directives",	
	],

	function ($, qlik, props, initProps, template, scoreCSS, spectreCSS) {'use strict';
		$("<style>").html(spectreCSS).appendTo("head");
		$("<style>").html(scoreCSS).appendTo("head");
		var support = {	snapshot: true,
			export: true,
			exportData : true};

		return {		
			initialProperties : initProps,
			definition : props,
			support : support,
			template: template,
			
			controller: ['$scope', function ( $scope ) {
				var totalMeasures = function(){var t = $scope.layout.qHyperCube.qMeasureInfo.length; return t;},
					avatarLocation = function(){var t = $scope.layout.qHyperCube.qDimensionInfo[0].qAttrExprInfo[0].qFallbackTitle; return t;};					
					
				$scope.measureCount = totalMeasures();
				
				$scope.dimAvatar = function(){										
					if(avatarLocation()){
						return 1;							
					}
					else{
						return 2;							
					}						
				};				

				$scope.initials =function(dimValue){
					var name = dimValue,
					 	initials = name.match(/\b\w/g) || [];
					initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
					return initials;
				};

				$scope.selection = function(datavalue, id) {					
					//self.backendApi.selectValues(0, [datavalue], false);
					$scope.selectValues(0, [datavalue], true);					
					$(id).toggleClass("selected");													
				}
											
				$scope.viewStyle = function(){
					var measureStyle;						
					
					switch (totalMeasures()) {
						case 1:
							measureStyle = "col-12";
						  	break;
						case 2:
							measureStyle = "col-6";
							break;
						case 3:
							measureStyle = "col-4";
							break;
						case 4:
							measureStyle = "col-3";							
					}
					return measureStyle;
				}				
				$scope.extId = "qv-object-score-card-" + $scope.layout.qInfo.qId;
			}],

			paint: function ($element, layout) {
				var self = this;				
				return qlik.Promise.resolve();
			}
		};
	} 
);