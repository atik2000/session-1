// var message = "Hello World";
// var nums = [1, 2, 3, 4, 5];
// var person1 = {
//     name: "John",
//     age: 30
// };
// console.log(message);
// console.log(nums);
// console.log(person1);

function first() {
    setTimeout(function () {
        console.log(1);
        first();
    }, 5000);
}
function second() {
    console.log(2);
}
first();
second();