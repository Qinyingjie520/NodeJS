const fs =require("fs")
// 1.创建写入流对象（创建通道)
const ws = fs.createWriteStream("./观书友感1.txt")

// 2.write
ws.write("半亩方塘一鉴开，\n")
ws.write("天光云影共徘徊。\n")
ws.write("问渠那得清如许？\n")
ws.write("为有源头活水来。\n")
// 3.关闭通道
ws.close()