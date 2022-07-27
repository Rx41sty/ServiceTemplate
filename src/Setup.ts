import express from 'express';
import {createContainer, asClass, InjectionMode} from 'awilix';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const container = createContainer({
  
});

container.register({

});

app.get('/', (req, res) => {
  res.send("Hello");
});

export default app;