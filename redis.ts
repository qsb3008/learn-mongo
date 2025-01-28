import Redis from "ioredis";

const redis = new Redis(6379);

async function run() {
  try {
    // await redis.set("name", "aa", "ex", 10);
    const value = await redis.get("name");
    await redis.lpush("software", "redis", "mongodb", "mysql");
    const arr = await redis.lrange("software", 0, 20);

    console.log(arr);
  } catch (e) {
    console.error(e);
  } finally {
    redis.disconnect();
  }
}

run();
