function giveYear() {
    var year = document.getElementById("yearBorn").value;
    if (year == "") {
      alert("Year must be filled ");
      return false;
    }
  }
  
  function giveMonth() {
    var month = document.getElementById("monthBorn").value;
    if (month == "0") {
      alert("Month must be filled");
      return false;
    }
  }
  
  function giveDay() {
    var day = document.getElementById("dayBorn").value;
    if (day == "") {
      alert("Day must be filled");
      return false;
    }