const graphql = require('graphql');
const _ = require('lodash');
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLList } = graphql;

const Keyword = require('../models/keyword');


// Model Type
const ModelType = new GraphQLObjectType({
  name: 'Model',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    type: {type: GraphQLString},
    // abilities: {type: GraphQLList},
    // characteristics: {type: GraphQLList},
    // weapons: {type: GraphQLList},
    // costs: {type: GraphQLList},
    keywords: {
      type: new GraphQLList(KeywordType),
      resolve(parent, args) {
        // return _.filter(keywords, {

        // })
      }
    }
  })
});

// Weapon Type
// const WeaponType = new GraphQLObjectType({
//   name: 'Weapon',
//   fields: () => ({
//     id: {type: GraphQLID},
//     name: {type: GraphQLString},
//     type: {type: GraphQLString}
//   })
// });


// Ability type
// const AbilityType = new GraphQLObjectType({
//   name: 'Ability',
//   fields: () => ({
//     id: {type: GraphQLID},
//     name: {type: GraphQLString},
//     description: {type: GraphQLString}
//   })
// })

// keyword type
const KeywordType = new GraphQLObjectType({
  name: 'Keyword',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString}
  })
})

// Army List type
//  - Detatchment type
//    - Unit type
//      - Model
//        - Weapon Tyoe
//        - Support System Type
//        - Ability Type
//        - Keyword Type

// User type

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    model: {
      type: ModelType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args) {
        return _.find(data, {id: args.id});  
      }
    },
    keyword: {
      type: KeywordType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args) {
        return _.find(data, {id: args.id});  
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addKeyword: {
      type: KeywordType,
      args: {
        name: {type: GraphQLString}
      },
      resolve(parent, args) {
        let keyword = new Keyword({
          name: args.name
        });
        return keyword.save();
      }
    }
  }
})

module.exports = new GraphQLSchema({
   query: RootQuery,
   mutation: Mutation
});
