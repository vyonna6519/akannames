function getBirthday() {
    
    var gender = document.getElementById("gender").value;
    var dob = document.getElementById("start").value;
  
    var dateStr = new Date(dob);
    var dayofWeek = dateStr.getDay();
  
     //console.log(dayofWeek);
     //console.log(gender);
  
  
      getAkanForm(dayofWeek, gender);
  
  };
  
    var week = [ "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",]
    var male = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
   var female = ["Akosua","Adwoa","Abenaa","Akua","Afua","Ama"];
  
  function getAkanForm(dayofWeek, gender) {
    
    var day = dayofWeek;
  
    if (gender === "Male") {
        var name = male[day];
  
        var weekDay = week[day];
  
        document.getElementById("Akanprint").innerHTML = " You Were Born on "  + "" + weekDay + " " + "Your Akan Name Is" + name;
  
  
    } else if (gender === "Female") {
        var name = female[day];

        var weekDay = week[day];
        
        document.getElementById("Akanprint").innerHTML = " You Were Born on "  + "" + weekDay + " " + "Your Akan Name Is" + name;
    } else {
  
        console.log("The Gender or Date can not be empty")
    }
  
  }