# hello-world

From the Git Repository root run this command:

`netlify functions:serve`

Then from your termimnal run:

`curl -X POST -d '{\"name\":\"a name\"}' http://localhost:9999/.netlify/functions/hello-world`