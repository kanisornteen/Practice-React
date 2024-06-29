// ค้นหาข้อมูลใน Array

const colors = ["แดง", "เขียว", "น้ำเงิน", "ม่วง", "ขาว"]

console.log("--------------------------indexof----------------------------------");
console.log(colors.indexOf("แดง"));         // indexof(ข้อมูล ) => ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1
console.log(colors.indexOf("เหลือง"));

console.log("------------------------------find------------------------------");
console.log(colors.find(element=>element==="เขียว"));        // find(ข้อมูล ) => ผลการค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าค้นไม่เจอจะได้ undefined
console.log(colors.find(element=>element==="เหลือง"));

console.log("------------------------------findIndex------------------------------");
console.log(colors.findIndex(element=>element==="เขียว"));       // findIndex(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1
console.log(colors.findIndex(element=>element==="เหลือง"));