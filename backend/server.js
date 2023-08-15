const express = require('express');
const dotenv = require('dotenv');
const {chats} = require('./data/data')
const connectDB = require('./config/db')
const color = require('colors')
const userRoute  = require('./routes/userRoutes');
const charRoute  = require('./routes/chatRoutes');
const {notFound, errorHandler} = require('./middleware/error')
const app = express();

app.use(express.json());

dotenv.config();
connectDB()

app.get('/',(req, res)=>{
	res.send("api is running")
});

app.use('/api/user', userRoute);
app.use('/api/chat', charRoute);
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
  console.log("server stared on port 5000".blue.bold)
});