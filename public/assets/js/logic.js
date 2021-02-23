$(function(){
    $("#submit").on("submit", function(e){
        e.preventDefault();
        var newBurger = {
            name: $("#name").val().trim()
        };
        console.log(newBurger);
        $.ajax("/api/add-burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("Created a new burger");
            location.reload();
        });
    });

    $(".devourBtn").on("click", function(e){
        console.log("hit");
        var id = $(this).data("id");
        console.log(id);
        $.ajax("/api/devour-burgers/" + id, {
            type: "POST"
        }).then(function(){
            console.log("devoured: " + id);
            location.reload();
        });
    });


});