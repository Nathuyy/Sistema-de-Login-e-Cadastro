const bcrypt = require('bcryptjs');

const hashPassword = async (password) => {
    const hashedPassword = bcrypt.hashSync(password, 10);
    return hashedPassword
}

module.exports = {
    hashPassword
}