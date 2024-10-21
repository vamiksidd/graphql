const { gql } = require('apollo-server')

const typeDefs = gql`
 type User{
    id: ID!
    username: String!
    name: String!
    age: Int!
    nationality: Nationality #if this doesnt match the value of enum it will throw error
    friends: [User]
 }
 type Query{
    users: [User!]!
    movies: [Movie!]!
    user(id: ID!): User!
    movie(name: String!):Movie
 }

 type Movie{
   id: ID!
   name: String!
   yearOfPublication: Int!
   isInTheaters: Boolean!
 }

 enum Nationality{
   CANADA
   BRAZIL
   GERMANY
   USA
   CHILE
   INDIA
   PERSIA
 }
 
`

module.exports = { typeDefs }