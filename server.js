// ! server.js
import express, { response } from "express";

const app = express();
const port = 9000;

app.use(express.json());
app.get("/", (request,response) => {
  response.status(200).json({
    contentType:"text/html",
    status:"Sukses Boyyy",
    message:"Berjalan, Alhamdulillah Express berjalan Kang",
    nyobaAja:"WKWK ini siapa yang bikin"
  });
});

app.get("/gacor",(request,response) => {
  response.status(200).json({
    contentType:"text/html",
    status:"Jomblo",
    message:"Berjalan, Alhamdulillah Express berjalan Kang",
    nyobaAja:"WKWK ini siapa yang bikin",
    kaloIniApa:"Hehew"
  });
})

app.listen(port,() => {
  console.log(`Alhamdulillah Server Berjalan di http://localhost:${port}`)
});