/**
 * https://www.mongodb.com/zh-cn/docs/drivers/node/current/fundamentals/crud/query-document/
 * 比较操作符
 * 逻辑操作符
 * 元素操作符
 * 评估操作符
 * @param {*} userCollection
 */

const fn = async (userCollection) => {
  try {
    // 比较
    // const result = await userCollection
    //   .find({
    //     age: { $gt: 30 },
    //   })
    //   .toArray();
    // console.log("$gt ", result);
    // 逻辑
    // const result = await userCollection
    //   .find({
    //     $or: [
    //       { age: { $lt: 30 } },
    //       {
    //         name: "Lucy",
    //       },
    //     ],
    //     // $and
    //   })
    //   .toArray();
    // console.log("result ", result);
    // element：$exists、$type
    // const result = await userCollection
    //   .find({
    //     nickname: { $exists: true },
    //   })
    //   .toArray();
    // const result = await userCollection
    //   .find({
    //     nickname: { $type: "number" },
    //   })
    //   .toArray();
    // console.log("result: ", result);
    // 评估操作符: 复杂查询
    // 搜索结果处理
    const result = await userCollection
      .find({
        $or: [
          { age: { $lt: 30 } },
          {
            name: "Lucy",
          },
        ],
        // $and
      })
      .toArray();
    console.log("result ", result);
  } catch (e) {
    console.error(e);
  }
};

export default fn;
