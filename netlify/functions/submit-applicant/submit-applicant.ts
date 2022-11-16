import { Handler } from '@netlify/functions'
import { Client, Create, Collection } from 'faunadb'

export const handler: Handler = async (event, context) => {
  // const body = JSON.parse(event.body ?? "")

  const client = new Client({ secret: process.env.FAUNADB_SERVER_SECRET ?? "" })

  await client.query(
    Create(Collection('testing'), {data: {id: 124, success: true}} )
  )
  
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'hello'
      // message: `Hello, ${JSON.parse(event.body ?? "").name}!`
    }),
  }
}
