/**
 * 生成大文件：100M左右
 * 生成方式：循环写入
 */
// const fs = require("fs");
// const file = fs.createWriteStream("./big.file");
// for (let i = 0; i <= 2e6; i++) {
//   file.write("Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n");
// }
// file.end();
import * as fs from "fs";
import * as path from "path";

const filePath = path.join(__dirname, "bigFile.txt");
const fileStream = fs.createWriteStream(filePath);

const generateBigFile = (sizeInMB: number) => {
  const chunkSize = 1024 * 1024; // 1MB
  const totalChunks = sizeInMB;
  for (let i = 0; i < totalChunks; i++) {
    const chunk = Buffer.alloc(chunkSize, "a");
    fileStream.write(chunk);
  }
  fileStream.end();
};

generateBigFile(100);
