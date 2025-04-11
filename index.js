const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const FormRouter = require("./routers/Form");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", FormRouter);

mongoose.connect(
    "mongodb://localhost:27017/",
    {
        dbName: "AssignColl"
    }
).then(
    (success) => {
        console.log("MongoDb connected succesfully");
        app.listen(PORT, ()=> {console.log(`Server started on post ${PORT}`);
        })
    }
).catch(
    (error) => {
        console.log("Error due to connect with mongodb", error.message)
    }
)