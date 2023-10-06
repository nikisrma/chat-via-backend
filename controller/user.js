const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const path = require('path');

const signup = async (req, res) => {
    const { name, email, password } = req.body;

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

    try {
        // Check if a file is included in the request
        if (req.files && req.files.profilePicture) {
            const profilePicture = req.files.profilePicture;
            var fileName = profilePicture.name;
            const uploadPath = path.join(__dirname, '../public/uploads/user', fileName);

            // Save the uploaded file
            await profilePicture.mv(uploadPath);
        }

        // Create a new user with hashed password and profile picture filename
        const user = new User({
            name,
            email,
            password: hashedPassword, 
            profilePicture: {
                name: fileName,
                path: `/uploads/user/${fileName}` // Assuming your uploads are served from the root directory
            }
        });

        // Save the user to the database
        await user.save();

        // Respond with a success message or redirect to a success page
        res.status(201).send('User registered successfully!');
    } catch (error) {
        // Handle errors (duplicate email, database connection issues, etc.)
        console.error(error);
        res.status(500).send('Error registering user');
    }
};

module.exports = {
    signup: signup
};