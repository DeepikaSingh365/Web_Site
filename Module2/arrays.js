//array declaration
//let arr = []
//console.log(arr)
// let arr = [1,3,5,6,7];

// console.log(arr);

let b =[1,'c',"I am String",true];
console.log(b);
console.log(b[0]);//1
console.log(b[2]);//I am String
console.log(b[3]);//true

console.log("Before",b[1]);
b[1] = "I am replaced";
console.log("After",b[1]);

b[4] = "newly added";
console.log(b);
//out of range elements ko bhi add kar sakte hain but beech ke elements empty print honge
b[7] = "Excited";
console.log(b);

// Arrays methods
//1.push(adds elements at last)
let arr = [1,2,3,4,5];
console.log("Before push:",arr);
arr.push(6);
console.log("After push:",arr);
//2.pop(deletes elements from last)
console.log("Before pop:",arr);
arr.pop();
console.log("After pop:",arr);
//3.shift(removes  element from front)
console.log("Before shift:",arr);
arr.shift();
console.log("After shift:",arr)

//4.unshift(adds element at front)
console.log("Before unshift:",arr);
arr.unshift(1);
console.log("After unshift:",arr)
//5.length
console.log(arr.length);

//2d matrix
let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]
console.log(matrix);



