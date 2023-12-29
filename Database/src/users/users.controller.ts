import express, { Request, Response } from "express";
const { createUser, loginUser, editUsersByname } = require('./users.service')
const router = express.Router();

router.get('/:id', (req, res) => {

});

router.post('/register', async (req: Request, res: Response) => {
    try {
        const newdata = req.body;
        const user = await createUser(newdata);
        res.send({
            data: user,
            message: "register success",
        });
    } catch (error) {
        res.status(400).send((error as Error).message);
    }
});
router.post('/login', async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        const user = await loginUser(username, password);
        res.status(200).json({ user });
    } catch (error) {
        res.status(400).send((error as Error).message);
    }
});
router.put('/:username', async (req: Request, res: Response) => {
    const { username } = req.params;
    const userData = req.body;

    if (
        !(
            userData.username &&
            userData.name &&
            userData.nomerWA
        )
    ) {
        return res.status(400).send("Some fields are missing");
    }

    const user = await editUsersByname(username, userData)

    res.send({
        data: user,
        message: "edit product success",
    });
});
module.exports = router