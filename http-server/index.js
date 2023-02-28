const http = require("http");
const fs = require("fs");
const args = require("minimist")(process.argv);
let hc = "";
let pc = "";
let rc = "";

fs.readFile("home.html", (errors, home) => {
  if (errors) {
    throw errors;
  }
  else{
    hc = home;
  }
  
});

fs.readFile("project.html", (errors, project) => {
  if (errors) {
    throw errors;
  }
  pc = project;
});

fs.readFile("registration.html", (errors, registration) => {
  if (errors) {
    throw errors;
  }
  rc = registration;
});
fs.readFile("/script.js",(err,data)=>{
  if (err) throw err;
  rs=data.toString();
})

http
  .createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(pc);
        response.end();
        break;
      case "/registration":
        response.write(rc);
        response.end();
        break;
      default:
        response.write(hc);
        response.end();
        break;
    }
  })
  .listen(args.port);
