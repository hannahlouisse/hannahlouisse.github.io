import mongoose from 'mongoose';

await mongoose.connect('mongodb://localhost:27017/StudentDatabase', {
    useNewUrlParser: true, useUnifiedTopology: true
});

const Student = mongoose.model('Student', {
    stdnum: String,
    fname: String,
    lname: String,
    age: Number
}, 'studentData');

const saveStudent = async (req, res) => {
    try {
        const newStudent = new Student(req.body);
        await newStudent.save();
        res.json({ inserted: true });
    } catch (error) {
        res.json({ inserted: false });
    }
}

const update = async (req, res) => {
    await Student.updateOne(
        { fname: req.body.fname },
        { $set: { lname: 'Parker' } }
    );
    res.send();
}

const removeUser = async (req, res) => {
    await Student.deleteOne({ stdnum: req.body.stdnum });
    res.send();
}

const removeAllUser = async (req, res) => {
    //get number of documents in the collection
    var numOfStudents = (await Student.find()).length;
    //delete all documents
    const result = await Student.deleteMany();
    //check if number of deleted documents is equal to number of documents initially present
    if ((result.acknowledged == true) && (result.deletedCount == numOfStudents)) {
        res.json({ deleted: true });
    } else {
        res.json({ deleted: false });
    }
}

const user = async (req, res) => {
    const result = await Student.find({ stdnum: req.query.stdnum });
    res.send(result);
}

const members = async (req, res) => {
    const result = await Student.find();
    res.send(result);
}

export { saveStudent, update, removeUser, removeAllUser, user, members }
