// buffer中文译为缓冲区，是一个类似于Array的对象，用于表示固定长度的字节序列
// 换句话说，Buffer就是一段固定长度的内存空间，用于处理二进制数据


// 1.概念
// Buffer是一个类似于数组的对象，用于表示固定长度的字节序列
// Buffer本质上一段内存空间，专门用来处理二进制数据


// 2.特点
// 1.Buffer大小固定且无法调整
// 2.Buffer性能较好，可以直接对计算机内存进行操作
// 3.每个元素的大小为1字节(1byte)


// alloc
// 创建了一个长度为10字节的Buffer,相当于申请了10个子节的内存空间，每个字节的值为：0
let buf1 = Buffer.alloc(10);
console.log(buf1);

// allocUnsafe
// 创建了一个长度为10字节的Buffer，Buffer中可能存在旧的数据，可能影响执行结果，所有叫unsafe
let buf2 = Buffer.allocUnsafe(10)
console.log(buf2);

// from
// 提供字符串创建Buffer
let buf3 = Buffer.from('hello');
console.log(buf3);

// 提供数组创建Buffer
let buf4 = Buffer.from([222,12,344,56,33,41])
console.log(buf4);

// Buffer与字符串的转化
let buf5 = Buffer.from([105,108,111,118,181,121,111,117]);
console.log(buf5.toString())

// Buffer的读取与写入
console.log(buf5[0].toString(2))
buf5[0]=95
console.log(buf5.toString())

// 溢出
let buf6 = Buffer.from('hello');
buf6[0]=361
console.log(buf6[0])