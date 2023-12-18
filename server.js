require('dotenv').config()
const PORT = process.env.PORT || 3000;

import mongoose from "mongoose";
import { connectDb } from './helpers/database.js'


await connectDb("mongoose:127.0.0")

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });