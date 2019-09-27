# tex-to-svg-docker

Allows to generate a SVG from a latex string.

## Installation

This project uses docker. After cloning the project you should do:

`docker-compose up --build -d`

This will start a webserver on port 3043 that will convert the query parameter 'tex' to a svg

For the browser you can test for example:

```http://localhost:3043/?tex=\frac{n!}{k!(n-k)!}````

## Use our webservice to include formula in github

```<img src="https://tex.cheminfo.org/?tex=\frac{n!}{k!(n-k)!}>```
  
<img src="https://tex.cheminfo.org/?tex=\frac{n!}{k!(n-k)!}">

## License

[MIT](./LICENSE)

