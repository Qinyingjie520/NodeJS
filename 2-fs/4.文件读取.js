// 引入fs模块
const fs = require("fs")
// 异步读取
// let file = fs.readFile("./座右铭.txt",(err,data)=>{
//     if(err){
//         console.log("读取失败")
//         return ;
//     }
//     if(data){
//         console.log("读取的数据为:"+data)
//     }

// })

// 同步读取
let data = fs.readFileSync("./观书友感.txt");
console.log(data.toString())
