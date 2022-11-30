# F# Mentorship Form

## Development

### Installation

This application requires `Node v16.x`

To run this app you will need the `netlify` cli  installed:

```npm install netlify-cli -g```

To run the form with the serverless function in the background you'll need to log in at the cli:

```netlify login```

This will allow your local app to connect to the database where submissions will be stored.

### Running in Development

Use the following command to run the front end and backend app at the same time:

```netlify dev```

## Deployment

Deploying is done via netlify. The application will be updated automatically from the `main` branch
