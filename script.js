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
  
// Get the current hour
var currentHour = new Date().getHours();




  // Apply color code based on the current hour
  if (i < currentHour - 9) {
    row.style.backgroundColor = "lightgray"; // Past hour
  } else if (i === currentHour - 9) {
    row.style.backgroundColor = "yellow"; // Present hour
  } else {
    row.style.backgroundColor = "white"; // Future hour
  }

  // Append the row to the table
  table.appendChild(row);
}

// Append the table to the body of the document
document.body.appendChild(table);
  
  
});
