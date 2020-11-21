$(document).ready(function() {
    $("ul a").each(function() {
        $(this).click(function(evt) {
            $("#caption").text($(this).attr("title"));
            $("#image").attr("src",$(this).attr("href"));
            
            evt.preventDefault();
        });
    });
});