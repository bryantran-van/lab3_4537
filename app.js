const utils = require('./modules/utils');

const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  const url_string = url.parse(req.url, true);
  const query = url_string.query;

  if (url_string.pathname === '/') {
    const name = query.name ? query.name : 'Guest';

    // Create an HTML response with blue text
    const htmlResponse = `
      <html>
        <body style="color: blue;">
          <p>Hello ${name}, What a beautiful day.</p>
          <p>Server current date and time is ${utils.getDate()}</p>
        </body>
      </html>
    `;

    res.end(htmlResponse);
    return;
  } else if (url_string.pathname === '/writeFile/') {
    const fileData = query.text;
    const filePath = 'file.txt';

    fs.appendFile(filePath, `${fileData}`, (err) => {
      if (err) {
        console.error('Error creating the file:', err);
        res.end('Error creating the file');
        return;
      } else {
        console.log('File created successfully.');
        res.end('File created successfully.');
        return;
      }
    });
    return;
  } else if (url_string.pathname === '/readFile/file.txt') {
    const filePath = 'file.txt';

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.end('404 Page');
        return;
      } else {
        console.log('File content:', data);
        res.end(JSON.stringify(data));
        return;
      }
    });
  } else {
    res.end('404 Page');
    return;
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
