let str="12:30pm-12:00am";
let time=str.split("-")
function diff_minutes(dt2, dt1) 
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60;
  return Math.abs(Math.round(diff));
  
 }

function get_hours(time_string,AmPm) {
    console.log("2000-01-01 " + time_string+" "+AmPm)
    return new Date("2000-01-01 " + time_string+" "+AmPm).getHours() // 22
}
console.log(time)


let a=get_hours(time[0].slice(0,5), time[0].slice(5,7))
let b=get_hours(time[1].slice(0,5),time[1].slice(5,7))

console.log("time:",time[0],time[1])

let f=time[0].slice(5,7);
let g=time[1].slice(5,7);

console.log("f,g",f,g)
let datevalue=13
let datevalue2=13;

if(f===g){
  datevalue2=datevalue+1;
}

console.log("datevalue:",datevalue,datevalue2)
dt1 = new Date(`October ${datevalue}, 2014 12:30 pm`);
dt2 = new Date(`October ${datevalue2}, 2014 12:00 am`);



console.log("A,b",a,b)
console.log("date",dt1,dt2)
console.log(diff_minutes(dt1, dt2));