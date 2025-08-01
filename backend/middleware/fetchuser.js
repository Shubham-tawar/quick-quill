const jwt = require('jsonwebtoken');

const fetchuser = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).send({ error: "Please authenticate using a valid token" });
    }
    try {
        const data = jwt.verify(token, "quickquill"); // Verify the token using the secret key
        req.user = data.user; // Attach the user data to the request object
        next();
    } catch (error) {
        console.error("Error in fetchuser middleware:", error);
        return res.status(500).send("Internal Server Error");        
    }
    
}

module.exports = fetchuser;