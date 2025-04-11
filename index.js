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
    "mongodb+srv://premjatol:ishopwebsite@atlascluster.0t8oc.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster",
    {
        dbName: "firstProject"
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
