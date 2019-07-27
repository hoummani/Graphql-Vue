import gql from 'graphql-tag';


const ALL_BOOKS_QUERY = gql`
    {
        books{
            
            name
            genre
        }
`;

export default ALL_BOOKS_QUERY;
