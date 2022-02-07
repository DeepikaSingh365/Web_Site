//objects are key value pair

// let obj = {};
// console.log(obj);

// let person = {
//     name:"Vivek",
//     age:20,
//     phone:124569
// }

// console.log(person)


let capAmerica = {
    firstName : "Steve",
    lastName : 'Rogers',
    friends : ['Bucky','Tony','Dr Banner','Natasha'],
    age:105,
    isFirstAvenger:false,
    address:{
        state:'Queens',
        city:'New York'
    },
    sayHi : function(){
        console.log('Captain says Hi!!!!')
    }
}

//print whole object
// console.log(capAmerica)


// console.log(capAmerica.firstName);
// console.log(capAmerica['firstName']);

// console.log(capAmerica.friends[0]);

// console.log(capAmerica.friends[1]);

// console.log("Is Frist Avenger: ",capAmerica.isFirstAvenger);
// console.log("Age : ",capAmerica.age);


// console.log(capAmerica.address);

// console.log("State : ",capAmerica.address.state)

// console.log("City :",capAmerica['address']['city'])
// console.log(capAmerica.address['city'])

// capAmerica.sayHi();


// loop throug object key and value
// for(let key in capAmerica){
//     console.log("key : ",key,"value :",capAmerica[key]);
// }

//add a new key value pair in existing object
// console.log("Before update :",capAmerica)

//capAmerica.movies = ['Avengers','Civil war','Winter Soldier'];

// update a existing value
// capAmerica.isFirstAvenger = true;
// console.log("After update :",capAmerica)


//delete a key-value pair

// delete capAmerica.movies

// console.log("movies deleted :",capAmerica);
let Name =  {
    firstName : "Deepika",
    lastName : "Singh",
    friends : ['Shweta','Kirti','Pranshu','Aalu','Manshi','Rahul','Vaishnavi'],
    age : 21,
    gender : "female",
    isGraduate : false,
    address : {
        line1 : "Mahavir Enclave",
        city : "New Delhi",
        state : "Delhi",
        pincode : 110045 
    },
    hello : function() {
        console.log("Hello Deepika Singh");
    }
}
//console.log(Name);
// console.log(Name.firstName);
// console.log(Name['firstName']);
// console.log(Name.friends[4]);
// console.log(Name.age);
// console.log(Name.gender);
// console.log(Name.isGraduate)
console.log(Name.address)
console.log("pincode of Deepika Singh : ",Name.address.pincode)
console.log()