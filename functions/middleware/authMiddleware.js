const jwtHelper = require("../utils/jwtHelper");

const authenticateJWT = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    // Verify the JWT token and extract user data
    const user = jwtHelper.verifyToken(token);

    console.log(user);
    // Log the user data for debugging purposes
    console.log("User:", user);
    // Attach the user data to the request object for further use
    req.user = user;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    // Return unauthorized error if token verification fails
    return res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = authenticateJWT;
