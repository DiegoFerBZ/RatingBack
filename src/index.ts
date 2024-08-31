import express from 'express';
import userRouter from './routes/user-rt';
import { checkUndefined } from './middlewares/checkUndefined';
import { inicializarDB } from './infrastructure/db-postgres';


const app = express();
app.use(express.json());

// Inicializar la base de datos
inicializarDB();

const PORT = 3000;

//middlewares
app.use(checkUndefined)
app.use('/user',userRouter)


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
