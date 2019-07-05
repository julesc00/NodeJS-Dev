// Object property shorthand

const name = 'Julio';
const userAge = 43;

const user = {
    name, // so instead of using name: name, just name, since they share the same name
    age: userAge,
    location: 'Tepatitlan'
}

console.log(user);

// Object destructing
const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// // Example #2
// const {label:productLabel, stock, rating = 5} = product // access they key but rename it 
// console.log(productLabel);
// console.log(stock);
// console.log(rating); // rating = 5 default was used since there was none, if there is then we don't declare it.

const transaction = (type, {label, stock}) => {
     console.log(type, label, stock);
}

transaction('order', product) // I had access to the object values by calling the object as argument and declaring the variables-keys to extract