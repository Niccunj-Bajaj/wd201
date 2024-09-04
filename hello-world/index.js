// fs.writeFile(
//   "sample.txt",
//   "Hello World. Welcome to Node.js File System module.",
//   (err) => {
//     if (err) throw err;
//     console.log("File created!");
//   }
// );
// fs.readFile("sample.txt", (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });
const fs = require("fs");
const http = require("http");
const server = http.createServer((req, res) => {
  const stream = fs.createReadStream("sample.txt");
  stream.pipe();
  // fs.readFile("sample.txt", (err, data) => {
  //   res.end(data);
  // });
});
server.listen(3000);
