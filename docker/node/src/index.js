'use strict';

const mathJax = require('mathjax-node');
const http = require('http');
const URL = require('url');

mathJax.start();

const server = http.createServer(async function(request, result) {
  const query = URL.parse(request.url, true).query;
  let svg = (await mathJax.typeset({
    math: query.tex,
    format: 'TeX', // or "inline-TeX", "MathML"
    svg: true, // or svg:true, or html:true
  })).svg;
  result.setHeader('content-type', 'image/svg+xml');
  result.write(svg);
  result.end();
});
server.timeout = 2000;

server.listen(80);
