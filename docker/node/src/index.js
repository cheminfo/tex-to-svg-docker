'use strict';

const mathJax = require('mathjax-node');
const http = require('http');
const URL = require('url');
const sharp = require('sharp');

mathJax.start();

const server = http.createServer(async function (request, response) {
  const query = URL.parse(request.url, true).query;
  if (!query.tex) {
    response.writeHead(302, {
      Location:
        'http://www.cheminfo.org/?viewURL=https%3A%2F%2Fcouch.cheminfo.org%2Fcheminfo-public%2F12c971bb3f9d5f93dfbf82f27e089d35%2Fview.json&loadversion=true&fillsearch=Convert+tex+latex+for+github',
    });
    response.end();
    return;
  }
  let svg = (
    await mathJax.typeset({
      math: query.tex,
      format: 'TeX', // or "inline-TeX", "MathML"
      svg: true, // or svg:true, or html:true
    })
  ).svg;
  if (query.format !== 'png') {
    response.setHeader('content-type', 'image/svg+xml');
    response.write(svg);
    response.end();
  } else {
    const encoder = new TextEncoder('utf8');
    const png = await sharp(encoder.encode(svg)).png().toBuffer();
    response.setHeader('content-type', 'image/png');
    response.write(png);
    response.end();
  }
});
server.timeout = 2000;

server.listen(80);
