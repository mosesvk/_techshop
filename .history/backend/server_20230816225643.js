import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import cookieParser from 'cookie-parser';
const port = process.env.PORT || 5500;

connectDB();

const app = express();

//Body Parser Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('app is running');
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on Port ${port}`));
