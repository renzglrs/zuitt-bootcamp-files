const jwt = require("jsonwebtoken");

// User defined string data that will be used to create our JSON web tokens
// Used in the algorithm for encrypting our data which makes it difficult to decode the information without the defined secret keyword
const secret = "CourseBookingAPI";

// [SECTION] JSON Web Tokens
/* 
    - JSON Web Token or JWT is a way of securely passing information from the server to the client or to other parts of a server
    - Information is kept secure through the use of the secret code
    - Only the system that knows the secret code that can decode the encrypted information
    - Imagine JWT as a gift wrapping service that secures the gift with a lock
    - Only the person who knows the secret code can open the lock
    - And if the wrapper has been tampered with, JWT also recognizes this and disregards the gift
    - This ensures that the data is secure from the sender to the receiver
*/

// [SECTION] Token Creation
module.exports.createAccessToken = (user) => {
  // The data will be received from the registration form
  // When the user logs in, a token will be created with the user's information
  const data = {
    id: user._id,
    email: user.email,
    isAdmin: user.isAdmin,
  };

  //  Generate a JSON web token using the jwt's sign method
  // Generatees the token using the form data and the secret code with no additional options provided
  return jwt.sign(data, secret, {});
};
