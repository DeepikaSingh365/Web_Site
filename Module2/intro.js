console.log("hello");
let name = "Deepika Singh";
console.log(name);
let num = 1;
console.log(num);
let ch  = 'a';
console.log(ch);
let bool = true;
console.log(bool)
for(let i=0;i < 10;i++){
    console.log(i);
}
let n = 47;
let isPrime = true;
for(let i = 2;i*i <=n;i++){
    if(n%i == 0){
        isPrime = false;
    }
}
if(isPrime == true){
    console.log("prime number");

}
else{
    console.log("not a prime number")
}