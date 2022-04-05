// let num1 = 1;
// let num2 = 2;
// let num3 = 3;
// let num4 = 4;
// let notTrue = false;

// if(num1<num2 && num3>num2){
//     console.log("num1 is smaller than num2 and num3 is larger than num2");
// }

// if(num1 == 1 || num2 ==1 || num3 == 1){
//     console.log("num1 is 1 OR num2 is 1 OR num3 is 1");
// }

// if(!notTrue){
//     console.log("not not true is true!");
// }

// Exercise

let userEmail = prompt("Insert email");
let userPassword = prompt ("Insert Password");

if (userEmail == "alexis.aldrete@example.com" && userPassword == "Test1234" ){
    document.write("Welcome to your profile Alexis");
} else {
    alert("Email or password are invalid. Please try again.")
    location.reload();
}