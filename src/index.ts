import express from 'express';
import cors from 'cors'; 
import userRouter from './routes/user-rt';
import { checkUndefined } from './middlewares/checkUndefined';
import { inicializarDB } from './infrastructure/db-postgres';
import authRouter from './routes/auth-rt';
import reviewRouter from './routes/review-rt';
import { errorHandler } from './middlewares/exceptions/errorHandler';


const app = express();
app.use(express.json());

// Start db
inicializarDB();

// Configurar CORS para permitir solicitudes desde cualquier origen
app.use(cors({
  origin: 'http://localhost:4200', // Permite solicitudes desde tu aplicación Angular
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

const PORT = 3000;

// Middlewares
app.use(checkUndefined);

// Routes
app.use('/user', userRouter);
app.use('/api', authRouter);
app.use('/reviews', reviewRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
