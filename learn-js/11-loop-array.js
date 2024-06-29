// การ loop ใน array
// for loop , forEach , forof

const data = [10, 20, 30, 40, 50]

for(let i = 0 ; i < data.length ; i++) {
    console.log(`index ${i} = ${data[i]}`)      // วนลูปธรมดา
}

console.log("------------------------------------------------------------");

data.forEach(element => {
    console.log(`forEach = ${element}`)        // วนลูปสมาชิกทุกตัวภายใน array
})

console.log("------------------------------------------------------------");

for(const e of data) {
    console.log(`for of = ${e}`)        // เหมือน ลูปธรรมดาผสมกับ forEach
}