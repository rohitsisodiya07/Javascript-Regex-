// Check if a year is a leap year.
let year = 2000;

if (year % 400 == 0) {
    console.log("Leap Year");
}
else if (year % 4 == 0 && year % 100 != 0) {
    console.log("Leap Year");
}
else {
    console.log("Not Leap Year");
}

