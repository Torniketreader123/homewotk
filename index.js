import {ApolloServer} from '@apollo/server'
import {startStandaloneServer} from "@apollo/server/standalone"

import { typeDefs } from './schema.js';
import { expensess, users } from './constan.js';

const resolvers = {
    Query:{
        users() {
            return users;
        },
        user(parent, args){
           const id = args.id;
            return users.find((u) =>u.id ===id );

        },
        expenses() {
return expensess
        },
        },
       Expenses: {user(parent){
        return users.find((u) => u.id === parent.user_id );
},
},
User: {expensess(){
    return expensess.filter(e => e.users_id === parent.id)
}},
Mutation:{
    deleteUser(_, args) {
        const id = args.id;
        const index = users.findIndex(user => user.id === id);
        
        if (index !== -1) {
            users.splice(index, 1);
            console.log(`User with ID ${id} deleted successfully`);
            return true; 
        } else {
           console.log(`User with ID ${id} not found`);
           
        }
    },
    createUser(_,args){
        console.log("args", args)

    }
   
},
};


const server = new ApolloServer({
    typeDefs,
    resolvers,
})

const {url} = await startStandaloneServer(server,{listen: {port :4000}});

console.log(`server running at  ${url}`)