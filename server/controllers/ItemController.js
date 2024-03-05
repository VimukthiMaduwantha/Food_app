const TestModel = require('../models/TestModel')

//Create
const createItem = async (req, res) => {
    const {
        name,
        age,
        address,
        school
    } = req.body

    try {
        const TestItems = new TestModel({
            name: name,
            age: age,
            address: address,
            school: school
        });

        return await TestItems.save().then((value) => {
            return res.status(201).json({ ID: value._id })
        }).catch((err) => {
            return res.status(500).json({ err })
        })
    } catch (error) {
        console.log("error", error);
        res.status(400).json({ error: error.message });
    }
};

//get all test items
const getAllItems = async (req, res) => {
    try {
        const getTestItems = await TestModel.find();
        return res.status(200).json(getTestItems);
    } catch (err) {
        console.log("get test item:>", err)
        res.status(500).json({ err: err.message })
    }
}

//delete the selected data
const deleteTest = async (req, res) => {
    const id = req.params.id;
    await TestModel.findByIdAndDelete(id).then(() => {
        res.status(200).send({ state: "Success" });
    }).catch((err) => {
        res.status(400).send({ state: err })
    })
}

//get test item details by ID
const getTestItemDetailsByID = async (req, res) => {
    try {
        const ID = req.params.id;
        const testItems = await TestModel.find({ _id: ID });
        res.status(200).send({ status: "Success", data: testItems });
    } catch (err) {
        res.status(500).send('Server error')
    }
}

//update selected details
const updateSelctedItem = async (req, res) => {
    const ID = req.body.id;
    const {
        name,
        age,
        address,
        school
    } = req.body

    const UpdatedModel = {
        name,
        age,
        address,
        school
    }

    console.log("UpdatedModel::> ", UpdatedModel)
    console.log("ID::> ", ID)
    await TestModel.findByIdAndUpdate(ID, UpdatedModel).then(() => {
        res.status(200).send({ status: 'Success', data: UpdatedModel });
    }).catch((err) => {
        res.status(400).send({ status: err })
    })
}

module.exports = {
    createItem,
    getAllItems,
    deleteTest,
    getTestItemDetailsByID,
    updateSelctedItem
}