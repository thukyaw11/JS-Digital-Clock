function showTime(){
    var currentDate=new Date();
    var hour=currentDate.getHours();
    var minute=currentDate.getMinutes();
    var second=currentDate.getSeconds();
    var session="AM";
    if(hour>12){
        hour=hour-12;
        session="PM";
    }
    if(hour<10){
        hour="0"+hour;
    }
    if(minute<10){
        minute="0"+minute;
    }
    if(second<10){
        second="0"+second;
    }
    document.getElementById("clock").innerHTML=hour+":"+minute+":"+second+"  "+session;
    setTimeout(showTime,1000);
}
showTime();