const express = require("express");
// const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const expressJSDocSwagger = require("express-jsdoc-swagger");
const options = require("./utils/swaggerOptions");
const userRoutes = require("./routes/users");
const mediaRoutes = require("./routes/media");
const multer = require ("./middleware/uploadFile");

// const constantsRoute = require("./routes/constants");
 const adsRoutes = require("./routes/ads");
 const authenticateToken = require("./middleware/verifyToken");
// const UsersController = require("./controllers/users");
// const {loadConstants} = require("./utils/CONSTANTS");
const {loadConstants} = require("./utils/CONSTANTS");

// Check the connection with the DB
loadConstants();

// Initiate the app
const app = express();

app.use(cors());
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);

//Settings for testing SocketIO
app.use(express.static("public"));
//app.set('view engine', 'ejs');

// Middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json({limit: "50mb", type: "application/json"}));


// API
expressJSDocSwagger(app)(options);
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Simple, initial route
app.get("/", (req, res) => {
	res.json({message: "ITA DIRECTORY API"});
});

// Routes
// app.use("/", constantsRoute);
app.use("/ads", adsRoutes);
app.use("/users", userRoutes);
app.use("/media", mediaRoutes);

// app.get("/get-token", UsersController.getToken);
// app.get("/test-token", authenticateToken, (req, res) => {
// 	res.json({message: "Correct Token !", data: {user_id: req.userId}});
// });

//Routes for testing chat
app.get("/chat", (req, res) => {
	res.status(200).send("Hello World");
});

module.exports = app;
