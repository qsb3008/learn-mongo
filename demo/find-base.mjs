const findFn = async (userCollection) => {
  try {
    const result = await userCollection.findOne({
      age: 38,
    });
    console.log("result ", result);
    const cursor = await userCollection.find({
      age: 38,
    });
    // 遍历输出
    await cursor.forEach((doc) => {
      console.log(doc);
    });
    // 直接转成数组输出
    const arr = await userCollection.find({ age: 38 }).toArray();
    console.log("arr ", arr);
  } catch (e) {
    console.error(e);
  }
};

export default findFn;
