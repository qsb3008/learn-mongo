/**
 * 生成大文件：100M左右
 * 生成方式：循环写入
 */
const fs = require("fs");
const file = fs.createWriteStream("./big.file");
for (let i = 0; i <= 2e6; i++) {
  file.write("Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n");
}
file.end();
