const bcrypt = require('bcryptjs');

const password = '123';  // Password yang ingin kamu hash

bcrypt.hash(password, 10, (err, hash) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Hashed Password:', hash);
});
