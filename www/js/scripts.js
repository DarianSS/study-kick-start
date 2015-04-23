function submitName() {
    localStorage.name = document.getElementById("name_input").value;
}

$(document).ready(function() {
    $.mobile.defaultPageTransition = 'slide'; //still flickering 

    $('span').html(localStorage.name);

    $(".selection").hide();

    ////////////////////////////   Locks & Links  //////////////////////////// 
    for (i=2; i<=localStorage.progress; i++) {
        currentLock = "#lock" + i;
        $(currentLock).html("");
    }
    currentStep = "#step" + localStorage.progress;
    currentLink = $(currentStep).attr("onclick") + localStorage.progress + ".html#page1'";
    $(currentStep).attr("onclick", currentLink);

    ////////////////////////////   Mascots Replacement  //////////////////////////// 
    $(".table_cell").click(function() {
        $(".selection").hide();
        $(this).each(function() {
            $(this).children(".selection").show();
            localStorage.mascot = $(this).children().first().attr("src");
            $('.didyouknow').html("<img src='" + localStorage.mascot + "' alt='mascot'>");
        });
    });

    ////////////////////////////   Blur  //////////////////////////// 
    $(".character *").bind("load", function() {
        $(".characterIntro p").hide();
        $("#blurred").hide();
        $(".char2").blur();
        $(function() {
            $("#blurred").delay(1000)
                            .queue(function() {
                                $(this).foggy({
                                    blurRadius: 30,  
                                    opacity: 1,  
                                    cssFilterSupport: true
                                })
                                .fadeIn("slow")
                                .dequeue();
                                $(".characterIntro p").delay(2300).fadeIn("slow")
                            });
        });
    });

    ////////////////////////////   Quizes  //////////////////////////// 
    $(".quiz *").click(function() {
        $(".quizOption1").css('background-color', 'transparent');
        $(".quizOption1").children().css('background-color', 'transparent');
        $(".quizOption2").css('background-color', 'transparent');
        $(".quizOption2").children().css('background-color', 'transparent');
        $(".quizOption3").css('background-color', 'transparent');
        $(".quizOption3").children().css('background-color', 'transparent');
        $(".quizOption4").css('background-color', 'transparent');
        $(".quizOption4").children().css('background-color', 'transparent');
        
        $(this).each(function() {
            $(this).css('background-color', 'rgba(104, 179, 193, 1)'); 
            quizAnswer = $(this).attr("id");
            parent = $(this).parents("[data-role='page']");
            address = "#" + parent.attr("id") + quizAnswer; 
            child = $(parent).children("a"); 
            $(child).attr("href", address);
        });
    });

    ////////////////////////////   Bubbles  //////////////////////////// 
    $("[id^=thoughtText]").hide(); 

    $(".thought").click(function() {
        $(this).next().fadeIn("slow");
    });
}); 



