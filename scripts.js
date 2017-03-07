$(document).ready(function() {
    var searchTerm;
    $("#go").click(function() {

        searchTerm = $("#input").val();
        //console.log(searchTerm);

        $.getJSON(
            "http://api.openweathermap.org/data/2.5/weather?q=" + searchTerm + "&units=imperial&appid=bdba1a0a44393ebb01ab7f3d1e43b732",
            function(response) {
              //console.log(response.main.temp)
                
                  
              $("#weather-results").append("The temperature in" + " " + searchTerm + " "+ "is" + " " + response.main.temp)
              // $("#weather-results").append("The temperature in" + " " + searchTerm + " "+ "is" + " " + response.main.temp)
                   //console.log(response)
                        



                



            });

    });


});
