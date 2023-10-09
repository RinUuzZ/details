const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');
const port = 3002
const pg = require('pg')

app.use(cors())
app.use(bodyParser.json());


app.post('/', async (req, res) => {

  console.log('before connection');
  const client = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "Rina987",
    port: 5432

  });


  await client.connect();

  console.log('after connection');

  const values = [req.body.no, req.body.name, req.body.place, req.body.age,req.body.mobile,req.body.e_mail]
  await client.query("insert into new (no, name,place,age,mobile,e_mail) values ($1,$2,$3,$4,$5,$6)", values);

  res.send("Saved")


  console.log({ q })

  await client.query(q).catch(e => {
    console.log(e)
  });

  res.send("Saved")
}
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
