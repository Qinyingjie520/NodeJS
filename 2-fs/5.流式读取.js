const fs = require("fs");

const rs = fs.createReadStream("./观书友感.txt")

rs.on("data",chunk=>{
    console.log(chunk.toString())
    console.log(chunk.length)
})

rs.on("end",()=>{
    console.log("读取结束")
})

rs.on("error",()=>{
    console.log("读取有误")
})
