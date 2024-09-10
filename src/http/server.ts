import fastify from "fastify"; 

const app = fastify()

app.listen({
    port: 1010,
}).then(() => {
    console.log("HTTP server runing.")
})

