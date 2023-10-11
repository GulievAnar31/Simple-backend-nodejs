const Person = require('../models/person');

exports.addPerson = async (req, res) => {
    try {
        const person = new Person(req.body);
        await person.save();
        res.status(201).send(person);
    } catch (err){
        res.status(400).send(err.message);
    }
}

exports.getAllPersons = async (req, res) => {
    try {
        const persons = await Person.find();
        res.status(200).send(persons);
    } catch(err) {
        res.status(500).send(err.message);
    }
}