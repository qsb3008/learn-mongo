import { Collection, ObjectId, UpdateFilter } from "mongodb";

/**
 * 数组操作符：https://www.mongodb.com/zh-cn/docs/manual/reference/operator/update-array/
 */

const fn = async (userCollection: Collection<{ hobbies: any[] }>) => {
  try {
    // const result = await userCollection.replaceOne(
    //   { nickname: "ly" },
    //   { nickname: "codewhy" }
    // );
    const updateFilter: UpdateFilter<{ name: string; age: number }> = {
      // 属性值是数组的操作
      // hobbies: ['golf'], // 全匹配
      hobbies: {
        $all: ["gold"], // 部分匹配
      },
    };
    // 使用 find 查找数组
    const result1 = await userCollection.findOne({
      // hobbies: "golf", // 查找数组中包含golf
      hobbies: {
        $regex: /gol/g,
      }, // 使用正则查找
    });

    // const result = await userCollection.updateOne(
    //   { _id: new ObjectId("6355523c6300f0ff7f014a03") },
    //   { $set: { nickname: "xxx" } }
    // );
    const result = await userCollection.updateOne(
      {
        _id: new ObjectId("6355523c6300f0ff7f014a03"),
        hobbies: "golf",
      },
      {
        $set: {
          "hobbies.$": "golf-new",
        },
      }
    );
    console.log("result1 ", result1);
  } catch (e) {
    console.error(e);
  }
};

export default fn;
