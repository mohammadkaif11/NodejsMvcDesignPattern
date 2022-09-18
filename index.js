const express = require('express')
const app = express();
const errorHandler = require('./Helpers/error-handler')
const cors = require('cors');
const bodyParser = require('body-parser');
const connectToMongo=require('./DataContext/DataBase')

connectToMongo();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/users', require('./Controller/users/users.Controller'));

app.get('/', (req, res) => {
    res.send("Hii QMate User");
})
app.use(errorHandler);

app.listen(process.env.PORT || 8080, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});