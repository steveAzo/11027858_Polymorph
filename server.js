require('dotenv').config()

import mongoose from "mongoose";
import { connectDb } from './helpers/database.js'

await connectDb("mongoose:127.0.0")