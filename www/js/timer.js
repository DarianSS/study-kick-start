$(document).ready(function() {

    $("#page2").appear(function() {
        $("#page2 a").hide();
        $("div[data-role='footer']").hide();

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
        
        $(".timer").TimeCircles().addListener(function(unit,value,total) {
            if (value == 0) {
                $(".timer").TimeCircles().end().fadeOut("slow"); 
                $("#page2 a").fadeIn("slow");
                $("div[data-role='footer']").fadeIn("slow");
            }
        });  
    });
});