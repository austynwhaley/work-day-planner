//time variables
var hour9 = $("#9");
var hour10 = $("#10");
var hour11 = $("#11");
var hour12 = $("#12");
var hour1 = $("#13");
var hour2 = $("#14");
var hour3 = $("#15");
var hour4 = $("#16");
var hour5 = $("#17");

//variable moment method
var time = moment();


//save function that sets user input into local storage 
//also uses id tag to determine which black its saved in
setPlanner();
var saveBtn = $(".saveBtn");

saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".schedule").val();

    localStorage.setItem(time, schedule);
});

//retreives user input and inserts data using id tag
function setPlanner() {

    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

    $(".time-block").each(function () {
        var id = $(this).attr("id");
        var schedule = localStorage.getItem(id);

        if (schedule !== null) {
            $(this).children(".schedule").val(schedule);
        }
    });
}

// deterimes the time and adds class to the correct class to the correct time block
function pastPresentFuture() {
    hour = time.hours();
    $(".time-block").each(function () {
        var thisHour = parseInt($(this).attr("id"));

        if (thisHour > hour) {
            $(this).addClass("future")
        }
        else if (thisHour === hour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    })
}

//calls function
pastPresentFuture();


//   GIVEN I am using a daily planner to create a schedule
//   WHEN I open the planner
//   THEN the current day is displayed at the top of the calendar
//   WHEN I scroll down
//   THEN I am presented with time blocks for standard business hours
//   WHEN I view the time blocks for that day
//   THEN each time block is color-coded to indicate whether it is in the past, present, or future
//   WHEN I click into a time block
//   THEN I can enter an event
//   WHEN I click the save button for that time block
//   THEN the text for that event is saved in local storage
//   WHEN I refresh the page
//   THEN the saved events persist 