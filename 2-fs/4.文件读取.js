// 引入fs模块
// const fs = require("fs")
// 1.异步读取
// let file = fs.readFile("./座右铭.txt",(err,data)=>{
//     if(err){
//         console.log("读取失败")
//         return ;
//     }
//     if(data){
//         console.log("读取的数据为:"+data)
//     }

// })

// 2.同步读取
// let data = fs.readFileSync("./观书友感.txt");

// console.log(data.toString())

// 3.流式读取
const fs = require("fs");

const read = fs.createReadStream("./观书友感1.txt", "utf8");

read.on("data", (chunk) => {
  console.log(chunk);        // 逐块输出内容
});

read.on("end", () => {
  console.log("读取完成");
});

read.on("error", (err) => {
  console.error("读取出错:", err.message);
});