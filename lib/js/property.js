// Properties

define( ["qlik","jquery"], function (qlik, $) {
    'use strict';		
	var dimensions = {
        uses : "dimensions",
        min : 1,
        max : 1,
        items: {
            dimImg: {
                type: "string",
                label: "Profile Image expression",
                ref: "qAttributeExpressions.0.qExpression",
                component: "expression",
            }
        }
	},
    measures = {   
        uses : "measures",
        min : 1,
        max : 4,
        items: {
            measureColour: {
                type: "string",
                label: "Colour",
                ref: "qAttributeExpressions.0.qExpression",
                component: "expression",
            }
        } 
    },
    imageCheckBox = {
        ref: "props.show",
        label: "Show Avatar",
        type: "boolean",
        default: false
    },
    defaultAvatar = {
        type: "string",
        label: "Avatar Location",
        ref: "props.location",
        component: "expression",
    },
    layout = {
        type: "string",
        component: "radiobuttons",
        label: "Orientation radio-buttons",
        ref: "props.orientation",
        options: [{
            value: "qv-object-score-card-card col-12",
            label: "Single Column"
        }, {
            value: "qv-object-score-card-multiple col-2",
            label: "Multiple Columns"
        }],
        defaultValue: "qv-object-score-card-card col-12"
    },
    settings = { 
        uses : "settings",
        items : {
            initFetchRows : {
                ref : "qHyperCubeDef.qInitialDataFetch.0.qHeight",
                label : "Initial fetch rows",
                type : "number",
                defaultValue : 50
            },
            avatar: {
                type: "items",
                label: "Default Avatar/image",
                items: {
                    imageCheckBox: imageCheckBox,
                    defaultImg: defaultAvatar
                }
            },
            orientation: {
                type: "items",
                label: "Card Layout",
                items: {
                    cardLayout: layout
                }
            }
        }
    },
    sorting = {
        uses: "sorting"
    };
    
    return {
        type: "items",
        component: "accordion",
        items: {
            dimensions: dimensions,
            measures: measures,
            sorting: sorting,
            settings: settings
            //appearance: appearancePanel
			//addons: addons
        }
    };
} );