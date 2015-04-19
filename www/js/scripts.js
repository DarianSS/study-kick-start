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