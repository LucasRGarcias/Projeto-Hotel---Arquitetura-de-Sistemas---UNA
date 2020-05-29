/**Importando o express */
import { Router } from 'express';
/**Importando a SessionController*/
import SessionController from './controllers/SessionController';
/**Importanto o HotelController*/
import HotelController from './controllers/HotelController';
/**Importanto o ReservaController */
import ReservaController from './controllers/ReservaController';
/**Instanciando a class Router*/
const routes = new Router();
/**Rota padrão */
routes.get('/', (req, res)=>{
    return res.status(401).send();
});

/****
 * Rotas relativa a sessões.
 */
/*Rota resposável por listar todos os usuários. */
routes.get('/usuarios', SessionController.index);
/*Rota resposável por listar um usuário especifico. */
routes.get('/usuarios/:id', SessionController.show);
/*Rota resposável por incluir um usuário. */
routes.post('/usuarios',SessionController.store);
/*Rota resposável por alterar um usuário. */
routes.put('/usuarios', SessionController.update);
/*Rota resposável por excluir um usuário. */
routes.delete('/usuarios', SessionController.destroy);
/**Exportando a rota para usar */

/****
 * Rotas relativa a Hoteis.
 */
/*Rota resposável por listar todos os usuários. */
routes.get('/hotel', HotelController.index);
/*Rota resposável por listar um usuário especifico. */
routes.get('/hotel/:id', HotelController.show);
/*Rota resposável por incluir um usuário. */
routes.post('/hotel',HotelController.store);
/*Rota resposável por alterar um usuário. */
routes.put('/hotel', HotelController.update);
/*Rota resposável por excluir um usuário. */
routes.delete('/hotel', HotelController.destroy);

/****
 * Rotas relativa a Reservas.
 */
/*Rota resposável por listar todos os usuários. */
routes.get('/reserva', ReservaController.index);
/*Rota resposável por listar um usuário especifico. */
routes.get('/reserva/:id', ReservaController.show);
/*Rota resposável por incluir um usuário. */
routes.post('/reserva',ReservaController.store);
/*Rota resposável por alterar um usuário. */
routes.put('/reserva', ReservaController.update);
/*Rota resposável por excluir um usuário. */
routes.delete('/reserva', ReservaController.destroy);

/**Exportando a classe Routes*/
export default routes;