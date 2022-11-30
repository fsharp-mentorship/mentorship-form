import { Handler } from '@netlify/functions'
import { Client, Create, Collection } from 'faunadb'

// @ts-ignore Unused Variable
export const handler: Handler = async (event, context) => {
  const data = JSON.parse(event.body ?? '')

  const client = new Client({ secret: process.env.FAUNADB_SERVER_SECRET ?? '' })

  await client.query(
    Create(Collection(process.env.FAUNADB_APPLICANT_COLLECTION ?? ''), {data: data} )
  )
  
  return {
    statusCode: 204
  }
}
