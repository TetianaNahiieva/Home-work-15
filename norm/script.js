
let money = prompt('How much money is in the wallet?)');
money = parseInt(money);
let chocolate = prompt('how much is chocolate?');
chocolate = parseInt(chocolate);
alert ("You can buy  "+Math.round(money/chocolate)+ "  chocolates");
alert("Change  "+money % chocolate);



let number = prompt('Name the number!)');
number = parseInt(number);
let result = 0;
let a = number%10;
let b = a*100;
let c = number/10;
let m = Math.floor(c%10);
let d = m*10;
let k = number/100;
alert("Teach  "+Math.floor(b+d+k));
