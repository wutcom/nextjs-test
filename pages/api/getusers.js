import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
    const url="mongodb+srv://jatwen:jat342@cluster0.jarj4qv.mongodb.net/?retryWrites=true&w=majority"
  if (req.method === 'GET') {
    // เชื่อมต่อกับ MongoDB
    const client = await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // เลือกฐานข้อมูลและคอลเลกชันที่คุณต้องการ
    const db = client.db('myportal');
    const collection = db.collection('users');

    // ดึงข้อมูลจาก MongoDB
    const data = await collection.find({}).toArray();

    // ปิดการเชื่อมต่อกับ MongoDB
    client.close();

    res.status(200).json(data);
  } else {
    res.status(405).end(); // ไม่อนุญาติให้ใช้เมธอดอื่นนอกจาก GET
  }
}
