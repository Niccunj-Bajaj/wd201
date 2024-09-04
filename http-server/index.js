// const http = require("http");
// const fs = require("fs");
// fs.readFile("home.html", (err, home) => {
//   console.log(home.toString());
// });
// fs.readFile("home.html", (err, home) => {
//   if (err) {
//     throw err;
//   }
//   http
//     .createServer((request, response) => {
//       response.writeHeader(200, { "Content-Type": "text/html" });
//       response.write(home);
//       response.end();
//     })
//     .listen(3000);
// });

const minimist = require("minimist");
const args = minimist(process.argv.slice(2));
const port = args.port;

const http = require("http");
const fs = require("fs");

let homeContent = "";
let projectContent = "";
let registrationForm = "";

fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  homeContent = home;
});

fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  projectContent = project;
});

fs.readFile("registration.html", (err, register) => {
  if (err) {
    throw err;
  }
  registrationForm = register;
});
http
  .createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(projectContent);
        response.end();
        break;
      case "/registration":
        response.write(registrationForm);
        response.end();
        break;
      default:
        response.write(homeContent);
        response.end();
        break;
    }
  })
  .listen(port);
