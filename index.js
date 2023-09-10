import mongoose from "mongoose";
import app from "./app.js";
const dbUri = "mongodb+srv://ziad:1234@cluster0.wbtsjwk.mongodb.net/Bad-Database";
mongoose.connect(dbUri).then(conn => {
    console.log("connected successfully");
}).catch(err => {
    console.log(err);
});
app.listen(4000, () => {
    console.log("Server is running on port 4000");
});