$(document).ready(function() {
    var searchTerm;
    $("#submit").click(function() {

        searchTerm = $("#input").val();
        //console.log(searchTerm);

        $.getJSON(
            "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC",
            function(response) {
                for (var i = 0; i < response.data.length; i++) {
                    $("#gif").append("<img src = " + response.data[i].images.fixed_height.url + ">")

                    // function(searchRestart) {
                    //     $("#gif").html("")


                    // }

                }



            }
        );
    });


    $("#reset").click(function() {

        $("#gif").html("");
        $("#input").val("");

    });
});
