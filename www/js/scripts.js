function submitName() {
        localStorage.name = document.getElementById("name_input").value;
    }

$(document).ready(function() {
    $.mobile.defaultPageTransition = 'slide'; //still flickering 

    $('span').html(localStorage.name);

    ////////////////////////////   Locks & Links   //////////////////////////// 
    for (i=2; i<=localStorage.progress; i++) {
        if (i < 7) {
            j = i;
        }
        else {
            j = i - 6;
        }

        currentLock = "#lock" + i;
        $(currentLock).html("");

        currentStep = "#step" + i;
        currentLink = $(currentStep).attr("onclick") + j + ".html#page1'";
        $(currentStep).attr("onclick", currentLink);
    }

    if (localStorage.progress >=6) {
        $("#bonus").click(function() {
            alert("The bonus is in you!");
        });
        $(".stageLocked").html("");
        $("#menu1 a").attr("href", "#menu2");
    }
    
    ////////////////////////////   Mascots Replacement   //////////////////////////// 
    $(".selection").hide();

    $(".table_cell").click(function() {
        $(".selection").hide();
        $(this).each(function() {
            $(this).children(".selection").show();
            localStorage.mascot = $(this).children().first().attr("src");
            $('.didyouknow').html("<img src='" + localStorage.mascot + "' alt='mascot'>");
        });
    });

    ////////////////////////////   Blur   //////////////////////////// 
    $(".characterIntro").hide();
    $(".character *").appear(function() {
        $(function() {
            $(".character").delay(2000)
                            .queue(function() {
                                $(this).foggy({
                                    blurRadius: 8,  
                                    opacity: 0.8,  
                                    cssFilterSupport: true
                                })
                                //.fadeIn("slow")
                                .dequeue();
                                $(".characterIntro").delay(2300).fadeIn("slow")
                            });
        });
    });

    ////////////////////////////   Quizes   //////////////////////////// 
    $(".quiz #wrong, #right").click(function() {
        $(".quiz *").css('background-color', 'transparent');        
        $(this).css('background-color', 'rgba(104, 179, 193, 1)'); 
        quizAnswer = $(this).attr("id");
        parent = $(this).parents("[data-role='page']");
        address = "#" + parent.attr("id") + quizAnswer; 
        child = $(parent).children("a"); 
        $(child).attr("href", address);
    }); 

    ////////////////////////////   PHQ   //////////////////////////// 
        localStorage.phq = 0;
        previousId = undefined;
        previousNumber = +0;

        $(".phqOption *").click(function() {
            $(".phqOption *").css('background-color', 'transparent');
            
            $(this).each(function() {
                $(this).css('background-color', 'rgba(104, 179, 193, 1)');

                if ($(this).parents("[data-role='page']").attr("id") == previousId) {
                    localStorage.phq = +localStorage.phq - +previousNumber;
                }
                previousId = $(this).parents("[data-role='page']").attr("id");
                previousNumber = +($(this).attr("id"));
                
                localStorage.phq = +localStorage.phq + +($(this).attr("id"));
            });
        });

    ////////////////////////////   Bad Thoughts Box   ////////////////////////////
    $(".badThoughtsBox *").click(function() { 
        $(this).each(function() {
            if ($(this).css("background-color") == 'rgba(0, 0, 0, 0)') {         
                $(this).css("background-color", 'rgba(104, 179, 193, 1)');
            }
            else {
                $(this).css("background-color", 'rgba(0, 0, 0, 0)');
            }    
        });
    });

    ////////////////////////////   Bubbles   //////////////////////////// 
    $("[id^=thoughtText]").hide(); 

    $(".thought").click(function() {
        $(this).next().fadeIn("slow");
    });   

    ////////////////////////////   Timer   //////////////////////////// 
    /* $(".timer").TimeCircles({
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
    }); */     //call me maybe when you want to implement this in the html
}); 




