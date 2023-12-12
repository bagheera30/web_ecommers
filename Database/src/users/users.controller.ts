import express, { Request, Response } from "express";
const { createUsers } = require('./users.service')
const router = express.Router();

router.get('/:id', (req, res) => {

});

router.post('/register', async (req: Request, res: Response) => {
    try {
        const newdata = req.body;
        const user = await createUsers(newdata);
        res.send(user);
    } catch (error) {

    }
});

module.exports = router