
import { hashPassword, comparePassword } from '../helpers/auth';
import User from '../models/user'
import jwt from 'jsonwebtoken'
import { urlencoded } from 'express';
export const register = async (req, res) => {
    const { name, email, password, secret } = req.body;

    //validation

    if (!name) return res.status(400).send("name is required");
    if (!password || password.length < 6)
        return res.status(400)
        console.log("password is required should be 6 characters long")
            .send("password is required should be 6 characters long");

    if (!secret) return res.status(400).send('answer is required');
    const exist = await User.findOne({ email })
    if (exist) return res.status(400).send('email already exist');

    //hash password

    const hashedPassword = await hashPassword(password);

    const user = new User({
        name,
        email,
        password: hashedPassword,
        secret
    });


    try {
        console.log('user before save', user)
        await user.save();
        console.log('register success', user)
        return res.json({
            ok: true
        })
    } catch (err) {
        console.log('register failed', err)
        return res.status(400).send('error try again')
    }
}

export const login = async (req, res) => {
    console.log(req.body);
    try {
        const { email, password } = req.body;
        //check if our db has user with that mail
        const user = await User.findOne({ email });
        if (!user) return res.status(400).send("no user found");
        //check password
        const match = await comparePassword(password, user.password)
        if (!match) return res.status(400).send('wrong password');
        //create token
        const token = jwt.sign({
            _id: user.id
        }, process.env.JWT_SECRET, { "expiresIn": "7d" })
        user.password = undefined;
        user.secret = undefined;
        res.json({
            token,
            user
        })



    } catch (err) {
        console.log(err)
        return res.status(400).send("error. try again")
    }

}

export const currentUser = async (req, res) => {
    console.log(req.headers);
    try {
        const user = await User.findById(req.user._id);
        // res.json(user)
        res.json({
            ok: true
        })
    } catch (err) {
        console.log(err);
        res.sendStatus(400)
    }
}

export const forgotPassword = async (req, res) => {
    const { email, newpassword, secret } = req.body;
    //validation
    console.log("new password",newpassword)
    if (!newpassword || newpassword < 6) {
        return res.json({
            error: "new password is required and should be min 6 characters lons"
        });
    }
    if (!secret) {
        return res.json({ error: "secret is required" })
    }
    const user = await User.findOne({ email, secret });
    if (!user) {
        return res.json({
            error: "we cant verify you with those details"
        });

    }
    try {
        const hashed = await hashPassword(newpassword);
        await User.findByIdAndUpdate(user._id, { password: hashed });
        res.json({
            success: "congrat now you can login with new password"
        })
    } catch (err) {
        console.log(err);
        return res.json({
            error: "something went wrong please try again"
        })
    }

}
