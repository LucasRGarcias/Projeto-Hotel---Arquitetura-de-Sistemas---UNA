import { Schema, model } from 'mongoose';

const UsuarioSchema = new Schema({
    nome: String,
    email: String
});

export default model('Usuario', UsuarioSchema);