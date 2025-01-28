import { createServer } from "http";
import { readFile } from "fs";

const server = createServer();

server.on("request", (req, res) => {
  readFile("./big.file", (err, data) => {
    if (err) throw err;
    res.end(data);
  });
});

server.listen(8088, () => {
  console.log("Server is running on port 8088");
});
