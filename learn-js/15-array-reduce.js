// array reduce เป็นการนำค่าใน array มาทำอะไรสักอย่างเพื่อให้ได้คำตอบเพียงคำตอบเดียวกลับออกไป

const data = [10,20,30,40]

// array.reduce((ค่าที่ถูกประมวลผล,e)=>{},ค่าเริ่มต้น) // value = 0

const summation = data.reduce((value,e)=>{
    console.log(value)
    const total = e + value
    return total
},0)

console.log("-------------------------------");
console.log(summation);
// value = 0 10 30 60

console.log("-----------ประยุกต์ใช้--------------");

const cart = [
    {name: "กระเป๋า", price: 500},
    {name: "หนังสือ" , price: 900},
    {name: "กล้องถ่ายรูป" , price: 5000}
]
    const summation2 = cart.reduce((value2,e)=>{
    const total2 = e.price+value2
    return total2
    },0)
    console.log(summation2);