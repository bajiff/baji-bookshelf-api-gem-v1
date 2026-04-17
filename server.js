import http from "http";

const requestListener = (request, response) => {
  response.setHeader("Content-Type","text/html");

  response.statusCode = 200;

  const gacor = "Gacor Kang";
  
  response.end(`Berhalan di ${gacor}`)
};

const server = http.createServer(requestListener,)

const port = 9000;
const host = "localhost";


server.listen(port,host, () => {
  console.log(`Alhamdulilah Berjalan Development Stage di http://${host}:${port}`)
});