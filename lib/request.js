const https = require('https');
const crypto = require('crypto');

const baseUrl = 'gateway.marvel.com';

const request = ({ path, params, method, apiKey, privateKey }) => {
  const ts = Date.now();
  const hash = crypto.createHash('md5').update((`${ts}${privateKey}${apiKey}`)).digest('hex');

  path += `?ts=${ts}&apikey=${apiKey}&hash=${hash}`

  if (params) {
    path += `&${params}`;
  }

  const options = {
    hostname: baseUrl,
    port: 443,
    path: `/v1/public/${path}`,
    method
  }

  return new Promise((resolve, reject) => {
    const request = https.request(options, (response) => {
      response.setEncoding('utf8');

      let responseBody = ''

      response.on('data', (chunk) => {
        responseBody += chunk
      })

      response.on('end', () => {
        resolve(JSON.parse(responseBody))
      })
    })

    request.on('error', (error) => {
      reject(error)
    })

    request.end()
  })
}

module.exports = request