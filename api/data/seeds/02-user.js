const bcrypt = require('bcryptjs')
exports.seed = function (knex) {
  const hashed = (data) => bcrypt.hashSync(data, 8)
  return knex('users').insert([
    { username: "roman", password: hashed("123"), email: "roman@gmail.com" , img: 'https://picsum.photos/200/300'},
    { username: "dylan", password: hashed("123"), email: "dylan@gmail.com" },
    { username: "daniel", password: hashed("123"), email: "daniel@gmail.com" , img: 'https://picsum.photos/200/300'},
    { username: "kyle", password: hashed("123"), email: "kyle@gmail.com" ,img: 'https://picsum.photos/200/300'},
    { username: "ben", password: hashed("123"), email: "ben@gmail.com" , img: 'https://picsum.photos/200/300'},
    { username: "issac", password: hashed("123"), email: "issac@gmail.com" , img: 'https://picsum.photos/200/300'},
    { username: "alex", password: hashed("123"), email: "alex@gmail.com" ,img: 'https://picsum.photos/200/300'},
    { username: "francis", password: hashed("123"), email: "francis@gmail.com" ,img: 'https://picsum.photos/200/300'},
    { username: "krisda", password: hashed("123"), email: "krisda@gmail.com" , img: 'https://picsum.photos/200/300'},
    { username: "gabe", password: hashed("123"), email: "gabe@gmail.com" },
    { username: "george", password: hashed("123"), email: "george@gmail.com" },
    { username: "jaison", password: hashed("123"), email: "jaison@gmail.com" },
    { username: "MrD", password: hashed("123"), email: "MrD@gmail.com" },
    { username: "MKrab", password: hashed("123"), email: "MKrab@gmail.com" },
    { username: "Sbob", password: hashed("123"), email: "Sbob@gmail.com" },
    { username: "woody", password: hashed("123"), email: "woody@gmail.com" },
    { username: "jonnyTest", password: hashed("123"), email: "jonnyTest@gmail.com" }
  ]);
};