// Given a list of sorted characters letters containing only lowercase letters, and
// given a target letter target, find the smallest element in the list that is
// larger than the given target.
// Letters also wrap around. For example, if the target is target = 'z' and letters
// = ['a', 'b'], the answer is 'a'.
// Examples:
// Input:
// letters = ["c", "f", "j"]
// target = "a"
// Output: "c"
// Input:
// letters = ["c", "f", "j"]
// target = "c"
// Output: "f"
// Input:
// letters = ["c", "f", "j"]
// target = "d"
// Output: "f"
// Input:
// letters


// let arr = ["c", "f", "j"]

// let targ="a"


// for(let i=0; i<arr.length; i++){
//     if(arr[i]>targ){
//         console.log(arr[i]);
//         break;
//     }
// }


// Given three integer arrays arr1, arr2 and arr3 sorted in strictly increasing
// order, return a sorted array of only the integers that appeared in all three
// arrays.
// Example 1:
// Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]
// Output: [1,5]
// Explanation: Only 1 and 5 appeared in the three arrays.
// Constraints:
// 1 <= arr1.length, arr2.length, arr3.length <= 1000
// 1 <= arr1[i], arr2[i], arr3[i] <= 2000

// let arr1 = [1,2,3,4,5]
// let arr2 = [1,2,5,7,9] 
// let arr3 = [1,3,4,5,8]
// let arr4=[]

// .push.......

// const commanFun=(arr1,arr2,arr3)=>{
// return arr1.some((item)=>{
//     if(arr2.includes(item) && arr3.includes(item)){
//      arr4.push(item)
//     }
// })
// }
// // commanFun(arr1,arr2,arr3)



// for(let i=0; i<arr1.length; i++){
//     if(arr1[i]===arr2[i]===arr3[i]){
//         arr4.push(arr1[i])
//     }
// }
// console.log(arr4)



// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].


// let nums = [-4,-1,0,3,10]
// [3,-4,10]    

// for(let i=0; i<nums.length; i++){
//     nums[i]=nums[i]*nums[i];
// }

// nums.sort((a,b)=>a-b);

// console.log(nums)

let str="12:30pm-12:00am";



function convertHourstoMinute(hours) {
    return Math.floor(hours * 60);
   }


let time=str.split("-")

function timeConvert(time,twelvOrTwen){ 
    var stSplit = time.split(":");
    var stHour = stSplit[0];
    var stMin = stSplit[1].split(" ")[0];
    var stAmPm = stSplit[1].split(" ")[1];
    var newhr = 0;
    var ampm = '';
    var newtime = '';
   // alert("hour:"+stHour+"\nmin:"+stMin+"\nampm:"+stAmPm); //see current values
    if (twelvOrTwen == "12") {
        if (stHour == 12){
        ampm = "PM";
        newhr = 12;
        }
        else if (stHour == 00){;
        ampm = "AM";
        newmin = stMin;
        newhr = 12;
        }
        else if (stHour > 12){
        newhr = stHour - 12;
        ampm = "PM";
        }
        else {
        newhr = stHour;
        ampm = "AM";
        }
        newtime = newhr+":"+stMin+" "+ampm;
    }
    else if (twelvOrTwen == "24"){
    if ((stAmPm == "pm") || (stAmPm == "PM")){ 
        if (stHour < 12) {
        newhr = (stHour*1)+(1*12); //goes to 13
        }
        else { //means is 12:30 PM
        newhr = 12;
        }
    }
    newtime = newhr+":"+stMin
    }
    else {
    alert("No Time To Convert Or Didn't Specify 12 or 24");
    }
    return newtime;
}

function convertTime12To24(time) {
    var hours   = Number(time.match(/^(\d+)/)[1]);
    var minutes = Number(time.match(/:(\d+)/)[1]);
    var AMPM    = time.match(/\s(.*)$/)[1];

    console.log(hours, minutes, AMPM)
    if (AMPM === "PM" && hours < 12) hours = hours + 12;
    if (AMPM === "AM" && hours === 12) hours = hours - 12;
    var sHours   = hours.toString();
    var sMinutes = minutes.toString();
    if (hours < 10) sHours = "0" + sHours;
    if (minutes < 10) sMinutes = "0" + sMinutes;
    return (sHours + ":" + sMinutes);
}

function get_hours(time_string,AmPm) {
    console.log("2000-01-01 " + time_string+" "+AmPm)
    return new Date("2000-01-01 " + time_string+" "+AmPm).getMinutes() // 22
}
console.log(time)


let a=get_hours(time[0].slice(0,5), time[0].slice(5,7))
let b=get_hours(time[1].slice(0,5),time[1].slice(5,7))

let r= time[0]
console.log("r",r.slice(5,7))
console.log(a,b)
