const headers = {
  'content-type': 'application/json',
  'Access-Control-Allow-Origin': '*'
};
// export const corsHeaders = {
//   'Access-Control-Allow-Origin': '*',
//   'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
//   'Access-Control-Max-Age': '86400'
// }
const okResponse = {
  status: 200,
  headers
};

var search = {
  async fetch (request, env, ctx) {
    return new Response(JSON.stringify({ ok: true }), okResponse)
  }
};

export { search as default };
