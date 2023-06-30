import { MongoClient } from 'mongodb';

export default async function addUser(req, res)  {
  //const uri = 'mongodb://localhost:27017'; // แก้ไข URI เพื่อเชื่อมต่อกับ MongoDB
  const uri="mongodb+srv://jatwen:jat342@cluster0.jarj4qv.mongodb.net/?retryWrites=true&w=majority";
 
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const database = client.db('myportal'); // แก้ไขชื่อฐานข้อมูลตามที่คุณต้องการ
    const collection = database.collection('users'); // แก้ไขชื่อคอลเล็กชันตามที่คุณต้องการ

    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
      }
    
      const { name, email, password } = req.body;
    
      try {
        const user = { name, email, password };
        await collection.insertOne(user);

    
        res.status(201).json(user);
      } catch (error) {
        res.status(500).json({ message: 'Error creating user' });
      }




   
    console.log('User added successfully ');
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

