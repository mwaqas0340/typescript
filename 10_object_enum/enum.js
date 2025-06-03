"use strict";
// // Default enum
// enum vowel {
//     a = 1,
//     e ,
//     i ,
//     o ,
//     u ,  
//  }
//  console.log(vowel.u);
//  enum days {
//     Mon,
//     Tue,
//     Wed,
//     Thu,
//     Fri,
//     Sat,
//     Sun,
//  }
//  console.log(days);
//  enum continent{
//    Asia = 55,
//    Africa = 51,
//    Europe = 44,
//    Australia = 12,
//  }
//  console.log(continent.Asia)
// enum famousCity{
//    Karachi = "The city of lights",
//    Mirpurkhas = "The city of gardens",
//    Multan = "The city of shrine"
// }
// let FamousCity: famousCity = famousCity.Karachi
// console.log(FamousCity);
var rate;
(function (rate) {
    rate[rate["petrol"] = 267] = "petrol";
    rate[rate["diesel"] = 278] = "diesel";
})(rate || (rate = {}));
console.log(rate.diesel.toString() + "," + rate.petrol.toString());
var rateList;
(function (rateList) {
    rateList["sugar"] = "1 kg price is = 145";
    rateList["rice"] = "1 kg price is = 270";
    rateList["oil"] = "1 litre price is = 360";
    rateList["tea"] = " 1/2kg pouch price is = 980";
})(rateList || (rateList = {}));
console.log(rateList);
// enum calculation{
//  addition=2+5,
//  substraction=5-2,
//  multiplication=3*2,
//  division=8/2,
//  reminder= 7%2,
//  modulus= 2**3,
// }
// console.log(calculation);
