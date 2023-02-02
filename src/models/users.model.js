const usersData = require('./users.mongo');
const bscrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require("fs");

async function signUp(req, res) { 
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const { username, email, password } = req.body;
        const isUserExist = await usersData.findOne({ email: email });
        if (isUserExist) {
            return res.status(400).json({ message: 'User already exist', status:400 })
        }

        const hashPassword = await bscrypt.hash(password, 10);
        const result = await usersData.create({
            email: email,
            password: hashPassword,
            userName: username
        })
        const token = jwt.sign({ email: result.email, id: result._id }, process.env.SECRET_KEY);
        res.status(200).json({ user: result, token: token, status:200 });

    } catch (err) {
        res.status(500).json({ message: 'Something went wrong',status:500 })
    }

}

async function signIn(req, res) {
    try {
        const { email, password } = req.body;
        const isUserExist = await usersData.findOne({ email: email });
        if (!isUserExist) {
            return res.status(404).json({ message: 'User not found please sign up first' , status:404})
        }

        const matchPassword = await bscrypt.compare(password, isUserExist.password);
        if (!matchPassword) {
            return res.status(400).json({ message: 'Invalid Credential!' , status:404})
        }

        const token = jwt.sign({ email: isUserExist.email, id: isUserExist._id }, process.env.SECRET_KEY);
        res.status(200).json({ user: isUserExist, token: token ,status:200});


    } catch (err) {
        res.status(500).json({ message: 'Something went wrong', status:500 })
    }

}

function loadUsersDataAndSave() {
    fs.readFile("./data/users.json", "utf8", (err, jsonString) => {
        if (err) {
            console.log("Error reading file from disk:", err);
            return;
        }
        try {
            const customer = JSON.parse(jsonString);
            saveUsers(customer);
        } catch (err) {
            console.log("Error parsing JSON string:", err);
        }
    });
}


async function saveUsers(user) {
    try {
        for (let i = 0; i < user.length; i++) {
            //update user data if already available
            // await usersData.updateOne({
            //     userName: user[i].userName,
            //     age: user[i].age,
            //     mobileNumber: user[i].mobileNumber
            // }, {
            //     userName: user[i].userName,
            // }, {
            //     upsert: true,
            // });

            //save user data 
            const newUser = new usersData({
                "userName": user[i].userName,
                "age": user[i].age,
                "mobileNumber": user[i].mobileNumber
            });
            await newUser.save();
        }
    } catch (err) {
        console.error(`Could not save user ${err}`);
    }
}

async function addUserToDatabase(user) {
    try {
        const newUser = new usersData({
            "userName": user.body.userName,
            "age": user.body.age,
            "mobileNumber": user.body.mobileNumber
        });
        await newUser.save();
    } catch (err) {
        return err = `Could not save user ${err}`;
    }
}


module.exports = {
    loadUsersDataAndSave,
    saveUsers,
    addUserToDatabase,
    signUp,
    signIn
};