$(document).ready(function() {

$(".timer").TimeCircles({
        "bg_width": 0.2,
        "fg_width": 0.03,
        "count_past_zero": false,
        "circle_bg_color": "#091a37",
        "time": {
            "Days": {
                "text": "Days",
                "color": "#FFCC66",
                "show": false
            },
            "Hours": {
                "text": "Hours",
                "color": "#99CCFF",
                "show": false
            },
            "Minutes": {
                "text": "Minutes",
                "color": "#BBFFBB",
                "show": false
            },
            "Seconds": {
                "text": "Seconds",
                "color": "#68b3c1",
                "show": true
            }
        }    
});

});