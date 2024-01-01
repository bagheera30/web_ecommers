import express, { Request, Response } from "express";
const { createUser, loginUser, editUsersByname, getAllUsers, getuserByusername } = require('./users.service')
const router = express.Router();




router.get("/", async (req, res) => {
    try {
        const users = await getAllUsers();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching users' });
    }
});

router.get('/:username', async (req: Request, res: Response) => {
    try {
        const { username } = req.params;
        const users = await getuserByusername(username);
        res.json(users);
    } catch (error) {
        res.status(400).send((error as Error).message);
    }
})

router.post('/register', async (req: Request, res: Response) => {
    try {
        const newdata = req.body;
        const user = await createUser(newdata);
        const userString = JSON.parse(JSON.stringify(user));
        res.send({
            data: userString,
            message: "register success",
        });
    } catch (error) {
        res.status(400).send((error as Error).message);
    }
});
router.post('/login', async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;

        const { token, role } = await loginUser(username, password); // Retrieve token from loginUser function

        // Store token in session


        res.status(200).json({ user: { role } });
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

