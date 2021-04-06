//.on("click") function will start the AJAX call
$("#search-city").on("click", function (event) {
  //option to hit enter instead of clicking button
  event.preventDefault();

  //get text from input box
  var city = $("#city-input").val();

  //make URL
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=e7b75a6005a289d2d814dd84709cf083";

  //run AJAX call to API
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    $("#city-data").text(JSON.stringify(response));
    $("#name").text(response.name);
    $("#temp").text(response.main.temp);
    $("#humidity").text(response.main.humidity);
    $("#wind").text(response.wind);
    $("#uvindex").text(response.coord.lon.lat);
    //log queryURL and resulting object
    console.log(queryURL);
    console.log(response);

    //for the date and icon

    var currentDay = $("#dateIcon");

    //the current day is displayed at the top of the calendar
    function displayToday() {
      var today = moment().format("dddd, MMMM Do YYYY");
      currentDay.text(today);
    }

    setInterval(displayToday);

    var fiveDay =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&appid=e7b75a6005a289d2d814dd84709cf083";

    $.ajax({
      url: fiveDay,
      method: "GET",
    }).then(function (response) {
      $("#day1").text(response);
      $("#day2").text(response);
      $("#day3").text(response);
      $("#day4").text(response);
      $("#day5").text(response);
    });

    // //div to hold city weather
    // var cityDiv = $("<div class='city'>");
    // //store city name
    // var name = response.city.name;
    // //display city name
    // var nAme = $("<p>").text("City Name: " + name);
    // //display city name
    // cityDiv.append(nAme);

    //     console.log(nAme);

    // making html to hold city info
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
