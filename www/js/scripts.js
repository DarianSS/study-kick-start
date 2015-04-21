function submitName() {
    localStorage.name = document.getElementById("name_input").value;
} 

$(document).ready(function() {
    $('span').html(localStorage.name);

    $(".selection").hide();

    $(".table_cell").click(function() {
        $(".selection").hide();
        $(this).each(function() {
            $(this).children(".selection").show();
            localStorage.mascot = $(this).children().first().attr("src");
            $('.didyouknow').html("<img src='" + localStorage.mascot + "' alt='mascot'>");
            //$('.didyouknow').each(function() {
            //    $(this).html("<img src='" + localStorage.mascot + "' alt='mascot'>");     
            //});
        });
    });
}); 