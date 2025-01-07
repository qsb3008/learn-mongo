#### 文档
https://www.mongodb.com/zh-cn/docs/drivers/node/current/

#### 索引
直接查找非常耗费性能，假如有5万条数据

find({ name: 'test50000' }) // 20ms

find({ _id: new ObjectId('xxxxxx') }) // 零点几毫秒

优点：查询效率高
缺点：增加写操作的代价

