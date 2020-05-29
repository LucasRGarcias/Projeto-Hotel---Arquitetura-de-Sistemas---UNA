import Hotel from '../models/Hotel';
import Usuario from '../models/Usuario';


class HotelController{
    
    async index(req, res){
        const { token } = req.headers;
            await Usuario.findById(token).catch((err)=>{
                return res.status(401).json({mensagem: "Acesso não autorizado!"});
            });
            if(! Usuario){
                return res.status(401).json({mensagem: "Acesso não autorizado!"});
            }
            const hotel = await Hotel.find();
            return res.json(hotel);    
        
       /* let hotel = await Hotel.find();
        return res.json(hotel);**/  
    }

    async show(req, res){
        const { id } = req.params;
        let hotel = await Hotel.findById(id).catch((err)=>{
            return res.status(401).json({mensagem: "Usuario não autorizado!"});
        });
        return res.json(hotel);
        
    }

    async store(req, res){
        const { nome, uf, municipio, endereco, qtdpApartamentos, valorDiaria} = req.body;
        let hotel = await Hotel.findOne({ nome });
        if(!hotel){
            hotel = await Hotel.create({ nome, uf, municipio, endereco, qtdpApartamentos, valorDiaria });
        }   
        return res.json(hotel);   
    }

    async update(req, res){
        
       const { id, nome, uf, municipio, endereco, qtdpApartamentos, valorDiaria } = req.body;
       await Hotel.updateOne({_id: id},{
             nome, uf, municipio, endereco, qtdpApartamentos, valorDiaria
       }).catch((err, row)=>{
           return res.status(400).json({mensagem: "Requisição inválida."});
       });

       const hotel = await Hotel.findById(id).catch((err)=>{
           return res.status(400).json({mensagem:"Requisição inválida."});
       });
       return res.json(hotel);    

    }

    async destroy(req, res){
        const { id } = req.body;
        let hotel = await Hotel.findByIdAndDelete(id);
        return res.json({ok: true});
      

    }   
}
export default new HotelController;