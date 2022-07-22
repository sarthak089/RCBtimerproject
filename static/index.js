function timestamp() {
    let newdate = new Date();
    let olddate = new Date(2008, 3, 18, 20, 0, 0);
    let f = newdate - olddate;
    let fd=ms(f);
    
     finalyr = (document.getElementById("rcbyr").innerHTML =
      fd.year);
     
     finalday = (document.getElementById("rcbday").innerHTML =
      fd.day);
     finalhour = (document.getElementById("rcbhour").innerHTML =
      fd.hour);
     finalmin = (document.getElementById("rcbmin").innerHTML =
      fd.minute);
     finalsec = (document.getElementById("rcbsec").innerHTML =
      fd.second);
      
    
  }
  setInterval(timestamp, 1000);

  function ms(t) {
    let year, month, day, hour, minute, second;
    

    
    second = Math.floor(t / 1000);
    minute = Math.floor(second / 60);
    second = second % 60;
    hour = Math.floor(minute / 60);
    minute = minute % 60;
    day = Math.floor(hour / 24);
    hour = hour % 24;
    month = Math.floor(day / 30);
    day = day % 30;
    year = Math.floor(month / 12);
    month = month % 12;

    return { year, /*month,*/ day, hour, minute, second };
  }