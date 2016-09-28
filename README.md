# NodeNotFound
Node.js server configured as a maintenance page for serving from something like DigitalOcean
This is configured to run in the background with the `forever` package so:
`npm install -g forever`

Once you have forever installed and this repo cloned:
`npm install`
`forever start serveError.js`

Once you're ready to take down the node maintenance run:
`forever stop serveError.js`
