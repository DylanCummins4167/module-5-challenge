Date.prototype.yyyymmdd = function() {
  var yyyy = this.getFullYear().toString();
  var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
  var dd  = this.getDate().toString();
  return yyyy + "/" + (mm[1]?mm:"0"+mm[0]) + "/" + (dd[1]?dd:"0"+dd[0]); // padding
};

var date = new Date();
console.log( date.yyyymmdd() );
$(function () {
  function updateClock() {
  var currentTime = new Date();

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  var month = currentTime.getMonth() + 1;
  var day = currentTime.getDate();
  var year = currentTime.getFullYear();

  // Pad the time and date with leading zeros
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  month = (month < 10 ? "0" : "") + month;
  day = (day < 10 ? "0" : "") + day;

  // Set the time and date
  var timeString = hours + ":" + minutes + ":" + seconds;
  var dateString = month + "/" + day + "/" + year;

  document.getElementById("time").innerHTML = timeString;
  document.getElementById("date").innerHTML = dateString;
}

// Update the clock every second
setInterval(updateClock, 1000);
  //


 var timeNow = dayjs().hour();
  $(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);
    if (blockTime < timeNow) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (blockTime === timeNow) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });

$("#hour9 .description").val(localStorage.getItem(hour9));
$("#hour10 .description").val(localStorage.getItem(hour10));  
  $("#hour11 .description").val(localStorage.getItem(hour11));
  $("#hour12 .description").val(localStorage.getItem(hour12));
  $("#hour13 .description").val(localStorage.getItem(hour13));
  $("#hour14 .description").val(localStorage.getItem(hour14));
  $("#hour15 .description").val(localStorage.getItem(hour15));
  $("#hour16 .description").val(localStorage.getItem(hour16));
  $("#hour17 .description").val(localStorage.getItem(hour17));
  $("#hour18 .description").val(localStorage.getItem(hour18));
  $("#hour19 .description").val(localStorage.getItem(hour19));
  
  timeTracker();
  

});
