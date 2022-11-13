import { Handler } from '@netlify/functions'
import { Client, Create, Collection } from 'faunadb'


export const handler: Handler = async (event, context) => {
  const body = JSON.parse(event.body ?? '{"name":"stranger"}')

  console.log(event)

  // const client = new Client({ secret: process.env.FAUNADB_SERVER_SECRET ?? "" })

  // await client.query(Create(Collection('testing', JSON.stringify(body))))
  
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, ${body.name}!`,
    }),
  }
}
