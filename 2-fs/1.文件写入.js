
/**
 * 需求:新建一个文件，座右铭.txt，写入内容，三人行必有我师焉
 * 
 */
const fs = require('fs');

// fs.writeFile('座右铭.txt',"三人行必有我师焉",err =>{
//     // err写入失败：错误对象，写入成功:null
//     console.log(err)
//     return ;
// }

// )

// sync  同步
// async 异步

fs.appendFileSync("./座右铭.txt","啦啦啦啦啦啦啦\n",err=>{
    console.log("写入失败!")
},
console.log("写入成功2")
);
console.log("写入成功1！")