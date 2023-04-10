const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sq, DbConnection } = require('./config/db');
const User = require('./models/user.model');
const CrudRoute = require('./routes/crud.route');
const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// db.sequelize.sync();
//middleware
// app.use([
//     express.json(),
//     credentials,
//     cors(corsOptions),
//     cookieParser(process.env.COOKIE_SECRET)
// ]);

DbConnection();



// route
app.use("/", CrudRoute);


const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

