
 const now = new Date();

 function nowDate () {
     return now.getFullYear() + "-" + now.getMonth() + "-" + now.getDate() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
 }
 el = document.getElementById("h1Date");
 el.innerHTML = "Today is "+ nowDate();
 el.style.color="blue";
 