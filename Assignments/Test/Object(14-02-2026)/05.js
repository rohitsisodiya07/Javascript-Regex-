// Question 5: Swap Key and Value of an Object

const obj = {
  name: "Amit",
  city: "Delhi",
  role: "Developer"
};

// 1. Swap keys and values of the object.



    let newObj = Object.fromEntries(Object.entries(obj).map( ([key, value]) => [value, key])) ;
    console.log(newObj);
    