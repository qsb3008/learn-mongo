import { Collection, MongoClient } from "mongodb";

// mongo的协议
const url = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    const db = client.db("hello");
    const res = await db.command({ ping: 1 });
    console.log("connect: ", res);
    const userCollection = db.collection("user");
    const teamCollection = db.collection("team");
    // 不同表设计，不同的查询方式
    // const lakerTeam = await teamCollection.findOne({ name: "Lakers" });
    // const player = await userCollection.find({ _id: lakerTeam?._id }).toArray();
    // console.log("laker player ", player);
    // 球队的有player字段存放球员信息
    // const netTeam = await teamCollection.findOne({ name: "Nets" });
    // const netPlayer = await userCollection
    //   .find({
    //     _id: {
    //       $in: netTeam?.players,
    //     },
    //   })
    //   .toArray();
    // console.log("nets player ", netPlayer);
    //
    // const pipeLine = [
    //   { $match: { name: "Nets" } },
    //   {
    //     $lookup: {
    //       from: "user",
    //       localField: "players",
    //       foreignField: "_id",
    //       as: "newPlayer",
    //     },
    //   },
    // ];
    // const teamWithPlayers = await teamCollection.aggregate(pipeLine).toArray();
    // console.log("teamWithPlayers ", teamWithPlayers[0]);

    const pipeLine2 = [
      { $match: { team: { $exists: true } } },
      {
        $lookup: {
          from: "team",
          localField: "team",
          foreignField: "_id",
          as: "newTeam",
        },
      },
    ];
    const playerWithTeam = await userCollection.aggregate(pipeLine2).toArray();
    console.log("playerWithTeam ", playerWithTeam);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

run();
