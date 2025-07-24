import { FastifyInstance } from 'fastify';
import { util } from '@node-acme/util';

export default async function(fastify: FastifyInstance) {
  fastify.get('/', async function() {
    return { message: 'Hello API + ' + util() };
  });
}
