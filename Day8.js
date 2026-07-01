// while loop


let count = 1;

while (count <= 5) {
    console.log("Number is: " + count);
    count++;
}

do {
    console.log("Number is: " + count);
    count++;
} while (count <= 5);


let fruit = {
    name: "Apple",
    color: "Red",
    price: "200",
    country: "Nepal"
};


fruit.taste = "Sweet";      
fruit.price = "250";        
delete fruit.country;      

console.log(fruit);