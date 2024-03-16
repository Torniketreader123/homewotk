export const typeDefs = `#graphql

input createUserInput {
    name: String
    age:Int
    isVerified:Boolean
}
type Mutation{
    deleteUser(id: ID): Boolean
    createUser (user:createUserInput!):User
}

type  User {
    id: ID
    name: String
    age: Int
    isVerified: Boolean
    expensess:[Expenses!]
}

type Expenses  {
    id: ID
    title: String
    content: String
    user: User!
   
}

 type Query {
    users: [User!]!
    user(id:ID!) : User
    expenses: [Expenses!]!
}




`;