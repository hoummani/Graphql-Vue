const express=require('express');
const graphqlHTTP=require('express-graphql');
const schema=require('./schema/schema');
const mongoose=require('mongoose');

const app=express();

mongoose.connect('mongodb://localhost/graphql-ninja').then((value) => {console.log("Your connection is fine !..");}).catch((err) => {console.log(err.message);});


app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}));


app.listen(4000,()=>{
    console.log('app runing ....');
});