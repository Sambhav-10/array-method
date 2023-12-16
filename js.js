// let arr = [50,60,40,88,66,54]


// let name = ["sambhav","seth","shahgarh"]

// console.log(arr.length);// length

// array join - join method also join all array element into a string.

// let add= arr.join("*") // this join use

//  tostring() use - converting to string
                    // send copy  

// let add= arr.toString() // converting into string
// console.log(typeof add);

// The pop()-  method removes the last element from an array
// arr.pop()            // remove last element that is 54

// arr.push(55)          // we can add 55 this is number 
// arr.push("sambhav")         // we can add string
 
// console.log(add);


// this time we learn shift and unshift method -- jo  apne first element ke sath khelti hai 
// ======Shifting is equivalent to popping, but working on the first element instead of the last.=====

// shift- first element romove

// arr.shift()   // 50 jo first pe hai shift ne delete kr diya 

// arr.unshift(666) // we can use unshift to dekho apn ne 666 ko phle no pr add kr diya


// changing element using thire index no 

// let newArr = ["darshan","ka","dost","sambhav"]

// console.log(newArr);
// darshan ko english aati hai use pta hai dost ko english me friend bolte hai to change to krna padega

// newArr[2]="friend" // ok change ho gya dekha 

// delete bhi to to hota hai bs ye jisko delete krna hai uski jgh pr undifine show kr deta hai

// delete newArr[1]; // this time show empty slot


// ab apn manny array ko mila ke one array me add krke dekhte 

// ==== we can use concat()- the concat method dose not change the existing array it always returns a new array

// let main = [10,55,16,17,18,19]
// let one = [1,5,6,7,8,9]
// let two = [2,22,32,42,52,62]

// let join= one.concat(two , main) // right way to concat 

// let pluse = one.concat(two + "," + main) // agar ime ", " isko add nahi krenge to two ke last element me on join hoga to 6210 result hoga

// console.log(pluse);

// console.log(one);
// console.log(two)

// console.log(join);


// Splicing and Slicing Arrays

// The splice() method adds new items to an array.




// sort method use 

// let alpha = ["a","b","c","d","e"]
// let covA = ["e","d","a","f","n"]

// covA.sort(); /// alpha method alphabet ke hisab se jma deta hai like  a b c d e f
// console.log(covA); 


// numeric sort ()
// let num  =[100,66,188,74,12,45]
// console.log(num);

// num.sort()
// console.log(num);

// By default, the sort() function sorts values as strings.

// This works well for strings ("Apple" comes before "Banana").

// However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

// Because of this, the sort() method will produce incorrect result when sorting numbers.

// You can fix this by providing a compare function:

// num.sort(function(a, b){return a - b});

// console.log(num);
// alpha.reverse(); // array ko reverse kr deta hai 

// console.log(alpha);


// floor method=================

// console.log(floor(math.random()*10+1));


//  let s= setInterval(() => {
//     // console.log(Math.floor(Math.random() * 100));
//     console.log(Math.floor((Math.random() * 100)));
    
// }, 1000);
// console.log(s);





