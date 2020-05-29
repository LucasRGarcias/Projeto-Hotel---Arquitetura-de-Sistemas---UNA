import Reserva from '../models/Reserva';



class ReservaController{
    
    async index(req, res){
                
        let reserva = await Reserva.find();
        return res.json(reserva); 
    }

    async show(req, res){
        const { id } = req.params;
        let reserva = await Reserva.findById(id).catch((err)=>{
            return res.status(401).json({mensagem: "Usuario não autorizado!"});
        });
        return res.json(reserva);
        
    }

    async store(req, res){
        const { responsavel, hotel, dataInicial, dataFinal, quantidadeAP} = req.body;
        let reserva = await Reserva.findOne({ responsavel });
        if(!reserva){
            reserva = await Reserva.create({ responsavel, hotel, dataInicial, dataFinal, quantidadeAP });
        }   
        return res.json(reserva);   
    }

    async update(req, res){
        
       const { id, responsavel, hotel, dataInicial, dataFinal, quantidadeAP } = req.body;
       await Reserva.updateOne({_id: id},{
            responsavel, hotel, dataInicial, dataFinal, quantidadeAP
       }).catch((err, row)=>{
           return res.status(400).json({mensagem: "Requisição inválida."});
       });

       const reserva = await Reserva.findById(id).catch((err)=>{
           return res.status(400).json({mensagem:"Requisição inválida."});
       });
       return res.json(reserva);    

    }

    async destroy(req, res){
        const { id } = req.body;
        let reserva = await Reserva.findByIdAndDelete(id);
        return res.json({ok: true});
      

    }   
}
export default new ReservaController;