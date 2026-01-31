// Count total price from a cart array using reduce().

    let cart = [
  { name: "Laptop", price: 50000, qty: 1 },
  { name: "Mouse", price: 500, qty: 2 },
  { name: "Keyboard", price: 1500, qty: 1 },
  { name: "Headphones", price: 2000, qty: 2 }
];

    let price = cart.reduce( (acc, curr) => {

            return acc + (curr.price * curr.qty) ;
    }, 0)
    console.log(price);
    