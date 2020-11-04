// Check off todos when clicked on on a Todo
$("ul").on("click", "li", function() {
    $(this).toggleClass("checked");
});

// Delete Todos by clicking X Icon
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(300, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

// Add a new Todo
$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
        let todoText = $(this).val();
        $(this).val("");

        $("ul").append("<li><span><i class='fas fa-trash'></i></span></span> " + todoText + "</li>");
    }
});