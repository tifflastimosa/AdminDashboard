import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';

import clientRoutes  from "./routes/client.js";
import generalRoutes  from "./routes/general.js";
import managementRoutes  from "./routes/management.js";
import salesRoutes  from "./routes/sales.js";

/* CONFIGURATION */

// set up environmental variables
dotenv.config();
// executes the express function from node_modules
// creates an Express  application
// object traditionally named app has methods for routing HTTP requests, configuring middleware, rendering HTML views, registering
// a template engine, and modifying application settings that control how the application behaves (e.g. the environment mode, whether route
// definitions are case sensitive, etc.)
const app = express();
// this is boilerplate code, middleware 
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" })); // allows for cross origin sharing request, make requests from another server
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false  }));
app.use(cors());

/* ROUTES */
// routes represent the different sections of the web app - this  how we split up the apis
app.use("/client", clientRoutes); // products, customers, transactions
app.use("/general", generalRoutes); // user and the dashboard
app.use("/management", managementRoutes);  // management
app.use("/sales", salesRoutes);  // overview, daily, monthly, breakdown