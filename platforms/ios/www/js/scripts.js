function submitName() {
        localStorage.name = document.getElementById("name_input").value;
    }

$(document).ready(function() {
    $.mobile.defaultPageTransition = 'slide'; //still flickering 

    $('span').html(localStorage.name);

    $(".selection").hide();

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
    $(".table_cell").click(function() {
        $(".selection").hide();
        $(this).each(function() {
        $(this).children(".selection").show();
            localStorage.mascot = $(this).children().first().attr("src");
            $('.didyouknow').html("<img src='" + localStorage.mascot + "' alt='mascot'>");
        });
    });

    ////////////////////////////   Blur   //////////////////////////// 
    $(".character *").bind("load", function() {
        $(".characterIntro").hide();
        //$("#blurred").hide();
        $(function() {
            $(".character").delay(5500)
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
    $(".quiz *").click(function() {
        $(".quiz *").css('background-color', 'transparent');
        
        $(this).each(function() {
            $(this).css('background-color', 'rgba(104, 179, 193, 1)'); 
            quizAnswer = $(this).attr("id");
            parent = $(this).parents("[data-role='page']");
            address = "#" + parent.attr("id") + quizAnswer; 
            child = $(parent).children("a"); 
            $(child).attr("href", address);
        });
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

        if (localStorage.phq < 6) {
            $("#page21 a").attr("href", "#page22A");
        }
        else if (localStorage.phq < 11) {
            $("#page21 a").attr("href", "#page22B");
        }
        else if (localStorage.phq < 16) {
            $("#page21 a").attr("href", "#page22C");
        }
        else if (localStorage.phq < 21) {
            $("#page21 a").attr("href", "#page22D");
        }

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

    /*$(function() {
        $(document.body).on("appear", ".character", alert("Appeared!"));
    }); */
}); 




