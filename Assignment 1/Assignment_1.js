let numbers = [10,5,3,28,90,67,45];

console.log(numbers.join(',')); // 10,5,3,28,90,67,45
console.log(numbers.at(1)); // 5
console.log(numbers.slice(2,5)); // 3,28,90
console.log("Index of 90 is ",numbers.findIndex(
    (num)=> num == 90
));

console.log(numbers.find(
    (num)=> num == 90
));

console.log(numbers.fill(100,3,5));
console.log(numbers.toString());

let filteredArray = numbers.filter((num)=>num != 100);

console.log(filteredArray);

numbers.map((num,index)=>{
    if(num == 100){
        console.log("100 is present at index "+index)
    }
})

let newArray = Array.of(2,4,6,8,10,12,14,16)

console.log(newArray);

console.log(Array.toString("Hello"))

newArray.unshift(100)
console.log("After unshifting: ",newArray)

newArray = newArray.pop();
console.log("After popping 0: ",newArray)

const names = ["Arfaat","Uzair","Bilal","Danish"];
const indexOfElementToBeRemoved = names.indexOf("Uzair");

if(indexOfElementToBeRemoved != -1){
    names.splice(indexOfElementToBeRemoved,1)
    console.log(names);

}

let user = "Arfaat Hussain";
console.log(user.endsWith("in"))  // true

console.log(user.includes("Arfaat"))  // true

let text1 = "e";
let text2 = "ab";
let result = text1.localeCompare(text2);

console.log(result); 
