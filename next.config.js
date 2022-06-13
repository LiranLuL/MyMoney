
module.exports = {
   
    secret: "superSecret",
    reactStrictMode: true,
    serverRuntimeConfig: {
        secret: "superSecret"
    },
    publicRuntimeConfig: {
        apiUrl: process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000/api' // development api
            : 'http://localhost:3000/api' // production api
    }
}
