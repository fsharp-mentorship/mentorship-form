import { Handler } from '@netlify/functions'

export const handler: Handler = async (event, context) => {
  const body = JSON.parse(event.body ?? '{"name":"stranger"}')

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, ${body.name}!`,
    }),
  }
}
