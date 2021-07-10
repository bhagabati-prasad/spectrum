const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');
const cors = require('cors');
const hbs = require('hbs');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');

// view engine setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, './views/partials'));

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './public')));

// auth routes
app.use('/', authRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`server running at port ${PORT}...`));
