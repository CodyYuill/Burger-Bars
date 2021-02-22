$(function(){
    $("#submitBtn").on("click", function(e){
        e.preventDefault();
        var newBurger = {
            name: $("#name").val().trim()
        };
        console.log(newBurger);
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("Created a new burger");
            location.reload();
        });
    });


});