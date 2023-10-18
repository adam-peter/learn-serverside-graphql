module.exports = {
  Query: {
    pets(_, { input }, context) {
      return context.models.Pet.findMany(input); //findMany takes in an input - object of fields that you want to filer on
    },

    pet(_, { input }, context) {
      return context.models.Pet.findOne(input);
    },
  },
  // Mutation: {},
  Pet: {
    id(pet) {
      console.log(pet);
      return pet.id;
    },
    // img(pet) {
    //   return pet.type === "DOG"
    //     ? "https://placedog.net/300/300"
    //     : "http://placekitten.com/300/300";
    // },
  },
  // User: {},
};
