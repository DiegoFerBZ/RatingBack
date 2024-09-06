import express from 'express';
import cors from 'cors'; 
import { checkUndefined } from './middlewares/check-undefined';
import { inicializarDB } from './infrastructure/db-postgres';
import authRouter from './routes/auth-rt';
import productRouter from './routes/product-rt';
import { errorHandler } from './middlewares/exceptions/errorHandler';
import { setupSwagger } from './tools/utils/swagger/swagger';


const app = express();
app.use(express.json());

// Setup Swagger
setupSwagger(app);

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

//Routes
app.use('/api/auth',authRouter)
app.use('/api/products',productRouter)


//Catch errors
app.use(errorHandler)


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
