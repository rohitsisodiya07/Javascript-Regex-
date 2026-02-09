//10. What is the difference between primitive values and object values?

   //Primitive[Stored by Value] //Means Store on Copy
   let a = 10 ;
   let b = a ;
   b = 20 ;
   console.log(a); // 10
   console.log(b); // 20

   //Object Values[Stored By Reference] // Means Shared Reference
   let obj = {
    name : "Rohit",
    age : 22
   }
   let obj2 = obj ;
   obj2.age = 25 ;
   console.log(obj);
   console.log(obj2);
   
   
    