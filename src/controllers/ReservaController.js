import Reserva from '../models/Reserva';
import Usuario from '../models/Usuario';
import hotel from '../models/Hotel';

class ReservaController{
    
    async index(req, res){

        const{ hotel } = req.params;
        const { nome } = req.headers;
        let reserva = await Reserva.find({hotel, nome});
        return res.json(reserva); 
    }

    async show(req, res){
        const { hotel, id } = req.params;
        const { nome } = req.headers;
        let reserva = await Reserva.findOne({_id: id, hotel, nome});
        await reserva.populate('nome').populate('hotel').execPopulate();
        return res.json(reserva);
        
    }

    async store(req, res){
        const { hotel } = req.params;
        const { nome } = req.headers;
        const { dataInicial, dataFinal, quantidadeAP} = req.body;
        let encontrouResponsavel = await Usuario.findById(nome).catch((err =>{
            return res.status(400).json({});            
        }));
        if(!encontrouResponsavel){
            return res.status(400).json({});
        }
        let encontrouHotel = await hotel.findById(hotel).catch((err)=>{
            return res.status(400).json({});
        })
                 
        
        let reserva = await Reserva.create({ hotel, nome ,dataInicial, dataFinal, quantidadeAP });        
        return res.json(reserva);   
    }

    async update(req, res){
       const { hotel } = req.params;
       const { nome } = req.headers;   
       const { id, dataInicial, dataFinal, quantidadeAP } = req.body;
       await Reserva.findOneAndUpdate({_id: id, hotel, nome},{ hotel, dataInicial, dataFinal, quantidadeAP }).catch((err)=>{
            return res.status(400).json({});
       });
       return res.json({mensagem: " Alterado com sucesso."});   

    }

    async destroy(req, res){
        const { hotel } = req.params;
        const { nome } = req.headers;
        const { id } = req.body;

        await Reserva.findByIdAndDelete({_id: id, hotel,nome}).catch((err)=>{
            return res.status(400).json({});
        });      

    }   
}
export default new ReservaController;