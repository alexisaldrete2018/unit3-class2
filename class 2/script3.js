let yourName = prompt("Enter your name");

if(confirm("Are you "+ yourName + "?")){
    console.log("Hello " + yourName);
} else {
    console.log("Then what is your name?");
}