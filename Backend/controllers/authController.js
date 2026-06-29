const User = require("../models/User");

const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({
            username,
            password
        });

        if(!user){
            return res.status(401).json({ 
                success: false,
                message: "Invalid credentials" 
            });
        }

        res.json({
            success: true,
            role: user.role,
            username: user.username
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
module.exports = {login};



