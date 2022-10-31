import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
const  cors = require('cors');


//db
    var Sequelize = require('sequelize');
    
    var sequelize = new Sequelize('db', 'dbtest', 'dbtest', {
      dialect: 'sqlite',
    })
    var User = sequelize.define('User', {
      firstName: {type: Sequelize.STRING, allowNull: false}, 
      email: {type: Sequelize.STRING, allowNull: false}, 
      surname: {type: Sequelize.STRING, allowNull: false}, 
      telephone: {type: Sequelize.STRING, allowNull: false}, 
      gender: {type: Sequelize.STRING, allowNull: false}, 
      dobDay: {type: Sequelize.STRING, allowNull: false}, 
      dobMonth: {type: Sequelize.STRING, allowNull: false}, 
      dobYear: {type: Sequelize.STRING, allowNull: false}, 
      comments: {type: Sequelize.STRING, allowNull: false}, 

    })
   User.sync();
//


dotenv.config();

const app: Express = express();
const port = 3001;
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

app.use(cors());
app.use(express.static('build')); // build <<----
app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.sendFile('/build/index.html');
});

app.post('/submit', (_req: Request, _res: Response) => {
  if(!_req.body || !_req.body.firstName || !_req.body.email || !_req.body.surname || !_req.body.telephone || !_req.body.gender || !_req.body.dobDay || !_req.body.dobMonth || !_req.body.dobYear || !_req.body.comments){
    _res.send('All input fields are required!')
  }else {
    User
    .create({ firstName: _req.body.firstName, email: _req.body.email, surname: _req.body.surname , telephone: _req.body.telephone, gender:_req.body.gender, dobDay: _req.body.dobDay , dobMonth: _req.body.dobMonth, dobYear: _req.body.dobYear, comments:_req.body.comments  })
    .then(function(user:any) {
      console.log(user.get('firstName')); 
      console.log(user.get('email'));
    })
    _res.send('Thank you!')
  }
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

