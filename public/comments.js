import { GraphQLClient, gql } from "graphql-request"

const graphqlAPI = import.meta.env.VITE_PUBLIC_GRAPHQL_API_KEY
const graphcmsToken = import.meta.env.VITE_REBLATE_TOKEN;

export default async function blogComments(req, res){
  const {name, email, slug, comment} = req.body

  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${graphcmsToken}`
    }
  })

  const query = gql`
    mutation CreateBlogComment($name: String!, $email: String!, $comment: String!, $slug: String){
      createBlogComment(data: {name: $name, email: $email, comment: $comment, blogPost: { connect: {slug: $slug}}}){id}
    }
  `
  
  try{
    const result = await graphQLClient.request(query, req.body)
    return res.status(200).send(result)
  } catch (error) {
    console.log(error)
    return res.status(500).send(error)
  }

}