// Destructuring (การสลายโครงสร้าง)

// การทำแบบปกติ
const colors = ["เขียว" , "แดง" , "เหลือง" ]
const green = colors[0]
const red = colors[1]
const yellow = colors[2]

console.log(green)
console.log(red)
console.log(yellow)
console.log("-----------------------------------")

// object
const product = {
    productName: "scania",
    price: 3000,
    stock:10
}

const productName = product.productName
const productPrice = product.price
const productStock = product.stock

console.log(productName);
console.log(productPrice);
console.log(productStock);
console.log("----------------การเขียนแบบ Destructuring-------------------");

// การเขียนแบบ Destructuring --------------------------------------------------

const num = [1, 2, 3]
const [one, two, tree] = num

console.log(one)
console.log(two)
console.log(tree)
console.log("-----------------------------------");

// object
const product2 = {
    productName2: "volvo",
    price2: 3000,
    stock2:10
}

const {productName2:productName2_Var, price2:productPrice2_var, stock2:productStock2_var} = product2 // ถ้าชื่อตัวแปรเหมือนชื่อ propertie ก็รวบเขียนตัวเดียวเลยเช่น const {productName2, price2, stock2} = product2

console.log(productName2_Var);
console.log(productPrice2_var);
console.log(productStock2_var);