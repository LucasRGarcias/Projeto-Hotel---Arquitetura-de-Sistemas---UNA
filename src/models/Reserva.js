import { Schema, model } from 'mongoose';

//Estrutura de dados que vai ser criaada no MongoDB.
const ReservaSchema = new Schema({
    responsavel: String,
    hotel: String,
    dataIncial: String,
    dataFinal: String,
    quantidadeAP: Number
});
//Exportando a a classe HotelSchema.
export default model('Reserva', ReservaSchema);