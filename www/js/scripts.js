function submitName() {
    localStorage.name = document.getElementById("name_input").value;
} 

$(document).ready(function() {
    if (localStorage.name != undefined) {
        $(location).attr('href', 'menu.html');
    }
    $(".selection").hide();
    $(".table_cell").click(function() {
        $(".selection").hide();
        $(this).each(function() {
            $(this).children(".selection").show();
            var mascot = $(this).children().first().attr("src");
            $('.didyouknow').html("<img src='" + mascot + "' alt='mascot'>");
        });
    });
}); 

$( "#next5" ).bind( "click", function(event, ui) {
    $(function() {
        $(".didyouknow").delay(5000)
                        .queue(function() {
                            $(this).foggy()
                                .dequeue();
                        });
        $(".typewriter#tw5").typed({
            strings: ["^600 20% of people identify themselves as chronic procrastinators - so if you do, you are not alone!"],
            typeSpeed: 50,
            contentType: 'text',
            showCursor: false
        });
    });
});