import { Collection, MongoClient } from "mongodb";

import fn from "./update";
// mongo的协议
const url = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    const db = client.db("hello");
    const res = await db.command({ ping: 1 });
    const userCollection: Collection<{ hobbies: any[] }> =
      db.collection("user");
    console.log("connect: ", res);
    await fn(userCollection);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

run();
