import express from 'express';
import userRouter from './routes/user-rt';
import { checkUndefined } from './middlewares/checkUndefined';
import { inicializarDB } from './infrastructure/db-postgres';
import authRouter from './routes/auth-rt';
import { errorHandler } from './middlewares/exceptions/errorHandler';


const app = express();
app.use(express.json());

// Start db
inicializarDB();

const PORT = 3000;

//Middlewares
app.use(checkUndefined)


//Routes
app.use('/user',userRouter)
app.use('/api',authRouter)


//Catch errors
app.use(errorHandler)


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
