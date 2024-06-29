// push(เพิ่มท้ายสุด) , pop(ลบท้ายสุด) , shift(ลบหน้าสุด) , unshift(เพิ่มหน้าสุด) , splice , slice

const data = [1, 2]
console.log(`data = [${data}]`);

data.push(3)
data.push(...[4, 5])

console.log(`data push =[${data}]`);

data.pop()
console.log(`data pop = [${data}]`)
console.log("---------------data2----------------");

const data2 = [1, 2, 3]
console.log(`data2 = [${data2}]`);

data2.shift()
console.log(`data sift = [${data2}]`);

data2.unshift(999)
console.log(`data unshift = [${data2}]`);

console.log("---------------splice & slice----------------");
// splice & slice
// splice (ตำแหน่งที่จะลบ, จำนวนที่จะลบ, แทรกสมาชิกเข้าไปแทนตำแหน่งที่ลบ)
// slice (ตำแหน่งเริ่มต้น, ตำแหน่งสุดท้าย-1)

const data3 = [1, 2, 3, 4, 5]
console.log(`data3 = [${data3}]`);

data3.splice(1, 2, 999)
console.log(`data3 splice = [${data3}]`); // = [1, 999, 4, 5]

data3.slice(1, 3) // เลือก index ที่ 1 ถึง 3-1 = เลือก [999, 4]
console.log(`data3 slice = [${data3}]`);

// *** การใช้ slice จะเป็นการดึงสมาชิกภายในอาเรย์มาใช้ ไม่ได้เป็นการเปลี่ยนค่าอาเรย์นั้น ***

const slice = data3.slice(1, 3) // สร้างตัวแปรมารับค่าที่ดึงออกมาห
console.log(`data3 slice_Var = [${slice}]`);

