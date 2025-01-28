import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";

const stream = createReadStream("./text.txt");

/**
 * pipe() 方法用于连接一个可写流到一个可读流，并返回可写流。
 * 内置的可写流：
 * http requests, on the client
 * http response, on the server
 * fs write streams
 * tcp sockets
 * cypto streams
 * zlib streams
 * process.stdout
 * process.stderr
 * child.stdin
 */

// 内置可写流
// stream.pipe(process.stdout);

// 自定义可写流
// const writeStream = createWriteStream("./text2.txt");
// stream.pipe(writeStream);

// 转换流：压缩文件
// const writeStream = createWriteStream("./text.gz");
// stream.pipe(createGzip()).pipe(writeStream);

const writeStream = createWriteStream("./text3.txt");
stream.on("data", (chunk) => {
  writeStream.write(chunk);
});
stream.on("end", () => {
  writeStream.end();
});
