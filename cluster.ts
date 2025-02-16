import http from "http";
import cluster from "cluster";
import { cpus } from "os";
import process from "process";

// master是包工头，负责管理工人，工人干活。master进程是一个特殊的进程，负责管理worker进程
if (cluster.isPrimary) {
  const numCPUs = cpus().length;
  console.log(`Master ${process.pid} is running`);
  console.log(`cpu core is ${numCPUs}`);
  // 为每个 CPU 创建一个工作子进程
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  // 被启动的叫 worker 进程，顾明思义就是干活的[工人]。他们接受请求，对外提供服务
  const server = http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end("Hello world\n");
    })
    .listen(8000);
  console.log(`Worker ${process.pid} started`);
}
