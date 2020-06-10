import Usuario from '../models/Usuario';
import * as yup from 'yup'; // for everything

class SessionController{
    async index(req, res){
        
        let usuarios = await Usuario.find();
        return res.json(usuarios);  
    }

    async show(req, res){
        const { id } = req.params;
        let usuario = await Usuario.findById(id).catch((err)=>{
            return res.status(401).json({mensagem: "Usuario não autorizado!"});
        });
        return res.json(usuario);
        
    }

    async store(req, res){       
        /*
        padrão diferente  para inserir os dados.

        const { nome, email } = req.body;
        let usuario = await Usuario.findOne({ email });
        if(!usuario){
            usuario = await Usuario.create({ nome, email });
        }   
        return res.json(usuario);
        */
        const { nome, email } = req.body;
        const schemaValidacao = yup.object().shape({
            nome: yup.string().required(),
            email: yup.string().required().email()
        });

        if(! ( await schemaValidacao.isValid(req.body))){
            return res.status(400).json({mensagem:"Dados inválido!"});
        }
        let usuario = await Usuario.create({ nome, email});
        return res.json(usuario);
    }

    async update(req, res){
        const { nome, email } = req.body;
        let usuario = await Usuario.updateOne({ email }, { nome });
        return res.json(usuario);

    }

    async destroy(req, res){
        const { id } = req.body;
        let usuario = await Usuario.findByIdAndDelete(id);
        return res.json({ok: true});
      

    }   
}
export default new SessionController;