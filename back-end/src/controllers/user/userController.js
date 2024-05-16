const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.registerUser = async (req, res) => {
    // Read user data and place it in User
    const user = new User(req.body);
    user.password = await bcrypt.hash(req.body.password, 12);
    try {
        await user.save();
        res.json({ message: 'User created successfully' });
    } catch (error) {
        console.log(error);
        res.json({ message: 'There was an error' });
    }
}

exports.authenticateUser = async (req, res, next) => {
    // Find the user
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        // If the user does not exist
        await res.status(401).json({ message: 'User does not exist' });
        next();
    } else {
        // User exists, verify if the password is correct or incorrect
        if (!bcrypt.compareSync(password, user.password)) {
            // If the password is incorrect
            await res.status(401).json({ message: 'Incorrect password' });
            next();
        } else {
            // Correct password, sign the token
            const token = jwt.sign({
                email: user.email, 
                name: user.name, 
                id: user._id
            }, 
            'SECRETKEY', 
            {
                expiresIn: '5h'
            });

            // Return the TOKEN
            res.json({ token });
        }
    }
}
