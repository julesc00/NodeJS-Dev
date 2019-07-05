const square = x => {
    return x * x
}

console.log(square(25));

const cube = x => {
    return (x * x) * x
}

console.log(cube(25));

// if the function is going to return somthing simple, use shorthand
const addition = x => x + x
console.log(addition(10));

const event = {
    name: 'Birthday Party',
    guestList: ['Julio', 'Claudia', 'Pedro', 'Mariela'],
    printGuestList() {
        console.log(`Guest list for ${this.name}.`);

        this.guestList.forEach(guest => {
            console.log(`${guest} is attending ${this.name}`);
        })

    }
}

event.printGuestList()