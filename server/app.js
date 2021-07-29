require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/dbconn');

const PORT = process.env.PORT || 4000;

// connect to database
connectDB();

// routes
const authRoutes = require('./routes/authRoutes');

// middleware
const corsOptions = {
  origin: ['http://localhost:3000'],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
};
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes middleware
app.get('/', (req, res) => res.send('hello feom server side'));
app.use('/api', authRoutes);

app.listen(PORT, () => console.log(`listening on port ${PORT}...`));
