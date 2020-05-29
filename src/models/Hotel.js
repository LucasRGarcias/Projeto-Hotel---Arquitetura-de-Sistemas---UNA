import { Schema, model } from 'mongoose';

//Estrutura de dados que vai ser criaada no MongoDB.
const HotelSchema = new Schema({
    nome: String,
    uf: String,
    municipio: String,
    endereco: String,
    qtdpApartamentos: Number,
    valorDiaria:Number
});
//Exportando a a classe HotelSchema.
export default model('Hotel', HotelSchema);