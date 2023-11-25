// Create an object, called crayonBox, that has a property that is an array. 
// The array should have the names of some crayons. Log one of the elements of that array.
const crayonBox= {colors: ["blue", "green", "red", "orange"]}
console.log(crayonBox.colors[3])

// Create an object bottle that has a property that is an object: cap. 
// cap can have properties like material: 'metal' or 'plastic', 
// color: blue or white etc. Log one of the properties of that inner object.

const bottle = {
    cap: { material: "metal", color: "blue"},
}
console.log(bottle.cap.color)

// Create an array called receipt that has at least one object in it. 
// The inner objects should be items that have a name and a price. 
// Log one of the properties of that inner object.
receipt = [
    {"name": "Groceries", "price": "$100"},]

console.log(receipt[0].name)

// Create an array called apartmentBuilding that has an array as one of its elements, 
// the inner array should be the names of the tenants. 
// Log one of the elements of the inner array.

const apartmentBuilding = names=[
    ["Bob", "Mary", "Ted"]
];
console.log(names[0][2])