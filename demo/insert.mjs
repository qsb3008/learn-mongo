const insertFn = async (userCollection) => {
  try {
    const result = await userCollection.insertOne({
      name: "qiushunbin",
      age: 38,
    });
    console.log(result);
    const results = await userCollection.insertMany([
      {
        name: "张三",
        age: 38,
      },
      {
        name: "李四",
        age: 48,
      },
    ]);
    console.log(results);
  } catch (e) {
    console.error(e);
  }
};

export default insertFn;
