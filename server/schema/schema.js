const graphql=require('graphql')

const _=require('lodash');

const {GraphQLString,GraphQLObjectType,GraphQLSchema, 
    GraphQLID,
    GraphQLInt
}=graphql;

//dumy data
var books=[
    {id:'1', name:'Name of the wind', genre:'Fantasy',authorId:'1'},
    {id:'2', name:'The final empire', genre:'Fantasy',authorId:'1'},
    {id:'3', name:'Romain empire', genre:'Sc-Fi',authorId:'1'},
    {id:'4', name:'The resident evil', genre:'Sc-Fi',authorId:'2'},
    {id:'5', name:'The end of love', genre:'Romantic',authorId:'2'},
    {id:'6', name:'Game of thrones', genre:'Politic',authorId:'3'},
    {id:'7', name:'Rocky balboha', genre:'Comedy',authorId:'4'},
];

var authors=[
    {id:'1', name:'Evan you', age:34,},
    {id:'2', name:'Micheal Row', age:54,},
    {id:'3', name:'Mark Zuckerberg', age:30,},
]

const BookType=new GraphQLObjectType({
    name:'Book',
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        genre:{type:GraphQLString},
        author:{
            type:AuthorType,
            resolve(parent,args){
                console.log(parent);
                return _.find(authors,{id:parent.authorId});
            }
        }
    })
});


const AuthorType=new GraphQLObjectType({
    name:'Author',
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        age:{type:GraphQLInt},
    })
});

const RootQuery=new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        book:{
            type:BookType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                //code to get data from db or an other source
               return _.find(books,{id:args.id})
            }
        },
        author:{
            type:AuthorType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                //code to get data from db or an other source
               return _.find(authors,{id:args.id})
            }
        }
    }
})


module.exports=new GraphQLSchema({
    query:RootQuery
})