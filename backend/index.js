const express = require('express');
const app = express();
const students = require('./student')
require('./db')
const cors = require('cors');

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.post("/data", (req, res) => {
    const stds = students(req.body);
    stds.save();
    console.log(stds);
    res.send(stds);
})

app.get("/find", async (req, res) => {
    let allData = await students.find();
    if (allData.length > 0) {
        res.send(allData);
    } else {
        res.send({ result: "No result found" })
    }

})
app.put("/data/:id", async (req, res) => {
    let result = await students.updateOne({ _id: req.params.id }, {
        $set: req.body
    })
    res.send(result);
})
app.delete("/delete/:id", async (req, res) => {
    const DeletedItem = await students.findByIdAndDelete(req.params.id);
    res.send(DeletedItem);
})

app.listen(port, () => {
    console.log(`Connection is setup at port no : ${port}`);
})