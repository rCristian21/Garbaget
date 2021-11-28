require ('./infraestructura/connexiondb');
const typeDefs = require('./typeDef');
const resolvers = require('./resolver');
const express = require('express');
const {ApolloServer} = require ('apollo-server-express');


const iniciarServidor = async () => {
  const api = express()
  const apollo = new ApolloServer(
    {
      typeDefs,
      resolvers
    });
  await apollo.start()
  apollo.applyMiddleware({app:api})
  api.use((request, response)=>{
    response.send ("404")
  })
  api.listen('8090', ()=>console.log('Server OnLine')
  )
}

iniciarServidor()
