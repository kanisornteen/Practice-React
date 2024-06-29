// array filter เป็นการส่ง array ก้อนเดิมเข้าไปกรองตามเงื่อนไข แล้วจะส่งออกข้อมูลใหม่ออกมาเป็น array ใหม่

const data = [10, 20, 30, 40, 50]

const result = data.filter(e=>{
    return e>20
})

console.log(result);

console.log("-------------ประยุกต์ใช้--------------");

const data2 = [
    {day: "01/06/ 2564", weather: "แดดร้อน" ,temp: 27},
    {day: "03/06/2564", weather: "ฝนตก" ,temp: 23},
    {day: "04/06/2564", weather : "หมอก" ,temp: 18}
]
    const result2 = data2.filter(e=>e.temp > 20).filter(e=>e.weather === "ฝนตก")    // คัดแต่วันที่มีอุณหภูมิมากกว่า 20 และ ฝนตก
    console.log(result2);