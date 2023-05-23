import { okResponse } from './lib/central.js'

export default {
  async fetch (request, env, ctx) {
    return new Response(JSON.stringify({ ok: true }), okResponse)
  }
}
