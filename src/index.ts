import express from 'express';
import userRouter from './routes/user-rt';
import { checkUndefined } from './middlewares/checkUndefined';
import { inicializarDB } from './infrastructure/db-postgres';
import authRouter from './routes/auth-rt';


const app = express();
app.use(express.json());

// Inicializar la base de datos
inicializarDB();

const PORT = 3000;

//middlewares
app.use(checkUndefined)


//Routes
app.use('/user',userRouter)
app.use('/api',authRouter)


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
