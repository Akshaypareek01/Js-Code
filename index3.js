function CountingMinutesI(str) {
    var mainTime = str.split("-");
    
    var time1 = mainTime[0].slice(0,mainTime[0].length-2).split(":");
   
    var AmPm1 = mainTime[0][mainTime[0].length-2];
    var time2 = mainTime[1].slice(0,mainTime[0].length-2).split(":");
    var AmPm2 = mainTime[1][mainTime[1].length-2];
    
    var time1Inmin = parseInt(time1[0]) * 60 + parseInt(time1[1]);
    var time2Inmin = parseInt(time2[0]) * 60 + parseInt(time2[1]);
        // console.log(time1Inmin, time2Inmin);
    if(AmPm1 === "p" && time1[0] !== "12"){
        time1Inmin += 12 * 60;
    }
    
    else if(AmPm2 === "p" && time2[0] !== "12"){
        time2Inmin += 12 * 60;
    }
  
    else if(AmPm1 === "a" && time1[0] === "12"){
        time1Inmin -= (12 * 60);
    }
   
    else if(AmPm2 === "a" && time2[0] === "12"){
        time2Inmin -= (12 * 60);
    }
    
    if (time1Inmin > time2Inmin){
        return ((24 * 60) - time1Inmin) + time2Inmin;
    } else{
        return time2Inmin - time1Inmin;
    }
}

var str = "1:23am-1:08am";
console.log(CountingMinutesI(str));