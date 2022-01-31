let str = "It is a string"; // String is sequence of characters
console.log(str);
//length
let lengthOfString = str.length;
console.log(lengthOfString);
//slice(start,end) 
let slicedArr = str.slice(3);//3rd index character se end tak display kar diya
console.log(slicedArr);

let slicedArr2 = str.slice(5,8);//5th index character se 8th tak display kar diya
console.log(slicedArr2);
let slicedArr3 = str.slice(5,16);//5th index character se end tak display kar diya
console.log(slicedArr3);//lastindex is excluded

//replace(valueToBeReplaced,valueToBeReplaced with)
let replacedStr = str.replace("is","was");// jaha pehli baar "is" mila wahi replace kar dega , ek occurence ko hi repkace karega, 
console.log(replacedStr);
//TOUpperCase and ToLowerCase
let upperCase = str.toUpperCase();
console.log(upperCase);
let lowerCase = str.toLowerCase();
console.log(lowerCase);

//concatenation
let first = "Hello";
let second = "Deepika";
let concatenate = first.concat("Hi",second,"Bye");
console.log(concatenate);
//trim
let text = '         Hello Deepika          ';

console.log("Text before trim: ",text);
console.log("Length of text before trim : ",text.length);

let trimmedText = text.trim();
console.log("Text after trim: ",trimmedText);
console.log("Length of text after trim : ",trimmedText.length);





