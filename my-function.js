const faker = require('faker');

const getRandomID = (context, events, done) =>{
  let id = faker.random.number ({ min: 1, max: 10000000});
  context.vars.query = id;
  return done();
}

module.exports = {
  getRandomID
}