import { MongoClient } from 'mongodb';

export default async function handler (req, res){
  if (req.method === 'POST') {
    const { email, name, message } = req.body;
    if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
      res.status(422).json({ message: 'Porfavor llena todos los campos' });
      return;
    }

    const newMessage = { email, name, message };
    
    let client;

    try{
      client = await MongoClient.connect(process.env.MONGODB_URI)
    }catch(err){
      res.status(500).json({ message: 'No se pudo realizar la conexion a la base de datos' });
      return;
    }

    const db = client.db();

    try{
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    }catch(err){
      res.status(500).json({ message: 'No se pudo almacenar el mensaje' });
      return 
    }finally{
      client.close();
    }

    res.status(201).json({ message: 'El mensaje se ha enviado!', message: newMessage });
  }
}