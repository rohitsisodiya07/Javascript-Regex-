

const newElement = document.createElement("h2");

newElement.textContent = "New Element Created";
newElement.id = "new";
// console.log(newElement);

//Select Element
const element = document.getElementById("first") ;
element.after(newElement)


//Create New Element
const second = document.createElement("h3") ;
second.textContent = "Diwali Aane Wali h" ;
// second.className = "Creation" // Not Good Practice
second.classList.add("diwali")
second.classList.add("holi")
// second.classList.remove("holi") //Delete Class
console.log(second);
newElement.after(second) ;

second.style.backgroundColor = "pink" ;
second.style.fontSize = "40px"
second.style.color = "grey"
console.log(second.getAttribute("class"));


//Adding List Within list

// const list1 = document.createElement("li") ;
// list1.textContent = "Milk" ;
// const list2 = document.createElement("li") ;
// list2.textContent = "Bar" ;
// const list3 = document.createElement("li") ;
// list3.textContent = "Cake" ;
// const list4 = document.createElement("li") ;
// list4.textContent = "Paneer" ;
// const fetchElement = document.getElementById("listing")

// // fetchElement.append(list1)
// fetchElement.append(list1, list2) // Write in Single Append.
// fetchElement.prepend(list3)

// //Add List 4 After Milk
// list1.append(list4)

//Using Loop.
const arr = ["Milk", "Cake", "Halwa", "ganesh"] ;
const fetchElement = document.getElementById("listing") ;
const fragment = document.createDocumentFragment() ;
for( const food of arr){

    const list = document.createElement("li") ;
    list.textContent = food ;
    fragment.append(list) ;
}

fetchElement.append(fragment) ;

//Delete an Element
const del = document.getElementById("first") ;
del.remove() ;