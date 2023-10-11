const Person = require('../models/person');

/**
 * @swagger
 * /person:
 *   post:
 *     tags:
 *       - Persons
 *     description: Create a new person
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: person
 *         description: Person object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Person'
 *     responses:
 *       201:
 *         description: Person successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Person'
 *       400:
 *         description: Bad request (e.g., validation errors)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
exports.addPerson = async (req, res) => {
    try {
        const person = new Person(req.body);
        await person.save();
        res.status(201).send(person);
    } catch (err){
        res.status(400).send(err.message);
    }
}

/**
 * @swagger
 * /persons:
 *   get:
 *     tags:
 *       - Persons
 *     description: Retrieve a list of all persons
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: A list of persons
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Person'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
exports.getAllPersons = async (req, res) => {
    try {
        const persons = await Person.find();
        res.status(200).send(persons);
    } catch(err) {
        res.status(500).send(err.message);
    }
}

/**
 * @swagger
 * definitions:
 *   Person:
 *     type: object
 *     required:
 *       - name
 *     properties:
 *       name:
 *         type: string
 *       age:
 *         type: integer
 */
