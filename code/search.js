import { okResponse } from './lib/central.js'

export function onRequest(context) {
  return new Response(JSON.stringify({ ok: true }), okResponse)
}
