// Import the framework and instantiate it
import Fastify from 'fastify'
const fastify = Fastify({
    logger: true
})

fastify.get('/', async () => ({ Empresa: 'Piero' }))

fastify.get('/colchones', async () => ({ colchones: ['resortes', 'espuma'] }))

try {
    await fastify.listen({ port: 3000 })
} catch (err) {
    fastify.log.error(err)
    process.exit(1)
}