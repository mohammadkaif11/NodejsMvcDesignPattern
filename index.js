const express = require('express')
const app = express();
const apiErrorHandler=require('./Middleware/ApiErrorHandler')
const cors = require('cors');
const bodyParser = require('body-parser');
const connectToMongo=require('./DataContext/DataBase')

connectToMongo();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/users', require('./Controller/users/users.Controller'));
app.use('/insititue', require('./Controller/Insititue/Insititue.Controller'));
app.use('/Test', require('./Controller/Test/Test.Controller'));
app.use('/Question', require('./Controller/Question/Question.Controller'));
app.use('/Option', require('./Controller/Option/Option.Controller'));


app.get('/', (req, res) => {
   res.send('ApiIsWorkingFine');
})

//adding Golbal ApiErrorHandler
app.use(apiErrorHandler);

app.listen(process.env.PORT || 8080, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});