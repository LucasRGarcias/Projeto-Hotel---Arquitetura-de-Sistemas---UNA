/**Importando o expressa para aplicação. */
import express from 'express';
/**Importando o mongoose para aplicação. */
import mongoose from 'mongoose';
/**Importando o as rotas */
import routes from './routes';

class App{

    constructor (){

        this.app = new express();
        /**Conectando ao Banco de dados MongoDB e defindo parâmentros de acesso*/
        mongoose.set('useNewUrlParser', true),
        mongoose.set('useFindAndModify', false),
        mongoose.set('useCreateIndex', true),
        mongoose.set('useUnifiedTopology',true),      
       
        mongoose.connect('mongodb+srv://assti:assti@cluster0-n1gjv.mongodb.net/projeto_hotel?retryWrites=true&w=majority');

       this.middlewares();
       this.routes();
              
    }
    middlewares(){
        this.app.use(express.json());
    }
    routes(){
        this.app.use(routes);
    }
    
}

export default new App().app;
