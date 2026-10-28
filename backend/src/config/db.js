import mongoose from 'mongoose';

const connectDB = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb+srv://ricardomayorgack:Rical1234@cluster0.uibyr.mongodb.net/megaDB?appName=Cluster0';

  try {
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB conectado: ${conn.connection.host}`);
  } catch (error) {
    console.error('Error al conectar con MongoDB', error);
    process.exit(1);
  }
};

export default connectDB;

