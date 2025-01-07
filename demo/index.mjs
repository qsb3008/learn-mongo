import { MongoClient } from "mongodb";
// import insertFn from "./insert.mjs";
// import findFn from "./find-base.mjs";
import fn from "./find.mjs";
// mongo的协议
const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    const db = client.db("hello");
    const res = await db.command({ ping: 1 });
    console.log("connect ", res);
    const userCollection = db.collection("user");
    // await insertFn(userCollection);
    await fn(userCollection);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

run();
