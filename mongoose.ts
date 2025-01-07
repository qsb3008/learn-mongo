import { connect, disconnect, model, Schema } from "mongoose";

async function main() {
  try {
    await connect("mongodb://127.0.0.1:27017/hello");
    console.log("[egg-mongoose] connect successfully");
    // const ProductSchema = new Schema({
    //   name: { type: String },
    //   price: { type: Number },
    // });

    // const ProductModel = model("Product", ProductSchema);
    // const result = await ProductModel.create({
    //   name: "cellphone",
    //   price: 1300,
    // });
    // const iPad = new ProductModel({
    //   name: "ipad",
    //   price: 4000,
    // });
    // await iPad.save();
    // console.log(iPad);
    const UserSchema = new Schema(
      {
        name: String,
        age: Number,
        hobbies: { type: Array },
        team: { type: Schema.Types.ObjectId, ref: "Team" },
      },
      { collection: "user" }
    );
    const UserModel = model("User", UserSchema);
    const result = await UserModel.find({ age: { $lt: 30 } }).exec();
    console.log(result);
  } catch (e) {
    console.error(e);
  } finally {
    await disconnect();
  }
}

main();
