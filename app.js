//Task-2
var var1=11;
var var2="Levi";
console.log(var1,var2);

//Task-3
var value=false;
!value;
console.log(!value);

//Task-4
var a=10;
if(a/2)
a += a;
console.log(a);
if(a/5)
a -= 7;
console.log(a);
if(a/2 && a/5)
a *= 100;
console.log(a);
if(a/!2 && a/!5)
a /= 10;
console.log(a);

//Task-5
//Using For loop
var str="DSA training";
var newString='';
for(var i = str.length - 1; i >= 0; i--){
    newString += str[i];
}
console.log(newString);

//Using while loop
var j=str.length;
while(j--)
console.log(str[j]);