// GIVEN a weather dashboard with form inputs WHEN I search for a city  
// THEN I am presented with current and future conditions for that city and that city is added to the search history  


// WHEN I view current weather conditions for that city  
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index 


// WHEN I view the UV index  
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe  


// WHEN I view future weather conditions for that city  
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity  

 
// WHEN I click on a city in the search history  
// THEN I am again presented with current and future conditions for that city  

 
// WHEN I open the weather dashboard  
// THEN I am presented with the last searched city forecast 

            //.on("click") function will start the AJAX call
            $("#search-city").on("click", function(event) {
                //option to hit enter instead of clicking button
                event.preventDefault();

                //get text from input box
                var city = $("#city-input").val();

                //make URL
                var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=e7b75a6005a289d2d814dd84709cf083";
                
                //run AJAX call to API
                $.ajax({ 
                url: queryURL, 
                method: "GET" 
                }).then(function(response) {
                $("#city-data").text(JSON.stringify(response)); 
                $("#name").text(response.name)
                //log queryURL and resulting object
                console.log(queryURL);
                console.log(response);
                
                
            //div to hold city weather
            // var cityDiv = $("<div class='city'>");
            // //store city name
            // var name = response.city.name;
            // //display city name
            // var nAme = $("<p>").text("City Name: " + name);
            // //display city name
            // cityDiv.append(nAme);
                                                                                
            //     console.log(nAme);

        //making html to hold city info
            // var cityName = $("<h2>").text(response.name);  
            // var weatherIcon = $("<icon>").html("img src=",response.icon);
            // var date = $( )
        
            // //var date = $(.datepicker.formatDate('yy/mm/dd', new Date());
            // //var date = $(mm + '/' + dd + '/' + yyyy);
    

            // $("#city-data").empty();
            // $("#city-data").append(cityName, date, weatherIcon);

            // console.log(date);

        });
               });